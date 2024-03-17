import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BootstrapClient from "@/components/BootstrapClient";
import Providers from "./providers";
import 'bootstrap/dist/css/bootstrap.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BRF Roda Briljant",
  description: "BRF Roda Briljant hemsida",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}><Providers><Nav />{children}<Footer /><BootstrapClient /></Providers></body>
    </html>
  );
}
