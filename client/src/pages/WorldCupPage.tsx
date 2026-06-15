import { ArrowLeft } from "lucide-react";
import { getWorldCupStageBySlug } from "@/lib/data";
import { generateSEOMetadata, generateArticleSchema } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroCTA } from "@/components/TelegramCTA";
import { Button } from "@/components/ui/button";

interface WorldCupPageProps {
  slug: string;
}

export default function WorldCupPage({ slug }: WorldCupPageProps) {
  const stage = getWorldCupStageBySlug(slug);

  if (!stage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">World Cup Stage Not Found</h1>
          <p className="text-gray-600 mb-8">The World Cup stage you're looking for doesn't exist.</p>
          <a href="/"><Button>Back to Home</Button></a>
        </div>
      </div>
    );
  }

  const metadata = generateSEOMetadata(stage.title, stage.description, stage.keywords, `/worldcup/${slug}`);
  const schema = generateArticleSchema(stage.title, stage.description, "FIFA World Cup", new Date().toISOString(), stage.imageUrl, `https://goal24mm.com/worldcup/${slug}`);

  return (
    <div className="min-h-screen bg-white">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link rel="canonical" href={metadata.canonical} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={metadata.canonical} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </head>
      <Navbar sections={[]} />
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:text-blue-700">Home</a>
          <span className="text-gray-400">/</span>
          <a href="/#fifa-2026" className="text-blue-600 hover:text-blue-700">FIFA 2026</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">{stage.title}</span>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={20} />Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{stage.title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">{stage.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Tournament</p>
              <p className="text-2xl font-bold text-gray-900">FIFA {stage.year}</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Stage</p>
              <p className="text-2xl font-bold text-gray-900">{stage.stage}</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Significance</p>
              <p className="text-2xl font-bold text-gray-900">Critical</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Stage</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{stage.content}</p>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <HeroCTA title="Get World Cup Updates" description="Stay informed about all FIFA 2026 stages with live updates and expert analysis" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
