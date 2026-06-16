import { Send } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white py-1 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between text-[10px] font-bold">
        <span className="flex items-center gap-2">
          <img src="/assets/logo.png" alt="Goal24MM Logo" className="h-6 w-auto" />
          <span className="text-sm font-bold">Goal 24MM</span>
        </span>
        <a
          href="https://t.me/Goal24MM"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 bg-white text-blue-600 px-3 py-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <Send size={10} />
          Join Now
        </a>
      </div>
    </div>
  );
}
