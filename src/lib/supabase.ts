import { createClient } from '@supabase/supabase-js';

// Menggunakan fallback string kosong agar tidak error saat build jika env var belum terbaca.
// Catatan: Jika build sukses tapi login error 'placeholder', pastikan Env Var sudah diisi di Cloudflare.
// Trigger build ulang setelah user menambahkan Env Var di dashboard Cloudflare.
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
