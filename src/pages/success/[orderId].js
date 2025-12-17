import { useRouter } from "next/router";
import Link from "next/link";

export default function SuccessPage() {
  const router = useRouter();
  const { orderId } = router.query;

  return (
    <div className="p-6 bg-white min-h-full shadow-md sm:rounded-lg text-center">
      <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg
          className="h-12 w-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h2 className="text-3xl font-bold mb-2 text-gray-800">
        Pembayaran Berhasil!
      </h2>
      <p className="text-gray-600 mb-8">
        Pesanan{" "}
        <span className="font-mono font-bold text-indigo-600">#{orderId}</span>{" "}
        telah kami terima.
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
      >
        Kembali Belanja
      </Link>
    </div>
  );
}
