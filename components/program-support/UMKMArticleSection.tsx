"use client";

import React, { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bookmark, Share2, Clock, Calendar, CheckCircle2, ChevronRight, User, Mail } from "lucide-react";

export default function UMKMArticleSection() {
  const [activeCategory, setActiveCategory] = useState("Insights");

  const categories = ["Company Updates", "Product Updates", "Insights", "Life at PaymentApp"];

  const tocItems = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor",
    "Ut labore et dolore magna",
    "Kesimpulan & Langkah Selanjutnya",
  ];

  return (
    <div className="w-full bg-slate-50/50 dark:bg-slate-950 py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Hero Section */}
        <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 md:p-12 text-white mb-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <Badge className="bg-blue-500/20 text-blue-200 border-blue-400/30 mb-4 px-3 py-1 text-xs uppercase tracking-wider">
              Blog & Program Support
            </Badge>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Blog & Panduan Solusi Pembayaran UMKM
            </h1>
            <p className="text-blue-100 text-base md:text-lg mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-white text-blue-900 hover:bg-blue-50 cursor-pointer font-bold shadow-md">
                Jelajahi Artikel <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <button
                className="px-5 py-2.5 rounded-xl border border-white/40 bg-white/10 hover:bg-white hover:text-blue-900 text-white font-bold text-sm transition-all duration-200 cursor-pointer shadow-sm flex items-center gap-2"
              >
                <Mail className="w-4 h-4" /> Langganan Newsletter
              </button>
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center gap-2 pb-4 mb-8 border-b border-gray-200 dark:border-slate-800">
          <span className="text-sm font-semibold text-gray-500 dark:text-slate-400 mr-2">Categories:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                  : "bg-white dark:bg-slate-900 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 border border-gray-200 dark:border-slate-800"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Article Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Sidebar - Contributor & TOC */}
          <div className="lg:col-span-4 space-y-6">
            {/* Contributor Card */}
            <Card className="border-gray-200 dark:border-slate-800 shadow-xs">
              <CardContent className="p-6">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-4">
                  Contributors
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20">
                    <User className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white text-base">paymentapp Team</h4>
                    <p className="text-xs text-gray-500 dark:text-slate-400">Lorem ipsum editorial team</p>
                  </div>
                </div>
                <p className="text-xs text-gray-600 dark:text-slate-400 leading-relaxed mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
                <Button variant="outline" size="sm" className="w-full cursor-pointer text-xs">
                  Lihat Profil Penulis
                </Button>
              </CardContent>
            </Card>

            {/* Table of Contents (Sticky) */}
            <div className="sticky top-28">
              <Card className="border-gray-200 dark:border-slate-800 shadow-xs">
                <CardContent className="p-6">
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    Daftar Isi Artikel
                  </h3>
                  <nav className="space-y-2">
                    {tocItems.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#section-${idx + 1}`}
                        className="flex items-center gap-2 text-xs text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-1.5 transition-colors group cursor-pointer"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-0.5" />
                        <span>{item}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="mt-6 pt-6 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between">
                    <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 cursor-pointer">
                      <Bookmark className="w-4 h-4" /> Simpan
                    </button>
                    <button className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-blue-600 cursor-pointer">
                      <Share2 className="w-4 h-4" /> Bagikan
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Main Column - Article Content */}
          <div className="lg:col-span-8">
            <article className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-slate-800 shadow-xs space-y-8">
              {/* Article Header */}
              <div>
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-600" /> November 13, 2026
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-blue-600" /> 3 mins read
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                  Sederhanakan Sistem Pembayaran UMKM Anda dengan PaymentApp
                </h1>
                <p className="text-gray-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </p>
              </div>

              {/* Main Banner Image Placeholder */}
              <ImagePlaceholder
                label="Fallback Artikel Hero Image - Pembayaran UMKM"
                height="h-72 sm:h-96"
                className="shadow-inner"
              />

              {/* Section 1 */}
              <div id="section-1" className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
                  1. Lorem ipsum dolor sit amet
                </h2>
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                </p>
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor.
                </p>
              </div>

              {/* Highlight Callout Box */}
              <div className="p-6 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-600 space-y-2">
                <h4 className="font-bold text-blue-900 dark:text-blue-300 text-sm sm:text-base">
                  Poin Kunci Solusi UMKM
                </h4>
                <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 leading-relaxed italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                </p>
              </div>

              {/* Section 2 */}
              <div id="section-2" className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
                  2. Consectetur adipiscing elit
                </h2>
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
                </p>

                {/* Feature Check List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {[
                    "Lorem ipsum dolor sit amet",
                    "Consectetur adipiscing elit",
                    "Sed do eiusmod tempor",
                    "Ut labore et dolore magna",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-3 rounded-xl bg-gray-50 dark:bg-slate-800/60 border border-gray-100 dark:border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-xs font-medium text-gray-800 dark:text-slate-200">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Placeholder 2 */}
              <ImagePlaceholder
                label="Fallback Grafik Artikel - Integrasi Sistem Pembayaran"
                height="h-64"
              />

              {/* Section 3 & Conclusion */}
              <div id="section-3" className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
                  3. Sed do eiusmod tempor & Kesimpulan
                </h2>
                <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                  Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.
                </p>
              </div>

              {/* Bottom CTA Card */}
              <div className="p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl font-bold">Siap Mengembangkan Bisnis UMKM Anda?</h3>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                <Button className="bg-white text-blue-600 hover:bg-blue-50 font-bold shrink-0 cursor-pointer shadow-md">
                  Mulai Sekarang <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
