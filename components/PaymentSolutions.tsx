"use client";

import React, { useState } from "react";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Building2, QrCode, Wallet, CreditCard, Sparkles, ArrowRight, Check } from "lucide-react";

const solutions = [
  {
    id: "qris",
    title: "QRIS Instant Dynamic & Static",
    icon: <QrCode className="w-6 h-6 text-red-600" />,
    description: "Satu QR Code nasional resmi untuk seluruh m-banking dan e-wallet di Indonesia.",
    features: ["Mendukung 30+ aplikasi bank & wallet", "Settlement H+0 instan", "Notifikasi webhook real-time"],
    link: "/payments?cat=qris-wallet",
  },
  {
    id: "va",
    title: "Virtual Account Multi-Bank",
    icon: <Building2 className="w-6 h-6 text-red-600" />,
    description: "Rekening Virtual Account otomatis untuk BCA, Mandiri, BNI, BRI, Permata, Danamon & CIMB.",
    features: ["Konfirmasi transaksi otomatis", "Fitur refund & penyesuaian", "Masa berlaku (expired) fleksibel"],
    link: "/payments?cat=va",
  },
  {
    id: "ewallet",
    title: "E-Wallet Direct Checkout",
    icon: <Wallet className="w-6 h-6 text-red-600" />,
    description: "Integrasi pembayaran langsung GoPay, OVO, ShopeePay, DANA, dan LinkAja.",
    features: ["Auto app-redirect cepat", "Tingkat keberhasilan 99.8%", "Deep-link checkout seamlessly"],
    link: "/payments?cat=qris-wallet",
  },
  {
    id: "disbursement",
    title: "Disbursement & Transfer Dana",
    icon: <CreditCard className="w-6 h-6 text-red-600" />,
    description: "Transfer dana instan ke ribuan rekening bank & e-wallet secara bersamaan dalam hitungan detik.",
    features: ["Batch payout otomatis", "Validasi nomor rekening instan", "Laporan riwayat pencairan transparan"],
    link: "/payments?cat=all",
  },
];

export default function PaymentSolutions() {
  const [activeTab, setActiveTab] = useState("qris");

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-red-600" /> Solusi Pembayaran Moduler
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Payment Support <span className="logo-indonesia inline-block">NUSANDANA</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
              Dukung seluruh kebutuhan transaksi bisnis Anda dengan QRIS, Virtual Account, E-Wallet, dan Disbursement instan.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, idx) => (
            <AnimateOnScroll key={item.id} animation="fade-up" delay={idx * 100}>
              <div
                onMouseEnter={() => setActiveTab(item.id)}
                className={`h-full p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between cursor-pointer group ${
                  activeTab === item.id
                    ? "bg-gradient-to-b from-red-50/70 via-white to-white border-red-400 shadow-xl shadow-red-500/10 -translate-y-1"
                    : "bg-white border-gray-200 hover:border-red-300 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-red-100/60 border border-red-200/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {item.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs font-medium text-gray-700">
                        <Check className="w-3.5 h-3.5 text-red-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 group/link"
                >
                  Pelajari Selengkapnya
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
