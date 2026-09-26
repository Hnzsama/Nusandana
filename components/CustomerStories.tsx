"use client";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Star, Quote } from "lucide-react";

const stories = [
  {
    quote: "Integrasi QRIS dan Payment Link dari Nusandana membuat proses pembayaran pembeli resto kami jauh lebih praktis. Konversi penjualan meningkat 45% dan bebas kendala transaksi!",
    author: "Budi Santoso",
    role: "Pemilik Usaha Kuliner",
    company: "Resto Rasa Nusantara",
    growth: "+45% Transaksi Online",
  },
  {
    quote: "Fitur Settlement H+0 (pencairan di hari yang sama) Nusandana sangat membantu arus kas modal usaha toko retail kami. Dana masuk tepat waktu dan laporan transaksi sangat transparan!",
    author: "Siti Rahmawati",
    role: "Owner Retail Fashion",
    company: "Batik Modern Nusantara",
    growth: "Settlement H+0 Instan",
  },
  {
    quote: "Tim Customer Care Nusandana sangat sigap dan proses integrasi API gerbang pembayaran hanya butuh waktu 1 hari. Aplikasi mobile kasirnya juga sangat mudah digunakan staff!",
    author: "Hendrik Wijaya",
    role: "Manager Operasional",
    company: "Toko Kelontong & Digital Store",
    growth: "Integrasi Fast 1-Day",
  },
];

export default function CustomerStories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Ulasan & Review Customer <span className="logo-indonesia inline-block">NUSANDANA</span>
            </h2>
            <p className="mt-4 text-base text-gray-600 font-medium">
              Testimoni dan pengalaman nyata para merchant serta pemilik bisnis yang bertumbuh bersama ekosistem pembayaran Nusandana.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((item, idx) => (
            <AnimateOnScroll key={item.author} animation="fade-up" delay={idx * 100}>
              <div className="bg-slate-50/70 p-8 rounded-2xl border border-gray-200/80 flex flex-col justify-between h-full hover:bg-white hover:shadow-xl hover:border-red-300 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-red-200 mb-3" />

                  <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.author}</h4>
                    <p className="text-xs text-gray-500">{item.role} • {item.company}</p>
                  </div>
                  <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100">
                    {item.growth}
                  </span>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
