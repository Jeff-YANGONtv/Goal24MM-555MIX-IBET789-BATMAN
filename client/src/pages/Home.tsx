import React, { useEffect } from "react";
import { Phone, Send } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false })
  ]);

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

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Navigation */}
      <nav className="p-6">
        <div className="container mx-auto flex justify-between items-center">
          <span className="text-2xl font-bold text-yellow-500">Goal24MM</span>
          <div className="space-x-6">
            <a href="#features" className="hover:text-yellow-500 transition">Services</a>
            <a href="#" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition">Play Now</a>
          </div>
        </div>
      </nav>

      {/* Hero Slider Section */}
      <header className="relative overflow-hidden border-b border-gray-700">
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

      {/* Features/Platforms Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Featured Platforms</h2>
          
          <div className="space-y-12">
            {/* 555MIX Block */}
            <div id="features/555mix" className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-500 transition scroll-mt-24">
              <h3 className="text-3xl font-bold mb-4 text-yellow-500">555MIX</h3>
              <p className="text-lg text-gray-300 mb-4">Premium gaming experience with high-speed performance and dedicated support. Enjoy a wide range of sports betting and live casino options tailored for elite players.</p>
              <div className="flex gap-4">
                <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm font-medium">Fast Payouts</span>
                <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm font-medium">24/7 Support</span>
              </div>
            </div>

            {/* IBET789 Block */}
            <div id="features/ibet789" className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-500 transition scroll-mt-24">
              <h3 className="text-3xl font-bold mb-4 text-yellow-500">IBET789</h3>
              <p className="text-lg text-gray-300 mb-4">Your trusted platform for live sports betting and casino games. IBET789 offers competitive odds and a seamless interface for the best betting experience in Myanmar.</p>
              <div className="flex gap-4">
                <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm font-medium">Live Betting</span>
                <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm font-medium">Best Odds</span>
              </div>
            </div>

            {/* SLOT Block */}
            <div id="features/slot" className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-500 transition scroll-mt-24">
              <h3 className="text-3xl font-bold mb-4 text-yellow-500">SLOT & BATMAN</h3>
              <p className="text-lg text-gray-300 mb-4">Experience cutting-edge gaming with exclusive slot titles and community features. Our Batman platform provides the most exciting slot games with high win rates and massive jackpots.</p>
              <div className="flex gap-4">
                <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm font-medium">Big Jackpots</span>
                <span className="bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-sm font-medium">Daily Bonuses</span>
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

      {/* Call to Action Section (New) */}
      <section className="bg-yellow-500 text-gray-900 py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Play?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join Goal24MM today and elevate your gaming experience. Fast, secure, and rewarding.</p>
          <a href="#" className="bg-gray-900 text-yellow-500 px-10 py-4 rounded-full text-xl font-bold hover:bg-gray-700 transition">Sign Up Now</a>
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


