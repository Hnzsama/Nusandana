import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupportProductSection from "@/components/program-support/SupportProductSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Support Product | Nusandana",
  description: "Dukungan produk terlengkap mencakup Aplikasi QRIS Mobile, Web Dashboard, dan QRIS Soundbox Nusandana.",
  openGraph: {
    title: "Support Product | Nusandana",
    description: "Dukungan produk terlengkap mencakup Aplikasi QRIS Mobile, Web Dashboard, dan QRIS Soundbox Nusandana.",
    type: "website",
    url: "https://nusandana.example.com/program-support",
  },
};

export default function SupportProductHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Support Product Nusandana",
    provider: {
      "@type": "FinancialService",
      name: "Nusandana",
    },
    serviceType: "Solusi Penerimaan Pembayaran Produk QRIS",
    description: "Dukungan Produk Aplikasi, Website Dashboard, dan QRIS Soundbox Nusandana.",
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
        <SupportProductSection />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
