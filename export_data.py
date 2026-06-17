import json

# Current data from data.ts (manually extracted for migration)
teams = [
    {
        "slug": "arsenal-fc",
        "title": "Arsenal FC - Premier League Football Club",
        "description": "Arsenal Football Club news, stats, and latest updates. Follow the Gunners' performance in the Premier League and European competitions.",
        "keywords": ["Arsenal", "Arsenal FC", "Gunners", "Premier League", "football"],
        "content": "Arsenal Football Club is one of the most successful teams in English football history. Based in North London, Arsenal has won numerous Premier League titles and FA Cups. The club is known for its attractive playing style and development of young talent.",
        "founded": 1886,
        "stadium": "Emirates Stadium",
    },
    {
        "slug": "manchester-united",
        "title": "Manchester United - Premier League Football",
        "description": "Manchester United latest news, fixtures, and results. Stay updated with the Red Devils' performance and transfer news.",
        "keywords": ["Manchester United", "Man United", "Red Devils", "Premier League", "football"],
        "content": "Manchester United is one of the most successful football clubs in the world. With a rich history of success, Manchester United continues to compete at the highest level in the Premier League and European competitions.",
        "founded": 1878,
        "stadium": "Old Trafford",
    },
    {
        "slug": "liverpool-fc",
        "title": "Liverpool FC - Premier League Champions",
        "description": "Liverpool Football Club news and updates. Follow the Reds' journey in the Premier League and Champions League.",
        "keywords": ["Liverpool", "Liverpool FC", "Reds", "Premier League", "Champions League"],
        "content": "Liverpool Football Club has established itself as one of the dominant forces in English and European football. Known for their passionate fanbase and attacking football, Liverpool continues to challenge for major titles.",
        "founded": 1892,
        "stadium": "Anfield",
    },
    {
        "slug": "manchester-city",
        "title": "Manchester City - Premier League Leaders",
        "description": "Manchester City latest news and updates. Track the Citizens' performance in the Premier League and international competitions.",
        "keywords": ["Manchester City", "Man City", "Citizens", "Premier League", "football"],
        "content": "Manchester City has emerged as the dominant force in English football in recent years. With world-class players and tactical excellence, City continues to set new standards in the Premier League.",
        "founded": 1880,
        "stadium": "Etihad Stadium",
    },
    {
        "slug": "chelsea-fc",
        "title": "Chelsea FC - Premier League Football Club",
        "description": "Chelsea Football Club news and updates. Follow the Blues' performance in the Premier League and European competitions.",
        "keywords": ["Chelsea", "Chelsea FC", "Blues", "Premier League", "football"],
        "content": "Chelsea Football Club is a major force in English and European football. Based in West London, Chelsea has won multiple Premier League titles and European trophies.",
        "founded": 1905,
        "stadium": "Stamford Bridge",
    },
]

leagues = [
    {
        "slug": "premier-league",
        "title": "Premier League - English Football",
        "description": "Premier League news, standings, and fixtures. Follow the top division of English football with live updates and analysis.",
        "keywords": ["Premier League", "English football", "EPL", "standings", "fixtures"],
        "content": "The Premier League is the top tier of English football and one of the most watched football leagues in the world. It features the best clubs and players competing for the championship title each season.",
        "country": "England",
    },
    {
        "slug": "la-liga",
        "title": "La Liga - Spanish Football",
        "description": "La Liga news and updates. Stay informed about Spain's top football division with latest standings and match results.",
        "keywords": ["La Liga", "Spanish football", "Real Madrid", "Barcelona", "football"],
        "content": "La Liga is the top professional football league in Spain. It is home to some of the world's best clubs and players, including Real Madrid and Barcelona.",
        "country": "Spain",
    },
]

# Generate SQL Insert statements
with open('seed_data.sql', 'w') as f:
    f.write("-- Seed Teams\n")
    for t in teams:
        keywords_sql = "ARRAY['" + "','".join(t['keywords']) + "']"
        f.write(f"INSERT INTO teams (slug, title, description, keywords, content, founded, stadium) VALUES ('{t['slug']}', '{t['title']}', '{t['description']}', {keywords_sql}, '{t['content']}', {t['founded']}, '{t['stadium']}');\n")
    
    f.write("\n-- Seed Leagues\n")
    for l in leagues:
        keywords_sql = "ARRAY['" + "','".join(l['keywords']) + "']"
        f.write(f"INSERT INTO leagues (slug, title, description, keywords, content, country) VALUES ('{l['slug']}', '{l['title']}', '{l['description']}', {keywords_sql}, '{l['content']}', '{l['country']}');\n")

print("seed_data.sql generated successfully.")
