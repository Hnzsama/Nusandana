"use client";

import React from "react";
import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  height?: string;
  className?: string;
}

export default function ImagePlaceholder({ label = "Gambar Placeholder", height = "h-64", className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`w-full ${height} bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-dashed border-gray-300 dark:border-slate-700 flex flex-col items-center justify-center p-4 text-center text-gray-400 dark:text-slate-500 transition-colors ${className}`}
    >
      <ImageIcon className="w-10 h-10 mb-2 opacity-60 stroke-[1.5]" />
      <span className="text-xs font-semibold uppercase tracking-wider">{label}</span>
    </div>
  );
}
