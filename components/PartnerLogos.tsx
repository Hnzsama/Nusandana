"use client";

import React from "react";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export default function PartnerLogos() {
  return (
    <section className="py-14 bg-white border-y border-gray-100/80">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll animation="fade-in">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-10">
            DIPERCAYA OLEH 500.000+ MERCHANT & MITRA KEMITRAAN NUSANDANA
          </p>

          {/* Logo Grid matching user screenshot */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
            
            {/* 1. Qoala */}
            <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <svg className="h-8 w-auto" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Koala Icon */}
                <circle cx="20" cy="20" r="14" fill="#FF7A00" />
                <circle cx="12" cy="12" r="5" fill="#FF7A00" />
                <circle cx="28" cy="12" r="5" fill="#FF7A00" />
                <circle cx="12" cy="12" r="2.5" fill="#FFE5D1" />
                <circle cx="28" cy="12" r="2.5" fill="#FFE5D1" />
                <ellipse cx="20" cy="22" rx="4" ry="5" fill="#1E293B" />
                <circle cx="16" cy="17" r="1.5" fill="#FFFFFF" />
                <circle cx="24" cy="17" r="1.5" fill="#FFFFFF" />
                {/* Text */}
                <text x="42" y="28" fill="#0F172A" fontSize="24" fontWeight="800" fontFamily="sans-serif">Qoala</text>
              </svg>
            </div>

            {/* 2. Bukalapak */}
            <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <svg className="h-7 w-auto" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Exclamation Icon */}
                <path d="M12 8C12 5.79086 13.7909 4 16 4H20C22.2091 4 24 5.79086 24 8V20C24 22.2091 22.2091 24 20 24H16C13.7909 24 12 22.2091 12 20V8Z" fill="#E11D48" />
                <circle cx="18" cy="32" r="4" fill="#E11D48" />
                {/* Text */}
                <text x="32" y="28" fill="#1E293B" fontSize="24" fontWeight="800" fontFamily="sans-serif">bukalapak</text>
              </svg>
            </div>

            {/* 3. Traveloka */}
            <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <svg className="h-8 w-auto" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bird Icon */}
                <path d="M5 24C12 24 18 18 22 10C24 16 28 22 35 22C28 25 24 30 22 36C18 30 12 25 5 24Z" fill="#00A5EC" />
                {/* Text */}
                <text x="40" y="27" fill="#334155" fontSize="22" fontWeight="600" fontFamily="sans-serif">traveloka</text>
              </svg>
            </div>

            {/* 4. Grab */}
            <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <svg className="h-8 w-auto" viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="5" y="29" fill="#00B14F" fontSize="30" fontWeight="900" fontStyle="italic" fontFamily="sans-serif">Grab</text>
              </svg>
            </div>

            {/* 5. Telkomsel */}
            <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <svg className="h-7 w-auto" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Diamond Icon */}
                <path d="M16 4L28 16L16 36L4 16L16 4Z" fill="#ED0226" />
                <path d="M16 10L23 17L16 30L9 17L16 10Z" fill="#FF7A00" />
                {/* Text */}
                <text x="34" y="27" fill="#ED0226" fontSize="22" fontWeight="800" fontFamily="sans-serif">Telkomsel</text>
              </svg>
            </div>

            {/* 6. Ciputra */}
            <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <svg className="h-8 w-auto" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* C Oval Icon */}
                <path d="M24 10C14 10 6 15 6 22C6 29 14 34 24 34C30 34 35 32 38 29L32 25C30 27 27 28 24 28C18 28 12 25 12 22C12 19 18 16 24 16C27 16 30 17 32 19L38 15C35 12 30 10 24 10Z" fill="#00875A" />
                <path d="M4 22H42" stroke="#00875A" strokeWidth="2" />
                {/* Text */}
                <text x="46" y="27" fill="#1E3A8A" fontSize="20" fontWeight="700" fontFamily="serif" letterSpacing="1">CIPUTRA</text>
              </svg>
            </div>

            {/* 7. Garuda Indonesia */}
            <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <svg className="h-8 w-auto" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Wing Icon */}
                <path d="M12 24C20 18 30 14 42 12C32 16 24 22 18 30C16 26 14 24 12 24Z" fill="#002B49" />
                <path d="M8 20C18 14 28 10 40 8C30 12 22 18 16 26C13 22 11 20 8 20Z" fill="#0085CA" />
                {/* Text */}
                <text x="46" y="26" fill="#1E293B" fontSize="18" fontWeight="600" fontFamily="serif">Garuda Indonesia</text>
              </svg>
            </div>

            {/* 8. Tokopedia */}
            <div className="h-10 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300 transform hover:scale-105 cursor-pointer">
              <svg className="h-8 w-auto" viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Owl Bag Icon */}
                <rect x="6" y="10" width="24" height="24" rx="6" fill="#03AC0E" />
                <circle cx="14" cy="18" r="3" fill="#FFFFFF" />
                <circle cx="22" cy="18" r="3" fill="#FFFFFF" />
                <circle cx="14" cy="18" r="1.5" fill="#000000" />
                <circle cx="22" cy="18" r="1.5" fill="#000000" />
                <path d="M16 24C16 24 18 26 20 24" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
                {/* Text */}
                <text x="36" y="27" fill="#03AC0E" fontSize="21" fontWeight="800" fontFamily="sans-serif">tokopedia</text>
              </svg>
            </div>

          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
