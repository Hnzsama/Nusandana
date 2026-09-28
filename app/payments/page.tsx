import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentsChannelMatrix from "@/components/payments/PaymentsChannelMatrix";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://nusandana.vercel.app";

export const metadata: Metadata = {
  title: "Kanal Pembayaran & Matrix Integrasi | Nusandana",
  description:
    "Terima pembayaran dari seluruh Virtual Account, QRIS Instant, E-Wallet Direct, Kartu Kredit, dan Payment Links UMKM Indonesia dalam 1 API unified.",
  keywords: [
    "Kanal Pembayaran Nusandana",
    "QRIS Instant Settlement",
    "Virtual Account Multi Bank",
    "E Wallet Gateway Indonesia",
    "Payment Link UMKM Gratis",
    "Matrix Integrasi Payment Gateway",
  ],
  openGraph: {
    title: "Kanal Pembayaran & Matrix Integrasi | Nusandana",
    description:
      "Terima pembayaran dari seluruh Virtual Account, QRIS Instant, E-Wallet Direct, Kartu Kredit, dan Payment Links UMKM Indonesia dalam 1 API unified.",
    type: "website",
    url: `${appUrl}/payments`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanal Pembayaran & Matrix Integrasi | Nusandana",
    description:
      "Terima pembayaran dari seluruh Virtual Account, QRIS Instant, E-Wallet Direct, Kartu Kredit, dan Payment Links UMKM Indonesia dalam 1 API unified.",
  },
};

export default function PaymentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kanal Pembayaran Nusandana",
    provider: {
      "@type": "FinancialService",
      name: "Nusandana",
    },
    serviceType: "Payment Gateway Matrix",
    description: "Infrastruktur penerimaan pembayaran terlengkap untuk bisnis Indonesia.",
    areaServed: "Indonesia",
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      <main className="flex-grow">
        <PaymentsChannelMatrix />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
