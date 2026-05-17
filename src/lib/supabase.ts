import { createClient } from '@supabase/supabase-js';

// Menggunakan fallback string kosong agar tidak error saat build jika env var belum terbaca,
// tapi Supabase butuh format URL yang valid jika diisi.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
