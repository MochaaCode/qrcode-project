import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCart } from "../context/CartContext";
import { db } from "../../lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function HomePage() {
  const { cart, addToCart } = useCart();
  const router = useRouter();

  const [allProducts, setAllProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Semua");

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAllProducts(productsData);

      // Ambil kategori dari data produk
      const uniqueCategories = [
        "Semua",
        ...new Set(productsData.map((p) => p.category)),
      ];
      setCategories(uniqueCategories);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const filteredProducts = allProducts
    .filter((product) => {
      if (activeCategory === "Semua") return true;
      return product.category === activeCategory;
    })
    .filter((product) => {
      return product.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Tampilkan loading state
  if (loading) {
    return <div className="text-center p-10">Loading produk...</div>;
  }

  return (
    // Beri bg-white, shadow, dan padding bottom untuk sticky bar
    <div className="bg-white min-h-full shadow-md sm:rounded-lg pb-24 relative">
      {/* --- Search Bar Baru --- */}
      <div className="p-4">
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="search"
            placeholder="Cari produk di Toko Kita..."
            className="w-full px-4 py-2.5 pl-10 border-gray-200 border rounded-full bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
        </div>
      </div>

      {/* --- Kategori Pills Baru --- */}
      <div className="mb-4">
        <div className="flex overflow-x-auto space-x-2 pb-2 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 rounded-full font-medium whitespace-nowrap text-sm transition-colors
                ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* --- Product Grid Baru --- */}
      <div className="grid grid-cols-2 gap-4 px-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow hover:shadow-md"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 object-cover"
              />
              <div className="p-3 flex flex-col grow">
                <h3 className="font-semibold text-sm mb-1 grow">
                  {product.name}
                </h3>
                <p className="font-medium text-indigo-600 mb-2">
                  Rp {product.price.toLocaleString("id-ID")}
                </p>
                {/* --- Tombol Outline Baru --- */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full mt-auto px-3 py-1.5 bg-white border border-indigo-600 text-indigo-600 rounded-lg font-semibold text-sm hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  + Tambah
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-2 text-center text-gray-500 mt-8">
            Produk tidak ditemukan.
          </p>
        )}
      </div>

      {/* Hapus tombol "Lihat Keranjang" yang lama */}

      {/* --- Sticky Cart Bar BARU --- */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto p-4 bg-white border-t border-gray-200 shadow-[0_-2px_5px_rgba(0,0,0,0.05)]">
          <button
            onClick={() => router.push("/checkout")}
            className="w-full px-4 py-3 bg-green-600 text-white rounded-lg font-bold text-lg hover:bg-green-700 transition-colors flex justify-between items-center"
          >
            <span>Keranjang</span>
            <span>{totalItems} Item</span>
          </button>
        </div>
      )}
    </div>
  );
}
