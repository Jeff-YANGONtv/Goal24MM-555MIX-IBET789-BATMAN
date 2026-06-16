/**
 * Performance Optimization Utilities for Goal24MM
 * Focuses on Core Web Vitals: LCP, CLS, FID/INP
 */

/**
 * Performance metrics thresholds
 */
export const performanceThresholds = {
  // Largest Contentful Paint (LCP)
  lcp: {
    good: 2500, // 2.5 seconds
    needsImprovement: 4000, // 4 seconds
    poor: 4000, // > 4 seconds
  },

  // Cumulative Layout Shift (CLS)
  cls: {
    good: 0.1,
    needsImprovement: 0.25,
    poor: 0.25,
  },

  // First Input Delay (FID) / Interaction to Next Paint (INP)
  fid: {
    good: 100, // 100 milliseconds
    needsImprovement: 300, // 300 milliseconds
    poor: 300, // > 300 milliseconds
  },

  // Time to First Byte (TTFB)
  ttfb: {
    good: 600, // 600 milliseconds
    needsImprovement: 1200, // 1.2 seconds
    poor: 1200, // > 1.2 seconds
  },
};

/**
 * LCP (Largest Contentful Paint) optimization strategies
 */
export const lcpOptimization = {
  /**
   * Get LCP status
   */
  getLCPStatus: (lcpValue: number): "good" | "needsImprovement" | "poor" => {
    if (lcpValue <= performanceThresholds.lcp.good) return "good";
    if (lcpValue <= performanceThresholds.lcp.needsImprovement) return "needsImprovement";
    return "poor";
  },

  /**
   * LCP optimization recommendations
   */
  getOptimizationTips: (): string[] => [
    "Optimize images: Use next-gen formats (WebP, AVIF) and responsive images",
    "Implement lazy loading for non-critical images",
    "Minimize CSS and JavaScript blocking rendering",
    "Use a Content Delivery Network (CDN) for faster content delivery",
    "Preload critical resources using <link rel='preload'>",
    "Optimize font loading with font-display: swap",
    "Minimize server response time (TTFB)",
    "Reduce JavaScript execution time",
    "Use browser caching for static assets",
    "Implement critical CSS inlining",
  ],

  /**
   * Critical resources to preload
   */
  getCriticalResources: (): Array<{ rel: string; href: string; as?: string }> => [
    {
      rel: "preload",
      href: "/fonts/main-font.woff2",
      as: "font",
    },
    {
      rel: "preload",
      href: "/css/critical.css",
      as: "style",
    },
    {
      rel: "preload",
      href: "/images/hero-image.webp",
      as: "image",
    },
  ],

  /**
   * Generate preload link tags
   */
  generatePreloadTags: (): string => {
    return lcpOptimization
      .getCriticalResources()
      .map((resource) => {
        const asAttr = resource.as ? ` as="${resource.as}"` : "";
        return `<link rel="${resource.rel}" href="${resource.href}"${asAttr}>`;
      })
      .join("\n");
  },
};

/**
 * CLS (Cumulative Layout Shift) optimization strategies
 */
export const clsOptimization = {
  /**
   * Get CLS status
   */
  getCLSStatus: (clsValue: number): "good" | "needsImprovement" | "poor" => {
    if (clsValue <= performanceThresholds.cls.good) return "good";
    if (clsValue <= performanceThresholds.cls.needsImprovement) return "needsImprovement";
    return "poor";
  },

  /**
   * CLS optimization recommendations
   */
  getOptimizationTips: (): string[] => [
    "Set explicit dimensions for images and videos",
    "Avoid inserting content above existing content",
    "Use transform animations instead of layout-changing properties",
    "Avoid using document.write() and other DOM mutations",
    "Set font-display: swap for web fonts",
    "Preload fonts to prevent layout shifts",
    "Use CSS containment for isolated components",
    "Avoid dynamic content injection above the fold",
    "Use aspect-ratio CSS property for media containers",
    "Implement skeleton loading screens",
  ],

  /**
   * Generate CSS for preventing layout shifts
   */
  generateCLSPreventionCSS: (): string => `
/* Prevent layout shifts with explicit dimensions */
img {
  width: auto;
  height: auto;
  aspect-ratio: attr(width) / attr(height);
}

video {
  aspect-ratio: 16 / 9;
}

/* Use containment for isolated components */
.isolated-component {
  contain: layout style paint;
}

/* Set dimensions for ad spaces */
.ad-space {
  min-height: 250px;
  min-width: 300px;
}

/* Font loading optimization */
@font-face {
  font-family: 'MainFont';
  src: url('/fonts/main-font.woff2') format('woff2');
  font-display: swap;
}
  `;
};

