"use client";

import React, { useState } from "react";
import { Globe, X, Download, Share2 } from "lucide-react";

export default function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-red-700 via-red-600 to-rose-600 text-white text-xs sm:text-sm py-2 px-4 flex justify-between items-center z-50 shadow-xs">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 sm:gap-4">
        
        {/* Left: Social Media Links */}
        <div className="flex items-center gap-3 font-medium">
          <span className="text-xs opacity-90 hidden md:inline">Ikuti Nusandana:</span>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/6289666888288"
              target="_blank"
              rel="noreferrer"
              className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="WhatsApp / Download App"
            >
              <Download className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="px-1.5 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer font-bold text-[10px]"
              title="Facebook Nusandana"
            >
              FB
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noreferrer"
              className="px-1.5 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer font-bold text-[10px]"
              title="TikTok Nusandana"
            >
              TikTok
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="px-1.5 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer font-bold text-[10px]"
              title="Instagram Nusandana"
            >
              IG
            </a>
          </div>
        </div>

        {/* Right: Login | Support | Fitur Daftar */}
        <div className="flex items-center gap-3 sm:gap-4 text-xs font-semibold">
          <a href="/kontak" className="hover:text-red-100 transition-colors cursor-pointer">
            Login
          </a>
          <span className="opacity-40">|</span>
          <a href="/kontak" className="hover:text-red-100 transition-colors cursor-pointer">
            Support
          </a>
          <span className="opacity-40">|</span>
          <a
            href="/kontak"
            className="px-2.5 py-1 bg-white text-red-600 rounded-md font-bold hover:bg-red-50 transition-colors cursor-pointer shadow-xs"
          >
            Fitur Daftar
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

