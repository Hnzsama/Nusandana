import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupportProductSection from "@/components/program-support/SupportProductSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://nusandana.vercel.app";

export const metadata: Metadata = {
  title: "Support Product Hub & Ekosistem Layanan | Nusandana",
  description:
    "Solusi ekosistem produk penerimaan pembayaran terlengkap: Aplikasi QRIS Mobile, Website Dashboard Real-time, dan perangkat QRIS Soundbox Notifikasi Suara Nusandana.",
  keywords: [
    "Aplikasi QRIS Nusandana",
    "QRIS Soundbox Indonesia",
    "Soundbox Notifikasi Suara QRIS",
    "Dashboard Real-time QRIS",
    "Ekosistem Support Product Nusandana",
  ],
  openGraph: {
    title: "Support Product Hub & Ekosistem Layanan | Nusandana",
    description:
      "Solusi ekosistem produk penerimaan pembayaran terlengkap: Aplikasi QRIS Mobile, Website Dashboard Real-time, dan perangkat QRIS Soundbox Notifikasi Suara Nusandana.",
    type: "website",
    url: `${appUrl}/program-support`,
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Product Hub & Ekosistem Layanan | Nusandana",
    description:
      "Solusi ekosistem produk penerimaan pembayaran terlengkap: Aplikasi QRIS Mobile, Website Dashboard Real-time, dan perangkat QRIS Soundbox Notifikasi Suara Nusandana.",
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
