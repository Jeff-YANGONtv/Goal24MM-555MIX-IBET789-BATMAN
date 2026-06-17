import { useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { Team, League, WorldCupStage, BettingPage, Match } from '@/lib/data';

export function useAdminTeams() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createTeam = useCallback(async (team: Omit<Team, 'slug'> & { slug: string }) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await supabase.from('teams').insert([{
        slug: team.slug,
        title: team.title,
        description: team.description,
        keywords: team.keywords,
        content: team.content,
        image_url: team.imageUrl,
        founded: team.founded,
        stadium: team.stadium,
      }]).select();
      if (err) throw err;
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create team';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateTeam = useCallback(async (id: string, team: Partial<Team>) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await supabase.from('teams').update({
        title: team.title,
        description: team.description,
        keywords: team.keywords,
        content: team.content,
        image_url: team.imageUrl,
        founded: team.founded,
        stadium: team.stadium,
      }).eq('id', id).select();
      if (err) throw err;
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update team';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteTeam = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error: err } = await supabase.from('teams').delete().eq('id', id);
      if (err) throw err;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete team';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createTeam, updateTeam, deleteTeam, loading, error };
}

export function useAdminLeagues() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createLeague = useCallback(async (league: Omit<League, 'slug'> & { slug: string }) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await supabase.from('leagues').insert([{
        slug: league.slug,
        title: league.title,
        description: league.description,
        keywords: league.keywords,
        content: league.content,
        image_url: league.imageUrl,
        country: league.country,
      }]).select();
      if (err) throw err;
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create league';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateLeague = useCallback(async (id: string, league: Partial<League>) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await supabase.from('leagues').update({
        title: league.title,
        description: league.description,
        keywords: league.keywords,
        content: league.content,
        image_url: league.imageUrl,
        country: league.country,
      }).eq('id', id).select();
      if (err) throw err;
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update league';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteLeague = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error: err } = await supabase.from('leagues').delete().eq('id', id);
      if (err) throw err;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete league';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createLeague, updateLeague, deleteLeague, loading, error };
}

export function useAdminWorldCupStages() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createWorldCupStage = useCallback(async (stage: Omit<WorldCupStage, 'slug'> & { slug: string }) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await supabase.from('worldcup_stages').insert([{
        slug: stage.slug,
        title: stage.title,
        description: stage.description,
        keywords: stage.keywords,
        content: stage.content,
        image_url: stage.imageUrl,
        year: stage.year,
        stage: stage.stage,
      }]).select();
      if (err) throw err;
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create World Cup stage';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateWorldCupStage = useCallback(async (id: string, stage: Partial<WorldCupStage>) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await supabase.from('worldcup_stages').update({
        title: stage.title,
        description: stage.description,
        keywords: stage.keywords,
        content: stage.content,
        image_url: stage.imageUrl,
        year: stage.year,
        stage: stage.stage,
      }).eq('id', id).select();
      if (err) throw err;
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update World Cup stage';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteWorldCupStage = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error: err } = await supabase.from('worldcup_stages').delete().eq('id', id);
      if (err) throw err;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete World Cup stage';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createWorldCupStage, updateWorldCupStage, deleteWorldCupStage, loading, error };
}

export function useAdminBettingPages() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createBettingPage = useCallback(async (page: Omit<BettingPage, 'slug'> & { slug: string }) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await supabase.from('betting_pages').insert([{
        slug: page.slug,
        title: page.title,
        description: page.description,
        keywords: page.keywords,
        content: page.content,
        image_url: page.imageUrl,
        platform: page.platform,
      }]).select();
      if (err) throw err;
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create betting page';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateBettingPage = useCallback(async (id: string, page: Partial<BettingPage>) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await supabase.from('betting_pages').update({
        title: page.title,
        description: page.description,
        keywords: page.keywords,
        content: page.content,
        image_url: page.imageUrl,
        platform: page.platform,
      }).eq('id', id).select();
      if (err) throw err;
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update betting page';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteBettingPage = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error: err } = await supabase.from('betting_pages').delete().eq('id', id);
      if (err) throw err;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete betting page';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createBettingPage, updateBettingPage, deleteBettingPage, loading, error };
}

export function useAdminMatches() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createMatch = useCallback(async (match: Omit<Match, 'slug'> & { slug: string }) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await supabase.from('matches').insert([{
        slug: match.slug,
        title: match.title,
        description: match.description,
        keywords: match.keywords,
        content: match.content,
        image_url: match.imageUrl,
        date: match.date,
        teams: match.teams,
      }]).select();
      if (err) throw err;
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to create match';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateMatch = useCallback(async (id: string, match: Partial<Match>) => {
    setLoading(true);
    setError(null);
    try {
      const { data, error: err } = await supabase.from('matches').update({
        title: match.title,
        description: match.description,
        keywords: match.keywords,
        content: match.content,
        image_url: match.imageUrl,
        date: match.date,
        teams: match.teams,
      }).eq('id', id).select();
      if (err) throw err;
      return data;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to update match';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteMatch = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      const { error: err } = await supabase.from('matches').delete().eq('id', id);
      if (err) throw err;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to delete match';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createMatch, updateMatch, deleteMatch, loading, error };
}
