"use client";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Cpu, RefreshCw, BarChart3, Layers, CheckCircle } from "lucide-react";

const scaleItems = [
  {
    icon: <Cpu className="w-6 h-6 text-red-600" />,
    title: "Batch & Automated Payouts",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Transfer ribuan rekening bank & e-wallet secara bersamaan hanya dalam hitungan detik.",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-red-600" />,
    title: "Automated Subscriptions",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kelola tagihan berulang mingguan, bulanan, atau tahunan dengan penanganan auto-retry.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-sky-600" />,
    title: "Real-time Financial Analytics",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pantau arus kas, tingkat keberhasilan transaksi, dan rekonsiliasi keuangan dalam 1 dashboard.",
  },
  {
    icon: <Layers className="w-6 h-6 text-emerald-600" />,
    title: "Developer First APIs & SDKs",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. SDK resmi untuk Node.js, Python, PHP, Java, React Native, Flutter, dan iOS/Android.",
  },
];

export default function ScaleFeatures() {
  return (
    <section className="py-20 bg-slate-50/70 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Fitur Lengkap Skala <span className="text-red-600">Enterprise</span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semua modul otomatisasi transaksi yang dibutuhkan tim bisnis dan developer modern.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {scaleItems.map((item, idx) => (
            <AnimateOnScroll key={item.title} animation="fade-up" delay={idx * 100}>
              <div className="bg-white rounded-2xl p-8 border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-red-300 transition-all duration-300 flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
