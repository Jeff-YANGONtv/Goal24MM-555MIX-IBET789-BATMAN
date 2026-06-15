/**
 * Data Layer for Goal24MM
 * Contains all structured data for teams, leagues, worldcup stages, and betting pages
 * Each item includes slug, title, description, keywords for SEO
 */

export interface Team {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  imageUrl?: string;
  founded?: number;
  stadium?: string;
}

export interface League {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  imageUrl?: string;
  country?: string;
}

export interface WorldCupStage {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  imageUrl?: string;
  year?: number;
  stage?: string;
}

export interface BettingPage {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  imageUrl?: string;
  platform?: string;
}

export interface Match {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  content: string;
  imageUrl?: string;
  date?: string;
  teams?: string[];
}

// Teams Data
export const teams: Team[] = [
  {
    slug: "arsenal-fc",
    title: "Arsenal FC - Premier League Football Club",
    description: "Arsenal Football Club news, stats, and latest updates. Follow the Gunners' performance in the Premier League and European competitions.",
    keywords: ["Arsenal", "Arsenal FC", "Gunners", "Premier League", "football"],
    content: "Arsenal Football Club is one of the most successful teams in English football history. Based in North London, Arsenal has won numerous Premier League titles and FA Cups. The club is known for its attractive playing style and development of young talent.",
    founded: 1886,
    stadium: "Emirates Stadium",
  },
  {
    slug: "manchester-united",
    title: "Manchester United - Premier League Football",
    description: "Manchester United latest news, fixtures, and results. Stay updated with the Red Devils' performance and transfer news.",
    keywords: ["Manchester United", "Man United", "Red Devils", "Premier League", "football"],
    content: "Manchester United is one of the most successful football clubs in the world. With a rich history of success, Manchester United continues to compete at the highest level in the Premier League and European competitions.",
    founded: 1878,
    stadium: "Old Trafford",
  },
  {
    slug: "liverpool-fc",
    title: "Liverpool FC - Premier League Champions",
    description: "Liverpool Football Club news and updates. Follow the Reds' journey in the Premier League and Champions League.",
    keywords: ["Liverpool", "Liverpool FC", "Reds", "Premier League", "Champions League"],
    content: "Liverpool Football Club has established itself as one of the dominant forces in English and European football. Known for their passionate fanbase and attacking football, Liverpool continues to challenge for major titles.",
    founded: 1892,
    stadium: "Anfield",
  },
  {
    slug: "manchester-city",
    title: "Manchester City - Premier League Leaders",
    description: "Manchester City latest news and updates. Track the Citizens' performance in the Premier League and international competitions.",
    keywords: ["Manchester City", "Man City", "Citizens", "Premier League", "football"],
    content: "Manchester City has emerged as the dominant force in English football in recent years. With world-class players and tactical excellence, City continues to set new standards in the Premier League.",
    founded: 1880,
    stadium: "Etihad Stadium",
  },
  {
    slug: "chelsea-fc",
    title: "Chelsea FC - Premier League Football Club",
    description: "Chelsea Football Club news and updates. Follow the Blues' performance in the Premier League and European competitions.",
    keywords: ["Chelsea", "Chelsea FC", "Blues", "Premier League", "football"],
    content: "Chelsea Football Club is a major force in English and European football. Based in West London, Chelsea has won multiple Premier League titles and European trophies.",
    founded: 1905,
    stadium: "Stamford Bridge",
  },
];

// Leagues Data
export const leagues: League[] = [
  {
    slug: "premier-league",
    title: "Premier League - English Football",
    description: "Premier League news, standings, and fixtures. Follow the top division of English football with live updates and analysis.",
    keywords: ["Premier League", "English football", "EPL", "standings", "fixtures"],
    content: "The Premier League is the top tier of English football and one of the most watched football leagues in the world. It features the best clubs and players competing for the championship title each season.",
    country: "England",
  },
  {
    slug: "la-liga",
    title: "La Liga - Spanish Football",
    description: "La Liga news and updates. Stay informed about Spain's top football division with latest standings and match results.",
    keywords: ["La Liga", "Spanish football", "Real Madrid", "Barcelona", "football"],
    content: "La Liga is the top professional football league in Spain. It is home to some of the world's best clubs and players, including Real Madrid and Barcelona.",
    country: "Spain",
  },
  {
    slug: "serie-a",
    title: "Serie A - Italian Football",
    description: "Serie A latest news and fixtures. Follow Italy's top football division with comprehensive coverage and analysis.",
    keywords: ["Serie A", "Italian football", "Juventus", "Milan", "football"],
    content: "Serie A is the top professional football league in Italy. Known for its defensive excellence and tactical sophistication, Serie A features some of Europe's biggest clubs.",
    country: "Italy",
  },
  {
    slug: "bundesliga",
    title: "Bundesliga - German Football",
    description: "Bundesliga news and updates. Track Germany's top football division with live standings and match coverage.",
    keywords: ["Bundesliga", "German football", "Bayern Munich", "football"],
    content: "The Bundesliga is the top tier of German football. It is known for its exciting attacking football and passionate fan culture.",
    country: "Germany",
  },
];

