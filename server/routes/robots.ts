/**
 * Dynamic robots.txt generation
 * Optimized for Google crawling and SEO
 */

export function generateRobotsTxt(): string {
  const baseUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "https://goal24mm-555mix-ibet-batman.vercel.app";

  return `# Goal24MM robots.txt - Optimized for Search Engines
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /.well-known/
Disallow: /api/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay for all bots
Crawl-delay: 1

# Specific rules for Google Bot (highest priority)
User-agent: Googlebot
Allow: /
Crawl-delay: 0
Request-rate: 100/1h

# Specific rules for Bing Bot
User-agent: Bingbot
Allow: /
Crawl-delay: 1
Request-rate: 30/1h

# Specific rules for other bots
User-agent: *
Allow: /
Crawl-delay: 2

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: DotBot
Disallow: /
`;
}
