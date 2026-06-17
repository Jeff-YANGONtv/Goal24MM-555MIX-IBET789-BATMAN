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
