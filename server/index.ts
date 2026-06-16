import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import { generateRobotsTxt } from "./routes/robots.js";
import { generateSitemapXML, getSitemapEntries } from "./routes/sitemap.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  // Performance optimization middleware
  app.use((req, res, next) => {
    // Cache headers for static assets
    if (req.path.match(/\.(js|css|woff2|png|jpg|webp|avif)$/)) {
      res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
    } else {
      res.setHeader("Cache-Control", "public, max-age=3600");
    }
    
    // Security headers
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    
    next();
  });

  app.use(express.static(staticPath));

  // Dynamic robots.txt endpoint
  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain");
    res.send(generateRobotsTxt());
  });

  // Dynamic sitemap.xml endpoint
  app.get("/sitemap.xml", (_req, res) => {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://goal24mm-555mix-ibet-batman.vercel.app";
    const entries = getSitemapEntries(baseUrl);
    const sitemapXml = generateSitemapXML(entries);
    res.type("application/xml");
    res.send(sitemapXml);
  });

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log(`robots.txt available at http://localhost:${port}/robots.txt`);
    console.log(`sitemap.xml available at http://localhost:${port}/sitemap.xml`);
    console.log(`Performance optimization enabled`);
    console.log(`Cache headers configured for static assets`);
  });
}

startServer().catch(console.error);

