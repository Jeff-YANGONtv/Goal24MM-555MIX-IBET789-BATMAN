import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { getBettingPageBySlug, BettingPage as BettingPageType } from "@/lib/data";
import { generateSEOMetadata, generateArticleSchema } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroCTA } from "@/components/TelegramCTA";
import { Button } from "@/components/ui/button";

interface BettingPageProps {
  slug: string;
}

export default function BettingPage({ slug }: BettingPageProps) {
  const [page, setPage] = useState<BettingPageType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPage = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getBettingPageBySlug(slug);
        if (!data) {
          setError('Betting guide not found');
          setPage(null);
        } else {
          setPage(data);
        }
      } catch (err) {
        console.error('Error fetching betting page:', err);
        setError('Failed to load betting guide');
        setPage(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPage();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading betting guide...</p>
        </div>
      </div>
    );
  }

  if (error || !page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Betting Guide Not Found</h1>
          <p className="text-gray-600 mb-8">The betting guide you're looking for doesn't exist or could not be loaded.</p>
          <a href="/"><Button>Back to Home</Button></a>
        </div>
      </div>
    );
  }

  const metadata = generateSEOMetadata(page.title, page.description, page.keywords, `/bet/${slug}`);
  const schema = generateArticleSchema(page.title, page.description, "Goal24MM", new Date().toISOString(), page.imageUrl, `https://goal24mm.com/bet/${slug}`);

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
          <a href="/#betting" className="text-blue-600 hover:text-blue-700">Betting</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">{page.title}</span>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={20} />Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{page.title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">{page.description}</p>
          {page.platform && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 text-sm mb-2">Platform</p>
                <p className="text-2xl font-bold text-gray-900">{page.platform}</p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 text-sm mb-2">Type</p>
                <p className="text-2xl font-bold text-gray-900">Football Betting</p>
              </div>
            </div>
          )}
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About This Guide</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{page.content}</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Key Betting Tips</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Understand odds and probability calculations</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Research teams and player statistics</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Manage your bankroll responsibly</span>
            </li>
            <li className="flex gap-4">
              <span className="text-blue-600 font-bold">✓</span>
              <span className="text-gray-700">Bet responsibly and within your limits</span>
            </li>
          </ul>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-12">
            <h3 className="text-lg font-bold text-yellow-900 mb-2">⚠️ Responsible Betting</h3>
            <p className="text-yellow-800">Please bet responsibly. Gambling can be addictive. Never bet more than you can afford to lose.</p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <HeroCTA title="Get Betting Updates" description="Join our Telegram channel for daily betting tips, odds analysis, and expert strategies" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
