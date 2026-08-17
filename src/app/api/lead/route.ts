import { NextResponse } from "next/server";
import { SITE_CONFIG } from "@/data/config";
import fs from "fs";
import path from "path";

async function saveSubscriberToGithub(newEntry: any) {
  const githubToken = process.env.GITHUB_TOKEN;
  if (!githubToken) return;

  try {
    const owner = "tftsakkinen-collab";
    const repo = "tiedottajanne";
    const filePath = "src/data/subscribers.json";
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

    const getRes = await fetch(url, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "tiedottajanne-app"
      }
    });

    let currentContent: any[] = [];
    let sha = "";

    if (getRes.ok) {
      const fileData = await getRes.json();
      sha = fileData.sha;
      const decoded = Buffer.from(fileData.content, "base64").toString("utf-8");
      currentContent = JSON.parse(decoded);
    }

    const existingIndex = currentContent.findIndex((s: any) => s.email.toLowerCase() === newEntry.email.toLowerCase());
    if (existingIndex >= 0) {
      currentContent[existingIndex] = { ...currentContent[existingIndex], ...newEntry };
    } else {
      currentContent.push(newEntry);
    }

    const updatedBase64 = Buffer.from(JSON.stringify(currentContent, null, 2), "utf-8").toString("base64");

    await fetch(url, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
        "Content-Type": "application/json",
        "User-Agent": "tiedottajanne-app"
      },
      body: JSON.stringify({
        message: `auto(lead): new subscriber ${newEntry.email}`,
        content: updatedBase64,
        sha: sha || undefined
      })
    });
  } catch (err) {
    console.warn("Could not save subscriber to GitHub:", err);
  }
}

