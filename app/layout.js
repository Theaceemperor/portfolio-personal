import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "./components/reuseable";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Pro",
  description: "Powered by spades, a simple portfolio website with a touch of personality to elevate you and outline your best works.",
  icons: '/SPADES.ICO'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<ScrollToTop /></body>
    </html>
  );
}
