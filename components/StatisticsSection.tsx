"use client";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { TrendingUp, Users, ShieldCheck, Clock } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    value: "Rp 50 Triliun+",
    label: "Total Volume Transaksi Tahunan",
    description: "Diproses secara aman melalui jaringan PaymentApp.",
  },
  {
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    value: "500.000+",
    label: "Merchant & UMKM Aktif",
    description: "Dari toko online, retail, hingga enterprise nasional.",
  },
  {
    icon: <Clock className="w-6 h-6 text-sky-600" />,
    value: "99.99%",
    label: "SLA Uptime System",
    description: "Infrastruktur cloud multi-region tanpa downtime.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
    value: "< 100 ms",
    label: "Rata-rata Respon API",
    description: "Kecepatan eksekusi checkout & instant settlement.",
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Infrastruktur Keuangan dengan <span className="text-blue-600">Performa Tinggi</span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dirancang untuk skalabilitas transaksi tinggi tanpa kompromi.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <AnimateOnScroll key={stat.label} animation="fade-up" delay={idx * 100}>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-black text-gray-900 tracking-tight">
                  {stat.value}
                </h3>
                <p className="font-semibold text-gray-800 text-sm mt-2">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
