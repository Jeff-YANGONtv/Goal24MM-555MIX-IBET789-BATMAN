-- Enable RLS
-- Teams Table
CREATE TABLE teams (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  keywords TEXT[],
  content TEXT,
  image_url TEXT,
  founded INTEGER,
  stadium TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leagues Table
CREATE TABLE leagues (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  keywords TEXT[],
  content TEXT,
  image_url TEXT,
  country TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- World Cup Stages Table
CREATE TABLE worldcup_stages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  keywords TEXT[],
  content TEXT,
  image_url TEXT,
  year INTEGER,
  stage TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Betting Pages Table
CREATE TABLE betting_pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  keywords TEXT[],
  content TEXT,
  image_url TEXT,
  platform TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Matches Table
CREATE TABLE matches (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  keywords TEXT[],
  content TEXT,
  image_url TEXT,
  date DATE,
  teams TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE leagues ENABLE ROW LEVEL SECURITY;
ALTER TABLE worldcup_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE betting_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;

-- Create Policies (Allow public read access)
CREATE POLICY "Public Read Access" ON teams FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON leagues FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON worldcup_stages FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON betting_pages FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON matches FOR SELECT USING (true);

-- Create Admin Policies (Authenticated users can perform all actions)
-- Note: You should configure specific admin roles if needed
CREATE POLICY "Admin All Access" ON teams FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin All Access" ON leagues FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin All Access" ON worldcup_stages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin All Access" ON betting_pages FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin All Access" ON matches FOR ALL USING (auth.role() = 'authenticated');
