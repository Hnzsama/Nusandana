"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import {
  Building2,
  QrCode,
  Wallet,
  CreditCard,
  ShoppingBag,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Search,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

interface PaymentChannel {
  id: string;
  category: "va" | "qris-wallet" | "card" | "paylater";
  name: string;
  categoryLabel: string;
  description: string;
  brands: string[];
  settlementSpeed: string;
  transactionLimit: string;
  status: "Ready API" | "Beta";
  features: string[];
}

const channelsData: PaymentChannel[] = [
  {
    id: "qris-instant",
    category: "qris-wallet",
    name: "QRIS (QR Code Standar Indonesia)",
    categoryLabel: "QRIS",
    description: "Terima pembayaran QRIS nasional dari seluruh m-banking (BCA Mobile, Livin, BRImo) dan aplikasi e-wallet terdaftar.",
    brands: ["QRIS", "GPN", "BCA Mobile", "Livin", "BRImo"],
    settlementSpeed: "H+0 / Real-Time",
    transactionLimit: "Hingga Rp 10 Juta / tx",
    status: "Ready API",
    features: ["Dynamic QR", "Static QR", "Instant Webhooks"],
  },
  {
    id: "ewallet-popular",
    category: "qris-wallet",
    name: "E-Wallet (OVO, GoPay, ShopeePay, DANA, LinkAja)",
    categoryLabel: "E-Wallet",
    description: "Checkout cepat satu klik dengan auto-redirect ke aplikasi GoPay, OVO, ShopeePay, DANA, dan LinkAja.",
    brands: ["GoPay", "OVO", "ShopeePay", "DANA", "LinkAja"],
    settlementSpeed: "Real-Time (Instan)",
    transactionLimit: "Hingga Rp 20 Juta / tx",
    status: "Ready API",
    features: ["One-Click Checkout", "Auto Redirect", "Tokenization"],
  },
  {
    id: "va-bank",
    category: "va",
    name: "Virtual Account Multi-Bank (BCA, BNI, BRI, Mandiri, Permata)",
    categoryLabel: "Virtual Account",
    description: "Nomor rekening virtual otomatis untuk BCA, BNI, BRI, Mandiri, Permata, dan CIMB Niaga dengan verifikasi otomatis 24/7.",
    brands: ["BCA", "BNI", "BRI", "Mandiri", "Permata", "CIMB"],
    settlementSpeed: "Real-Time (Instan)",
    transactionLimit: "Hingga Rp 500 Juta / tx",
    status: "Ready API",
    features: ["Auto-Reconcile", "Expired Time Custom", "Single & Multi Use"],
  },
];

