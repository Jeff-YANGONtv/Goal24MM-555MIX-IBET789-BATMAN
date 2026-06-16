/**
 * SEO Metadata Utilities for Goal24MM
 * Generates dynamic metadata for all pages including Open Graph, canonical URLs, and JSON-LD
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
}

const BASE_URL = "https://goal24mm-555mix-ibet-batman.vercel.app";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;
const SITE_NAME = "Goal24MM";
const TWITTER_HANDLE = "@Goal24MM";

/**
 * Generate complete SEO metadata for a page
 */
export function generateSEOMetadata(
  title: string,
  description: string,
  keywords: string[],
  path: string,
  ogImage: string = DEFAULT_OG_IMAGE,
  ogType: string = "article"
): SEOMetadata {
  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    keywords,
    canonical: `${BASE_URL}${path}`,
    ogTitle: title,
    ogDescription: description,
    ogImage,
    ogType,
    twitterCard: "summary_large_image",
  };
}

/**
 * Generate JSON-LD structured data for articles
 */
export function generateArticleSchema(
  title: string,
  description: string,
  author: string = SITE_NAME,
  datePublished: string = new Date().toISOString(),
  image: string = DEFAULT_OG_IMAGE,
  url: string = BASE_URL
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image,
    author: {
      "@type": "Organization",
      name: author,
    },
    datePublished,
    dateModified: new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.png`,
      },
    },
    url,
  };
}

/**
 * Generate JSON-LD structured data for organization
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: "Football news, betting guides, and World Cup coverage",
    sameAs: [
      "https://twitter.com/Goal24MM",
      "https://t.me/Goal24MM",
    ],
    contact: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      url: BASE_URL,
    },
  };
}

/**
 * Generate JSON-LD structured data for breadcrumb navigation
 */
export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate JSON-LD structured data for FAQ
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate JSON-LD structured data for local business
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE_NAME,
    url: BASE_URL,
    description: "Football news and betting platform",
    image: `${BASE_URL}/logo.png`,
    priceRange: "Free",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "1250",
    },
  };
}

/**
 * Generate meta tags HTML string
 */
export function generateMetaTags(metadata: SEOMetadata): string {
  return `
    <title>${metadata.title}</title>
    <meta name="description" content="${metadata.description}" />
    <meta name="keywords" content="${metadata.keywords.join(", ")}" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="canonical" href="${metadata.canonical}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${metadata.ogTitle}" />
    <meta property="og:description" content="${metadata.ogDescription}" />
    <meta property="og:image" content="${metadata.ogImage}" />
    <meta property="og:type" content="${metadata.ogType}" />
    <meta property="og:url" content="${metadata.canonical}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="${metadata.twitterCard}" />
    <meta name="twitter:title" content="${metadata.ogTitle}" />
    <meta name="twitter:description" content="${metadata.ogDescription}" />
    <meta name="twitter:image" content="${metadata.ogImage}" />
    <meta name="twitter:creator" content="${TWITTER_HANDLE}" />
    
    <!-- Additional Meta Tags -->
    <meta name="author" content="${SITE_NAME}" />
    <meta name="robots" content="index, follow" />
    <meta name="language" content="English" />
    <meta name="revisit-after" content="7 days" />
  `;
}

/**
 * Generate sitemap XML
 */
export function generateSitemapXML(
  urls: Array<{ loc: string; lastmod?: string; changefreq?: string; priority?: number }>
): string {
  const urlEntries = urls
    .map(
      (url) => `
  <url>
    <loc>${url.loc}</loc>
    ${url.lastmod ? `<lastmod>${url.lastmod}</lastmod>` : ""}
    ${url.changefreq ? `<changefreq>${url.changefreq}</changefreq>` : ""}
    ${url.priority ? `<priority>${url.priority}</priority>` : ""}
  </url>
    `
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
}

/**
 * Generate robots.txt content
 */
export function generateRobotsTxt(): string {
  return `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/

Sitemap: ${BASE_URL}/sitemap.xml

# Crawl delay (in seconds)
Crawl-delay: 1

# Specific rules for Google
User-agent: Googlebot
Allow: /
Crawl-delay: 0
`;
}

/**
 * Sanitize text for meta tags
 */
export function sanitizeMetaText(text: string, maxLength: number = 160): string {
  return text
    .replace(/[<>]/g, "")
    .replace(/"/g, "&quot;")
    .substring(0, maxLength)
    .trim();
}

/**
 * Generate internal links for SEO
 */
export interface InternalLink {
  title: string;
  url: string;
  rel?: string;
}

export function generateInternalLinks(
  currentPath: string,
  relatedPages: Array<{ title: string; path: string }>
): InternalLink[] {
  return relatedPages
    .filter((page) => page.path !== currentPath)
    .map((page) => ({
      title: page.title,
      url: page.path,
      rel: "related",
    }));
}
