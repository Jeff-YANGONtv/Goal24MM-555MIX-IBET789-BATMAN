/**
 * Image Optimization Utilities for Goal24MM
 * Provides enhanced alt text generation, lazy loading, and image optimization strategies
 */

/**
 * Image metadata for optimization
 */
export interface ImageMetadata {
  src: string;
  alt: string;
  title?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  sizes?: string;
  srcSet?: string;
  width?: number;
  height?: number;
  className?: string;
}

/**
 * Enhanced alt text generator for different image types
 */
export const altTextGenerator = {
  /**
   * Generate alt text for platform logos
   */
  platformLogo: (platformName: string): string => {
    return `${platformName} - Online Gaming Platform Logo`;
  },

  /**
   * Generate alt text for payment method icons
   */
  paymentMethod: (methodName: string, index: number): string => {
    const methods: Record<number, string> = {
      0: "Cryptocurrency Payment Method",
      1: "Mobile Payment Method",
      2: "Bank Transfer Payment Method",
      3: "E-Wallet Payment Method",
      4: "Digital Payment Method",
    };
    return methods[index] || `${methodName} Payment Method - Secure Transaction`;
  },

  /**
   * Generate alt text for carousel/slider images
   */
  carouselSlide: (slideIndex: number, totalSlides: number): string => {
    const slideDescriptions = [
      "Goal24MM Gaming Platform - Featured Promotions and Offers",
      "555mix Slot Games - High Winning Opportunities",
      "IBET789 Betting Platform - Live Sports Betting",
      "Batman Slots - Exciting Gaming Experience",
    ];
    return slideDescriptions[slideIndex] || `Gaming Promotion Slide ${slideIndex + 1} of ${totalSlides}`;
  },

  /**
   * Generate alt text for banner images
   */
  banner: (bannerTitle: string): string => {
    return `${bannerTitle} - Goal24MM Gaming Banner Advertisement`;
  },

  /**
   * Generate alt text for section cards
   */
  sectionCard: (cardTitle: string): string => {
    return `${cardTitle} - Information Card`;
  },

  /**
   * Generate alt text for team/league images
   */
  teamImage: (teamName: string): string => {
    return `${teamName} - Football Team Logo and Information`;
  },

  /**
   * Generate alt text for world cup related images
   */
  worldCupImage: (description: string): string => {
    return `FIFA World Cup - ${description}`;
  },

  /**
   * Generate alt text for betting odds/statistics
   */
  bettingStats: (statType: string): string => {
    return `${statType} - Betting Statistics and Odds Information`;
  },
};

/**
 * Image optimization configuration for different contexts
 */
export const imageOptimizationConfig = {
  /**
   * Platform logo optimization
   */
  platformLogo: (): ImageMetadata => ({
    loading: "eager",
    decoding: "async",
    width: 32,
    height: 32,
    alt: "",
  }),

  /**
   * Payment method icon optimization
   */
  paymentIcon: (): ImageMetadata => ({
    loading: "lazy",
    decoding: "async",
    width: 40,
    height: 40,
    alt: "",
  }),

  /**
   * Carousel/slider image optimization
   */
  carouselImage: (): ImageMetadata => ({
    loading: "eager",
    decoding: "async",
    width: 640,
    height: 280,
    sizes: "(max-width: 768px) 100vw, 640px",
    alt: "",
  }),

  /**
   * Banner image optimization
   */
  bannerImage: (): ImageMetadata => ({
    loading: "lazy",
    decoding: "async",
    width: 1200,
    height: 600,
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1200px",
    alt: "",
  }),

  /**
   * Team/League logo optimization
   */
  teamLogo: (): ImageMetadata => ({
    loading: "lazy",
    decoding: "async",
    width: 64,
    height: 64,
    alt: "",
  }),

  /**
   * General content image optimization
   */
  contentImage: (): ImageMetadata => ({
    loading: "lazy",
    decoding: "async",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 800px",
    alt: "",
  }),
};

/**
 * Generate responsive image srcSet for different screen sizes
 */
export function generateSrcSet(
  baseUrl: string,
  sizes: number[] = [320, 640, 960, 1280]
): string {
  return sizes
    .map((size) => {
      const url = baseUrl.includes("?")
        ? `${baseUrl}&w=${size}`
        : `${baseUrl}?w=${size}`;
      return `${url} ${size}w`;
    })
    .join(", ");
}

/**
 * Generate sizes attribute for responsive images
 */
export function generateSizes(breakpoints: Record<string, string>): string {
  return Object.entries(breakpoints)
    .map(([media, size]) => `(${media}) ${size}`)
    .join(", ");
}

/**
 * Image lazy loading configuration
 */
export const lazyLoadingConfig = {
  /**
   * Enable lazy loading for non-critical images
   */
  shouldLazyLoad: (imageType: string): boolean => {
    const eagerLoadTypes = ["hero", "logo", "banner-primary"];
    return !eagerLoadTypes.includes(imageType);
  },

  /**
   * Get loading attribute based on image priority
   */
  getLoadingAttribute: (priority: "high" | "medium" | "low"): "eager" | "lazy" => {
    return priority === "high" ? "eager" : "lazy";
  },

  /**
   * Get decoding strategy based on image type
   */
  getDecodingStrategy: (imageType: string): "async" | "sync" | "auto" => {
    const syncTypes = ["logo", "icon"];
    return syncTypes.includes(imageType) ? "sync" : "async";
  },
};

