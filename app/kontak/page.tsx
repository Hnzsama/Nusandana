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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <AnimateOnScroll animation="fade-up">
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Alamat Kantor Pusat</h4>
                    <p className="text-sm font-semibold text-gray-900 mt-1">
                      PT Gerbang Pembayaran Digital (Nusandana)
                    </p>
                    <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                      Bengkong Harapan I Blok K No 8, Kel. Bengkong Indah, Kec. Bengkong, Kota Batam, Kepulauan Riau.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={100}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Email Layanan Resmi</h4>
                    <p className="text-sm font-bold text-red-600 mt-1">
                      <a href="mailto:bisnis@nusandana.co.id" className="hover:underline">bisnis@nusandana.co.id</a>
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">Dukungan Pertanyaan Kemitraan & Integrasi System</p>
                  </div>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={200}>
                <div className="p-6 rounded-2xl bg-slate-50 border border-gray-200/80 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base">Nomor Resmi Nusandana</h4>
                    <div className="mt-2 space-y-1">
                      <a
                        href="https://wa.me/6289666888288"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-gray-900 hover:text-red-600 transition-colors block"
                      >
                        +62 896-6688-8288 (WhatsApp Official)
                      </a>
                      <a
                        href="https://wa.me/6289666888788"
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-bold text-gray-900 hover:text-red-600 transition-colors block"
                      >
                        +62 896-6688-8788 (WhatsApp Official)
                      </a>
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5">Layanan Customer Care & Support 24 Jam Nonstop</p>
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
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Email Perusahaan</label>
                        <input
                          type="email"
                          placeholder="nama@perusahaan.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Nama Perusahaan / Bisnis</label>
                      <input
                        type="text"
                        placeholder="Contoh: PT Maju Bersama"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 uppercase mb-1">Pesan / Pertanyaan</label>
                      <textarea
                        rows={4}
                        placeholder="Tuliskan kebutuhan bisnis Anda..."
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold text-sm shadow-md shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
