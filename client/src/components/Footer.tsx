import { Send, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">G24</span>
              </div>
              <span className="font-bold text-lg text-white">Goal24MM</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your ultimate destination for football news, betting guides, and World Cup coverage.
            </p>
            <a
              href="https://t.me/Goal24MM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
            >
              <Send size={16} />
              Join Telegram
            </a>
          </div>

          {/* Teams */}
          <div>
            <h3 className="font-bold text-white mb-4">Top Teams</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/team/arsenal-fc" className="hover:text-blue-400 transition-colors">
                  Arsenal FC
                </a>
              </li>
              <li>
                <a href="/team/manchester-united" className="hover:text-blue-400 transition-colors">
                  Manchester United
                </a>
              </li>
              <li>
                <a href="/team/liverpool-fc" className="hover:text-blue-400 transition-colors">
                  Liverpool FC
                </a>
              </li>
              <li>
                <a href="/team/manchester-city" className="hover:text-blue-400 transition-colors">
                  Manchester City
                </a>
              </li>
              <li>
                <a href="/team/chelsea-fc" className="hover:text-blue-400 transition-colors">
                  Chelsea FC
                </a>
              </li>
            </ul>
          </div>

          {/* Leagues */}
          <div>
            <h3 className="font-bold text-white mb-4">Leagues</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/league/premier-league" className="hover:text-blue-400 transition-colors">
                  Premier League
                </a>
              </li>
              <li>
                <a href="/league/la-liga" className="hover:text-blue-400 transition-colors">
                  La Liga
                </a>
              </li>
              <li>
                <a href="/league/serie-a" className="hover:text-blue-400 transition-colors">
                  Serie A
                </a>
              </li>
              <li>
                <a href="/league/bundesliga" className="hover:text-blue-400 transition-colors">
                  Bundesliga
                </a>
              </li>
            </ul>
          </div>

          {/* World Cup & Betting */}
          <div>
            <h3 className="font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/worldcup/fifa-2026-group-stage" className="hover:text-blue-400 transition-colors">
                  FIFA 2026
                </a>
              </li>
              <li>
                <a href="/bet/555mix-betting-guide" className="hover:text-blue-400 transition-colors">
                  555mix Guide
                </a>
              </li>
              <li>
                <a href="/bet/ibet-betting-guide" className="hover:text-blue-400 transition-colors">
                  IBET Guide
                </a>
              </li>
              <li>
                <a href="/bet/football-betting-strategies" className="hover:text-blue-400 transition-colors">
                  Betting Strategies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div>
            <p>&copy; {currentYear} Goal24MM. All rights reserved.</p>
          </div>

          {/* Contact Info */}
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a
              href="https://t.me/Goal24MM"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Send size={16} />
              Telegram
            </a>
            <a
              href="mailto:info@goal24mm.com"
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </div>

        {/* SEO Meta Info */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-500">
          <p>
            Goal24MM is your premier source for football news, betting guides, and World Cup coverage. 
            We provide comprehensive information about Premier League, La Liga, Serie A, Bundesliga, and international football competitions.
          </p>
        </div>
      </div>
    </footer>
  );
}
