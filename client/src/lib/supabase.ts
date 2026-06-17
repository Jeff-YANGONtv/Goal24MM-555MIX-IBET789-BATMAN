import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. CMS features will not work.');
}

// Provide fallback empty strings to avoid crash, but log error if missing
const effectiveUrl = supabaseUrl || 'https://placeholder-url.supabase.co';
const effectiveKey = supabaseAnonKey || 'placeholder-key';

export const supabase = createClient(effectiveUrl, effectiveKey);
