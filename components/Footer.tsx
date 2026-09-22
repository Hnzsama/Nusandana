"use client";

import React from "react";
import Link from "next/link";
import { ShieldAlert, Globe, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs leading-relaxed">
      {/* Main Footer Links */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand & Language */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                N
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Nusan<span className="text-blue-500">dana</span>
              </span>
            </Link>

            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg text-slate-300 font-medium">
              <span className="text-sm">🇮🇩</span>
              <span>Indonesia</span>
            </div>

            <p className="text-slate-500 text-xs">
              Infrastruktur pembayaran digital terdepan untuk bisnis di Indonesia dan Asia Tenggara.
            </p>
          </div>

          {/* Produk */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Produk</h4>
            <ul className="space-y-2 font-medium text-slate-400">
              <li><Link href="/payments" className="hover:text-blue-400 transition-colors cursor-pointer">Payments</Link></li>
              <li><Link href="/program-support/payment-links" className="hover:text-blue-400 transition-colors cursor-pointer">Payment Links</Link></li>
              <li><Link href="/payments" className="hover:text-blue-400 transition-colors cursor-pointer">In-person Payments</Link></li>
              <li><Link href="/payments" className="hover:text-blue-400 transition-colors cursor-pointer">Subscriptions</Link></li>
              <li><Link href="/payments" className="hover:text-blue-400 transition-colors cursor-pointer">Batch Payouts</Link></li>
              <li><Link href="/payments" className="hover:text-blue-400 transition-colors cursor-pointer">Automated Payouts</Link></li>
              <li><Link href="/payments" className="hover:text-blue-400 transition-colors cursor-pointer">Cross Border</Link></li>
              <li><Link href="/payments" className="hover:text-blue-400 transition-colors cursor-pointer">Expense Management</Link></li>
            </ul>
          </div>

          {/* Solusi */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Solusi</h4>
            <ul className="space-y-2 font-medium text-slate-400">
              <li><Link href="/program-support" className="hover:text-blue-400 transition-colors cursor-pointer font-semibold text-blue-400">Program Support UMKM</Link></li>
              <li><Link href="/program-support/payment-links" className="hover:text-blue-400 transition-colors cursor-pointer">Payment Links UMKM</Link></li>
              <li><Link href="/program-support/pembiayaan" className="hover:text-blue-400 transition-colors cursor-pointer">Pembiayaan Modal Usaha</Link></li>
              <li><Link href="/payments" className="hover:text-blue-400 transition-colors cursor-pointer">E-Commerce</Link></li>
              <li><Link href="/payments" className="hover:text-blue-400 transition-colors cursor-pointer">SaaS & Digital</Link></li>
            </ul>
          </div>

          {/* Panduan */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Panduan</h4>
            <ul className="space-y-2 font-medium text-slate-400">
              <li><Link href="/program-support/artikel" className="hover:text-blue-400 transition-colors cursor-pointer">Blog & Artikel UMKM</Link></li>
              <li><Link href="/mitra" className="hover:text-blue-400 transition-colors cursor-pointer">Events</Link></li>
              <li><Link href="/kontak" className="hover:text-blue-400 transition-colors cursor-pointer">Pusat Bantuan</Link></li>
              <li><Link href="/program-support" className="hover:text-blue-400 transition-colors cursor-pointer">Dokumentasi API</Link></li>
            </ul>
          </div>

          {/* Perusahaan & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Perusahaan</h4>
            <ul className="space-y-2 font-medium text-slate-400">
              <li><Link href="/program-support/artikel" className="hover:text-blue-400 transition-colors cursor-pointer">Portal Berita</Link></li>
              <li><Link href="/mitra" className="hover:text-blue-400 transition-colors cursor-pointer">Mitra Kami</Link></li>
              <li><Link href="/lisensi" className="hover:text-blue-400 transition-colors cursor-pointer">Tentang Kami</Link></li>
              <li><Link href="/mitra" className="hover:text-blue-400 transition-colors cursor-pointer">Karir</Link></li>
              <li><Link href="/lisensi" className="hover:text-blue-400 transition-colors cursor-pointer">Lisensi BI</Link></li>
              <li><Link href="/lisensi" className="hover:text-blue-400 transition-colors cursor-pointer">Kebijakan Privasi</Link></li>
            </ul>
          </div>
        </div>

        {/* Security & Licensing Badges */}
        <div className="pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-6">
          <p className="text-slate-500 font-medium">
            &copy; 2026 Nusandana (PT Nusandana Digital Pembayaran). Hak cipta dilindungi undang-undang.
          </p>

          <div className="flex items-center gap-4 text-slate-400 font-semibold">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
              <Globe className="w-3.5 h-3.5" /> Portal Web
            </Link>
            <Link href="/mitra" className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
              <MessageCircle className="w-3.5 h-3.5" /> Komunitas
            </Link>
            <Link href="/kontak" className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
              <Mail className="w-3.5 h-3.5" /> Kontak
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fraud Warning Banner */}
      <div className="bg-amber-500/10 border-t border-amber-500/20 py-3.5 px-4 text-amber-200 text-xs">
        <div className="container mx-auto flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <p className="leading-tight">
            <strong className="text-amber-400 font-bold">Waspadalah terhadap Upaya Penipuan!</strong> Nusandana adalah perusahaan penyedia gerbang pembayaran resmi dan tidak pernah meminta kata sandi, OTP, atau memberikan penawaran investasi perorangan. Jika Anda menemukan aktivitas mencurigakan, segera laporkan ke WhatsApp resmi kami di <span className="underline">+62 813-8474-8739</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
