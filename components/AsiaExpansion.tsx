"use client";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Globe, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";

export default function AsiaExpansion() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-blue-950 text-white overflow-hidden relative">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
                <Globe className="w-3.5 h-3.5 text-blue-400" /> Ekspansi Pasar Asia Tenggara
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
                Terima Pembayaran Lintas Negara Tanpa <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">Hambatan Valas</span>
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hubungkan bisnis Anda ke Singapura, Malaysia, Thailand, dan Filipina dengan settlement IDR otomatis.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <Zap className="w-4 h-4" />
                    <span className="font-bold text-sm">Multi-Currency</span>
                  </div>
                  <p className="text-xs text-slate-400">Konversi mata uang otomatis sesuai rate riil pasar.</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="font-bold text-sm">Kepatuhan Legal</span>
                  </div>
                  <p className="text-xs text-slate-400">Lisensi resmi otoritas keuangan regional.</p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="mt-8">
                <a
                  href="/payments"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 cursor-pointer"
                >
                  Pelajari Solusi Lintas Negara <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>

          <div className="lg:col-span-6">
            <AnimateOnScroll animation="scale-up" delay={150}>
              <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 shadow-2xl">
                <ImagePlaceholder
                  label="Regional Payment Network & Map Visual"
                  height="h-[360px]"
                  className="w-full rounded-xl object-cover"
                />
              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
