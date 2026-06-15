import React from "react";
import { Phone, Send } from "lucide-react";

export default function Home() {
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

      {/* Hero Section */}
      <header className="hero-gradient py-24 text-center border-b border-gray-700">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Experience Elite Gaming</h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Access the best platforms including 555MIX, IBET789, and BATMAN, all in one place. Fast, secure, and ready for you.</p>
          <div className="space-x-4">
            <button className="bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg text-lg font-bold hover:bg-yellow-400 transition">Get Started</button>
            <button className="border border-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-white hover:text-gray-900 transition">View Offers</button>
          </div>
        </div>
      </header>

      {/* Features/Platforms Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Our Featured Platforms</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">555MIX</h3>
              <p className="text-gray-400">Premium gaming experience with high-speed performance and dedicated support.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">IBET789</h3>
              <p className="text-gray-400">Your trusted platform for live sports betting and casino games.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-yellow-500 transition">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">BATMAN</h3>
              <p className="text-gray-400">Experience cutting-edge gaming with exclusive titles and community features.</p>
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


