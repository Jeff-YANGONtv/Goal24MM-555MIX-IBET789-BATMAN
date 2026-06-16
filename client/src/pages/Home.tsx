import React, { useEffect } from "react";
import { Phone, Send } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Navbar from "../components/Navbar";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ]);

  const platforms = [
    {
      id: "555mix",
      name: "555MIX",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663567866909/RS3XpVdvpXqZJS6qP3ALye/555mix_icon-S6Lcw5LodfxQ49LwXNC4gG.webp",
      unit: "တစ်ယူနစ် တစ်ကျပ်",
      unitLabel: "(မြန်မာကြေး)",
      color: "yellow"
    },
    {
      id: "ibet789",
      name: "IBET789",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663567866909/RS3XpVdvpXqZJS6qP3ALye/ibet789_icon-U4mSDJysqnUaD7f6XVf8Cr.webp",
      unit: "တစ်ယူနစ် - တစ်ထောင်ကျပ်",
      unitLabel: "(live bet)",
      color: "blue"
    },
    {
      id: "batman688",
      name: "BATMAN 688",
      logo: "https://d2xsxph8kpxj0f.cloudfront.net/310519663567866909/RS3XpVdvpXqZJS6qP3ALye/batman688_icon-YSU3YthdsMgrXY9iGgBppt.webp",
      unit: "တစ်ယူနစ် တစ်ကျပ်",
      unitLabel: "(Highest RTP)",
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated Glassmorphism Background */}
      <div className="fixed inset-0 glass-pulse pointer-events-none" style={{
        background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        opacity: 0.1,
        zIndex: 0
      }} />

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 pt-20 pb-8">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-6">
          <div className="text-center slide-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              Goal 24MM
            </h1>
            <p className="text-base text-gray-300 mb-4">
              Live Odds. Real Payouts. Your Game.
            </p>
          </div>
        </section>

        {/* Featured Platforms Section */}
        <section className="container mx-auto px-4 mb-8">
          <h2 className="text-xl font-bold text-center mb-6 text-white">
            Our Featured <span className="text-emerald-400">Platforms</span>
          </h2>

          {/* Horizontal Auto-Play Carousel */}
          <div className="overflow-hidden">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container flex gap-6">
                {platforms.map((platform) => (
                  <div
                    key={platform.id}
                    className="embla__slide flex-[0_0_100%] md:flex-[0_0_calc(50%-0.75rem)] lg:flex-[0_0_calc(33.333%-1rem)] min-w-0"
                  >
                    {/* Platform Card with Glassmorphism */}
                    <div className="group h-full bg-white/10 backdrop-blur-md rounded-xl border border-white/20 p-3 hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50 shadow-xl">
                      {/* Circle-Framed Icon */}
                      <div className="mb-3 flex justify-center">
                        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-sm border-2 border-emerald-400/40 flex items-center justify-center icon-glow overflow-hidden">
                          <img
                            src={platform.logo}
                            alt={platform.name}
                            className="w-12 h-12 object-contain"
                          />
                        </div>
                      </div>

                      {/* Platform Name */}
                      <h3 className="text-center font-bold text-sm text-white mb-2 group-hover:text-emerald-300 transition-colors">
                        {platform.name}
                      </h3>

                      {/* Unit Price Box */}
                      <div className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-2 mb-2">
                        <p className="text-[11px] font-semibold text-gray-200">
                          {platform.unit}
                        </p>
                        <p className="text-[9px] text-gray-400 mt-0.5">
                          {platform.unitLabel}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <button className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold py-1.5 px-3 text-sm rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95">
                        Join Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto px-4 mb-6">
          <div className="flex justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <div className="bg-emerald-600 p-1.5 rounded-full">
                <Phone size={14} className="text-white" />
              </div>
              <span>09777433266</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <div className="bg-blue-500 p-1.5 rounded-full">
                <Send size={14} className="text-white" />
              </div>
              <span>@Goal24MM</span>
            </div>
          </div>
        </section>

        {/* Join Telegram Section */}
        <section className="container mx-auto px-4 mb-6">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <p className="text-emerald-300 text-xs font-medium">
              အားကစားသတင်းနှင့်ပရိုမိုးရှင်းအစီအစဉ်များအားလေ့လာရန်တယ်လီဂရမ်ချန်နယ်အားJoinပါ
            </p>
            <a
              href="https://t.me/Goal24MM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-emerald-600 px-6 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 active:scale-95"
            >
              JOIN
            </a>
          </div>
        </section>

        {/* Supported Payment */}
        <section className="container mx-auto px-4 mb-8">
          <h3 className="text-center text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">
            Supported Payment
          </h3>
          <div className="flex justify-center items-center gap-2 flex-wrap">
            <div className="w-9 h-9 bg-yellow-400 rounded-full flex items-center justify-center font-bold text-black text-[9px]">
              Wave
            </div>
            <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center font-bold text-white text-[9px]">
              KPay
            </div>
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center font-bold text-red-600 text-[9px]">
              AYA
            </div>
            <div className="w-9 h-9 bg-red-600 rounded-full flex items-center justify-center font-bold text-white text-[9px]">
              CB
            </div>
            <div className="w-9 h-9 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-black text-[9px]">
              BNB
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/10 py-4 text-center text-gray-400 text-[10px]">
        <p>&copy; 2026 Goal24MM. All rights reserved.</p>
      </footer>
    </div>
  );
}
