import { useEffect } from "react";
import { useRouter } from "next/router";
import { useCart } from "../../context/CartContext";

export default function SuccessPage() {
  const router = useRouter();
  const { orderId } = router.query;
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="p-6 bg-white min-h-full shadow-md sm:rounded-lg text-center flex flex-col justify-center items-center">
      {/* Ikon baru dengan warna lebih soft */}
      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          className="h-12 w-12"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-2 text-green-700">
        Pembayaran Berhasil!
      </h2>
      <p className="text-gray-700 mb-8">
        Pesanan Anda{" "}
        <span className="font-mono bg-gray-100 p-1 rounded">{orderId}</span>{" "}
        telah dikonfirmasi.
      </p>
      
      <a
        href="/"
        className="block w-full px-4 py-3 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
}
