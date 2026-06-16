/**
 * Dynamic sitemap.xml generation
 * Includes all routes: home, teams, leagues, worldcup, betting pages
 */

interface SitemapEntry {
  loc: string;
  lastmod: string;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority: number;
}

export function generateSitemapXML(entries: SitemapEntry[]): string {
  const urlEntries = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
${urlEntries}
</urlset>`;
}

export function getSitemapEntries(baseUrl: string): SitemapEntry[] {
  const today = new Date().toISOString().split("T")[0];

  // Core pages
  const entries: SitemapEntry[] = [
    {
      loc: `${baseUrl}/`,
      lastmod: today,
      changefreq: "daily",
      priority: 1.0,
    },
  ];

  // Team pages - SEO optimized for Goal24MM, 555mix, ibet789, batman, slot
  const teams = [
    "arsenal-fc",
    "manchester-united",
    "liverpool-fc",
    "manchester-city",
    "chelsea-fc",
  ];
  teams.forEach((team) => {
    entries.push({
      loc: `${baseUrl}/team/${team}`,
      lastmod: today,
      changefreq: "weekly",
      priority: 0.8,
    });
  });

  // League pages
  const leagues = ["premier-league", "la-liga", "serie-a", "bundesliga", "ligue-1"];
  leagues.forEach((league) => {
    entries.push({
      loc: `${baseUrl}/league/${league}`,
      lastmod: today,
      changefreq: "weekly",
      priority: 0.8,
    });
  });

  // World Cup pages
  const worldCupStages = [
    "fifa-2026-group-stage",
    "fifa-2026-knockout-stage",
    "fifa-2026-finals",
  ];
  worldCupStages.forEach((stage) => {
    entries.push({
      loc: `${baseUrl}/worldcup/${stage}`,
      lastmod: today,
      changefreq: "weekly",
      priority: 0.9,
    });
  });

  // Betting pages - Goal24MM, 555mix, ibet789, batman, slot
  const bettingPages = [
    "555mix-betting-guide",
    "ibet789-betting-guide",
    "batman-betting-guide",
    "slot-games-guide",
    "sports-betting-tips",
  ];
  bettingPages.forEach((page) => {
    entries.push({
      loc: `${baseUrl}/bet/${page}`,
      lastmod: today,
      changefreq: "weekly",
      priority: 0.8,
    });
  });

  return entries;
}
