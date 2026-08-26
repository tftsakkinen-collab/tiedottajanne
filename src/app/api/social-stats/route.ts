import { NextResponse } from "next/server";

export const revalidate = 3600; // Revalidate every 1 hour

export async function GET() {
  try {
    const channels = [
      {
        name: "Tiedottajanne Oy",
        handle: "@tiedottajanne",
        channelId: "UC1Duj0lp5i-LVWhH2LwfAcg",
        platform: "YouTube",
        role: "SOTE Videotuotanto & AI",
      },
      {
        name: "FT Säkkinen (FI)",
        handle: "@ft_sakkinen",
        channelId: "UCz0XuTDgzskIDlzSrZFxsBg",
        platform: "YouTube",
        role: "Suomenkielinen pääkanava",
      },
      {
        name: "PT Sakkinen (EN)",
        handle: "@pt_sakkinen",
        channelId: "UCbIWSnSD_k3YoTQSqrzi5Bw",
        platform: "YouTube",
        role: "Kansainvälinen fysioterapian kanava",
      },
    ];

    const results = await Promise.all(
      channels.map(async (ch) => {
        try {
          const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${ch.channelId}`;
          const res = await fetch(rssUrl, { next: { revalidate: 3600 } });
          if (!res.ok) throw new Error("RSS fetch failed");
          const xmlText = await res.text();

          const titleMatches = [...xmlText.matchAll(/<title>(.*?)<\/title>/g)]
            .slice(1, 5)
            .map((m) => m[1]);
          const videoIdMatches = [
            ...xmlText.matchAll(/<yt:videoId>(.*?)<\/yt:videoId>/g),
          ]
            .slice(0, 4)
            .map((m) => m[1]);
          const publishedMatches = [
            ...xmlText.matchAll(/<published>(.*?)<\/published>/g),
          ]
            .slice(0, 4)
            .map((m) => m[1]);

          return {
            ...ch,
            latestVideos: titleMatches.map((title, i) => ({
              title,
              id: videoIdMatches[i] || "",
              url: `https://www.youtube.com/watch?v=${videoIdMatches[i] || ""}`,
              thumbnail: `https://img.youtube.com/vi/${videoIdMatches[i] || ""}/hqdefault.jpg`,
              publishedAt: publishedMatches[i] || new Date().toISOString(),
              aeoCategory: "SOTE-alan videotuotanto & asiantuntijaviestintä",
            })),
          };
        } catch {
          return { ...ch, latestVideos: [] };
        }
      })
    );

    const statsData = {
      timestamp: new Date().toISOString(),
      youtube: {
        totalViews: "1 150 000+",
        viewsGrowth: "+145 %",
        subscribers: "5 380+",
        subscribersGrowth: "+85 %",
        searchSeoShare: "92 %",
        engagementRate: "8.4 %",
        channels: results,
      },
      instagram: {
        handle: "@sakkinenjanne",
        handleEn: "@ptsakkinen",
        estimatedMonthlyReach: "150 000+",
        reachGrowth: "+120 %",
        profileVisitsGrowth: "+65 %",
        contentType: "Reels & Kliiniset mikro-oppaat",
      },
      tiktok: {
        handle: "@sakkinenjanne",
        handleEn: "@ptsakkinen",
        estimatedMonthlyViews: "200 000+",
        viewsGrowth: "+210 %",
        savesGrowth: "+180 %",
        contentType: "Shorts & Ergonomiavinkit",
      },
    };

    return NextResponse.json(statsData);
  } catch {
    return NextResponse.json({ error: "Failed to fetch stats" }, { status: 500 });
  }
}
