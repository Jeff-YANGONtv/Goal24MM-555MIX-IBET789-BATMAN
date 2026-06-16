/**
 * Internal Linking Strategy for Goal24MM
 * Implements strategic internal linking to improve SEO and user navigation
 */

/**
 * Internal link definition
 */
export interface InternalLinkItem {
  title: string;
  url: string;
  description?: string;
  keywords?: string[];
  rel?: "related" | "prev" | "next" | "canonical";
  priority?: "high" | "medium" | "low";
}

/**
 * Page context for internal linking
 */
export interface PageContext {
  path: string;
  title: string;
  keywords: string[];
  type: "home" | "team" | "league" | "worldcup" | "betting";
}

/**
 * Internal linking strategy configuration
 */
export const internalLinkingStrategy = {
  /**
   * Get related links for home page
   */
  getHomePageLinks: (): InternalLinkItem[] => [
    {
      title: "Team Rankings",
      url: "/teams",
      description: "Explore football team rankings and statistics",
      keywords: ["teams", "rankings", "football"],
      rel: "related",
      priority: "high",
    },
    {
      title: "League Information",
      url: "/leagues",
      description: "Learn about major football leagues worldwide",
      keywords: ["leagues", "football", "competitions"],
      rel: "related",
      priority: "high",
    },
    {
      title: "World Cup Coverage",
      url: "/worldcup",
      description: "Latest World Cup news and betting guides",
      keywords: ["world cup", "fifa", "tournaments"],
      rel: "related",
      priority: "high",
    },
    {
      title: "Betting Guides",
      url: "/betting",
      description: "Comprehensive betting strategies and tips",
      keywords: ["betting", "sports betting", "guides"],
      rel: "related",
      priority: "medium",
    },
  ],

  /**
   * Get related links for team pages
   */
  getTeamPageLinks: (teamName: string): InternalLinkItem[] => [
    {
      title: "All Teams",
      url: "/teams",
      description: "Browse all football teams",
      keywords: ["teams", "football"],
      rel: "related",
      priority: "high",
    },
    {
      title: "Team Rankings",
      url: "/teams/rankings",
      description: "See how this team ranks",
      keywords: ["rankings", "statistics"],
      rel: "related",
      priority: "medium",
    },
    {
      title: "Betting Tips",
      url: "/betting",
      description: "Get betting tips for upcoming matches",
      keywords: ["betting", "tips", "odds"],
      rel: "related",
      priority: "medium",
    },
    {
      title: "Back to Home",
      url: "/",
      description: "Return to Goal24MM home page",
      keywords: ["home"],
      rel: "related",
      priority: "low",
    },
  ],

  /**
   * Get related links for league pages
   */
  getLeaguePageLinks: (leagueName: string): InternalLinkItem[] => [
    {
      title: "All Leagues",
      url: "/leagues",
      description: "Browse all football leagues",
      keywords: ["leagues", "football"],
      rel: "related",
      priority: "high",
    },
    {
      title: "Teams in League",
      url: "/teams",
      description: "View teams in this league",
      keywords: ["teams", "league"],
      rel: "related",
      priority: "high",
    },
    {
      title: "League Standings",
      url: "/leagues/standings",
      description: "Check current league standings",
      keywords: ["standings", "table"],
      rel: "related",
      priority: "high",
    },
    {
      title: "Betting Guides",
      url: "/betting",
      description: "Betting strategies for league matches",
      keywords: ["betting", "odds"],
      rel: "related",
      priority: "medium",
    },
  ],

  /**
   * Get related links for World Cup pages
   */
  getWorldCupPageLinks: (): InternalLinkItem[] => [
    {
      title: "World Cup Standings",
      url: "/worldcup/standings",
      description: "Current World Cup standings and results",
      keywords: ["world cup", "standings"],
      rel: "related",
      priority: "high",
    },
    {
      title: "World Cup Teams",
      url: "/worldcup/teams",
      description: "All participating World Cup teams",
      keywords: ["world cup", "teams"],
      rel: "related",
      priority: "high",
    },
    {
      title: "World Cup Betting",
      url: "/betting/worldcup",
      description: "World Cup betting tips and strategies",
      keywords: ["world cup", "betting"],
      rel: "related",
      priority: "high",
    },
    {
      title: "Match Schedule",
      url: "/worldcup/schedule",
      description: "World Cup match schedule and fixtures",
      keywords: ["schedule", "fixtures"],
      rel: "related",
      priority: "medium",
    },
  ],

  /**
   * Get related links for betting pages
   */
  getBettingPageLinks: (): InternalLinkItem[] => [
    {
      title: "Betting Strategies",
      url: "/betting/strategies",
      description: "Learn effective betting strategies",
      keywords: ["betting", "strategies"],
      rel: "related",
      priority: "high",
    },
    {
      title: "Odds Comparison",
      url: "/betting/odds",
      description: "Compare betting odds across platforms",
      keywords: ["odds", "comparison"],
      rel: "related",
      priority: "high",
    },
    {
      title: "Live Betting",
      url: "/betting/live",
      description: "Live betting tips and updates",
      keywords: ["live betting", "tips"],
      rel: "related",
      priority: "medium",
    },
    {
      title: "Team Statistics",
      url: "/teams",
      description: "View team statistics for better betting decisions",
      keywords: ["teams", "statistics"],
      rel: "related",
      priority: "medium",
    },
  ],

  /**
   * Get contextual links based on page type
   */
  getContextualLinks: (context: PageContext): InternalLinkItem[] => {
    const linkMap: Record<string, () => InternalLinkItem[]> = {
      home: () => internalLinkingStrategy.getHomePageLinks(),
      team: () => internalLinkingStrategy.getTeamPageLinks(context.title),
      league: () => internalLinkingStrategy.getLeaguePageLinks(context.title),
      worldcup: () => internalLinkingStrategy.getWorldCupPageLinks(),
      betting: () => internalLinkingStrategy.getBettingPageLinks(),
    };

    return linkMap[context.type]?.() || [];
  },
};

