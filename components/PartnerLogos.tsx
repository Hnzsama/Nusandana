"use client";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

const mitraImages = [
  { name: "Inter Supermarket", src: "/mitra/inter-supermarket.jpeg" },
  { name: "Level Supermarket", src: "/mitra/level-supermarket.jpeg" },
  { name: "Mie Ayam Bakso Arema 89", src: "/mitra/mie-ayam-arema.jfif" },
  { name: "Guard Store", src: "/mitra/guard-store.jfif" },
  { name: "CRN 86", src: "/mitra/crn-86.jfif" },
];

export default function PartnerLogos() {
  return (
    <section className="py-14 bg-white border-y border-gray-100/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-in">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">
            DIPERCAYA OLEH 500.000+ MERCHANT & MITRA KEMITRAAN NUSANDANA
          </p>

          {/* Logo Grid - Only Real Mitra Images */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 items-center justify-items-center max-w-6xl mx-auto">
            {mitraImages.map((mitra, idx) => (
              <div
                key={idx}
                className="h-20 w-full max-w-[200px] p-3 bg-white border border-gray-200/90 rounded-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-105 cursor-pointer shadow-xs hover:shadow-md"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={mitra.src}
                  alt={mitra.name}
                  className="max-h-14 max-w-full object-contain rounded-lg"
                />
              </div>
            ))}
          </div>

        </AnimateOnScroll>
      </div>
    </section>
  );
}
