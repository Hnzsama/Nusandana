import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UMKMArticleSection from "@/components/program-support/UMKMArticleSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Artikel & Panduan Pembayaran UMKM | paymentapp",
  description: "Artikel dan panduan lengkap tentang solusi sistem pembayaran digital untuk UMKM.",
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
