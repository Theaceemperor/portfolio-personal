import { Inter } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "./components/reuseable";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio Personal",
  description: "Powered by spades, a simple personal website with a touch of portfolio section to outline your best works.",
  icons: '/SPADES.ICO'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}<ScrollToTop /></body>
    </html>
  );
}
