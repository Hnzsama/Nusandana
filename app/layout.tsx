import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nusandana.co"),
  title: {
    default: "Nusandana - Payment Infrastructure 3.0",
    template: "%s | Nusandana",
  },
  description:
    "Infrastruktur penerimaan pembayaran digital terdepan di Indonesia. Terima Virtual Account, QRIS, E-Wallet, dan Kartu Kredit dalam 1 API unified terlisensi Bank Indonesia.",
  keywords: [
    "Nusandana",
    "Payment Gateway Indonesia",
    "QRIS Instant",
    "Virtual Account Multi Bank",
    "Payment Link UMKM",
    "PCI-DSS Level 1",
    "Fintech Indonesia",
    "Transfer Massal Payouts",
    "Gateway Pembayaran SCBD",
  ],
  authors: [{ name: "Nusandana", url: "https://nusandana.co" }],
  creator: "PT Nusandana Digital Pembayaran",
  publisher: "PT Nusandana Digital Pembayaran",
  formatDetection: {
    telephone: false,
  },
  manifest: "/favicon/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Nusandana - Payment Infrastructure 3.0",
    description:
      "Infrastruktur penerimaan pembayaran digital terdepan di Indonesia. Terima Virtual Account, QRIS, E-Wallet, dan Kartu Kredit dalam 1 API unified.",
    url: "https://nusandana.co",
    siteName: "Nusandana",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Nusandana Payment Infrastructure 3.0 - Payment Gateway Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nusandana - Payment Infrastructure 3.0",
    description:
      "Infrastruktur penerimaan pembayaran digital terdepan di Indonesia. Terima Virtual Account, QRIS, E-Wallet, dan Kartu Kredit dalam 1 API unified.",
    site: "@nusandana",
    creator: "@nusandana",
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Nusandana",
    legalName: "PT Nusandana Digital Pembayaran",
    url: "https://nusandana.co",
    logo: "https://nusandana.co/logo.svg",
    image: "https://nusandana.co/og-image.svg",
    description:
      "Infrastruktur penerimaan pembayaran digital dan payment gateway terdepan di Indonesia.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "SCBD Tower A, Lt. 28",
      addressLocality: "Jakarta Selatan",
      addressRegion: "DKI Jakarta",
      postalCode: "12190",
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-21-555-8888",
      contactType: "customer service",
      email: "support@nusandana.co",
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
    sameAs: [
      "https://linkedin.com/company/nusandana",
      "https://twitter.com/nusandana",
      "https://instagram.com/nusandana",
    ],
  };

  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
