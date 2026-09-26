"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function KontakPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Navbar />

      <main className="flex-grow">
        <section className="py-16 sm:py-24 bg-gradient-to-b from-red-50/70 via-white to-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll animation="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-semibold uppercase tracking-wider mb-4">
                <MessageSquare className="w-4 h-4 text-red-600" /> Layanan Bantuan & Consult
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                Hubungi Tim Spesialis <span className="text-red-600">Nusandana</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Tim spesialis Nusandana siap memberikan konsultasi gratis dan bantuan integrasi gerbang pembayaran digital untuk mendukung kemajuan bisnis Anda.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Info Cards - Full Width Center */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimateOnScroll animation="fade-up">
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200/80 flex flex-col items-center text-center h-full justify-between hover:border-red-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 mb-4 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Alamat Kantor Pusat</h4>
                    <p className="text-xs font-bold text-red-600 mb-2">
                      PT Gerbang Pembayaran Digital (Nusandana)
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Bengkong Harapan I Blok K No 8, Kel. Bengkong Indah, Kec. Bengkong, Kota Batam, Kepulauan Riau.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200/80 flex flex-col items-center text-center h-full justify-between hover:border-red-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 mb-4 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Email Layanan Resmi</h4>
                    <p className="text-sm font-bold text-red-600 mb-2">
                      <a href="mailto:bisnis@nusandana.co.id" className="hover:underline">bisnis@nusandana.co.id</a>
                    </p>
                    <p className="text-xs text-gray-500">Dukungan Pertanyaan Kemitraan & Integrasi System</p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200/80 flex flex-col items-center text-center h-full justify-between hover:border-red-300 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 mb-4 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Nomor WhatsApp Resmi</h4>
                    <div className="space-y-1 my-2">
                      <a
                        href="https://wa.me/6289666888288"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-gray-900 hover:text-red-600 transition-colors block"
                      >
                        +62 896-6688-8288 (WhatsApp)
                      </a>
                      <a
                        href="https://wa.me/6289666888788"
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-bold text-gray-900 hover:text-red-600 transition-colors block"
                      >
                        +62 896-6688-8788 (WhatsApp)
                      </a>
                    </div>
                    <p className="text-xs text-gray-500">Customer Care & Support 24 Jam Nonstop</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