/**
 * Image performance metrics tracking
 */
export interface ImagePerformanceMetrics {
  imageUrl: string;
  loadTime: number;
  fileSize: number;
  format: string;
  dimensions: { width: number; height: number };
}

/**
 * Track image loading performance
 */
export function trackImagePerformance(
  imageUrl: string,
  startTime: number
): Partial<ImagePerformanceMetrics> {
  const loadTime = performance.now() - startTime;
  return {
    imageUrl,
    loadTime,
    format: imageUrl.split(".").pop()?.toUpperCase() || "UNKNOWN",
  };
}

/**
 * Image format recommendations based on browser support
 */
export const imageFormatRecommendations = {
  /**
   * Get recommended image format
   */
  getRecommendedFormat: (): string => {
    const canvas = document.createElement("canvas");
    if (canvas.toDataURL("image/webp").indexOf("image/webp") === 0) {
      return "webp";
    }
    if (canvas.toDataURL("image/avif").indexOf("image/avif") === 0) {
      return "avif";
    }
    return "jpg";
  },

  /**
   * Generate picture element for multiple formats
   */
  generatePictureElement: (
    baseUrl: string,
    formats: string[] = ["avif", "webp", "jpg"]
  ): string => {
    const sources = formats
      .map((format) => {
        const url = baseUrl.replace(/\.[^.]+$/, `.${format}`);
        return `<source srcset="${url}" type="image/${format}">`;
      })
      .join("\n");

    return `<picture>\n${sources}\n<img src="${baseUrl}" alt="">\n</picture>`;
  },
};

/**
 * Image accessibility utilities
 */
export const imageAccessibility = {
  /**
   * Validate alt text quality
   */
  validateAltText: (altText: string): { valid: boolean; issues: string[] } => {
    const issues: string[] = [];

    if (!altText || altText.trim().length === 0) {
      issues.push("Alt text is empty");
    }

    if (altText.length > 125) {
      issues.push("Alt text exceeds recommended length of 125 characters");
    }

    if (altText.toLowerCase().includes("image") || altText.toLowerCase().includes("picture")) {
      issues.push("Alt text should not contain 'image' or 'picture'");
    }

    if (/^\d+$/.test(altText)) {
      issues.push("Alt text should not be just numbers");
    }

    return {
      valid: issues.length === 0,
      issues,
    };
  },

  /**
   * Generate accessible image wrapper
   */
  generateAccessibleImageWrapper: (
    imageUrl: string,
    altText: string,
    caption?: string
  ): string => {
    const captionHtml = caption ? `<figcaption>${caption}</figcaption>` : "";
    return `<figure><img src="${imageUrl}" alt="${altText}" />${captionHtml}</figure>`;
  },
};

/**
 * Image CDN optimization
 */
export const cdnOptimization = {
  /**
   * Generate optimized CDN URL with parameters
   */
  generateOptimizedUrl: (
    baseUrl: string,
    options: {
      width?: number;
      height?: number;
      quality?: number;
      format?: string;
      fit?: "cover" | "contain" | "fill";
    } = {}
  ): string => {
    const params = new URLSearchParams();

    if (options.width) params.append("w", options.width.toString());
    if (options.height) params.append("h", options.height.toString());
    if (options.quality) params.append("q", options.quality.toString());
    if (options.format) params.append("f", options.format);
    if (options.fit) params.append("fit", options.fit);

    const separator = baseUrl.includes("?") ? "&" : "?";
    return `${baseUrl}${separator}${params.toString()}`;
  },

  /**
   * Generate WebP variant URL
   */
  generateWebPUrl: (imageUrl: string): string => {
    return imageUrl.replace(/\.[^.]+$/, ".webp");
  },

  /**
   * Generate AVIF variant URL
   */
  generateAvifUrl: (imageUrl: string): string => {
    return imageUrl.replace(/\.[^.]+$/, ".avif");
  },
};

/**
 * Image caching strategy
 */
export const imageCachingStrategy = {
  /**
   * Get cache duration based on image type
   */
  getCacheDuration: (imageType: string): number => {
    const cacheDurations: Record<string, number> = {
      logo: 30 * 24 * 60 * 60, // 30 days
      banner: 7 * 24 * 60 * 60, // 7 days
      content: 24 * 60 * 60, // 1 day
      dynamic: 60 * 60, // 1 hour
    };
    return cacheDurations[imageType] || 24 * 60 * 60;
  },

  /**
   * Generate cache headers
   */
  generateCacheHeaders: (imageType: string): Record<string, string> => {
    const duration = imageCachingStrategy.getCacheDuration(imageType);
    return {
      "Cache-Control": `public, max-age=${duration}`,
      "CDN-Cache-Control": `max-age=${duration}`,
    };
  },
};
