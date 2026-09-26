"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { ArrowRight, ShieldCheck, Zap, CreditCard, CheckCircle2, Lock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-red-50/60 via-white to-slate-50/50 overflow-hidden">
      {/* Background Decorative Blur Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-red-400/20 via-red-300/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <AnimateOnScroll animation="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100/90 border border-red-200 text-red-700 text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs">
                <CreditCard className="w-3.5 h-3.5 text-red-600" /> Solusi Pembayaran Digital
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.15]">
                Solusi Pembayaran Digital <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-red-600 via-red-600 to-rose-400 bg-clip-text text-transparent">
                  Bayar Lebih Mudah. Bisnis Lebih Lancar.
                </span>
              </h1>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={100}>
              <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Kelola pembayaran bisnis Anda lebih mudah bersama Nusandana, solusi pembayaran digital dari <strong className="text-gray-900 font-semibold">PT Gerbang Pembayaran Digital</strong>. Terima pembayaran dengan praktis, pantau transaksi secara real-time, dan nikmati proses settlement yang efisien dalam satu ekosistem pembayaran yang dirancang untuk mendukung pertumbuhan bisnis Anda.
              </p>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/payments"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-base shadow-lg shadow-red-600/30 hover:shadow-xl hover:shadow-red-600/40 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  Mulai Sekarang
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/kontak"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl border border-gray-300 hover:border-red-600 bg-white hover:bg-red-50/50 text-gray-800 font-semibold text-base transition-all flex items-center justify-center cursor-pointer"
                >
                  Hubungi Sales
                </Link>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={300}>
              <div className="mt-10 pt-8 border-t border-gray-200/80 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">Lisensi Bank Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">PCI-DSS Level 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">99.99% Uptime</span>
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right Visual Mockup */}
          <div className="lg:col-span-5">
            <AnimateOnScroll animation="scale-up" delay={150}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Dashboard Preview Box */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-2xl border border-gray-200/80 hover:shadow-red-500/10 transition-shadow">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                  </div>

                  <div className="relative w-full h-[320px] rounded-xl overflow-hidden shadow-inner">
                    <Image
                      src="/hero/WhatsApp Image 2026-09-23 at 10.16.39 PM.jpeg"
                      alt="Solusi Pembayaran Digital Dashboard Preview"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

              </div>
            </AnimateOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
