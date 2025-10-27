import { useRouter } from "next/router";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart, total } = useCart();
  const router = useRouter();

  const handleCheckout = () => {
    const orderId = `order-${Date.now()}`;
    router.push(`/payment/${orderId}`);
  };

  return (
    <div className="p-6 bg-white min-h-full shadow-md sm:rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-900">
        Detail Belanjaan
      </h2>

      {/* Daftar Item */}
      <div className="divide-y divide-gray-200 mb-4">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center py-4"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">x{item.quantity}</p>
              </div>
              <span className="font-medium text-gray-800">
                Rp {(item.price * item.quantity).toLocaleString("id-ID")}
              </span>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">
            Keranjang masih kosong.
          </p>
        )}
      </div>

      {/* Total */}
      <div className="bg-gray-100 rounded-lg p-4 mt-6">
        <div className="flex justify-between items-center text-xl font-bold">
          <span>Total:</span>
          <span>Rp {total.toLocaleString("id-ID")}</span>
        </div>
      </div>

      {/* Tombol Aksi */}
      <button
        onClick={handleCheckout}
        disabled={cart.length === 0}
        className="w-full mt-6 px-4 py-3 bg-indigo-600 text-white rounded-lg font-bold text-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-400"
      >
        Konfirmasi & Bayar
      </button>
      <Link
        href="/"
        className="block w-full mt-3 text-center text-indigo-600 font-medium hover:text-indigo-800"
      >
        &larr; Lanjut belanja
      </Link>
    </div>
  );
}
