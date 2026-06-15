import { useParams } from "wouter";
import { ArrowLeft } from "lucide-react";
import { getLeagueBySlug } from "@/lib/data";
import { generateSEOMetadata, generateArticleSchema } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroCTA } from "@/components/TelegramCTA";
import { Button } from "@/components/ui/button";

interface LeaguePageProps {
  slug: string;
}

export default function LeaguePage({ slug }: LeaguePageProps) {
  const league = getLeagueBySlug(slug);

  if (!league) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">League Not Found</h1>
          <p className="text-gray-600 mb-8">The league you're looking for doesn't exist.</p>
          <a href="/">
            <Button>Back to Home</Button>
          </a>
        </div>
      </div>
    );
  }

  const metadata = generateSEOMetadata(league.title, league.description, league.keywords, `/league/${slug}`);
  const schema = generateArticleSchema(league.title, league.description, league.title, new Date().toISOString(), league.imageUrl, `https://goal24mm.com/league/${slug}`);

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
          <span className="text-gray-900 font-semibold">{league.title}</span>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={20} />Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{league.title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">{league.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Country</p>
              <p className="text-2xl font-bold text-gray-900">{league.country}</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Tier</p>
              <p className="text-2xl font-bold text-gray-900">Top Division</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About {league.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{league.content}</p>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <HeroCTA title="Follow All Leagues" description="Get comprehensive coverage of all major football leagues with live updates and analysis" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
