import TopBanner from "@/components/TopBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnerLogos from "@/components/PartnerLogos";
import StatisticsSection from "@/components/StatisticsSection";
import PaymentSolutions from "@/components/PaymentSolutions";
import AsiaExpansion from "@/components/AsiaExpansion";
import ScaleFeatures from "@/components/ScaleFeatures";
import CustomerStories from "@/components/CustomerStories";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Nusandana",
    "url": "https://nusandana.co",
    "logo": "https://nusandana.co/logo.png",
    "description": "Infrastruktur pembayaran digital dan payment gateway terdepan di Indonesia.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Batam, Kepulauan Riau",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://linkedin.com/company/nusandana",
      "https://twitter.com/nusandana"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen flex flex-col bg-white">
        <TopBanner />
        <Navbar />
        <HeroSection />
        <PartnerLogos />
        <StatisticsSection />
        <PaymentSolutions />
        <AsiaExpansion />
        <ScaleFeatures />
        <CustomerStories />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </>
  );
}
