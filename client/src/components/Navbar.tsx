import { Send } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white py-3 px-4 shadow-lg border-b border-gray-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-bold">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-base font-extrabold tracking-tight text-yellow-500">
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
          className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#229ED9] hover:bg-white hover:text-[#229ED9] transition-all transform hover:scale-105 active:scale-95 text-xs font-bold shadow-lg"
        >
          <Send size={12} />
          Join
        </a>
      </div>

      {/* Mobile Marquee */}
      <div className="md:hidden mt-2 overflow-hidden border-t border-gray-900 pt-2">
        <div className="whitespace-nowrap animate-marquee text-[10px] text-gray-400">
          အားကစားသတင်းနှင့်ပရိုမိုးရှင်းအစီအစဉ်များအားလေ့လာရန်တယ်လီဂရမ်ချန်နယ်အားJoinပါ
        </div>
      </div>
    </div>
  );
}
