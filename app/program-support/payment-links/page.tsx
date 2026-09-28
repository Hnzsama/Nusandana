import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UMKMPaymentLinksSection from "@/components/program-support/UMKMPaymentLinksSection";
import FAQSection from "@/components/FAQSection";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://nusandana.vercel.app";

export const metadata: Metadata = {
  title: "Solusi Payment Links UMKM & QR Code | Nusandana",
  description:
    "Terima pembayaran digital secara mudah melalui tautan pembayaran (Payment Link) dan QR Code tanpa perlu integrasi coding yang rumit.",
  keywords: [
    "Payment Links UMKM",
    "Tautan Pembayaran Digital",
    "Bayar Lewat Link Nusandana",
    "QR Code Pembayaran UMKM",
  ],
  openGraph: {
    title: "Solusi Payment Links UMKM & QR Code | Nusandana",
    description:
      "Terima pembayaran digital secara mudah melalui tautan pembayaran (Payment Link) dan QR Code tanpa perlu integrasi coding yang rumit.",
    type: "website",
    url: `${appUrl}/program-support/payment-links`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Solusi Payment Links UMKM & QR Code | Nusandana",
    description:
      "Terima pembayaran digital secara mudah melalui tautan pembayaran (Payment Link) dan QR Code tanpa perlu integrasi coding yang rumit.",
  },
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
