import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PaymentsChannelMatrix from "@/components/payments/PaymentsChannelMatrix";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Kanal Pembayaran & Matrix Integrasi | Nusandana",
  description: "Terima pembayaran dari seluruh Virtual Account, QRIS, E-Wallet, Kartu Kredit, dan Retail Outlet Indonesia dalam satu SDK/API unified.",
  openGraph: {
    title: "Kanal Pembayaran & Matrix Integrasi | Nusandana",
    description: "Terima pembayaran dari seluruh Virtual Account, QRIS, E-Wallet, Kartu Kredit, dan Retail Outlet Indonesia dalam satu SDK/API unified.",
    type: "website",
    url: "https://nusandana.example.com/payments",
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
