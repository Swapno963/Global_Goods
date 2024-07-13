import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import dbConnect from "@/service/mongo";
import { Inter } from "next/font/google";
import "./globals.css";
import CartProvider from "./providers/CartProvider";
import WishListProvider from "./providers/WishListProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Global Goods",
  description: "Buy what your want -",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <WishListProvider>
            <Navbar />
            {children}
          </WishListProvider>
        </CartProvider>
        <Footer />
      </body>
    </html>
  );
}
