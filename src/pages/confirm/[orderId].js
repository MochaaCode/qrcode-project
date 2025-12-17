import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../../../lib/supabase"; // Import supabase, bukan db

export default function ConfirmPage() {
  const router = useRouter();
  const { orderId } = router.query;
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    if (orderId) {
      setLoading(true);
      try {
        // Simpan status ke tabel payments di Supabase
        const { error } = await supabase.from("payments").upsert({
          order_id: orderId,
          status: "PAID",
          confirmed_at: new Date(),
        });

        if (error) throw error;

        setConfirmed(true);
      } catch (error) {
        console.error("Gagal konfirmasi:", error.message);
        alert("Terjadi kesalahan saat konfirmasi.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="p-6 bg-white min-h-full shadow-md sm:rounded-lg text-center">
      {confirmed ? (
        <div>
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
            Anda bisa menutup tab ini dan kembali ke halaman utama.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-4">Konfirmasi Pembayaran?</h2>
          <p className="text-gray-700 mb-6">
            Pesanan ID:{" "}
            <span className="font-mono bg-gray-100 p-1 rounded">{orderId}</span>
          </p>
          <button
            onClick={handleConfirm}
            disabled={loading}
            className={`w-full px-4 py-3 text-white rounded-lg font-bold text-lg transition-colors ${
              loading ? "bg-gray-400" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {loading ? "Memproses..." : "Ya, Konfirmasi Pembayaran"}
          </button>
        </div>
      )}
    </div>
  );
}