function saveSubscriberLocally(name: string, email: string, role: string = "", message: string = "") {
  const newEntry = {
    name: name || "Ei ilmoitettu",
    email: email,
    role: role || "SOTE-tilaaja",
    message: message || "",
    source: "Tiedottajanne.fi Kotisivut",
    date_added: new Date().toISOString().split("T")[0],
    timestamp: new Date().toISOString()
  };

  try {
    const filePath = path.join(process.cwd(), "src/data/subscribers.json");
    let subscribers: any[] = [];
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      subscribers = JSON.parse(content);
    }

    const existingIndex = subscribers.findIndex((s: any) => s.email.toLowerCase() === email.toLowerCase());
    if (existingIndex >= 0) {
      subscribers[existingIndex] = { ...subscribers[existingIndex], ...newEntry };
    } else {
      subscribers.push(newEntry);
    }

    fs.writeFileSync(filePath, JSON.stringify(subscribers, null, 2), "utf-8");
  } catch (err) {
    console.warn("Could not write to subscribers.json locally:", err);
  }

  saveSubscriberToGithub(newEntry).catch((e) => console.warn("GitHub save error:", e));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name = "", email = "", role = "", message = "", type = "tiedottajanneNewsletterOrCollab" } = body;

    if (!email) {
      return NextResponse.json({ error: "Sähköpostiosoite vaaditaan" }, { status: 400 });
    }

    saveSubscriberLocally(name, email, role, message);

    const recipientAdminEmail = SITE_CONFIG.contactEmail || "tiedottajanne@gmail.com";
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      console.warn("RESEND_API_KEY missing in environment variables. Local subscriber saved.");
      return NextResponse.json({ success: true, warning: "Tallennettu paikallisesti (Resend-avain puuttuu)." });
    }

    // 1. ILMOITUSSÄHKÖPOSTI JANNE SÄKKISELLE / YLLÄPIDOLLE
    const adminEmailSubject = `🔔 UUSI TIEDOTTAJANNE SÄHKÖPOSTITILAAJA / YHTEISTYÖ: ${name || email}`;
    const adminEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #000a18; color: #ffffff; border-radius: 12px; border: 1px solid #00AEEF;">
        <h2 style="color: #00AEEF; font-size: 20px; margin-top: 0;">🔔 UUSI SOMETILAAJA / YHTEISTYÖPYYNTÖ</h2>
        <p style="font-size: 14px; color: #dddddd;">Tiedottajanne.fi -sivustolta on tullut uusi ilmoittautuminen:</p>
        
        <table style="width: 100%; font-size: 14px; color: #ffffff; border-collapse: collapse; margin: 16px 0;">
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #0C66B4; width: 140px;">Nimi / Yritys:</td>
            <td style="padding: 8px; border-bottom: 1px solid #0C66B4;">${name || "Ei ilmoitettu"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #0C66B4;">Sähköposti:</td>
            <td style="padding: 8px; border-bottom: 1px solid #0C66B4;"><a href="mailto:${email}" style="color: #00AEEF;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #0C66B4;">Rooli / Ala:</td>
            <td style="padding: 8px; border-bottom: 1px solid #0C66B4;">${role || "SOTE-tilaaja"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #0C66B4;">Viesti / Toive:</td>
            <td style="padding: 8px; border-bottom: 1px solid #0C66B4;">${message || "Ei viestiä"}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">Päivämäärä:</td>
            <td style="padding: 8px;">${new Date().toLocaleString("fi-FI")}</td>
          </tr>
        </table>
      </div>
    `;

    // Send admin notification email via Resend API
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Tiedottajanne Oy <onboarding@resend.dev>",
        to: recipientAdminEmail,
        subject: adminEmailSubject,
        html: adminEmailHtml
      })
    });

    // 2. AUTOMAATTINEN TERVETULOA-SÄHKÖPOSTI TILAAJALLE
    const welcomeSubject = `Tervetuloa Tiedottajanne Oy:n SOTE-Viestintä & Sometyöpaja -postituslistalle!`;
    const welcomeHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #000a18; color: #ffffff; border-radius: 16px; border: 1px solid #0C66B4;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #00AEEF; font-size: 22px; margin-bottom: 4px;">TIEDOTTAJANNE OY</h1>
          <p style="color: #aaaaaa; font-size: 13px; margin: 0;">SOTE-Alan Videotuotanto, AI &amp; Somestratetgia</p>
        </div>

        <p style="font-size: 15px; color: #ffffff;">Hei ${name || "SOTE-ammattilainen"},</p>
        <p style="font-size: 14px; color: #dddddd; line-height: 1.6;">
          Hienoa saada sinut mukaan Tiedottajanne Oy:n sähköpostilistalle! Olet mukana verkostossa, jolle jaamme säännöllisesti toimivia SOTE-alan videostrategioita, tekoäly-prompteja (ChatGPT / Perplexity) sekä Valvira-yhteensopivan viestinnän parhaita käytäntöjä.
        </p>

        <div style="margin: 20px 0; padding: 16px; background: #000d21; border-radius: 12px; border: 1px solid #00AEEF;">
          <h3 style="color: #00AEEF; margin-top: 0; font-size: 15px;">Mitä saat seuraavaksi:</h3>
          <ul style="color: #cccccc; font-size: 13px; line-height: 1.6; padding-left: 20px; margin-bottom: 0;">
            <li>SOTE-alan parhaat tekoälypromptit potilasohjeisiin &amp; someen</li>
            <li>Vinkit orgaanisen katselukanavan rakentamiseen nollasta 1.1M+ katseluun</li>
            <li>Ennakkotiedot tulevista työpajoista ja SOTE-koulutuksista</li>
          </ul>
        </div>

        <p style="font-size: 14px; color: #ffffff; line-height: 1.6;">
          Jos sinulla on kysyttävää koulutuksista tai haluat sopia yhteistyöstä, vastaa suoraan tähän sähköpostiin!
        </p>

        <p style="font-size: 13px; color: #aaaaaa; margin-top: 24px; border-t: 1px solid #0C66B4; padding-top: 16px;">
          Ystävällisin terveisin,<br/>
          <strong style="color: #ffffff;">Janne Säkkinen</strong><br/>
          OMT-Fysioterapeutti | Tiedottajanne Oy<br/>
          <a href="https://www.tiedottajanne.fi" style="color: #00AEEF;">www.tiedottajanne.fi</a>
        </p>
      </div>
    `;

    // Send welcome email to subscriber via Resend API
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "Janne Säkkinen / Tiedottajanne Oy <onboarding@resend.dev>",
        to: email,
        subject: welcomeSubject,
        html: welcomeHtml
      })
    });

    return NextResponse.json({ success: true, message: "Ilmoittautuminen vastaanotettu ja sähköpostit lähetetty!" });
  } catch (err: any) {
    console.error("Lead API Error:", err);
    return NextResponse.json({ error: "Sähköpostin lähetyksessä tapahtui virhe." }, { status: 500 });
  }
}
