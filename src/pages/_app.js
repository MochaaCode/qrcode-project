import { CartProvider } from "../context/CartContext";
import Layout from "../components/Layout";
import "../styles/globals.css"; // Asumsikan kamu punya file ini untuk Tailwind CSS

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;
