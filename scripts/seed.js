// Import fungsi yang kita butuhkan dari Firebase SDK
const { initializeApp } = require("firebase/app");
const { getFirestore, collection, doc, setDoc } = require("firebase/firestore");

// Import data produk lokal kita
const { allProducts } = require("../lib/data.js");

// Muat environment variables dari .env.local
require("dotenv").config({ path: ".env.local" });

// Konfigurasi Firebase dari environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Inisialisasi aplikasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Fungsi utama untuk mengunggah data
async function seedDatabase() {
  console.log("Memulai proses seeding...");

  try {
    const productsCollection = collection(db, "products");

    // Loop melalui setiap produk di allProducts
    for (const product of allProducts) {
      // Buat dokumen baru dengan ID dari produk
      const productRef = doc(productsCollection, String(product.id));

      // Hapus properti 'id' dari data yang akan diunggah, karena sudah jadi ID dokumen
      const { id, ...productData } = product;

      await setDoc(productRef, productData);
      console.log(`✅ Berhasil menambahkan produk: ${product.name}`);
    }

    console.log(
      "\n🚀 Seeding selesai! Semua produk berhasil diunggah ke Firestore."
    );
  } catch (error) {
    console.error("❌ Terjadi error saat seeding:", error);
  }
}

// Jalankan fungsi seeding
seedDatabase();
