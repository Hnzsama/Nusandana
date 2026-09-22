"use client";

import React, { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Banknote,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Percent,
  Calendar,
  ShieldCheck,
  Building,
  Sparkles,
  ChevronRight,
} from "lucide-react";

export default function UMKMFinancingSection() {
  const [loanAmount, setLoanAmount] = useState(500000000);
  const [tenorMonths, setTenorMonths] = useState(12);

  const calculateMonthlyEst = () => {
    const ratePA = 0.16;
    const monthlyRate = ratePA / 12;
    const totalWithInterest = loanAmount * (1 + monthlyRate * tenorMonths);
    return Math.round(totalWithInterest / tenorMonths);
  };

  return (
    <div className="w-full bg-slate-50/70 dark:bg-slate-950 py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Hero Section matching Screenshot 03 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 text-xs font-bold uppercase tracking-wider">
              <Banknote className="w-4 h-4" /> Financing
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.15] tracking-tight">
              Akses modal yang Anda butuhkan untuk mengembangkan bisnis
            </h1>

            <p className="text-gray-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Atasi masalah arus kas yang menghambat pertumbuhan bisnis Anda dengan memanfaatkan solusi pembiayaan yang cepat dan fleksibel.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-6 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl cursor-pointer transition-all">
                Hubungi Sales <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 dark:border-slate-700 text-gray-800 dark:text-slate-200 hover:bg-gray-100 dark:hover:bg-slate-800 font-semibold px-6 py-6 rounded-xl cursor-pointer"
              >
                Simulasi Pinjaman <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Compliance Note */}
            <div className="pt-6 flex items-center gap-3 border-t border-gray-200 dark:border-slate-800">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <p className="text-xs text-gray-500 dark:text-slate-400">
                Terlisensi & diawasi oleh otoritas keuangan terkait. Data Anda terlindungi dengan enkripsi tingkat tinggi.
              </p>
            </div>
          </div>

          {/* Right Stat Highlight Cards matching Screenshot 03 */}
          <div className="lg:col-span-6 space-y-4">
            {/* Stat Box 1 */}
            <Card className="border-gray-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
              <CardContent className="p-6">
                <p className="text-xs text-gray-500 dark:text-slate-400 font-medium">Dapatkan pembiayaan hingga</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">80%</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-slate-300">dari total invoice Anda</span>
                </div>
              </CardContent>
            </Card>

            {/* Stat Box 2 with Approved Badge */}
            <Card className="border-blue-200 dark:border-blue-900 shadow-md hover:shadow-lg transition-shadow bg-blue-50/50 dark:bg-blue-950/30">
              <CardContent className="p-6">
                <p className="text-xs text-blue-800 dark:text-blue-300 font-medium">Penuhi kebutuhan dana dalam waktu</p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-4xl font-extrabold text-blue-900 dark:text-white">30 Days</span>
                  <Badge className="bg-emerald-500 text-white px-3 py-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Disetujui
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Stat Box 3 */}
            <Card className="border-gray-200 dark:border-slate-800 shadow-md hover:shadow-lg transition-shadow bg-white dark:bg-slate-900">
              <CardContent className="p-6">
                <p className="text-xs text-gray-500 dark:text-slate-400 font-medium">Dapatkan manfaat suku bunga rendah hingga</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">16% pa</span>
                  <span className="text-sm text-gray-500 dark:text-slate-400">per tahun</span>
                </div>
              </CardContent>
            </Card>

            {/* Interactive Approval Banner Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 text-white shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-yellow-300" />
              </div>
              <div>
                <h4 className="font-bold text-base">Disetujui</h4>
                <p className="text-xs text-blue-100">
                  Anda telah menerima pinjaman dana sebesar <span className="font-extrabold text-white">Rp 1.000.000.000</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Loan Calculator Section */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 lg:p-12 border border-gray-200 dark:border-slate-800 shadow-xl mb-16">
          <div className="max-w-3xl mb-8 space-y-2">
            <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">Simulasi Pembiayaan</Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
              Hitung Estimasi Pembiayaan Modal Usaha UMKM
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-slate-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sesuaikan nominal dan durasi sesuai kebutuhan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls Left */}
            <div className="lg:col-span-7 space-y-6">
              {/* Nominal Slider */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-gray-700 dark:text-slate-300">Jumlah Pinjaman:</span>
                  <span className="text-xl font-extrabold text-blue-600 dark:text-blue-400">
                    Rp {loanAmount.toLocaleString("id-ID")}
                  </span>
                </div>
                <input
                  type="range"
                  min={50000000}
                  max={2000000000}
                  step={50000000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2 bg-gray-200 dark:bg-slate-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-gray-400 font-medium">
                  <span>Rp 50 Juta</span>
                  <span>Rp 2 Miliar</span>
                </div>
              </div>

              {/* Tenor Options */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 dark:text-slate-300 block">
                  Jangka Waktu (Tenor):
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {[3, 6, 12, 24].map((tenor) => (
                    <button
                      key={tenor}
                      onClick={() => setTenorMonths(tenor)}
                      className={`py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        tenorMonths === tenor
                          ? "bg-blue-600 text-white border-blue-600 shadow-md"
                          : "bg-gray-50 dark:bg-slate-800 text-gray-700 dark:text-slate-300 border-gray-200 dark:border-slate-700 hover:bg-gray-100"
                      }`}
                    >
                      {tenor} Bulan
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimate Result Right */}
            <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 to-indigo-900 rounded-2xl p-6 text-white space-y-4 shadow-lg">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300">
                ESTIMASI ANGSURAN BULANAN
              </h4>
              <p className="text-3xl sm:text-4xl font-extrabold text-white">
                Rp {calculateMonthlyEst().toLocaleString("id-ID")} <span className="text-xs font-normal text-blue-200">/bulan</span>
              </p>
              <div className="text-xs text-blue-200 space-y-1 pt-2 border-t border-blue-700">
                <div className="flex justify-between">
                  <span>Suku Bunga Est:</span>
                  <span className="font-semibold text-white">16% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span>BIAYA PROVISI:</span>
                  <span className="font-semibold text-white">0% (Promo)</span>
                </div>
              </div>
              <Button className="w-full bg-white text-blue-900 hover:bg-blue-50 font-bold py-3 cursor-pointer">
                Ajukan Sekarang <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Fallback Graphic Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-gray-200 dark:border-slate-800 shadow-xs">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Proses Pengajuan Cepat</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
              <ImagePlaceholder label="Fallback Grafik Alur Pengajuan Pembiayaan" height="h-48" />
            </CardContent>
          </Card>

          <Card className="border-gray-200 dark:border-slate-800 shadow-xs">
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Syarat & Ketentuan Transparan</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ImagePlaceholder label="Fallback Grafik Dokumen Legalitas" height="h-48" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
