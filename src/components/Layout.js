import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Layout({ children }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    // Wrapper utama untuk layout vertikal dan min-height
    <div className="min-h-screen flex flex-col font-sans">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-200">
        {/* Kontainer header dibatasi max-w-md */}
        <nav className="max-w-md mx-auto p-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-xl font-bold text-indigo-600 cursor-pointer"
          >
            Toko Kita
          </Link>
          <Link href="/checkout" className="relative cursor-pointer">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </nav>
      </header>

      {/* KONTEN UTAMA */}
      {/* 'flex-grow' membuat main content mengisi ruang, mendorong footer ke bawah */}
      <main className="grow w-full max-w-md mx-auto">
        {/* Halaman (children) akan mengontrol background-nya sendiri (mis: bg-white) */}
        {children}
      </main>

      {/* FOOTER */}
      <footer className="w-full max-w-md mx-auto text-center p-4 mt-8 text-gray-500 text-sm">
        Prototipe Next.js &copy; 2024
      </footer>
    </div>
  );
}
