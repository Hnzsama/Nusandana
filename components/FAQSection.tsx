"use client";

import React, { useState } from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: "faq-1",
    question: "Berapa lama proses integrasi payment gateway PaymentApp?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integrasi API dapat diselesaikan dalam waktu kurang dari 1 hari menggunakan SDK kami.",
  },
  {
    id: "faq-2",
    question: "Kanal pembayaran apa saja yang didukung?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kami mendukung Virtual Account (BCA, Mandiri, BNI, BRI, Permata), QRIS, E-Wallet, Kartu Kredit, dan Retail Outlet.",
  },
  {
    id: "faq-3",
    question: "Apakah sistem aman dan memiliki lisensi resmi?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. PaymentApp terlisensi resmi oleh Bank Indonesia dan tersertifikasi PCI-DSS Level 1.",
  },
  {
    id: "faq-4",
    question: "Bagaimana dengan kecepatan settlement dana transaksi?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Kami mendukung settlement instan Real-Time serta opsi settlement H+0 / H+1.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-slate-50/50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Pertanyaan yang Sering Diajukan <span className="text-red-600">(FAQ)</span>
            </h2>
            <p className="mt-3 text-base text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temukan jawaban seputar layanan kami.
            </p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={100}>
          <div className="bg-white rounded-2xl p-4 sm:p-8 border border-gray-200/80 shadow-sm space-y-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-gray-200/80 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-4 text-left font-bold text-gray-900 text-sm sm:text-base hover:text-red-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? "rotate-180 text-red-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 animate-in fade-in duration-150">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </AnimateOnScroll>

      </div>
    </section>
  );
}
