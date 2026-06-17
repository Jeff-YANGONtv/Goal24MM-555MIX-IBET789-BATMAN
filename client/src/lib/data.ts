import { supabase } from './supabase';

/**
 * Data Layer for Goal24MM
 * Now fetching data from Supabase
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

// Helper functions for fetching from Supabase
export async function getTeams(): Promise<Team[]> {
  const { data, error } = await supabase.from('teams').select('*');
  if (error) {
    console.error('Error fetching teams:', error);
    return [];
  }
  return data.map(item => ({
    ...item,
    imageUrl: item.image_url
  }));
}

export async function getLeagues(): Promise<League[]> {
  const { data, error } = await supabase.from('leagues').select('*');
  if (error) {
    console.error('Error fetching leagues:', error);
    return [];
  }
  return data.map(item => ({
    ...item,
    imageUrl: item.image_url
  }));
}

export async function getWorldCupStages(): Promise<WorldCupStage[]> {
  const { data, error } = await supabase.from('worldcup_stages').select('*');
  if (error) {
    console.error('Error fetching worldcup_stages:', error);
    return [];
  }
  return data.map(item => ({
    ...item,
    imageUrl: item.image_url
  }));
}

export async function getBettingPages(): Promise<BettingPage[]> {
  const { data, error } = await supabase.from('betting_pages').select('*');
  if (error) {
    console.error('Error fetching betting_pages:', error);
    return [];
  }
  return data.map(item => ({
    ...item,
    imageUrl: item.image_url
  }));
}

export async function getMatches(): Promise<Match[]> {
  const { data, error } = await supabase.from('matches').select('*');
  if (error) {
    console.error('Error fetching matches:', error);
    return [];
  }
  return data.map(item => ({
    ...item,
    imageUrl: item.image_url
  }));
}

// Fetch single items by slug
export async function getTeamBySlug(slug: string): Promise<Team | undefined> {
  const { data, error } = await supabase.from('teams').select('*').eq('slug', slug).single();
  if (error) return undefined;
  return { ...data, imageUrl: data.image_url };
}

export async function getLeagueBySlug(slug: string): Promise<League | undefined> {
  const { data, error } = await supabase.from('leagues').select('*').eq('slug', slug).single();
  if (error) return undefined;
  return { ...data, imageUrl: data.image_url };
}

export async function getWorldCupStageBySlug(slug: string): Promise<WorldCupStage | undefined> {
  const { data, error } = await supabase.from('worldcup_stages').select('*').eq('slug', slug).single();
  if (error) return undefined;
  return { ...data, imageUrl: data.image_url };
}

export async function getBettingPageBySlug(slug: string): Promise<BettingPage | undefined> {
  const { data, error } = await supabase.from('betting_pages').select('*').eq('slug', slug).single();
  if (error) return undefined;
  return { ...data, imageUrl: data.image_url };
}

export async function getMatchBySlug(slug: string): Promise<Match | undefined> {
  const { data, error } = await supabase.from('matches').select('*').eq('slug', slug).single();
  if (error) return undefined;
  return { ...data, imageUrl: data.image_url };
}
