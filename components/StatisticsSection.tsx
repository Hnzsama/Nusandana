"use client";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { TrendingUp, Users, ShieldCheck, Clock, Sparkles } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-red-50 border-red-100/80",
    value: "Rp 50 Triliun+",
    label: "Total Volume Transaksi Tahunan",
    description: "Diproses secara aman & transparan melalui jaringan Nusandana.",
  },
  {
    icon: <Users className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-indigo-50 border-indigo-100/80",
    value: "500.000+",
    label: "Merchant & UMKM Aktif",
    description: "Dari toko online, retail, hingga perusahaaan enterprise nasional.",
  },
  {
    icon: <Clock className="w-6 h-6 text-sky-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-sky-50 border-sky-100/80",
    value: "99.99%",
    label: "SLA Uptime System",
    description: "Infrastruktur cloud multi-region tanpa kompromi downtime.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-emerald-50 border-emerald-100/80",
    value: "< 100 ms",
    label: "Rata-rata Respon API",
    description: "Kecepatan eksekusi checkout & instant settlement otomatis.",
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Skalabilitas & Performa
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Infrastruktur Keuangan dengan <span className="bg-gradient-to-r from-red-600 to-red-600 bg-clip-text text-transparent">Performa Tinggi</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dirancang untuk skalabilitas transaksi tinggi tanpa kompromi.
            </p>
          </div>
        </AnimateOnScroll>

        {/* 4 Equal-Height Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {stats.map((stat, idx) => (
            <AnimateOnScroll key={stat.label} animation="fade-up" delay={idx * 80} className="h-full">
              <div className="h-full bg-white p-7 rounded-3xl border border-gray-200/90 shadow-xs hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                
                {/* Top Corner Glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  {/* Icon Box */}
                  <div className={`w-13 h-13 rounded-2xl ${stat.iconBg} border flex items-center justify-center mb-6`}>
                    {stat.icon}
                  </div>

                  {/* Value */}
                  <h3 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-2 group-hover:text-red-600 transition-colors">
                    {stat.value}
                  </h3>

                  {/* Label */}
                  <p className="font-bold text-gray-800 text-sm leading-snug">
                    {stat.label}
                  </p>
                </div>

                {/* Description */}
                <div className="pt-4 border-t border-gray-100 mt-4 relative z-10">
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
