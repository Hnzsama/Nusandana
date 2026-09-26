"use client";

import React from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Smartphone, Monitor, Volume2, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const supportProducts = [
  {
    id: "aplikasi",
    category: "Aplikasi Mobile",
    title: "Aplikasi QRIS Nusandana",
    icon: <Smartphone className="w-6 h-6 text-red-600" />,
    badgeColor: "bg-red-50 text-red-600 border-red-200",
    image: "/ekosistem/aplikasi/WhatsApp Image 2026-09-23 at 10.05.03 PM (1).jpeg",
    imageAlt: "Aplikasi QRIS Nusandana Mobile",
    paragraphs: [
      "Aplikasi QRIS Nusandana memudahkan UMKM dalam memantau dan mengecek transaksi secara real-time melalui smartphone. Merchant dapat melihat transaksi masuk, riwayat pembayaran, dan status transaksi dengan cepat tanpa harus melakukan pengecekan secara manual.",
      "Dengan tampilan yang praktis dan mudah digunakan, UMKM dapat mengontrol transaksi dengan lebih mudah, cepat, dan aman kapan saja."
    ],
    highlights: [
      "Notifikasi transaksi masuk real-time",
      "Riwayat pembayaran terpusat",
      "Tampilan praktis & ramah pengguna"
    ]
  },
  {
    id: "website",
    category: "Web Dashboard",
    title: "Website QRIS Nusandana",
    icon: <Monitor className="w-6 h-6 text-red-600" />,
    badgeColor: "bg-blue-50 text-blue-600 border-blue-200",
    image: "/hero/WhatsApp Image 2026-09-23 at 10.16.39 PM.jpeg",
    imageAlt: "Website Dashboard QRIS Nusandana",
    paragraphs: [
      "Website QRIS Nusandana memudahkan UMKM dan perusahaan dalam memantau transaksi secara real-time serta mengelola laporan pembayaran dalam satu dashboard. Pengguna dapat melihat detail transaksi, riwayat pembayaran, status settlement, hingga mengakses laporan transaksi dengan lebih cepat dan praktis.",
      "Dengan sistem yang terintegrasi, proses monitoring dan pelaporan transaksi menjadi lebih mudah, terstruktur, dan efisien, sehingga bisnis dapat mengelola aktivitas pembayaran dengan lebih baik."
    ],
    highlights: [
      "Monitoring transaksi multi-outlet & multi-role",
      "Laporan settlement & ekspor data lengkap",
      "Sistem terintegrasi & efisien"
    ]
  },
  {
    id: "soundbox",
    category: "Hardware / Perangkat",
    title: "QRIS Soundbox Nusandana",
    icon: <Volume2 className="w-6 h-6 text-red-600" />,
    badgeColor: "bg-amber-50 text-amber-600 border-amber-200",
    image: "/ekosistem/aplikasi/WhatsApp Image 2026-09-23 at 10.05.04 PM (2).jpeg",
    imageAlt: "QRIS Soundbox Nusandana",
    paragraphs: [
      "QRIS Soundbox Nusandana membantu merchant menerima pembayaran QRIS dengan lebih praktis, cepat, dan aman. Setiap pembayaran yang berhasil akan langsung memberikan notifikasi suara, sehingga merchant dapat mengetahui transaksi masuk tanpa harus terus mengecek aplikasi atau meminta bukti pembayaran dari pelanggan.",
      "Cocok untuk toko, warung, UMKM, restoran, food court, dan berbagai jenis usaha yang memiliki transaksi cukup ramai. Dengan QRIS Soundbox, proses pembayaran menjadi lebih efisien dan membantu mengurangi risiko bukti pembayaran palsu."
    ],
    highlights: [
      "Notifikasi suara otomatis setiap pembayaran",
      "Mencegah resiko bukti pembayaran palsu",
      "Sangat cocok untuk retail, resto & warung ramai"
    ]
  }
];

export default function SupportProductSection() {
  return (
    <div className="w-full bg-slate-50/60 py-16 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold uppercase tracking-wider mb-4">
              Dukungan Produk Terpadu
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Support Product <span className="logo-indonesia inline-block">NUSANDANA</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium leading-relaxed">
              Ekosistem lengkap perangkat dan platform penerimaan pembayaran QRIS yang dirancang khusus untuk mempermudah operasional bisnis Anda.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Product Showcase Cards */}
        <div className="space-y-16">
          {supportProducts.map((item, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <section 
                id={item.id} 
                key={item.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Column with Floating Animation */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <AnimateOnScroll animation="scale-up">
                      <div className="relative w-full py-4 flex items-center justify-center">
                        
                        {/* Soft Glow Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-tr from-red-400/20 via-rose-300/10 to-amber-200/20 rounded-full blur-2xl pointer-events-none" />

                        {/* Floating Card Container */}
                        <div className="relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden bg-white/80 backdrop-blur-md border border-gray-200/90 shadow-2xl hover:shadow-red-500/15 transition-all duration-500 hover:-translate-y-2 group">
                          
                          {/* Floating Badge */}
                          <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-gray-100 shadow-md flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-bold text-gray-800">{item.category}</span>
                          </div>

                          <Image
                            src={item.image}
                            alt={item.imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 ease-out"
                          />
                        </div>

                      </div>
                    </AnimateOnScroll>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} space-y-5`}>
                    <AnimateOnScroll animation="fade-up">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                          {item.icon}
                        </div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full border ${item.badgeColor}`}>
                          {item.category}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-3">
                        {item.title}
                      </h2>

                      <div className="space-y-3 pt-2 text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                        {item.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="pt-3 space-y-2">
                        {item.highlights.map((h, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-800">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>

                      {/* Call to Action */}
                      <div className="pt-4">
                        <Link
                          href="/kontak"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm shadow-md shadow-red-600/30 transition-all cursor-pointer"
                        >
                          Gunakan {item.title} <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </AnimateOnScroll>
                  </div>

                </div>
              </section>
            );
          })}
        </div>

      </div>
    </div>
  );
}