function MatrixContent() {
  const searchParams = useSearchParams();
  const catQuery = searchParams.get("cat");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    if (catQuery) {
      setSelectedCategory(catQuery);
    }
  }, [catQuery]);

  const filteredChannels = channelsData.filter((channel) => {
    const matchesCategory =
      selectedCategory === "all" || channel.category === selectedCategory;
    const matchesSearch =
      channel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      channel.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      channel.brands.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "va":
        return <Building2 className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />;
      case "qris-wallet":
        return <QrCode className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />;
      default:
        return <Zap className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />;
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-red-50/40 via-white to-slate-50/50 pt-24 pb-16 lg:pt-28 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Page Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-10 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/80 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-red-600" /> Live Payment Methods
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Metode Pembayaran & <span className="bg-gradient-to-r from-red-600 via-red-600 to-rose-400 bg-clip-text text-transparent">Matrix Integrasi</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Satu integrasi API modern untuk mengakses pembayaran QRIS, E-Wallet, dan Virtual Account resmi di Indonesia.
            </p>

            {/* Stat Badges */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-xs">
                <Layers className="w-3.5 h-3.5 text-red-600" /> QRIS, E-Wallet & VA
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-xs">
                <Zap className="w-3.5 h-3.5 text-red-600" /> Settlement H+0 & Real-Time
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 text-xs font-semibold text-gray-700 shadow-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Certified PCI-DSS Level 1
              </span>
            </div>
          </div>
        </AnimateOnScroll>

        {/* Filter Bar & Search */}
        <AnimateOnScroll animation="fade-up" delay={50}>
          <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-2xl border border-gray-200 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
              {[
                { id: "all", label: "Semua Metode" },
                { id: "qris-wallet", label: "QRIS & E-Wallet" },
                { id: "va", label: "Virtual Account" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    selectedCategory === tab.id
                      ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari bank / metode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3.5 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition-all"
              />
            </div>

          </div>
        </AnimateOnScroll>

        {/* Full-Width Horizontal Cards List */}
        <div className="space-y-6">
          {filteredChannels.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
              <p className="text-gray-500 font-semibold text-sm">Tidak ada kanal pembayaran yang sesuai dengan kata kunci.</p>
            </div>
          ) : (
            filteredChannels.map((channel, idx) => (
              <AnimateOnScroll key={channel.id} animation="fade-up" delay={idx * 60}>
                <div className="group bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-7 hover:border-red-400/80 hover:shadow-xl hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  
                  {/* Gentle Corner Accent Glow */}
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
                    
                    {/* Left Info Section */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0 group-hover:bg-red-600 transition-colors duration-300">
                          {getCategoryIcon(channel.category)}
                        </div>
                        <div>
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-red-50 text-red-700 border border-red-100">
                            {channel.categoryLabel}
                          </span>
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mt-0.5 group-hover:text-red-600 transition-colors">
                            {channel.name}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4 max-w-2xl">
                        {channel.description}
                      </p>

                      {/* Brand Chips */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Mitra Resmi:</span>
                        {channel.brands.map((brand) => (
                          <span
                            key={brand}
                            className="px-2.5 py-1 rounded-lg bg-gray-50 text-gray-700 font-semibold text-xs border border-gray-200/60 group-hover:bg-gray-100 transition-colors"
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Metadata & Action Sidebar - Generous Width (w-[380px]) with No Wrapping */}
                    <div className="w-full lg:w-[380px] shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-gray-100 lg:pl-8 flex flex-col justify-between space-y-4">
                      
                      <div className="space-y-3 text-xs sm:text-sm">
                        <div className="flex items-center justify-between gap-4">
                          <span className="text-gray-500 font-semibold text-xs whitespace-nowrap">Kecepatan Settlement:</span>
                          <span className="font-bold text-red-600 text-xs sm:text-sm flex items-center gap-1.5 whitespace-nowrap">
                            <Zap className="w-3.5 h-3.5 text-red-500 shrink-0" /> {channel.settlementSpeed}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <span className="text-gray-500 font-semibold text-xs whitespace-nowrap">Limit Transaksi:</span>
                          <span className="font-bold text-gray-900 text-xs sm:text-sm whitespace-nowrap">
                            {channel.transactionLimit}
                          </span>
                        </div>

                        <div className="flex items-center justify-between gap-4">
                          <span className="text-gray-500 font-semibold text-xs whitespace-nowrap">Status Integrasi:</span>
                          <span className="inline-flex items-center gap-1 font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs border border-emerald-200 shrink-0 whitespace-nowrap">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {channel.status}
                          </span>
                        </div>
                      </div>

                      {/* Action Button */}
                      <a
                        href="/program-support"
                        className="w-full py-2.5 px-4 rounded-xl bg-gray-50 group-hover:bg-red-600 text-gray-700 group-hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-gray-200 group-hover:border-red-600 transition-all duration-300 cursor-pointer shadow-2xs group/btn"
                      >
                        Dokumentasi API
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </a>

                    </div>

                  </div>

                </div>
              </AnimateOnScroll>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

export default function PaymentsChannelMatrix() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Loading payment channels...</div>}>
      <MatrixContent />
    </Suspense>
  );
}
