import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UMKMPaymentLinksSection from "@/components/program-support/UMKMPaymentLinksSection";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Solusi Payment Links UMKM | paymentapp",
  description: "Terima pembayaran secara mudah melalui tautan pembayaran dan QR Code tanpa coding.",
};

export default function PaymentLinksUMKMPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-50 font-sans">
      <Navbar />
      <main className="flex-grow">
        <UMKMPaymentLinksSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
