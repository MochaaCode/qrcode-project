const { createClient } = require("@supabase/supabase-js");
const { allProducts } = require("../lib/data.js");
require("dotenv").config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function seedDatabase() {
  console.log("Memulai seeding ke Supabase...");
  const { error } = await supabase.from("products").insert(allProducts);

  if (error) console.error("Gagal:", error);
  else console.log("Berhasil migrasi data ke Supabase!");
}

seedDatabase();
