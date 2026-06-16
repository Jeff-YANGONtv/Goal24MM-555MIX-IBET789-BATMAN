import React, { useEffect, useState } from "react";
import { Send, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import { altTextGenerator, imageOptimizationConfig } from "../lib/imageOptimization";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // SEO Keywords for Goal24MM, 555mix, ibet789, batman, slot
  const seoKeywords = "Goal24MM, 555mix, ibet789, batman, slot, online gaming, betting platform, sports betting, casino games, online slots";
  const seoDescription = "Goal24MM - Best online gaming platform featuring 555mix, ibet789, batman slots and more. Fast, secure, and trusted betting experience with multiple payment methods.";

  const slides = [
    "https://user13973.na.imgto.link/public/20260614/1000030815.avif",
    "https://user13973.na.imgto.link/public/20260614/1000030819.avif",
    "https://user13973.na.imgto.link/public/20260614/1000030836.avif",
    "https://user13973.na.imgto.link/public/20260614/1000030835.avif",
  ];

  const platforms = [
    {
      id: "batman",
      name: "Bat Man",
      logo: "https://user13973.na.imgto.link/public/20260614/1000030805.avif",
      unit: "1unit 1kyat",
      color: "yellow"
    },
    {
      id: "555mix",
      name: "555mix",
      logo: "https://user13973.na.imgto.link/public/20260614/1000030801.avif",
      unit: "1unit 1kyat",
      color: "yellow"
    },
    {
      id: "ibet789",
      name: "Ibet789",
      logo: "https://user13973.na.imgto.link/public/20260614/1000030018.avif",
      unit: "1unit 1000kyats",
      color: "yellow"
    }
  ];

  const paymentMethods = [
    "https://user13973.na.imgto.link/public/20260614/1000030839.avif",
    "https://user13973.na.imgto.link/public/20260614/1000030841.avif",
    "https://user13973.na.imgto.link/public/20260614/1000030842.avif",
    "https://user13973.na.imgto.link/public/20260614/1000030844.avif",
    "https://user13973.na.imgto.link/public/20260614/1000030847.avif",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#05070a] text-white overflow-x-hidden">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Goal24MM - 555mix, ibet789, batman Slots & Online Gaming</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <link rel="canonical" href="https://goal24mm-555mix-ibet-batman.vercel.app/" />
        <meta property="og:title" content="Goal24MM - Best Online Gaming & Betting Platform" />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goal24mm-555mix-ibet-batman.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Goal24MM - 555mix, ibet789, batman" />
        <meta name="twitter:description" content={seoDescription} />
      </Helmet>
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-20">
        {/* Header Slider */}
        <header className="w-full max-w-[640px] mx-auto aspect-[640/280] relative overflow-hidden bg-black shadow-lg rounded-b-xl md:rounded-xl border border-gray-900 mb-6">
          <div className="w-full h-full relative">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`slide absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={slide}
                  alt={altTextGenerator.carouselSlide(index, slides.length)}
                  className="w-full h-full object-contain"
                  loading={imageOptimizationConfig.carouselImage().loading}
                  decoding={imageOptimizationConfig.carouselImage().decoding}
                />
              </div>
            ))}
          </div>
        </header>

        {/* Game Rates - SEO Optimized - Moved Up to replace old join section */}
        <div className="max-w-3xl mx-auto px-4 mt-4 mb-6 flex flex-row justify-center gap-3 flex-wrap">
          <h2 className="w-full text-center text-[9px] font-bold text-yellow-400 mb-4">Popular Gaming Platforms: 555mix, ibet789, batman Slots</h2>
          {platforms.map((platform) => (
            <div
              key={platform.id}
              className="flex-1 min-w-[100px] bg-gray-900/40 p-2 rounded-xl border border-gray-800 text-center flex flex-col items-center hover:border-yellow-500/50 transition-all"
            >
              <img
                src={platform.logo}
                alt={altTextGenerator.platformLogo(platform.name)}
                className="h-8 w-auto mb-1 object-contain"
                loading={imageOptimizationConfig.platformLogo().loading}
                decoding={imageOptimizationConfig.platformLogo().decoding}
                width={32}
                height={32}
              />
              <h3 className="text-[9px] font-bold text-gray-400">
                {platform.name}
              </h3>
              <p className="text-yellow-500 font-bold text-[9px]">
                {platform.unit}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Section - Viber & Telegram - SEO Optimized */}
        <div className="max-w-sm mx-auto px-4 text-center py-4 mb-6">
          <h2 className="text-xs font-bold text-yellow-400 mb-3">
            Goal24MM မှာဆော့ကစားဖို့အခုပဲအကောင့်ဖွင့်လိုက်ပါ
          </h2>
          <div className="flex justify-center gap-3 flex-wrap">
            <a
              href="viber://add?number=+959777433266"
              className="flex items-center gap-2 bg-[#7360F2] text-white px-4 py-1.5 rounded-lg text-[10px] font-bold shadow-lg active:scale-95 transition-transform hover:bg-[#6250E2]"
            >
              <i className="fas fa-viber"></i> Viber
            </a>
            <a
              href="https://t.me/goal24MM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#229ED9] text-white px-4 py-1.5 rounded-lg text-[10px] font-bold shadow-lg active:scale-95 transition-transform hover:bg-[#1a7fa8]"
            >
              <i className="fas fa-telegram-plane"></i> Telegram
            </a>
          </div>
        </div>

        {/* Payment Icons - SEO Rich - At the bottom */}
        <div className="max-w-4xl mx-auto mt-4 px-4 text-center mb-12">
          <h3 className="font-bold mb-3 text-gray-500 text-[10px]">
            SUPPORTED PAYMENT METHODS - Secure & Fast Transactions
          </h3>
          <div className="flex justify-center flex-wrap gap-3">
            {paymentMethods.map((method, index) => (
              <img
                key={index}
                src={method}
                alt={altTextGenerator.paymentMethod(`Payment Method ${index + 1}`, index)}
                className="w-10 h-10 rounded-full border border-gray-700 object-cover"
                loading={imageOptimizationConfig.paymentIcon().loading}
                decoding={imageOptimizationConfig.paymentIcon().decoding}
                width={40}
                height={40}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
