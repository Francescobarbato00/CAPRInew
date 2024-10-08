import { createClient } from '@supabase/supabase-js';

// Estrai le variabili d'ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Crea il client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
