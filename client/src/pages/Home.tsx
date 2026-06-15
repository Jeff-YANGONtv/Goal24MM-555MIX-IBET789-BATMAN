import { useState } from "react";
import { Trophy, Globe, Zap, TrendingUp, Users, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroCTA, CardCTA, FixedBottomCTA } from "@/components/TelegramCTA";
import { SectionCard, FeatureGrid, CTACard, FAQItem } from "@/components/SectionCard";
import { teams, leagues, worldcupStages, bettingPages } from "@/lib/data";

/**
 * Goal24MM Landing Page
 * SEO-optimized homepage with Telegram conversion funnel
 * Sections: FIFA 2026, World Cup, Arsenal, 555mix, IBET, Knockout Stages
 */

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showBottomCTA, setShowBottomCTA] = useState(false);

  // Monitor scroll to show bottom CTA
  const handleScroll = () => {
    setShowBottomCTA(window.scrollY > window.innerHeight * 2);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navSections = [
    { id: "fifa-2026", label: "FIFA 2026" },
    { id: "world-cup", label: "World Cup" },
    { id: "arsenal", label: "Arsenal" },
    { id: "betting", label: "Betting" },
    { id: "knockout", label: "Knockout" },
    { id: "faq", label: "FAQ" },
  ];

  const faqs = [
    {
      question: "What is Goal24MM?",
      answer:
        "Goal24MM is your ultimate destination for football news, betting guides, and World Cup coverage. We provide comprehensive information about teams, leagues, matches, and betting strategies.",
    },
    {
      question: "How do I join the Telegram channel?",
      answer:
        "Simply click any 'Join Telegram' button on this page or visit https://t.me/Goal24MM directly. You'll get live football updates, betting tips, and exclusive content.",
    },
    {
      question: "Is the betting information free?",
      answer:
        "Yes! All our betting guides and strategies are completely free. We provide unbiased information to help you make informed betting decisions.",
    },
    {
      question: "How often are updates posted?",
      answer:
        "We post updates daily during football season. Join our Telegram channel for real-time notifications about matches, news, and betting opportunities.",
    },
    {
      question: "Can I trust the betting predictions?",
      answer:
        "We provide analysis and strategies, not guarantees. Always bet responsibly and do your own research. Our guides help you understand odds and make informed decisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar with smooth scroll navigation */}
      <Navbar sections={navSections} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Football News, Betting Guides & World Cup Coverage
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Your ultimate destination for live football updates, expert betting strategies, and comprehensive World Cup information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://t.me/Goal24MM" target="_blank" rel="noopener noreferrer">
                <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors text-lg">
                  🔴 Join Telegram Now
                </button>
              </a>
              <button
                onClick={() => document.getElementById("fifa-2026")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full sm:w-auto px-8 py-4 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold rounded-lg transition-colors text-lg"
              >
                Explore Content
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FIFA 2026 Section */}
      <section id="fifa-2026" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionCard
            title="FIFA 2026 World Cup"
            description="Complete coverage of the FIFA 2026 World Cup tournament stages, teams, and predictions."
            icon="🏆"
            bgColor="bg-amber-50"
            accentColor="from-amber-600 to-amber-700"
            items={[
              { label: "Group Stage Analysis", link: "/worldcup/fifa-2026-group-stage" },
              { label: "Quarter Finals Preview", link: "/worldcup/fifa-2026-quarter-finals" },
              { label: "Semi Finals Guide", link: "/worldcup/fifa-2026-semi-finals" },
              { label: "Final Championship", link: "/worldcup/fifa-2026-final" },
            ]}
          />
        </div>
      </section>

      {/* World Cup Teams Section */}
      <section id="world-cup" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Top Football Teams
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <a
                key={team.slug}
                href={`/team/${team.slug}`}
                className="group bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {team.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{team.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-600">Learn More</span>
                  <span className="text-blue-600 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Arsenal Deep Dive */}
      <section id="arsenal" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 md:p-12 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">⚽</span>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Arsenal FC</h2>
                <p className="text-lg text-gray-600">Premier League Leaders & European Contenders</p>
              </div>
            </div>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Arsenal Football Club is one of the most successful teams in English football history. Based in North London, 
              the Gunners have won numerous Premier League titles and FA Cups. Known for their attractive playing style and 
              development of young talent, Arsenal continues to challenge for major titles.
            </p>
            <a href="/team/arsenal-fc" className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors">
              View Arsenal Details →
            </a>
          </div>

          {/* Arsenal Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">13</div>
              <p className="text-gray-600">Premier League Titles</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">14</div>
              <p className="text-gray-600">FA Cup Wins</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1886</div>
              <p className="text-gray-600">Founded</p>
            </div>
          </div>
        </div>
      </section>

      {/* Betting Platforms Section */}
      <section id="betting" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Betting Guides & Strategies
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Learn from expert betting strategies and platform guides to make informed decisions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {bettingPages.map((page) => (
              <a
                key={page.slug}
                href={`/bet/${page.slug}`}
                className="group"
              >
                <CardCTA
                  title={page.title}
                  description={page.description}
                />
              </a>
            ))}
          </div>

          {/* 555mix Section */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 text-white mb-12">
            <h3 className="text-3xl font-bold mb-4">555mix Betting Platform</h3>
            <p className="text-lg mb-6 opacity-90">
              555mix is a popular online betting platform for football enthusiasts. Get comprehensive guides on how to place bets, 
              understand odds, and maximize your winnings with expert strategies.
            </p>
            <a href="/bet/555mix-betting-guide" className="inline-block px-6 py-3 bg-white text-purple-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors">
              Explore 555mix Guide →
            </a>
          </div>

          {/* IBET Section */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">IBET Betting Platform</h3>
            <p className="text-lg mb-6 opacity-90">
              IBET is a leading online betting platform offering competitive odds on football matches worldwide. 
              Learn about their features, betting options, and how to get started with IBET.
            </p>
            <a href="/bet/ibet-betting-guide" className="inline-block px-6 py-3 bg-white text-green-600 hover:bg-gray-100 font-semibold rounded-lg transition-colors">
              Explore IBET Guide →
            </a>
          </div>
        </div>
      </section>

      {/* Knockout Stages Section */}
      <section id="knockout" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            World Cup Knockout Stages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {worldcupStages.filter((stage) => stage.stage !== "Group Stage").map((stage) => (
              <a
                key={stage.slug}
                href={`/worldcup/${stage.slug}`}
                className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-blue-200"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🎯</span>
                  <h3 className="text-2xl font-bold text-gray-900">{stage.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{stage.description}</p>
                <div className="flex items-center justify-between text-blue-600 font-semibold">
                  <span>View Details</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FeatureGrid
            title="Why Choose Goal24MM?"
            description="Everything you need for football news, betting guides, and World Cup coverage"
            features={[
              {
                icon: "📰",
                title: "Latest News",
                description: "Real-time football news and match updates from around the world",
              },
              {
                icon: "💡",
                title: "Expert Strategies",
                description: "Proven betting strategies and tips from experienced analysts",
              },
              {
                icon: "🌍",
                title: "Global Coverage",
                description: "Coverage of all major leagues and international competitions",
              },
              {
                icon: "📊",
                title: "Data Analysis",
                description: "In-depth statistics and performance analysis for informed decisions",
              },
              {
                icon: "🎯",
                title: "Predictions",
                description: "Match predictions and odds analysis for upcoming fixtures",
              },
              {
                icon: "🔔",
                title: "Live Updates",
                description: "Real-time notifications via Telegram for all major events",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <CTACard
            title="Join 50K+ Football Fans"
            description="Get live updates, betting tips, and exclusive content delivered straight to your Telegram"
            buttonText="🔴 Join Telegram Channel"
            buttonLink="https://t.me/Goal24MM"
            bgGradient="from-blue-600 to-blue-700"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Leagues Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Major Football Leagues
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leagues.map((league) => (
              <a
                key={league.slug}
                href={`/league/${league.slug}`}
                className="group bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {league.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{league.description}</p>
                {league.country && (
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    {league.country}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Fixed Bottom CTA - shows after scrolling */}
      {showBottomCTA && <FixedBottomCTA />}
    </div>
  );
}

// Add React import for useEffect
import React from "react";