/**
 * FID/INP (First Input Delay / Interaction to Next Paint) optimization
 */
export const fidOptimization = {
  /**
   * Get FID status
   */
  getFIDStatus: (fidValue: number): "good" | "needsImprovement" | "poor" => {
    if (fidValue <= performanceThresholds.fid.good) return "good";
    if (fidValue <= performanceThresholds.fid.needsImprovement) return "needsImprovement";
    return "poor";
  },

  /**
   * FID optimization recommendations
   */
  getOptimizationTips: (): string[] => [
    "Break up long JavaScript tasks into smaller chunks",
    "Use Web Workers for heavy computations",
    "Defer non-critical JavaScript execution",
    "Minimize JavaScript bundle size",
    "Use code splitting to load only necessary code",
    "Implement request idle callback for non-urgent tasks",
    "Use async/await for asynchronous operations",
    "Optimize event handlers for performance",
    "Use passive event listeners where applicable",
    "Profile and optimize CPU-intensive operations",
  ],

  /**
   * Generate performance monitoring code
   */
  generatePerformanceMonitoring: (): string => `
// Monitor FID/INP
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      console.log('FID/INP:', entry.processingDuration);
    }
  });
  observer.observe({ entryTypes: ['first-input', 'event'] });
}

// Monitor LCP
if ('PerformanceObserver' in window) {
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    const lastEntry = entries[entries.length - 1];
    console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
  });
  observer.observe({ entryTypes: ['largest-contentful-paint'] });
}

// Monitor CLS
if ('PerformanceObserver' in window) {
  let clsValue = 0;
  const observer = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
      if (!entry.hadRecentInput) {
        clsValue += entry.value;
        console.log('CLS:', clsValue);
      }
    }
  });
  observer.observe({ entryTypes: ['layout-shift'] });
}
  `;
};

/**
 * JavaScript optimization strategies
 */
export const jsOptimization = {
  /**
   * Get code splitting recommendations
   */
  getCodeSplittingStrategy: (): Record<string, string[]> => ({
    critical: [
      "Navigation components",
      "Core UI framework",
      "Essential utilities",
    ],
    important: [
      "Page-specific components",
      "Analytics code",
      "Error handling",
    ],
    deferred: [
      "Third-party scripts",
      "Non-critical features",
      "Polyfills",
    ],
  }),

  /**
   * Generate lazy loading configuration
   */
  generateLazyLoadingConfig: (): string => `
// Lazy load non-critical components
const lazyLoadComponent = (componentPath) => {
  return import(/* webpackChunkName: "lazy-[request]" */ componentPath);
};

// Defer non-critical scripts
document.addEventListener('DOMContentLoaded', () => {
  // Load analytics after page is interactive
  loadAnalytics();
  
  // Load third-party scripts
  loadThirdPartyScripts();
});

// Use requestIdleCallback for non-urgent tasks
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Non-urgent operations
  });
}
  `;
};

/**
 * CSS optimization strategies
 */
export const cssOptimization = {
  /**
   * Get CSS optimization tips
   */
  getOptimizationTips: (): string[] => [
    "Minimize CSS file size",
    "Remove unused CSS (PurgeCSS, Tailwind)",
    "Inline critical CSS",
    "Defer non-critical CSS",
    "Use CSS containment",
    "Optimize font loading",
    "Use CSS Grid/Flexbox efficiently",
    "Minimize repaints and reflows",
    "Use will-change sparingly",
    "Optimize media queries",
  ],

  /**
   * Generate critical CSS extraction
   */
  generateCriticalCSSExtraction: (): string => `
/* Critical CSS - inline in <head> */
/* Include only styles needed for above-the-fold content */

/* Layout */
body { margin: 0; padding: 0; }
.container { max-width: 1200px; margin: 0 auto; }

/* Typography */
h1, h2, h3 { font-family: sans-serif; }

/* Navigation */
nav { position: fixed; top: 0; width: 100%; }

/* Hero section */
.hero { height: 100vh; }

/* Defer other styles */
@media print {
  /* Print styles */
}
  `;
};

