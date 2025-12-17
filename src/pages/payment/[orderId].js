import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { QRCodeSVG } from "qrcode.react";
import { supabase } from "../../../lib/supabase"; // Import supabase

export default function PaymentPage() {
  const router = useRouter();
  const { orderId } = router.query;
  const [qrUrl, setQrUrl] = useState("");

  useEffect(() => {
    if (orderId) {
      const url = `${window.location.origin}/confirm/${orderId}`;
      setQrUrl(url);
    }
  }, [orderId]);

  // Supabase Realtime Listener
  useEffect(() => {
    if (!orderId) return;

    // 1. Buat channel untuk mendengarkan perubahan data di tabel 'payments'
    const channel = supabase
      .channel(`payment-${orderId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT", // Atau 'UPDATE' jika datanya sudah ada sebelumnya
          schema: "public",
          table: "payments",
          filter: `order_id=eq.${orderId}`,
        },
        (payload) => {
          if (payload.new.status === "PAID") {
            router.push(`/success/${orderId}`);
          }
        }
      )
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "payments",
          filter: `order_id=eq.${orderId}`,
        },
        (payload) => {
          if (payload.new.status === "PAID") {
            router.push(`/success/${orderId}`);
          }
        }
      )
      .subscribe();

    // Clean up subscription saat pindah halaman
    return () => {
      supabase.removeChannel(channel);
    };
  }, [orderId, router]);

  return (
    <div className="p-6 bg-white min-h-full shadow-md sm:rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-2">Pindai untuk Membayar</h2>
      <p className="text-gray-600 mb-6">
        Pesanan ID:{" "}
        <span className="font-mono bg-gray-100 p-1 rounded">{orderId}</span>
      </p>

      <div className="p-4 bg-white border-4 border-indigo-600 rounded-2xl inline-block shadow-lg">
        {qrUrl ? (
          <QRCodeSVG value={qrUrl} size={240} />
        ) : (
          <div className="w-60 h-60 bg-gray-200 animate-pulse rounded-lg" />
        )}
      </div>

      <div className="mt-6 p-4 bg-gray-100 text-gray-700 rounded-lg text-left">
        <p className="font-semibold text-center mb-2">Simulasi Prototipe:</p>
        <p className="text-sm mb-2 text-center">
          Tunggu halaman ini berpindah otomatis setelah konfirmasi.
        </p>
        <div className="border-t pt-2">
          <p className="text-xs text-gray-500 mb-1">Link Konfirmasi Manual:</p>
          <a
            href={qrUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-mono break-all underline text-indigo-600"
          >
            {qrUrl}
          </a>
        </div>
      </div>
    </div>
  );
}
