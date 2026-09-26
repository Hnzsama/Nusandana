"use client";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Headphones, Mail, Share2, BookOpen } from "lucide-react";

const scaleItems = [
  {
    icon: <Headphones className="w-6 h-6 text-red-600" />,
    title: "Customer Care Nusandana",
    desc: "Layanan bantuan Customer Care 24/7 dan pendampingan teknis integrasi gerbang pembayaran untuk kelancaran transaksi bisnis Anda.",
  },
  {
    icon: <Mail className="w-6 h-6 text-red-600" />,
    title: "Email Support & Laporan Otomatis",
    desc: "Laporan transaksi harian otomatis dikirimkan ke email Anda, notifikasi pencairan dana, dan bantuan support responsif.",
  },
  {
    icon: <Share2 className="w-6 h-6 text-red-600" />,
    title: "Sosial Media & Komunitas Resmi",
    desc: "Saluran komunikasi sosial media resmi Nusandana untuk informasi promo, pembaruan sistem, dan jaringan komunitas merchant.",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-red-600" />,
    title: "Tutorial Penggunaan Aplikasi Nusandana",
    desc: "Panduan praktis dan video tutorial langkah demi langkah penggunaan aplikasi mobile Nusandana serta fitur kasir.",
  },
];

export default function ScaleFeatures() {
  return (
    <section className="py-20 bg-slate-50/70 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimateOnScroll animation="fade-up">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Layanan & Dukungan Fitur <span className="logo-indonesia inline-block">NUSANDANA</span>
            </h2>
            <p className="mt-4 text-base text-gray-600 font-medium">
              Fasilitas lengkap pendampingan bisnis, tutorial penggunaan aplikasi, hingga layanan Customer Care yang siap membantu Anda.
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