/**
 * Network optimization strategies
 */
export const networkOptimization = {
  /**
   * Get network optimization tips
   */
  getOptimizationTips: (): string[] => [
    "Enable GZIP compression",
    "Use HTTP/2 or HTTP/3",
    "Implement resource hints (dns-prefetch, preconnect)",
    "Use a CDN for static assets",
    "Implement service workers for caching",
    "Minimize HTTP requests",
    "Use image optimization",
    "Implement aggressive caching",
    "Use compression for APIs",
    "Monitor and optimize TTFB",
  ],

  /**
   * Generate resource hints
   */
  generateResourceHints: (): string => `
<!-- DNS Prefetch -->
<link rel="dns-prefetch" href="https://cdn.example.com">

<!-- Preconnect -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Prefetch -->
<link rel="prefetch" href="/next-page">

<!-- Preload -->
<link rel="preload" href="/critical-resource" as="script">
  `;
};

/**
 * Performance monitoring and reporting
 */
export const performanceMonitoring = {
  /**
   * Collect Web Vitals metrics
   */
  collectWebVitals: (): Promise<{
    lcp?: number;
    cls?: number;
    fid?: number;
    ttfb?: number;
  }> => {
    return new Promise((resolve) => {
      const metrics: any = {};

      // Collect metrics when page becomes hidden
      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          resolve(metrics);
        }
      });

      // Fallback: resolve after 30 seconds
      setTimeout(() => resolve(metrics), 30000);
    });
  },

  /**
   * Generate performance report
   */
  generatePerformanceReport: (metrics: Record<string, number>): string => {
    let report = "# Performance Report\n\n";

    Object.entries(metrics).forEach(([metric, value]) => {
      const status =
        metric === "lcp"
          ? lcpOptimization.getLCPStatus(value)
          : metric === "cls"
            ? clsOptimization.getCLSStatus(value)
            : fidOptimization.getFIDStatus(value);

      report += `## ${metric.toUpperCase()}\n`;
      report += `- Value: ${value}ms\n`;
      report += `- Status: ${status}\n\n`;
    });

    return report;
  },

  /**
   * Send metrics to analytics
   */
  sendMetricsToAnalytics: (metrics: Record<string, number>): void => {
    if (typeof navigator !== "undefined" && navigator.sendBeacon) {
      const payload = JSON.stringify(metrics);
      navigator.sendBeacon("/api/metrics", payload);
    }
  },
};

/**
 * Performance testing utilities
 */
export const performanceTesting = {
  /**
   * Simulate slow network
   */
  simulateSlowNetwork: (
    throttleType: "slow-3g" | "fast-3g" | "4g"
  ): Record<string, number> => {
    const throttleProfiles: Record<string, Record<string, number>> = {
      "slow-3g": { latency: 400, downloadThroughput: 50, uploadThroughput: 20 },
      "fast-3g": { latency: 150, downloadThroughput: 1600, uploadThroughput: 750 },
      "4g": { latency: 50, downloadThroughput: 4000, uploadThroughput: 3000 },
    };
    return throttleProfiles[throttleType];
  },

  /**
   * Simulate CPU throttling
   */
  simulateCPUThrottling: (
    throttleRate: number
  ): { description: string; rate: number } => {
    return {
      description: `CPU throttled to ${throttleRate}% of normal speed`,
      rate: throttleRate,
    };
  },

  /**
   * Generate Lighthouse audit configuration
   */
  generateLighthouseConfig: (): string => `
{
  "extends": "lighthouse:default",
  "settings": {
    "onlyCategories": ["performance", "accessibility", "best-practices", "seo"],
    "skipAudits": ["uses-http2"],
    "throttling": {
      "rttMs": 150,
      "throughputKbps": 1600,
      "cpuSlowdownMultiplier": 1
    }
  }
}
  `;
};
