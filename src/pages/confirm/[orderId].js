import { useState } from "react";
import { useRouter } from "next/router";

export default function ConfirmPage() {
  const router = useRouter();
  const { orderId } = router.query;
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    if (orderId) {
      localStorage.setItem(`payment_status_${orderId}`, "PAID");
      setConfirmed(true);
    }
  };

  return (
    <div className="p-6 bg-white min-h-full shadow-md sm:rounded-lg text-center">
      {confirmed ? (
        <div>
          {/* Tampilan setelah konfirmasi */}
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
          <h2 className="text-2xl font-bold mb-2 text-green-700">
            Konfirmasi Terkirim!
          </h2>
          <p className="text-gray-700">
            Anda bisa menutup tab ini dan kembali ke halaman pembayaran.
          </p>
        </div>
      ) : (
        <div>
          {/* Tampilan sebelum konfirmasi */}
          <h2 className="text-2xl font-bold mb-4">Konfirmasi Pembayaran?</h2>
          <p className="text-gray-700 mb-6">
            Pesanan ID:{" "}
            <span className="font-mono bg-gray-100 p-1 rounded">{orderId}</span>
          </p>
          <div className="p-4 bg-white rounded-lg">
            <button
              onClick={handleConfirm}
              className="w-full px-4 py-3 bg-green-500 text-white rounded-lg font-bold text-lg hover:bg-green-600 transition-colors"
            >
              Ya, Konfirmasi Pembayaran
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
