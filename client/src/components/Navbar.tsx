import { Send } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-3 px-4 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-bold">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <img src="/assets/logo.png" alt="Goal24MM Logo" className="h-10 w-auto" />
          <span className="text-lg font-extrabold tracking-tight text-yellow-500">Goal 24MM</span>
        </div>

        {/* Center: Marquee Text */}
        <div className="flex-1 mx-8 overflow-hidden hidden md:block">
          <div className="whitespace-nowrap animate-marquee text-sm text-gray-300">
            အားကစားသတင်းနှင့်ပရိုမိုးရှင်းအစီအစဉ်များအားလေ့လာရန်တယ်လီဂရမ်ချန်နယ်အားJoinပါ
          </div>
        </div>

        {/* Right: Blinking Join Now Button */}
        <a
          href="https://t.me/Goal24MM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2 rounded-full transition-all transform hover:scale-105 animate-blink-blue-white shadow-[0_0_15px_rgba(59,130,246,0.5)] text-sm font-bold"
        >
          <Send size={14} />
          Join Now
        </a>
      </div>
      
      {/* Mobile Marquee (Visible only on small screens) */}
      <div className="md:hidden mt-2 overflow-hidden border-t border-gray-800 pt-2">
        <div className="whitespace-nowrap animate-marquee text-[10px] text-gray-400">
          အားကစားသတင်းနှင့်ပရိုမိုးရှင်းအစီအစဉ်များအားလေ့လာရန်တယ်လီဂရမ်ချန်နယ်အားJoinပါ
        </div>
      </div>
    </div>
  );
}
