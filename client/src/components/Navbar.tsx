import { Send } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white py-3 px-4 shadow-lg border-b border-gray-900">
      <div className="max-w-7xl mx-auto flex items-center justify-between font-bold">
        {/* Left: Logo and Brand - Reduced Font Size */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[8px] md:text-[9px] font-extrabold tracking-tight text-yellow-500 whitespace-nowrap">
            GOAL 24 MM - 555MIX , IBET789 , BATMAN SLOT
          </span>
        </div>

        {/* Center/Right: Marquee Text with Join Button (Desktop) */}
        <div className="flex-1 mx-3 overflow-hidden hidden md:flex items-center justify-between gap-2">
          <div className="flex-1 overflow-hidden">
            <div className="whitespace-nowrap animate-marquee text-[10px] text-gray-300">
              အားကစားသတင်းနှင့်ပရိုမိုးရှင်းအစီအစဉ်များအားလေ့လာရန်တယ်လီဂရမ်ချန်နယ်အားJoinပါ
            </div>
          </div>
          {/* Right: Join Now Button - Fixed position on right */}
          <a
            href="https://t.me/modernsportsnews"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#229ED9] hover:bg-white hover:text-[#229ED9] transition-all transform hover:scale-105 active:scale-95 text-[9px] font-bold shadow-lg shrink-0 whitespace-nowrap"
          >
            <Send size={10} />
            Join
          </a>
        </div>

        {/* Mobile Join Button (Visible on mobile, hidden on desktop) */}
        <div className="md:hidden flex items-center">
          <a
            href="https://t.me/modernsportsnews"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 rounded-full bg-[#229ED9] text-[8px] font-bold shadow-lg whitespace-nowrap"
          >
            <Send size={8} />
            Join
          </a>
        </div>
      </div>

      {/* Mobile Marquee */}
      <div className="md:hidden mt-2 overflow-hidden border-t border-gray-900 pt-2">
        <div className="whitespace-nowrap animate-marquee text-[9px] text-gray-400">
          အားကစားသတင်းနှင့်ပရိုမိုးရှင်းအစီအစဉ်များအားလေ့လာရန်တယ်လီဂရမ်ချန်နယ်အားJoinပါ
        </div>
      </div>
    </div>
  );
}
