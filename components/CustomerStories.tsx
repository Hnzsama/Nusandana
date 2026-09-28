"use client";

import React, { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { Star, Quote, MessageSquare, X, ChevronLeft, ChevronRight } from "lucide-react";

interface CustomerStory {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  growth: string;
  imageSrc: string;
  imageAlt: string;
}

const stories: CustomerStory[] = [
  {
    id: 1,
    quote: "Bagus ko, gak ada kendala apa-apa. Penggunaan QRIS Nusandana dan bantuan transaksi saat perbaikan bank fast response!",
    author: "Jaslin Eng Eng",
    role: "Merchant Kuliner & Retail",
    company: "Selat Panjang",
    growth: "Bagus Gak Ada Kendala",
    imageSrc: "/review/nusandana-qris-umkm-ulasan-1.jpeg",
    imageAlt: "Bukti Chat WhatsApp Ulasan Customer Jaslin Eng Eng Nusandana QRIS UMKM 1",
  },
  {
    id: 2,
    quote: "Sui! Jadi saat aku gak di toko, karyawan aku pun tahu transaksi pembayaran ini berhasil. Kalau gak kan harus telepon suruh cek.",
    author: "Usaha Motor Lee",
    role: "Bengkel & Sparepart Motor",
    company: "Usaha Motor Lee",
    growth: "Notifikasi Otomatis",
    imageSrc: "/review/nusandana-qris-umkm-ulasan-2.jpeg",
    imageAlt: "Bukti Chat WhatsApp Ulasan Customer Usaha Motor Lee Nusandana QRIS UMKM 2",
  },
  {
    id: 3,
    quote: "Pemakaian QRIS Nusandana lancar. Dukungan CS ramah dan sigap kalau ada info kendala.",
    author: "Dessy Cooking",
    role: "Kuliner & Bakery Store",
    company: "Dessy One Bakery",
    growth: "Lancar Bebas Kendala",
    imageSrc: "/review/nusandana-qris-umkm-ulasan-3.jpeg",
    imageAlt: "Bukti Chat WhatsApp Ulasan Customer Dessy Cooking Nusandana QRIS UMKM 3",
  },
  {
    id: 4,
    quote: "Mantap ko! Pemakaian QRIS Soundbox Nusandana terbantu dan berguna sekali ko di toko.",
    author: "A2 Buah",
    role: "Toko Buah & Fresh Produce",
    company: "A2 Buah Store",
    growth: "Terbantu & Berguna Sekali",
    imageSrc: "/review/nusandana-qris-umkm-ulasan-4.jpeg",
    imageAlt: "Bukti Chat WhatsApp Ulasan Customer A2 Buah Nusandana QRIS UMKM 4",
  },
  {
    id: 5,
    quote: "Gak ada masalah, aman. So far penggunaan QRIS Nusandana bagus banget, Bintang 7! 🌟",
    author: "Wrds Kitchen",
    role: "Resto & Kitchen Catering",
    company: "Wrds Kitchen",
    growth: "Rating Bintang 7 🌟",
    imageSrc: "/review/nusandana-qris-umkm-ulasan-5.jpeg",
    imageAlt: "Bukti Chat WhatsApp Ulasan Customer Wrds Kitchen Nusandana QRIS UMKM 5",
  },
  {
    id: 6,
    quote: "Bagus ko, sekarang gak was-was lagi setiap customer bayar sudah ada notifikasinya. Kebantu banget pakai QRIS Nusandana ini ko! 👍",
    author: "Risol Missqueen",
    role: "UMKM Snack & Food Business",
    company: "Risol Missqueen",
    growth: "Gak Was-was Ada Notif 👍",
    imageSrc: "/review/nusandana-qris-umkm-ulasan-6.jpeg",
    imageAlt: "Bukti Chat WhatsApp Ulasan Customer Risol Missqueen Nusandana QRIS UMKM 6",
  },
  {
    id: 7,
    quote: "Bagus hia 👍👍. Penggunaan QRIS Nusandana lancar dan sangat membantu pembayaran usaha resto kami.",
    author: "Kampong Delights",
    role: "Restoran & Family Dining",
    company: "Kampong Delights",
    growth: "Penggunaan QRIS Lancar",
    imageSrc: "/review/nusandana-qris-umkm-ulasan-7.jpeg",
    imageAlt: "Bukti Chat WhatsApp Ulasan Customer Kampong Delights Nusandana QRIS UMKM 7",
  },
];

export default function CustomerStories() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex(activeModalIndex === 0 ? stories.length - 1 : activeModalIndex - 1);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeModalIndex !== null) {
      setActiveModalIndex(activeModalIndex === stories.length - 1 ? 0 : activeModalIndex + 1);
    }
  };

  return (
    <section className="py-20 bg-white relative">
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

        {/* 6 Customer Review Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((item, idx) => (
            <AnimateOnScroll key={item.id} animation="fade-up" delay={idx * 80}>
              <div className="bg-slate-50/80 p-6 sm:p-7 rounded-2xl border border-gray-200/80 flex flex-col justify-between h-full hover:bg-white hover:shadow-xl hover:border-red-300 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2.5 py-0.5 rounded-full border border-gray-200">
                      Terverifikasi
                    </span>
                  </div>

                  <Quote className="w-7 h-7 text-red-200 mb-3" />

                  <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-gray-200/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.author}</h4>
                      <p className="text-xs text-gray-500">{item.role} • {item.company}</p>
                    </div>
                    <span className="text-xs font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md border border-red-100 shrink-0">
                      {item.growth}
                    </span>
                  </div>

                  {/* Clean Attachment Button using site brand red theme */}
                  <button
                    onClick={() => setActiveModalIndex(idx)}
                    className="w-full py-2.5 px-3 rounded-xl bg-red-50 hover:bg-red-600 text-red-600 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all border border-red-100 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Lihat Bukti Chat WA ({item.author})
                  </button>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

      </div>

      {/* Clean & Elegant WhatsApp Review Modal Lightbox */}
      {activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalIndex(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-2xl w-full p-5 shadow-2xl space-y-4 border border-gray-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div>
                <h3 className="font-bold text-gray-900 text-base">
                  Bukti Chat WhatsApp &ndash; {stories[activeModalIndex].author}
                </h3>
                <p className="text-xs text-gray-500">
                  {stories[activeModalIndex].role} &bull; {stories[activeModalIndex].company}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-medium">
                  {activeModalIndex + 1} / {stories.length}
                </span>
                <button
                  onClick={() => setActiveModalIndex(null)}
                  className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image View */}
            <div className="relative flex items-center justify-center bg-slate-900 rounded-xl p-3 min-h-[350px] max-h-[70vh] overflow-hidden">
              <img
                src={stories[activeModalIndex].imageSrc}
                alt={stories[activeModalIndex].imageAlt}
                className="max-h-[65vh] w-auto max-w-full object-contain rounded-lg shadow-md"
              />

              {/* Navigation Controls */}
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-red-600 text-white border border-slate-700 transition-colors shadow-lg cursor-pointer"
                title="Sebelumnya"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-red-600 text-white border border-slate-700 transition-colors shadow-lg cursor-pointer"
                title="Berikutnya"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between pt-2 text-xs text-gray-500 border-t border-gray-100">
              <span className="text-gray-500 font-medium">
                Bukti Chat Terverifikasi WhatsApp Merchant Nusandana
              </span>
              <button
                onClick={() => setActiveModalIndex(null)}
                className="px-4 py-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
