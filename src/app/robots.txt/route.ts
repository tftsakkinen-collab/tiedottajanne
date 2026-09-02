export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Explicit AI Engine Permissions
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: CCBot
Allow: /

Sitemap: https://www.tiedottajanne.com/sitemap.xml
`;
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
