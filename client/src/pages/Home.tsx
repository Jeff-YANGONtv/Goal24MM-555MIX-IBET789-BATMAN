import React from "react";
import { Phone, Send } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="py-6 text-center">
        <h1 className="text-3xl font-bold text-yellow-500 tracking-wider">
          Goal 24 MM
        </h1>
      </header>

      {/* Hero Image Section */}
      <section className="px-4 mb-8">
        <div className="relative max-w-lg mx-auto rounded-2xl overflow-hidden border-2 border-yellow-500/30">
          <img 
            src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=800" 
            alt="Gaming Banner" 
            className="w-full h-auto"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 text-center">
            <p className="text-yellow-400 text-sm font-bold mb-1">
              အသွင်းအထုတ်မြန်ဆန်ပြီး အလျော်အစားမှန်ကန်တဲ့
            </p>
            <p className="text-yellow-400 text-sm font-bold">
              ညီကိုတို့ရဲ့ Goal24MM
            </p>
          </div>
        </div>
      </header>

      {/* Contact Info Bar */}
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

      {/* Join Promotion Section */}
      <div className="flex items-center justify-center gap-4 mb-12 px-4">
        <p className="text-blue-400 text-sm font-medium">Join our promotion & news channel</p>
        <a 
          href="https://t.me/Goal24MM" 
          className="bg-white text-black px-6 py-1.5 rounded-full text-sm font-bold button-3d"
        >
          JOIN
        </a>
      </div>

      {/* Supported Payment */}
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

      {/* Platform Cards */}
      <section className="grid grid-cols-3 gap-3 px-4 mb-12 max-w-2xl mx-auto">
        {[
          { name: "Bat Man", price: "1unit 1kyat", color: "border-blue-900/50" },
          { name: "555mix", price: "1unit 1kyat", color: "border-yellow-900/50" },
          { name: "Ibet789", price: "1unit 1000kyats", color: "border-blue-900/50" },
        ].map((item, i) => (
          <div key={i} className={`glass rounded-xl p-3 text-center border ${item.color}`}>
            <div className="w-10 h-10 mx-auto mb-3 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-xs">🎮</span>
            </div>
            <h4 className="text-xs font-bold mb-1">{item.name}</h4>
            <p className="text-[10px] text-yellow-500">{item.price}</p>
          </div>
        ))}
      </section>

      {/* Contact Call to Action */}
      <section className="text-center px-4 pb-12">
        <p className="text-yellow-500 text-lg font-bold mb-8">
          အကောင့်ဖွင့်ကစားလိုပါကဆက်သွယ်ရန်
        </p>
        <div className="flex flex-col gap-4 max-w-xs mx-auto">
          <a 
            href="viber://chat?number=09777433266" 
            className="bg-indigo-500 py-3 rounded-xl font-bold flex items-center justify-center gap-2 button-3d"
          >
            <Phone size={20} /> Viber
          </a>
          <a 
            href="https://t.me/Goal24MM" 
            className="bg-blue-500 py-3 rounded-xl font-bold flex items-center justify-center gap-2 button-3d"
          >
            <Send size={20} /> Telegram
          </a>
        </div>
      </section>
    </div>
  );
}
