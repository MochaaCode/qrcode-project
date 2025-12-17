import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Tambahkan pengecekan agar tidak error saat build jika env belum ada
if (!supabaseUrl || !supabaseKey) {
  console.warn(
    "Kredensial Supabase tidak ditemukan. Pastikan ENV sudah diset."
  );
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseKey || "placeholder"
);
