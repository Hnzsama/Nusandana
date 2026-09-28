import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UMKMArticleSection from "@/components/program-support/UMKMArticleSection";
import FAQSection from "@/components/FAQSection";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://nusandana.vercel.app";

export const metadata: Metadata = {
  title: "Artikel & Panduan Pembayaran UMKM | Nusandana",
  description:
    "Kumpulan artikel, tips, dan panduan lengkap tentang penerapan sistem pembayaran digital, QRIS, serta strategi Go Digital untuk UMKM Indonesia.",
  keywords: [
    "Artikel Pembayaran UMKM",
    "Panduan QRIS UMKM",
    "Tips Digitalisasi Usaha",
    "Blog Nusandana",
    "Edukasi FinTech Indonesia",
  ],
  openGraph: {
    title: "Artikel & Panduan Pembayaran UMKM | Nusandana",
    description:
      "Kumpulan artikel, tips, dan panduan lengkap tentang penerapan sistem pembayaran digital, QRIS, serta strategi Go Digital untuk UMKM Indonesia.",
    type: "website",
    url: `${appUrl}/program-support/artikel`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Artikel & Panduan Pembayaran UMKM | Nusandana",
    description:
      "Kumpulan artikel, tips, dan panduan lengkap tentang penerapan sistem pembayaran digital, QRIS, serta strategi Go Digital untuk UMKM Indonesia.",
  },
};

export default function ArtikelUMKMPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow">
        <UMKMArticleSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