/**
 * Breadcrumb navigation builder
 */
export const breadcrumbBuilder = {
  /**
   * Generate breadcrumb items for a page
   */
  generateBreadcrumbs: (
    pagePath: string,
    pageTitle: string
  ): InternalLinkItem[] => {
    const breadcrumbs: InternalLinkItem[] = [
      {
        title: "Home",
        url: "/",
        rel: "related",
        priority: "high",
      },
    ];

    const pathSegments = pagePath.split("/").filter(Boolean);

    pathSegments.forEach((segment, index) => {
      const url = "/" + pathSegments.slice(0, index + 1).join("/");
      const title = segment.charAt(0).toUpperCase() + segment.slice(1);

      breadcrumbs.push({
        title,
        url,
        rel: "related",
        priority: "high",
      });
    });

    return breadcrumbs;
  },

  /**
   * Generate breadcrumb schema for JSON-LD
   */
  generateBreadcrumbSchema: (breadcrumbs: InternalLinkItem[]) => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.title,
        item: `https://goal24mm-555mix-ibet-batman.vercel.app${item.url}`,
      })),
    };
  },
};

/**
 * Semantic HTML structure utilities
 */
export const semanticHTML = {
  /**
   * Generate semantic heading hierarchy
   */
  generateHeadingHierarchy: (
    mainTitle: string,
    subSections: Array<{ title: string; content: string }>
  ): string => {
    let html = `<h1>${mainTitle}</h1>\n`;

    subSections.forEach((section, index) => {
      html += `<h2>${section.title}</h2>\n`;
      html += `<p>${section.content}</p>\n`;
    });

    return html;
  },

  /**
   * Generate semantic article structure
   */
  generateArticleStructure: (
    title: string,
    author: string,
    publishDate: string,
    content: string
  ): string => {
    return `
<article>
  <header>
    <h1>${title}</h1>
    <time datetime="${publishDate}">${publishDate}</time>
    <span>By ${author}</span>
  </header>
  <main>
    ${content}
  </main>
</article>
    `.trim();
  },

  /**
   * Generate semantic navigation structure
   */
  generateNavigation: (links: InternalLinkItem[]): string => {
    const linkHtml = links
      .map((link) => `<li><a href="${link.url}" rel="${link.rel}">${link.title}</a></li>`)
      .join("\n");

    return `
<nav>
  <ul>
    ${linkHtml}
  </ul>
</nav>
    `.trim();
  },

  /**
   * Generate semantic section structure
   */
  generateSection: (
    title: string,
    content: string,
    id?: string
  ): string => {
    const idAttr = id ? ` id="${id}"` : "";
    return `
<section${idAttr}>
  <h2>${title}</h2>
  ${content}
</section>
    `.trim();
  },

  /**
   * Generate semantic footer structure
   */
  generateFooter: (links: InternalLinkItem[]): string => {
    const linkHtml = links
      .map((link) => `<li><a href="${link.url}">${link.title}</a></li>`)
      .join("\n");

    return `
<footer>
  <nav>
    <ul>
      ${linkHtml}
    </ul>
  </nav>
  <p>&copy; 2026 Goal24MM. All rights reserved.</p>
</footer>
    `.trim();
  },
};

