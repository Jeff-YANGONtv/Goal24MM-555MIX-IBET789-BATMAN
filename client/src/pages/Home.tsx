import React, { useEffect } from "react";
import { Phone, Send } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "../components/Navbar";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

  const [emblaFeaturesRef] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const slides = [
    {
      image: "https://lh3.googleusercontent.com/d/1w6btUxJrKNTocrxe4QPKbTDI6Ea2O8SI",
      title: "",
      description: ""
    },
    {
      image: "https://lh3.googleusercontent.com/d/1arm9NMrvX_CAemYvRe3GSEAbUMNbqFOB",
      title: "",
      description: ""
    },
    {
      image: "https://lh3.googleusercontent.com/d/1pFtI_EziRyYTSDeM3hrfxalkiz1jaSSh",
      title: "",
      description: ""
    }
  ];

  const platforms = [
    {
      id: "555mix",
      name: "555MIX",
      logo: "/assets/555mix_logo.png",
      description: "Premium gaming experience with high-speed performance and dedicated support. Enjoy a wide range of sports betting and live casino options.",
      unit: "တစ်ယူနစ် တစ်ကျပ်",
      unitLabel: "(မြန်မာကြေး)",
      color: "yellow",
      tags: ["Fast Payouts", "24/7 Support"]
    },
    {
      id: "ibet789",
      name: "IBET789",
      logo: "/assets/ibet789_logo.png",
      description: "Your trusted platform for live sports betting and casino games. Competitive odds and a seamless interface for the best experience.",
      unit: "တစ်ယူနစ် - တစ်ထောင်ကျပ်",
      unitLabel: "(live bet)",
      color: "blue",
      tags: ["Live Betting", "Best Odds"]
    },
    {
      id: "batman688",
      name: "BATMAN 688",
      logo: "/assets/batman_logo.png",
      description: "Experience cutting-edge gaming with exclusive slot titles. High win rates and massive jackpots on our most exciting platform.",
      unit: "တစ်ယူနစ် တစ်ကျပ်",
      unitLabel: "(Highest RTP)",
      color: "purple",
      tags: ["Big Jackpots", "Daily Bonuses"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { border: string; hover: string; tag: string; tagText: string }> = {
      yellow: {
        border: "border-yellow-500/50",
        hover: "group-hover:text-yellow-500",
        tag: "bg-yellow-500/10",
        tagText: "text-yellow-500"
      },
      blue: {
        border: "border-blue-500/50",
        hover: "group-hover:text-blue-500",
        tag: "bg-blue-500/10",
        tagText: "text-blue-500"
      },
      purple: {
        border: "border-purple-500/50",
        hover: "group-hover:text-purple-500",
        tag: "bg-purple-500/10",
        tagText: "text-purple-500"
      }
    };
    return colors[color] || colors.yellow;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Slider Section */}
      <header className="relative overflow-hidden border-b border-gray-700 pt-20 md:pt-16">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {slides.map((slide, index) => (
              <div key={index} className="embla__slide flex-[0_0_100%] relative min-w-0">
                <div className="relative w-full max-w-[640px] aspect-[2/1] mx-auto overflow-hidden">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className={`absolute inset-0 w-full h-full object-cover ${index < 3 ? 'opacity-100' : 'opacity-60'}`}
                  />
                  {slide.title && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex items-center justify-center text-center">
                      <div className="container mx-auto px-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg">
                          {slide.title}
                        </h1>
                        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-md">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features/Platforms Section - Horizontal Auto-Play Slider */}
      <section id="features" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-16 text-white">
            Our Featured <span className="text-yellow-500">Platforms</span>
          </h2>
          
          {/* Horizontal Auto-Play Slider */}
          <div className="overflow-hidden">
            <div className="embla" ref={emblaFeaturesRef}>
              <div className="embla__container flex gap-8">
                {platforms.map((platform) => {
                  const colors = getColorClasses(platform.color);
                  return (
                    <div
                      key={platform.id}
                      className="embla__slide flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] lg:flex-[0_0_calc(33.333%-1.33rem)] min-w-0"
                    >
                      <div className={`group bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl border border-gray-700 hover:${colors.border} transition-all duration-300 hover:-translate-y-2 flex flex-col h-full shadow-xl overflow-hidden relative`}>
                        {/* App Icon Frame (512x512 ratio) */}
                        <div className="mb-3 relative flex items-center justify-center">
                          <div className={`w-24 h-24 rounded-lg border-2 border-${platform.color}-500/30 flex items-center justify-center bg-gray-900/50`}>
                            <img 
                              src={platform.logo} 
                              alt={platform.name} 
                              className="h-16 w-16 object-contain animate-float" 
                            />
                          </div>
                        </div>
                        <h3 className={`text-base font-bold mb-1.5 text-white ${colors.hover} transition-colors`}>
                          {platform.name}
                        </h3>
                        <p className="text-gray-400 mb-1.5 leading-relaxed flex-grow text-xs">
                          {platform.description}
                        </p>
                        
                        {/* Unit Price Information */}
                        <div className="mb-2 p-2 bg-gray-900/50 rounded-lg border border-gray-700">
                          <p className="text-[11px] text-gray-300 font-semibold">
                            {platform.unit}
                          </p>
                          <p className="text-[9px] text-gray-500 mt-0.5">
                            {platform.unitLabel}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1">
                          {platform.tags.map((tag) => (
                            <span 
                              key={tag}
                              className={`${colors.tag} ${colors.tagText} px-2 py-0.5 rounded text-[10px] font-semibold border border-${platform.color}-500/20`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Bar (Retained from original) */}
      <div className="flex justify-center gap-6 mb-8 text-sm font-semibold">
        <div className="flex items-center gap-2">
          <div className="bg-purple-600 p-1 rounded-full">
            <Phone size={14} className="text-white" />
          </div>
          <span>09777433266</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 p-1 rounded-full">
            <Send size={14} className="text-white" />
          </div>
          <span>@Goal24MM</span>
        </div>
      </div>

      {/* Join Promotion Section (Retained from original) */}
      <div className="flex items-center justify-center gap-4 mb-12 px-4">
        <p className="text-blue-400 text-sm font-medium">Join our promotion & news channel</p>
        <a 
          href="https://t.me/Goal24MM" 
          className="bg-white text-black px-6 py-1.5 rounded-full text-sm font-bold button-3d"
        >
          JOIN
        </a>
      </div>

      {/* Supported Payment (Retained from original) */}
      <section className="mb-12 px-4">
        <h3 className="text-center text-gray-500 text-xs font-bold uppercase tracking-widest mb-6">
          Supported Payment
        </h3>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-xs">Wave</div>
          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-xs">KPay</div>
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center font-bold text-red-600 text-xs">AYA</div>
          <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold text-white text-xs">CB</div>
          <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-black text-xs">Binance</div>
        </div>
      </section>

      {/* Footer (New) */}
      <footer className="bg-gray-800 py-8 text-center text-gray-400 text-sm">
        <div className="container mx-auto px-6">
          <p>&copy; 2026 Goal24MM. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

