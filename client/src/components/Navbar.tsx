import { Send } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md text-white py-2 px-4 shadow-lg border-b border-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Top Row: Logo/Title and Join Button */}
        <div className="flex items-center justify-between font-bold mb-1">
          {/* Left: Header Title - Reduced Font Size */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-[7px] md:text-[8px] font-extrabold tracking-tight text-yellow-500 whitespace-nowrap">
              GOAL 24 MM - 555MIX , IBET789 , BATMAN SLOT
            </span>
          </div>

          {/* Right: Join Now Button */}
          <a
            href="https://t.me/modernsportsnews"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#229ED9] hover:bg-white hover:text-[#229ED9] transition-all transform hover:scale-105 active:scale-95 text-[8px] font-bold shadow-lg shrink-0 whitespace-nowrap"
          >
            <Send size={9} />
            Join
          </a>
        </div>

        {/* Bottom Row: Marquee Text (Desktop only) */}
        <div className="overflow-hidden hidden md:block">
          <div className="whitespace-nowrap animate-marquee text-[9px] text-gray-300">
            အားကစားသတင်းနှင့်ပရိုမိုးရှင်းအစီအစဉ်များအားလေ့လာရန်တယ်လီဂရမ်ချန်နယ်အားJoinပါ
          </div>
        </div>

        {/* Mobile Marquee */}
        <div className="md:hidden overflow-hidden border-t border-gray-900 pt-1">
          <div className="whitespace-nowrap animate-marquee text-[8px] text-gray-400">
            အားကစားသတင်းနှင့်ပရိုမိုးရှင်းအစီအစဉ်များအားလေ့လာရန်တယ်လီဂရမ်ချန်နယ်အားJoinပါ
          </div>
        </div>
      </div>
    </div>
  );
}
