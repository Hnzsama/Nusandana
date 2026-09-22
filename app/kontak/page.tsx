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
        <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-50/70 via-white to-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll animation="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
                <MessageSquare className="w-4 h-4 text-blue-600" /> Layanan Bantuan & Consult
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
                Hubungi Tim Spesialis <span className="text-blue-600">Nusandana</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tim kami siap memberikan konsultasi integrasi gratis untuk bisnis Anda.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <AnimateOnScroll animation="fade-up">
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Alamat Kantor Pusat</h4>
                    <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                      Sudirman Central Business District (SCBD) Tower A, Lt. 28, Jakarta Selatan 12190
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Email Layanan</h4>
                    <p className="text-sm text-gray-600 mt-1">support@nusandana.co</p>
                    <p className="text-sm text-gray-600">sales@nusandana.co</p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Hotline Support</h4>
                    <p className="text-sm text-gray-600 mt-1">+62 (021) 555-8888</p>
                    <p className="text-xs text-gray-400 mt-0.5">Senin - Minggu, 24 Jam Nonstop</p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Kirim Pesan</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Nama Lengkap</label>
                        <input
                          type="text"
                          placeholder="Nama Anda"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Perusahaan</label>
                        <input
                          type="email"
                          placeholder="nama@perusahaan.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Nama Perusahaan / Bisnis</label>
                      <input
                        type="text"
                        placeholder="Contoh: PT Maju Bersama"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Pesan / Pertanyaan</label>
                      <textarea
                        rows={4}
                        placeholder="Tuliskan kebutuhan bisnis Anda..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" /> Kirim Pesan Konsultasi
                    </button>
                  </form>
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
