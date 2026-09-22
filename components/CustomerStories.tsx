"use client";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Star, Quote } from "lucide-react";

const stories = [
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integrasi payment link paymentapp meningkatkan konversi penjualan online kami hingga 40%.",
    author: "Budi Santoso",
    role: "CEO & Founder",
    company: "Kopi Kenangan Nusantara",
    growth: "+40% Conversion Rate",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kecepatan settlement real-time membantu perputaran modal usaha toko kami jauh lebih cepat.",
    author: "Siti Rahmawati",
    role: "Operational Director",
    company: "Batik Fashion Indonesia",
    growth: "Real-Time Settlement",
  },
  {
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dokumentasi API sangat jelas, tim engineering kami dapat melakukan integrasi penuh dalam 1 hari.",
    author: "Hendrik Wijaya",
    role: "CTO",
    company: "Logistik Cepat Asia",
    growth: "1 Day Integration",
  },
];

export default function CustomerStories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Kisah Sukses <span className="text-blue-600">Mitra Kemitraan</span>
            </h2>
            <p className="mt-4 text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pengalaman nyata bisnis yang bertumbuh bersama PaymentApp.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((item, idx) => (
            <AnimateOnScroll key={item.author} animation="fade-up" delay={idx * 100}>
              <div className="bg-slate-50/70 p-8 rounded-2xl border border-gray-200/80 flex flex-col justify-between h-full hover:bg-white hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-blue-200 mb-3" />

                  <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                    "{item.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200/60 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.author}</h4>
                    <p className="text-xs text-gray-500">{item.role} • {item.company}</p>
                  </div>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">
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
