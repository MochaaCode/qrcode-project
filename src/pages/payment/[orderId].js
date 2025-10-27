import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { QRCodeSVG } from "qrcode.react";

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

  useEffect(() => {
    if (!orderId) return;
    const paymentStatusKey = `payment_status_${orderId}`;
    const intervalId = setInterval(() => {
      const status = localStorage.getItem(paymentStatusKey);
      if (status === "PAID") {
        clearInterval(intervalId);
        localStorage.removeItem(paymentStatusKey);
        router.push(`/success/${orderId}`);
      }
    }, 2000);
    return () => clearInterval(intervalId);
  }, [orderId, router]);

  if (!orderId) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="p-6 bg-white min-h-full shadow-md sm:rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-2">Pindai untuk Membayar</h2>
      <p className="text-gray-600 mb-6">
        Pesanan ID:{" "}
        <span className="font-mono bg-gray-100 p-1 rounded">{orderId}</span>
      </p>

      {/* QR Code dengan border brand */}
      <div className="p-4 bg-white border-4 border-indigo-600 rounded-2xl inline-block shadow-lg">
        {qrUrl ? (
          <QRCodeSVG value={qrUrl} size={240} /> // Sedikit lebih kecil
        ) : (
          <div className="w-60 h-60 bg-gray-200 animate-pulse rounded-lg" />
        )}
      </div>

      <div className="mt-6 p-4 bg-gray-100 text-gray-700 rounded-lg">
        <p className="font-semibold">Simulasi Prototipe:</p>
        <p className="text-sm">
          Pindai QR code, atau buka URL ini di tab baru untuk konfirmasi:
        </p>
        <a
          href={qrUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono break-all underline text-indigo-600"
        >
          {qrUrl}
        </a>
      </div>
    </div>
  );
}
