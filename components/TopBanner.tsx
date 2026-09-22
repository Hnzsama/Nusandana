"use client";

import React, { useState } from "react";
import { Globe, X } from "lucide-react";

export default function TopBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-teal-500 text-white text-xs sm:text-sm py-2 px-4 flex justify-between items-center z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2 sm:gap-4">
        <p className="font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <a
            href="#signup"
            className="underline hover:text-blue-100 font-semibold transition-colors cursor-pointer"
          >
            Lorem ipsum &rarr;
          </a>
        </p>
        <div className="flex items-center gap-4 text-xs font-medium opacity-90">
          <a href="#login" className="hover:underline cursor-pointer">
            Login
          </a>
          <span className="opacity-40">|</span>
          <a href="#support" className="hover:underline cursor-pointer">
            Support
          </a>
          <span className="opacity-40">|</span>
          <div className="flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-xs">
            <Globe className="w-3.5 h-3.5" />
            <span className="font-semibold">ID</span>
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
