"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, PhoneCall, Headphones } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Text & Options */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-600">
                Konsultasi & Integrasi Gratis
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Siap Mengembangkan Transaksi Bisnis Anda Bersama Nusandana?
              </h2>
              <p className="text-gray-600 text-base font-medium">
                Hubungi tim spesialis gerbang pembayaran kami untuk mendapatkan solusi transaksi terbaik, bantuan integrasi API, dan penawaran khusus UMKM.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-gray-100 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Tim Sales Nusandana</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Konsultasi skema pembayaran & kemitraan: <span className="font-bold text-red-600">+62 896-6688-8288</span>
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-slate-50 border border-gray-100 cursor-pointer">
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg">Customer Support 24/7</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Layanan bantuan teknis: <span className="font-bold text-red-600">+62 896-6688-8788</span> atau <span className="font-bold text-red-600">bisnis@nusandana.co.id</span>
                </p>
              </div>
            </div>

            <div>
              <a
                href="/kontak"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-base shadow-lg shadow-red-600/30 hover:shadow-xl transition-all cursor-pointer"
              >
                Hubungi Tim Nusandana <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Image Feature with Fallback */}
          <div className="lg:col-span-5 relative cursor-pointer">
            <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/hero/WhatsApp Image 2026-09-23 at 10.16.39 PM.jpeg"
                alt="Solusi Pembayaran Digital Nusandana"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
