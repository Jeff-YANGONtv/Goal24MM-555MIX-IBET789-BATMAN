import { Send, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TelegramCTAProps {
  variant?: "hero" | "inline" | "fixed-bottom";
  title?: string;
  description?: string;
}

/**
 * Hero CTA - Large prominent button for main sections
 */
export function HeroCTA({ title = "Join Our Telegram Channel", description = "Get live football updates, betting tips, and exclusive content" }: Omit<TelegramCTAProps, 'variant'>) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        {description}
      </p>
      <a href="https://t.me/Goal24MM" target="_blank" rel="noopener noreferrer">
        <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold">
          <Send size={20} className="mr-2" />
          Join Telegram Now
        </Button>
      </a>
    </div>
  );
}

/**
 * Inline CTA - Subtle button within content
 */
export function InlineCTA({ title = "Join for Updates" }: Omit<TelegramCTAProps, 'variant'>) {
  return (
    <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-lg px-6 py-3">
      <div>
        <p className="font-semibold text-gray-900">{title}</p>
        <p className="text-sm text-gray-600">Get live notifications</p>
      </div>
      <a href="https://t.me/Goal24MM" target="_blank" rel="noopener noreferrer">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
          <ArrowRight size={16} />
        </Button>
      </a>
    </div>
  );
}

/**
 * Fixed Bottom CTA - Sticky bar at bottom of page
 */
export function FixedBottomCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <p className="font-semibold text-gray-900">Don't miss live updates</p>
          <p className="text-sm text-gray-600">Join 50K+ football fans on Telegram</p>
        </div>
        <a href="https://t.me/Goal24MM" target="_blank" rel="noopener noreferrer">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            <Send size={16} className="mr-2" />
            Join Now
          </Button>
        </a>
      </div>
    </div>
  );
}

/**
 * Card CTA - For feature cards
 */
export function CardCTA({ title = "Join Channel", description = "Get exclusive updates" }: Omit<TelegramCTAProps, 'variant'>) {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <Send size={24} className="text-white" />
      </div>
      <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <a href="https://t.me/Goal24MM" target="_blank" rel="noopener noreferrer" className="block">
        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
          Join Telegram
        </Button>
      </a>
    </div>
  );
}

/**
 * Minimal CTA - Simple text link
 */
export function MinimalCTA({ title = "Join Telegram" }: Omit<TelegramCTAProps, 'variant'>) {
  return (
    <a
      href="https://t.me/Goal24MM"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
    >
      {title}
      <Send size={16} className="group-hover:translate-x-1 transition-transform" />
    </a>
  );
}