// World Cup Stages Data
export const worldcupStages: WorldCupStage[] = [
  {
    slug: "fifa-2026-group-stage",
    title: "FIFA 2026 Group Stage - World Cup",
    description: "FIFA 2026 World Cup Group Stage news and analysis. Follow all group matches and team performances in the tournament.",
    keywords: ["FIFA 2026", "World Cup", "Group Stage", "football"],
    content: "The FIFA 2026 World Cup Group Stage will feature 32 teams divided into 8 groups. Each team plays 3 matches in the group stage, with the top 2 teams advancing to the knockout rounds.",
    year: 2026,
    stage: "Group Stage",
  },
  {
    slug: "fifa-2026-quarter-finals",
    title: "FIFA 2026 Quarter Finals - World Cup",
    description: "FIFA 2026 World Cup Quarter Finals coverage. Get live updates and analysis of the knockout stage matches.",
    keywords: ["FIFA 2026", "World Cup", "Quarter Finals", "knockout"],
    content: "The Quarter Finals of the FIFA 2026 World Cup will feature the 8 teams that advance from the group stage. These matches will determine which teams progress to the semi-finals.",
    year: 2026,
    stage: "Quarter Finals",
  },
  {
    slug: "fifa-2026-semi-finals",
    title: "FIFA 2026 Semi Finals - World Cup",
    description: "FIFA 2026 World Cup Semi Finals news and updates. Follow the semi-final matches and team performances.",
    keywords: ["FIFA 2026", "World Cup", "Semi Finals", "football"],
    content: "The Semi Finals of the FIFA 2026 World Cup will feature the 4 teams that advance from the quarter-finals. The winners will advance to the final.",
    year: 2026,
    stage: "Semi Finals",
  },
  {
    slug: "fifa-2026-final",
    title: "FIFA 2026 Final - World Cup Championship",
    description: "FIFA 2026 World Cup Final coverage. Get all the latest news and analysis about the championship match.",
    keywords: ["FIFA 2026", "World Cup", "Final", "Championship"],
    content: "The FIFA 2026 World Cup Final will be the ultimate championship match between the two best teams in the tournament. This is the most watched football match in the world.",
    year: 2026,
    stage: "Final",
  },
];

// Betting Pages Data
export const bettingPages: BettingPage[] = [
  {
    slug: "555mix-betting-guide",
    title: "555mix Betting Guide - Football Betting Tips",
    description: "Complete guide to 555mix betting platform. Learn how to place bets on football matches and maximize your winnings.",
    keywords: ["555mix", "betting", "football betting", "betting guide"],
    content: "555mix is a popular online betting platform for football enthusiasts. This guide covers everything you need to know about placing bets, understanding odds, and making informed betting decisions.",
    platform: "555mix",
  },
  {
    slug: "ibet-betting-guide",
    title: "IBET Betting Guide - Online Football Betting",
    description: "IBET betting platform guide and tips. Discover how to bet on football matches with IBET and increase your chances of winning.",
    keywords: ["IBET", "betting", "football betting", "online betting"],
    content: "IBET is a leading online betting platform offering competitive odds on football matches worldwide. Learn about their features, betting options, and how to get started with IBET.",
    platform: "IBET",
  },
  {
    slug: "football-betting-strategies",
    title: "Football Betting Strategies - Win More Bets",
    description: "Proven football betting strategies to improve your success rate. Learn expert tips and techniques for profitable betting.",
    keywords: ["betting strategies", "football betting", "winning bets", "betting tips"],
    content: "Discover effective football betting strategies used by professional bettors. From bankroll management to analyzing odds, these strategies will help you make better betting decisions.",
    platform: "General",
  },
];

// Matches Data
export const matches: Match[] = [
  {
    slug: "arsenal-vs-manchester-united",
    title: "Arsenal vs Manchester United - Premier League",
    description: "Arsenal vs Manchester United match preview and analysis. Get predictions and betting tips for this classic rivalry.",
    keywords: ["Arsenal", "Manchester United", "Premier League", "match preview"],
    content: "The Arsenal vs Manchester United match is one of the most anticipated fixtures in the Premier League. Both teams will be looking to secure three points in this classic encounter.",
    date: "2026-02-15",
    teams: ["Arsenal", "Manchester United"],
  },
  {
    slug: "liverpool-vs-manchester-city",
    title: "Liverpool vs Manchester City - Premier League",
    description: "Liverpool vs Manchester City match coverage. Follow the latest updates and analysis of this top-of-the-table clash.",
    keywords: ["Liverpool", "Manchester City", "Premier League", "match"],
    content: "Liverpool faces Manchester City in a crucial Premier League match. Both teams are competing for the title, making this an essential fixture.",
    date: "2026-02-22",
    teams: ["Liverpool", "Manchester City"],
  },
];

// Helper functions for SEO
export function getTeamBySlug(slug: string): Team | undefined {
  return teams.find((team) => team.slug === slug);
}

export function getLeagueBySlug(slug: string): League | undefined {
  return leagues.find((league) => league.slug === slug);
}

export function getWorldCupStageBySlug(slug: string): WorldCupStage | undefined {
  return worldcupStages.find((stage) => stage.slug === slug);
}

export function getBettingPageBySlug(slug: string): BettingPage | undefined {
  return bettingPages.find((page) => page.slug === slug);
}

export function getMatchBySlug(slug: string): Match | undefined {
  return matches.find((match) => match.slug === slug);
}

// Generate all slugs for static generation
export function getAllTeamSlugs(): string[] {
  return teams.map((team) => team.slug);
}

export function getAllLeagueSlugs(): string[] {
  return leagues.map((league) => league.slug);
}

export function getAllWorldCupSlugs(): string[] {
  return worldcupStages.map((stage) => stage.slug);
}

export function getAllBettingSlugs(): string[] {
  return bettingPages.map((page) => page.slug);
}

export function getAllMatchSlugs(): string[] {
  return matches.map((match) => match.slug);
}
