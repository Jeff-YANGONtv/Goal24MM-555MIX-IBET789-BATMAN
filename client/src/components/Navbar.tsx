import { Send } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md text-white py-3 px-4 shadow-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-bold">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-2 shrink-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663567866909/RS3XpVdvpXqZJS6qP3ALye/goal24mm_logo-ZSF56x46fRNEMzeQkx5EyC.webp"
            alt="Goal24MM Logo"
            className="h-8 w-auto"
          />
          <span className="text-base font-extrabold tracking-tight text-emerald-400">
            Goal 24MM
          </span>
        </div>

        {/* Center: Marquee Text */}
        <div className="flex-1 mx-6 overflow-hidden hidden md:block">
          <div className="whitespace-nowrap animate-marquee text-xs text-gray-300">
            အားကစားသတင်းနှင့်ပရိုမိုးရှင်းအစီအစဉ်များအားလေ့လာရန်တယ်လီဂရမ်ချန်နယ်အားJoinပါ
          </div>
        </div>

        {/* Right: Join Now Button */}
        <a
          href="https://t.me/Goal24MM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 transition-all transform hover:scale-105 active:scale-95 text-xs font-bold shadow-lg"
        >
          <Send size={12} />
          Join
        </a>
      </div>

      {/* Mobile Marquee */}
      <div className="md:hidden mt-2 overflow-hidden border-t border-white/10 pt-2">
        <div className="whitespace-nowrap animate-marquee text-[10px] text-gray-400">
          အားကစားသတင်းနှင့်ပရိုမိုးရှင်းအစီအစဉ်များအားလေ့လာရန်တယ်လီဂရမ်ချန်နယ်အားJoinပါ
        </div>
      </div>
    </div>
  );
}
