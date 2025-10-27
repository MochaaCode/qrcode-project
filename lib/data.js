// --- DATA PRODUK TERPUSAT ---
// Kita ekspor 'allProducts' agar bisa diimpor di file lain
export const allProducts = [
  // Kategori: Minuman
  {
    id: 1,
    name: "Kopi Robusta 200g",
    price: 75000,
    image: "https://placehold.co/150x150/A98467/FFFFFF?text=Kopi",
    category: "Minuman",
  },
  {
    id: 2,
    name: "Kopi Arabika 200g",
    price: 85000,
    image: "https://placehold.co/150x150/ADC178/FFFFFF?text=Kopi",
    category: "Minuman",
  },
  {
    id: 10,
    name: "Teh Melati Celup",
    price: 25000,
    image: "https://placehold.co/150x150/A98467/FFFFFF?text=Teh",
    category: "Minuman",
  },
  {
    id: 11,
    name: "Susu UHT Full Cream 1L",
    price: 18000,
    image: "https://placehold.co/150x150/F0EFEB/333333?text=Susu",
    category: "Minuman",
  },
  {
    id: 12,
    name: "Jus Jambu Biji 1L",
    price: 22000,
    image: "https://placehold.co/150x150/FFC0CB/333333?text=Jus",
    category: "Minuman",
  },
  {
    id: 13,
    name: "Air Mineral 1.5L",
    price: 6000,
    image: "https://placehold.co/150x150/D6EFFF/333333?text=Air",
    category: "Minuman",
  },

  // Kategori: Sembako
  {
    id: 4,
    name: "Beras 5kg",
    price: 68000,
    image: "https://placehold.co/150x150/F2E8CF/333333?text=Beras",
    category: "Sembako",
  },
  {
    id: 5,
    name: "Minyak Goreng 2L",
    price: 34000,
    image: "https://placehold.co/150x150/F2E8CF/333333?text=Minyak",
    category: "Sembako",
  },
  {
    id: 6,
    name: "Gula Pasir 1kg",
    price: 17000,
    image: "https://placehold.co/150x150/F2E8CF/333333?text=Gula",
    category: "Sembako",
  },
  {
    id: 14,
    name: "Tepung Terigu 1kg",
    price: 13000,
    image: "https://placehold.co/150x150/F2E8CF/333333?text=Tepung",
    category: "Sembako",
  },
  {
    id: 15,
    name: "Telur Ayam 1kg",
    price: 28000,
    image: "https://placehold.co/150x150/F2E8CF/333333?text=Telur",
    category: "Sembako",
  },
  {
    id: 16,
    name: "Mie Instan (5 pcs)",
    price: 14500,
    image: "https://placehold.co/150x150/F2E8CF/333333?text=Mie",
    category: "Sembako",
  },

  // Kategori: Buah & Sayur
  {
    id: 8,
    name: "Apel Fuji 1kg",
    price: 35000,
    image: "https://placehold.co/150x150/FF8787/FFFFFF?text=Apel",
    category: "Buah & Sayur",
  },
  {
    id: 9,
    name: "Jeruk Sunkist 1kg",
    price: 30000,
    image: "https://placehold.co/150x150/FFD966/FFFFFF?text=Jeruk",
    category: "Buah & Sayur",
  },
  {
    id: 17,
    name: "Pisang Cavendish 1 sisir",
    price: 24000,
    image: "https://placehold.co/150x150/FFF5B0/333333?text=Pisang",
    category: "Buah & Sayur",
  },
  {
    id: 18,
    name: "Bayam 1 ikat",
    price: 5000,
    image: "https://placehold.co/150x150/90EE90/333333?text=Bayam",
    category: "Buah & Sayur",
  },
  {
    id: 19,
    name: "Wortel 500g",
    price: 8000,
    image: "https://placehold.co/150x150/FFA500/333333?text=Wortel",
    category: "Buah & Sayur",
  },
  {
    id: 20,
    name: "Tomat 500g",
    price: 7000,
    image: "https://placehold.co/150x150/FF6347/333333?text=Tomat",
    category: "Buah & Sayur",
  },

  // Kategori: Perlengkapan
  {
    id: 3,
    name: "Gelas Keramik",
    price: 45000,
    image: "https://placehold.co/150x150/DDE5B6/333333?text=Gelas",
    category: "Perlengkapan",
  },
  {
    id: 7,
    name: "Spons Cuci Piring",
    price: 5000,
    image: "https://placehold.co/150x150/DDE5B6/333333?text=Spons",
    category: "Perlengkapan",
  },
  {
    id: 21,
    name: "Sabun Cuci Piring 800ml",
    price: 13000,
    image: "https://placehold.co/150x150/DDE5B6/333333?text=Sabun",
    category: "Perlengkapan",
  },
  {
    id: 22,
    name: "Tisu Dapur (Kitchen Towel)",
    price: 19000,
    image: "https://placehold.co/150x150/DDE5B6/333333?text=Tisu",
    category: "Perlengkapan",
  },
  {
    id: 23,
    name: "Deterjen Bubuk 1.8kg",
    price: 42000,
    image: "https://placehold.co/150x150/DDE5B6/333333?text=Deterjen",
    category: "Perlengkapan",
  },
  {
    id: 24,
    name: "Pewangi Pakaian 1L",
    price: 23000,
    image: "https://placehold.co/150x150/DDE5B6/333333?text=Pewangi",
    category: "Perlengkapan",
  },

  // Kategori: Kebutuhan Ibu & Bayi (Kategori Baru)
  {
    id: 25,
    name: "Popok Bayi M (34 pcs)",
    price: 78000,
    image: "https://placehold.co/150x150/B0E0E6/333333?text=Popok",
    category: "Ibu & Bayi",
  },
  {
    id: 26,
    name: "Bubur Bayi 6+ 120g",
    price: 15000,
    image: "https://placehold.co/150x150/B0E0E6/333333?text=Bubur",
    category: "Ibu & Bayi",
  },
  {
    id: 27,
    name: "Minyak Telon 150ml",
    price: 35000,
    image: "https://placehold.co/150x150/B0E0E6/333333?text=Telon",
    category: "Ibu & Bayi",
  },
  {
    id: 28,
    name: "Tisu Basah Bayi (50 pcs)",
    price: 16000,
    image: "https://placehold.co/150x150/B0E0E6/333333?text=Tisu",
    category: "Ibu & Bayi",
  },
  {
    id: 29,
    name: "Susu Ibu Hamil 400g",
    price: 82000,
    image: "https://placehold.co/150x150/B0E0E6/333333?text=Susu",
    category: "Ibu & Bayi",
  },
  {
    id: 30,
    name: "Botol Susu Bayi",
    price: 65000,
    image: "https://placehold.co/150x150/B0E0E6/333333?text=Botol",
    category: "Ibu & Bayi",
  },
];

// Kita juga ekspor 'categories' agar logikanya terpusat di sini
export const categories = [
  "Semua",
  ...new Set(allProducts.map((p) => p.category)),
];
