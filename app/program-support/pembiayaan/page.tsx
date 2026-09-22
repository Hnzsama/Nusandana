import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UMKMFinancingSection from "@/components/program-support/UMKMFinancingSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Pembiayaan Modal Usaha UMKM | paymentapp",
  description: "Akses pembiayaan modal usaha cepat dan fleksibel hingga 80% invoice untuk UMKM.",
};

export default function PembiayaanUMKMPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow">
        <UMKMFinancingSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