/**
 * Link anchor text optimization
 */
export const anchorTextOptimization = {
  /**
   * Validate anchor text quality
   */
  validateAnchorText: (
    anchorText: string
  ): { valid: boolean; issues: string[] } => {
    const issues: string[] = [];

    if (!anchorText || anchorText.trim().length === 0) {
      issues.push("Anchor text is empty");
    }

    if (anchorText.length > 60) {
      issues.push("Anchor text exceeds recommended length of 60 characters");
    }

    if (anchorText.toLowerCase() === "click here" || anchorText.toLowerCase() === "read more") {
      issues.push("Avoid generic anchor text like 'click here' or 'read more'");
    }

    if (/^\d+$/.test(anchorText)) {
      issues.push("Anchor text should not be just numbers");
    }

    return {
      valid: issues.length === 0,
      issues,
    };
  },

  /**
   * Generate optimized anchor text
   */
  generateOptimizedAnchorText: (
    targetPage: string,
    keywords: string[]
  ): string => {
    const keywordPhrase = keywords.slice(0, 2).join(" ");
    const pageTypeMap: Record<string, string> = {
      teams: "football teams",
      leagues: "football leagues",
      worldcup: "World Cup coverage",
      betting: "betting guides",
    };

    const pageType = pageTypeMap[targetPage] || targetPage;
    return `${keywordPhrase} - ${pageType}`;
  },
};

/**
 * Related content suggestions
 */
export const relatedContentSuggestions = {
  /**
   * Get related content based on keywords
   */
  getRelatedContent: (
    currentKeywords: string[],
    allPages: Array<{ url: string; title: string; keywords: string[] }>
  ): InternalLinkItem[] => {
    return allPages
      .filter((page) => {
        const hasCommonKeywords = page.keywords.some((keyword) =>
          currentKeywords.includes(keyword)
        );
        return hasCommonKeywords;
      })
      .slice(0, 5)
      .map((page) => ({
        title: page.title,
        url: page.url,
        rel: "related",
        priority: "medium",
      }));
  },

  /**
   * Get previous and next page links
   */
  getPaginationLinks: (
    currentPage: number,
    totalPages: number,
    baseUrl: string
  ): { prev?: InternalLinkItem; next?: InternalLinkItem } => {
    const links: { prev?: InternalLinkItem; next?: InternalLinkItem } = {};

    if (currentPage > 1) {
      links.prev = {
        title: "Previous Page",
        url: `${baseUrl}?page=${currentPage - 1}`,
        rel: "prev",
        priority: "high",
      };
    }

    if (currentPage < totalPages) {
      links.next = {
        title: "Next Page",
        url: `${baseUrl}?page=${currentPage + 1}`,
        rel: "next",
        priority: "high",
      };
    }

    return links;
  },
};

/**
 * Link tracking and analytics
 */
export const linkTracking = {
  /**
   * Generate tracking parameters for internal links
   */
  generateTrackingParams: (
    linkType: string,
    source: string
  ): Record<string, string> => {
    return {
      utm_source: source,
      utm_medium: "internal",
      utm_campaign: linkType,
      utm_content: `internal_link_${linkType}`,
    };
  },

  /**
   * Build tracked URL
   */
  buildTrackedUrl: (
    url: string,
    trackingParams: Record<string, string>
  ): string => {
    const params = new URLSearchParams(trackingParams);
    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}${params.toString()}`;
  },
};
