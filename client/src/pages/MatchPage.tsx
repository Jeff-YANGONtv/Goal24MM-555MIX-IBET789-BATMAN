import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { getMatchBySlug, Match } from "@/lib/data";
import { generateSEOMetadata, generateArticleSchema } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroCTA } from "@/components/TelegramCTA";
import { Button } from "@/components/ui/button";

interface MatchPageProps {
  slug: string;
}

export default function MatchPage({ slug }: MatchPageProps) {
  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMatch = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMatchBySlug(slug);
        if (!data) {
          setError('Match not found');
          setMatch(null);
        } else {
          setMatch(data);
        }
      } catch (err) {
        console.error('Error fetching match:', err);
        setError('Failed to load match');
        setMatch(null);
      } finally {
        setLoading(false);
      }
    };

    fetchMatch();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading match...</p>
        </div>
      </div>
    );
  }

  if (error || !match) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Match Not Found</h1>
          <p className="text-gray-600 mb-8">The match you're looking for doesn't exist or could not be loaded.</p>
          <a href="/"><Button>Back to Home</Button></a>
        </div>
      </div>
    );
  }

  const metadata = generateSEOMetadata(match.title, match.description, match.keywords, `/match/${slug}`);
  const schema = generateArticleSchema(match.title, match.description, "Football Match", new Date().toISOString(), match.imageUrl, `https://goal24mm.com/match/${slug}`);

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
          <a href="/#matches" className="text-blue-600 hover:text-blue-700">Matches</a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">{match.title}</span>
        </div>
      </div>
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={20} />Back to Home
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{match.title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">{match.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Match Date</p>
              <p className="text-2xl font-bold text-gray-900">{match.date || 'TBD'}</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Teams</p>
              <p className="text-lg font-bold text-gray-900">
                {match.teams && match.teams.length > 0 ? match.teams.join(' vs ') : 'TBD'}
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <p className="text-gray-600 text-sm mb-2">Status</p>
              <p className="text-2xl font-bold text-gray-900">Upcoming</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Match Details</h2>
          <p className="text-gray-700 leading-relaxed mb-8">{match.content}</p>
          
          {match.teams && match.teams.length > 0 && (
            <>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Teams</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {match.teams.map((team, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <p className="text-lg font-bold text-gray-900">{team}</p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <HeroCTA title="Get Match Updates" description="Follow all upcoming matches with live scores, predictions, and expert analysis" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
