import { useParams } from "wouter";
import { ArrowLeft } from "lucide-react";
import { getTeamBySlug, getAllTeamSlugs } from "@/lib/data";
import { generateSEOMetadata, generateArticleSchema } from "@/lib/seo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroCTA } from "@/components/TelegramCTA";
import { Button } from "@/components/ui/button";

interface TeamPageProps {
  slug: string;
}

export default function TeamPage({ slug }: TeamPageProps) {
  const team = getTeamBySlug(slug);

  if (!team) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Team Not Found</h1>
          <p className="text-gray-600 mb-8">The team you're looking for doesn't exist.</p>
          <a href="/">
            <Button>Back to Home</Button>
          </a>
        </div>
      </div>
    );
  }

  const metadata = generateSEOMetadata(
    team.title,
    team.description,
    team.keywords,
    `/team/${slug}`
  );

  const schema = generateArticleSchema(
    team.title,
    team.description,
    team.title,
    new Date().toISOString(),
    team.imageUrl,
    `https://goal24mm.com/team/${slug}`
  );

  return (
    <div className="min-h-screen bg-white">
      {/* SEO Meta Tags */}
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

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2">
          <a href="/" className="text-blue-600 hover:text-blue-700">
            Home
          </a>
          <span className="text-gray-400">/</span>
          <a href="/#world-cup" className="text-blue-600 hover:text-blue-700">
            Teams
          </a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-900 font-semibold">{team.title}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <a href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft size={20} />
            Back to Home
          </a>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{team.title}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">{team.description}</p>

          {/* Team Stats */}
          {team.founded && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 text-sm mb-2">Founded</p>
                <p className="text-3xl font-bold text-blue-600">{team.founded}</p>
              </div>
              {team.stadium && (
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <p className="text-gray-600 text-sm mb-2">Stadium</p>
                  <p className="text-xl font-bold text-gray-900">{team.stadium}</p>
                </div>
              )}
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <p className="text-gray-600 text-sm mb-2">League</p>
                <p className="text-xl font-bold text-gray-900">Premier League</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About {team.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{team.content}</p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Key Information</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Compete in the Premier League, England's top football division</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Known for developing young talent and attractive playing style</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Participate in domestic and European competitions</span>
              </li>
              <li className="flex gap-4">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-gray-700">Passionate fanbase and strong community engagement</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Related Teams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/team/manchester-united" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <p className="font-semibold text-gray-900">Manchester United</p>
                <p className="text-sm text-gray-600">Premier League</p>
              </a>
              <a href="/team/liverpool-fc" className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                <p className="font-semibold text-gray-900">Liverpool FC</p>
                <p className="text-sm text-gray-600">Premier League</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <HeroCTA
            title="Stay Updated on All Teams"
            description="Get live updates, match previews, and betting tips for all major teams including this one"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
