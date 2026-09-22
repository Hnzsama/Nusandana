import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UMKMArticleSection from "@/components/program-support/UMKMArticleSection";
import UMKMPaymentLinksSection from "@/components/program-support/UMKMPaymentLinksSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Program Support UMKM | Nusandana",
  description: "Solusi penerimaan pembayaran dan payment link terlengkap untuk mendukung pertumbuhan bisnis UMKM Indonesia.",
  openGraph: {
    title: "Program Support UMKM | Nusandana",
    description: "Solusi penerimaan pembayaran dan payment link terlengkap untuk mendukung pertumbuhan bisnis UMKM Indonesia.",
    type: "website",
    url: "https://nusandana.example.com/program-support",
  },
};

export default function ProgramSupportHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Program Support UMKM Nusandana",
    provider: {
      "@type": "FinancialService",
      name: "Nusandana",
    },
    serviceType: "Solusi Penerimaan Pembayaran UMKM",
    description: "Program bantuan dan solusi transaksi digital untuk Usaha Mikro, Kecil, dan Menengah.",
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
        {/* Section 2 Module 2: Solusi Payment Links UMKM */}
        <section id="payment-links">
          <UMKMPaymentLinksSection />
        </section>

        {/* Section 2 Module 1: Artikel & Panduan Pembayaran UMKM */}
        <section id="artikel">
          <UMKMArticleSection />
        </section>

        {/* FAQ & CTA */}
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
