import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NewsLatter from "@/components/NewsLatter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shop Center - Most trusted ecommerce",
  description: "Shop Center Most trusted ecommerce by people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <NewsLatter />
        <Footer />
      </body>
    </html>
  );
}
