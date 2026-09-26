"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { TrendingUp, Users, ShieldCheck, Clock, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const dashboardImages = [
  "/ekosistem/dashboard/WhatsApp Image 2026-09-23 at 10.08.05 PM.jpeg",
  "/ekosistem/dashboard/WhatsApp Image 2026-09-23 at 10.08.18 PM.jpeg",
  "/ekosistem/dashboard/WhatsApp Image 2026-09-23 at 10.08.30 PM.jpeg",
  "/ekosistem/dashboard/WhatsApp Image 2026-09-23 at 10.08.42 PM.jpeg",
];

const aplikasiImages = [
  "/ekosistem/aplikasi/WhatsApp Image 2026-09-23 at 10.05.03 PM.jpeg",
  "/ekosistem/aplikasi/WhatsApp Image 2026-09-23 at 10.05.03 PM (1).jpeg",
  "/ekosistem/aplikasi/WhatsApp Image 2026-09-23 at 10.05.03 PM (2).jpeg",
  "/ekosistem/aplikasi/WhatsApp Image 2026-09-23 at 10.05.03 PM (3).jpeg",
  "/ekosistem/aplikasi/WhatsApp Image 2026-09-23 at 10.05.04 PM.jpeg",
  "/ekosistem/aplikasi/WhatsApp Image 2026-09-23 at 10.05.04 PM (1).jpeg",
  "/ekosistem/aplikasi/WhatsApp Image 2026-09-23 at 10.05.04 PM (2).jpeg",
];

const multiRoleImages = [
  "/ekosistem/multi-role/image.png",
];

const settlementImages = [
  "/ekosistem/settlement/image.png",
];

function CardImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div 
        onClick={() => setIsZoomed(true)}
        className="relative w-full h-80 sm:h-96 lg:h-[440px] bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden group/carousel shadow-xs my-4 shrink-0 flex items-center justify-center p-3 cursor-zoom-in"
      >
        <div className="relative w-full h-full rounded-xl overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={`${title} slide ${currentIndex + 1}`}
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Click to Zoom Overlay Hint */}
        <div className="absolute top-3 left-3 z-10 bg-slate-900/80 text-white text-[10px] font-semibold px-2.5 py-1 rounded-md backdrop-blur-md opacity-0 group-hover/carousel:opacity-100 transition-opacity">
          Klik untuk memperbesar
        </div>

        {/* Prev / Next Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white hover:bg-red-600 hover:text-white text-gray-700 flex items-center justify-center shadow-md transition-all z-10 cursor-pointer border border-gray-200"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white hover:bg-red-600 hover:text-white text-gray-700 flex items-center justify-center shadow-md transition-all z-10 cursor-pointer border border-gray-200"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Counter & Indicator Badge */}
        <div className="absolute top-3 right-3 z-10 bg-red-600 text-white text-[11px] font-bold font-mono px-2.5 py-0.5 rounded-md shadow-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Pagination Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-white/90 shadow-md px-3 py-1.5 rounded-full border border-gray-200">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === currentIndex ? "w-6 bg-red-600" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Fullscreen Zoom Modal */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-6 right-6 text-white bg-slate-800 hover:bg-red-600 px-4 py-2 rounded-xl text-sm font-bold shadow-xl transition-all cursor-pointer z-50"
          >
            Tutup (Esc)
          </button>
          <div className="relative w-full max-w-5xl h-[85vh] rounded-2xl overflow-hidden">
            <Image
              src={images[currentIndex]}
              alt={`${title} zoomed slide ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}

function EmptyCarouselPlaceholder() {
  return (
    <div className="w-full h-80 sm:h-96 lg:h-[440px] bg-slate-50/80 rounded-2xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center p-4 text-center my-4 shrink-0">
      <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-gray-400 mb-3 shadow-inner">
        <Sparkles className="w-7 h-7 text-gray-400" />
      </div>
      <span className="text-sm font-bold text-gray-500">Preview Segera Hadir</span>
      <p className="text-xs text-gray-400 mt-1 max-w-[200px]">Tampilan fitur sedang disiapkan</p>
    </div>
  );
}

const stats = [
  {
    icon: <TrendingUp className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-red-50 border-red-100/80",
    value: "Tampilan Dashboard",
    label: "Dashboard Analytics & Laporan Web",
    description: "Pantau arus kas, real-time analytics & laporan transaksi bisnis melalui 1 dashboard terpadu Nusandana.",
    images: dashboardImages,
  },
  {
    icon: <Users className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-red-50 border-red-100/80",
    value: "Tampilan Aplikasi",
    label: "Aplikasi Mobile & POS Kasir",
    description: "Aplikasi mobile Nusandana yang intuitif dan praktis dari toko online, retail, hingga UMKM aktif.",
    images: aplikasiImages,
  },
  {
    icon: <Clock className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-red-50 border-red-100/80",
    value: "Multi-Role",
    label: "Multiple Login Dashboard – Bos & Staff",
    description: "Memudahkan pengelolaan bisnis dengan akses dashboard terpisah untuk Bos dan Staff. Bos dapat memantau transaksi dan laporan secara menyeluruh, sementara Staff dapat membantu operasional sesuai akses yang diberikan. Lebih aman, terkontrol, dan praktis.",
    images: multiRoleImages,
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-red-50 border-red-100/80",
    value: "Settlement H+0",
    label: "Settlement QRIS H+0",
    description: "Dana transaksi QRIS dapat diproses dan dicairkan di hari yang sama, sehingga arus kas bisnis menjadi lebih cepat dan membantu kebutuhan operasional harian.",
    images: settlementImages,
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Skalabilitas & Performa
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Ekosistem <span className="logo-indonesia inline-block">NUSANDANA</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
              Solusi pembayaran digital dan infrastruktur transaksi terintegrasi yang dirancang untuk mempercepat pertumbuhan bisnis Anda.
            </p>
          </div>
        </AnimateOnScroll>

        {/* 2-Column Grid Layout for Maximum Width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {stats.map((stat, idx) => (
            <AnimateOnScroll key={stat.label} animation="fade-up" delay={idx * 80} className="h-full">
              <div className="h-full bg-white p-6 rounded-3xl border border-gray-200/90 shadow-xs hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                
                {/* Top Corner Glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Icon Box */}
                    <div className={`w-12 h-12 rounded-2xl ${stat.iconBg} border flex items-center justify-center mb-4`}>
                      {stat.icon}
                    </div>

                    {/* Value */}
                    <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-1 group-hover:text-red-600 transition-colors">
                      {stat.value}
                    </h3>

                    {/* Label */}
                    <p className="font-bold text-gray-800 text-sm leading-snug">
                      {stat.label}
                    </p>

                    {/* Image Carousel or Placeholder */}
                    {stat.images ? (
                      <CardImageCarousel images={stat.images} title={stat.label} />
                    ) : (
                      <EmptyCarouselPlaceholder />
                    )}
                  </div>

                  {/* Description */}
                  <div className="pt-4 border-t border-gray-100 mt-2 relative z-10">
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>

              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
