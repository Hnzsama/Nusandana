"use client";

import React, { useState } from "react";
import { Globe, X } from "lucide-react";

export default function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-red-700 via-red-600 to-rose-600 text-white text-xs sm:text-sm py-2 px-4 flex justify-between items-center z-50 shadow-xs">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 sm:gap-4">
        
        {/* Left: Social Media Icons */}
        <div className="flex items-center gap-2.5 font-medium">
          <span className="text-xs opacity-90 hidden md:inline font-semibold">Ikuti Nusandana:</span>
          <div className="flex items-center gap-1.5">
            {/* WhatsApp */}
            <a
              href="https://wa.me/6289666888288"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer flex items-center justify-center"
              title="WhatsApp Nusandana"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer flex items-center justify-center"
              title="Facebook Nusandana"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer flex items-center justify-center"
              title="TikTok Nusandana"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.24-2.61.87-5.26 2.89-6.91 1.48-1.22 3.42-1.84 5.36-1.74v4.06c-.83-.07-1.68.14-2.38.58-.93.58-1.53 1.62-1.57 2.72-.07 1.47.88 2.85 2.27 3.26 1.25.37 2.65.04 3.59-.83.74-.68 1.15-1.65 1.15-2.65.03-4.87.01-9.74.02-14.61z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/25 text-white transition-all cursor-pointer flex items-center justify-center"
              title="Instagram Nusandana"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Daftar | Login | Support */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold">
          <a
            href="/kontak"
            className="px-3 py-1 bg-white text-red-600 rounded-md font-bold hover:bg-red-50 transition-colors cursor-pointer shadow-xs"
          >
            Daftar
          </a>
          <span className="opacity-40">|</span>
          <a href="/kontak" className="hover:text-red-100 transition-colors cursor-pointer">
            Login
          </a>
          <span className="opacity-40">|</span>
          <a href="/kontak" className="hover:text-red-100 transition-colors cursor-pointer">
            Support
          </a>
          <span className="opacity-40 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-1 bg-white/15 px-2 py-0.5 rounded-full backdrop-blur-xs">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-bold">ID</span>
            <span className="opacity-60">EN</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="text-white/80 hover:text-white p-1 ml-2 transition-colors cursor-pointer"
        aria-label="Close banner"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
