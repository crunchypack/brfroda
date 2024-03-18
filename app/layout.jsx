import { Inter } from "next/font/google";
import "./globals.css";
import Navi from "@/components/Nav";
import FooterComp from "@/components/Footer";
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
      <body className={inter.className}><Providers><Navi />{children}<FooterComp /><BootstrapClient /></Providers></body>
    </html>
  );
}
