"use client";

import React, { useState } from "react";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Link2,
  ArrowRight,
  CheckCircle,
  CreditCard,
  Building2,
  Store,
  Wallet,
  Smartphone,
  Clock,
  ChevronRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function UMKMPaymentLinksSection() {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

  const paymentMethods = [
    { id: "va", name: "Transfer Bank", icon: Building2, count: "4 Bank" },
    { id: "cc", name: "Kartu Kredit", icon: CreditCard, count: "Visa, Mastercard, JCB" },
    { id: "retail", name: "Retail Outlets", icon: Store, count: "Alfamart, Indomaret" },
    { id: "ewallet", name: "E-wallet", icon: Wallet, count: "Gopay, OVO, Dana, ShopeePay" },
    { id: "debit", name: "Direct Debit", icon: Smartphone, count: "BRI, Mandiri" },
    { id: "paylater", name: "PayLater", icon: Clock, count: "Akulaku, Kredivo" },
  ];

  return (
    <div className="w-full bg-white dark:bg-slate-900 py-12 lg:py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Main Hero Section matching Screenshot 02 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Hero Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-xs font-bold uppercase tracking-wider">
              <Link2 className="w-4 h-4" /> Payment Link
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white leading-[1.15] tracking-tight">
              Terima pembayaran melalui tautan dan QR Code—tanpa perlu melakukan coding
            </h1>

            <p className="text-gray-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Buat dan kirim pembayaran single atau multiple melalui aplikasi pesan.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-6 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 cursor-pointer transition-all">
                Daftar Sekarang <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 dark:border-slate-700 text-gray-800 dark:text-slate-200 hover:bg-gray-50 dark:hover:bg-slate-800 font-semibold px-6 py-6 rounded-xl cursor-pointer"
              >
                Hubungi Sales <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Quick Benefits Bullet List */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-gray-100 dark:border-slate-800">
              {["Lorem ipsum dolor sit", "Consectetur adipiscing elit", "Sed do eiusmod tempor", "Ut labore et dolore"].map((text, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-gray-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Interactive Payment Link Demo Graphic matching Screenshot 02 */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-emerald-500/20 rounded-3xl blur-2xl pointer-events-none" />

              {/* Order Invoice Card */}
              <div className="relative z-10 bg-gray-50 dark:bg-slate-800/80 rounded-3xl p-6 border border-gray-200 dark:border-slate-700 shadow-xl space-y-6">
                <div className="border-b border-gray-200 dark:border-slate-700 pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-extrabold text-gray-900 dark:text-white">Rincian Pesanan</h3>
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">Aktif</Badge>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-slate-400 mt-1">Invoice #1691556435837</p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-0.5 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" /> Bayar sebelum 10 Desember 2026
                  </p>
                </div>

                {/* Items List */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs sm:text-sm text-gray-700 dark:text-slate-300">
                    <span>Lorem Ipsum Product A (1x)</span>
                    <span className="font-semibold">Rp 200.000</span>
                  </div>
                  <div className="flex justify-between text-xs sm:text-sm text-gray-700 dark:text-slate-300">
                    <span>Lorem Ipsum Mug (3x)</span>
                    <span className="font-semibold">Rp 305.000</span>
                  </div>
                </div>

                <div className="border-t border-dashed border-gray-200 dark:border-slate-700 pt-4 flex justify-between items-center">
                  <span className="text-sm font-bold text-gray-900 dark:text-white">Jumlah Total:</span>
                  <span className="text-xl font-extrabold text-blue-600 dark:text-blue-400">Rp 505.000</span>
                </div>
              </div>

              {/* Overlapping Checkout Payment Methods Gateway Window */}
              <div className="relative lg:-mt-24 lg:-ml-12 z-20 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-gray-200 dark:border-slate-700 shadow-2xl space-y-5">
                <div className="bg-blue-50 dark:bg-blue-950/50 p-4 rounded-2xl flex items-center justify-between">
                  <div>
                    <p className="text-xs text-blue-800 dark:text-blue-300 font-medium">Bayar sebelum 10 Des 2026 12:47 PM</p>
                    <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">Rp 505.000</p>
                  </div>
                  <ShieldCheck className="w-8 h-8 text-blue-600" />
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-slate-500 mb-3">
                    METODE PEMBAYARAN
                  </h4>
                  <div className="space-y-2">
                    {paymentMethods.map((method) => {
                      const IconComp = method.icon;
                      const isSelected = selectedMethod === method.id;
                      return (
                        <div
                          key={method.id}
                          onClick={() => setSelectedMethod(method.id)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? "border-blue-600 bg-blue-50/50 dark:bg-blue-950/40 shadow-xs"
                              : "border-gray-200 dark:border-slate-800 hover:border-gray-300 dark:hover:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800/40"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                              <IconComp className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                                {method.name}
                              </p>
                              <p className="text-[11px] text-gray-500 dark:text-slate-400">{method.count}</p>
                            </div>
                          </div>
                          <ChevronRight className={`w-4 h-4 text-gray-400 transition-transform ${isSelected ? "rotate-90 text-blue-600" : ""}`} />
                        </div>
                      );
                    })}
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl cursor-pointer shadow-md">
                  Bayar Rp 505.000
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="pt-16 border-t border-gray-100 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
              Fitur Utama Solusi Payment Link UMKM
            </h2>
            <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "1-Click Payment Link",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
                icon: Link2,
              },
              {
                title: "Multi-Channel Social Sales",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus ante dapibus diam.",
                icon: Zap,
              },
              {
                title: "Otomatisasi Rekonsiliasi",
                desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis sem at nibh elementum.",
                icon: ShieldCheck,
              },
            ].map((feature, i) => {
              const FIcon = feature.icon;
              return (
                <Card key={i} className="border-gray-200 dark:border-slate-800 hover:border-blue-500/40 hover:shadow-lg transition-all group">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <FIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400 leading-relaxed">{feature.desc}</p>
                    <ImagePlaceholder label="Fallback Interface Preview" height="h-40" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
