"use client";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Globe, CheckCircle2, Zap, ArrowRight } from "lucide-react";

export default function AsiaExpansion() {
  const programPoints = [
    {
      highlight: "Daftar QRIS Nusandana → Transaksi",
      text: "→ Nikmati Kemudahan Jualan Hari Ini, Cair Hari Ini"
    },
    {
      highlight: "Cocok untuk",
      text: "warung, toko, restoran, coffee shop, UMKM"
    },
    {
      highlight: "Penarikan bebas",
      text: "kapan saja di hari yang sama"
    }
  ];

  const benefits = [
    "Pendaftaran QRIS gratis",
    "QRIS soundbox gratis",
    "Dashboard transaksi",
    "Monitoring transaksi realtime",
    "Settlement H+0 sesuai ketentuan",
    "Support CS",
    "QRIS Soundbox notifikasi suara",
    "Menghindari pembayaran palsu",
  ];

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-red-950 text-white overflow-hidden relative">
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Information & Details */}
          <div className="lg:col-span-6 space-y-6">
            <AnimateOnScroll animation="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Globe className="w-3.5 h-3.5 text-red-400" /> Program Unggulan Nusandana
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Program Nusandana : <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">
                  Transaksi Hari Ini, Cair Hari Ini !!
                </span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/90 rounded-2xl p-5 sm:p-6 space-y-5 shadow-xl">
                
                {/* Program Description */}
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-red-400 flex items-center gap-2 mb-3">
                    <Zap className="w-5 h-5 text-red-400 shrink-0 fill-red-400/20" />
                    Program &ldquo;Transaksi Hari Ini, Cair Hari Ini&rdquo; :
                  </h3>
                  
                  <div className="space-y-2.5">
                    {programPoints.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                        <ArrowRight className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">
                          <strong className="text-white font-semibold">{item.highlight}</strong> {item.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-800/80 pt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3">
                    Keuntungan:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-slate-300">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Column: Featured Banner Image */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="scale-up" delay={150}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-rose-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative bg-slate-900 rounded-2xl p-2.5 sm:p-3 border border-slate-800 shadow-2xl overflow-hidden">
                  <img
                    src="/program_unggulan/cair_landscape.jpeg"
                    alt="Program Nusandana Transaksi Hari Ini, Cair Hari Ini"
                    className="w-full h-auto rounded-xl object-contain shadow-md"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
