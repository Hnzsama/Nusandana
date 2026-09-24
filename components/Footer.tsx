"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldAlert, Globe, Mail, MessageCircle, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs leading-relaxed border-t border-slate-900">
      {/* Main Footer Links */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Top Company Identity & Licensing Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 mb-12 border-b border-slate-900 items-start">
          
          {/* Brand & Address */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-wider">
                  NUSAN<span className="text-red-500">DANA</span>
                </span>
              </div>
            </Link>

            <div className="flex items-start gap-2.5 text-slate-300 pt-2">
              <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs leading-normal">
                <p className="font-bold text-white">Alamat Kantor Pusat Nusandana:</p>
                <p className="text-slate-400">
                  Bengkong Harapan I Blok K No 8, Kel. Bengkong Indah, Kec. Bengkong, Kota Batam, Kepulauan Riau.
                </p>
              </div>
            </div>

            {/* Official Support Numbers */}
            <div className="pt-2 space-y-1.5">
              <p className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">Layanan Contact Us & Nomor Resmi Nusandana:</p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/6289666888288"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-red-500 transition-all font-mono font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" /> +62 896-6688-8288
                </a>
                <a
                  href="https://wa.me/6289666888788"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-red-500 transition-all font-mono font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" /> +62 896-6688-8788
                </a>
              </div>
            </div>
          </div>

          {/* Social Media & Contact Us Info */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Contact Us & Media Sosial</h4>
            <p className="text-slate-400 text-xs">
              Hubungi tim kami atau ikuti media sosial resmi Nusandana untuk update layanan terbaru:
            </p>
            <div className="space-y-2 pt-1 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-slate-300">Email: <a href="mailto:bisnis@nusandana.co.id" className="text-red-400 hover:underline">bisnis@nusandana.co.id</a></span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">WhatsApp Support: <strong className="text-white">+62 896-6688-8288</strong></span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Sosial Media Resmi:</span>
              <div className="flex items-center gap-2 text-xs font-semibold">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-red-500 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  Instagram
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-red-500 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  TikTok
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-red-500 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  Facebook
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 hover:border-red-500 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5">
                  YouTube
                </a>
              </div>
            </div>
          </div>

          {/* Licensing & Regulatory Badges (Bank Indonesia, ASPI, APPUI logos from public/logo) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Lisensi & Regulasi Resmi</h4>
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3.5">
              
              {/* Bank Indonesia Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-10 rounded-lg bg-slate-800/80 p-1 flex items-center justify-center shrink-0 border border-slate-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo/Bank Indonesia Logo - White - zonalogo.com.png"
                    alt="Logo Bank Indonesia"
                    className="max-h-7 w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-xs">Bank Indonesia (BI)</p>
                  <p className="text-[10px] text-slate-400">Terlisensi & Diawasi Pembayaran Digital</p>
                </div>
              </div>

              {/* ASPI Logo */}
              <div className="flex items-center gap-3 pt-2.5 border-t border-slate-800">
                <div className="w-12 h-10 rounded-lg bg-white p-1 flex items-center justify-center shrink-0 border border-slate-700">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo/aspi-logo.png"
                    alt="Logo ASPI"
                    className="max-h-7 w-auto object-contain"
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-xs">Anggota ASPI</p>
                  <p className="text-[10px] text-slate-400">Asosiasi Sistem Pembayaran Indonesia</p>
                </div>
              </div>

              {/* APPUI Logo */}
              <div className="flex items-center gap-3 pt-2.5 border-t border-slate-800">
                <div className="w-12 h-10 rounded-lg bg-slate-950 p-0.5 flex items-center justify-center shrink-0 border border-slate-700 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/logo/Logo_APPUI.png"
                    alt="Logo APPUI"
                    className="w-full h-full object-contain scale-110"
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-xs">Anggota APPUI</p>
                  <p className="text-[10px] text-slate-400">Asosiasi Penyelenggara Pengiriman Uang Indonesia</p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-12">
          {/* Produk */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Produk</h4>
            <ul className="space-y-2 font-medium text-slate-400">
              <li><Link href="/payments" className="hover:text-red-400 transition-colors cursor-pointer">Kanal Pembayaran</Link></li>
              <li><Link href="/program-support/payment-links" className="hover:text-red-400 transition-colors cursor-pointer">Payment Links UMKM</Link></li>
              <li><Link href="/payments?cat=va" className="hover:text-red-400 transition-colors cursor-pointer">Virtual Account Multi-Bank</Link></li>
              <li><Link href="/payments?cat=qris-wallet" className="hover:text-red-400 transition-colors cursor-pointer">QRIS Instant & E-Wallet</Link></li>
              <li><Link href="/payments?cat=all" className="hover:text-red-400 transition-colors cursor-pointer">Disbursement & Payouts</Link></li>
            </ul>
          </div>

          {/* Solusi */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Solusi Program</h4>
            <ul className="space-y-2 font-medium text-slate-400">
              <li><Link href="/program-support" className="hover:text-red-400 transition-colors cursor-pointer font-semibold text-red-400">Program Support UMKM</Link></li>
              <li><Link href="/program-support" className="hover:text-red-400 transition-colors cursor-pointer">Settlement H+0 Instan</Link></li>
              <li><Link href="/program-support/payment-links" className="hover:text-red-400 transition-colors cursor-pointer">Payment Links UMKM</Link></li>
              <li><Link href="/payments" className="hover:text-red-400 transition-colors cursor-pointer">Integrasi POS & Toko Online</Link></li>
            </ul>
          </div>

          {/* Panduan */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Panduan & Support</h4>
            <ul className="space-y-2 font-medium text-slate-400">
              <li><Link href="/program-support/artikel" className="hover:text-red-400 transition-colors cursor-pointer">Blog & Artikel UMKM</Link></li>
              <li><Link href="/mitra" className="hover:text-red-400 transition-colors cursor-pointer">Program Kemitraan</Link></li>
              <li><Link href="/kontak" className="hover:text-red-400 transition-colors cursor-pointer">Pusat Bantuan Customer Care</Link></li>
              <li><Link href="/program-support" className="hover:text-red-400 transition-colors cursor-pointer">Tutorial Penggunaan App</Link></li>
            </ul>
          </div>

          {/* Perusahaan & Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">Perusahaan</h4>
            <ul className="space-y-2 font-medium text-slate-400">
              <li><Link href="/lisensi" className="hover:text-red-400 transition-colors cursor-pointer">Tentang Nusandana</Link></li>
              <li><Link href="/mitra" className="hover:text-red-400 transition-colors cursor-pointer">Kerja Sama Mitra</Link></li>
              <li><Link href="/lisensi" className="hover:text-red-400 transition-colors cursor-pointer">Lisensi Bank Indonesia</Link></li>
              <li><Link href="/kontak" className="hover:text-red-400 transition-colors cursor-pointer">Kontak & Alamat Kantor</Link></li>
              <li><Link href="/lisensi" className="hover:text-red-400 transition-colors cursor-pointer">Kebijakan Privasi & Syarat</Link></li>
            </ul>
          </div>
        </div>

        {/* Security & Licensing Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-6">
          <p className="text-slate-500 font-medium">
            &copy; 2026 Nusandana (PT Gerbang Pembayaran Digital). Hak cipta dilindungi undang-undang.
          </p>

          <div className="flex items-center gap-4 text-slate-400 font-semibold">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
              <Globe className="w-3.5 h-3.5" /> Portal Web Nusandana
            </Link>
            <Link href="/kontak" className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp Support
            </Link>
            <Link href="/kontak" className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer">
              <Mail className="w-3.5 h-3.5" /> Email Official
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Fraud Warning Banner */}
      <div className="bg-amber-500/10 border-t border-amber-500/20 py-3.5 px-4 text-amber-200 text-xs">
        <div className="container mx-auto flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <p className="leading-tight">
            <strong className="text-amber-400 font-bold">Waspadalah terhadap Upaya Penipuan!</strong> Nusandana (PT Gerbang Pembayaran Digital) adalah penyedia gerbang pembayaran resmi dan tidak pernah meminta kata sandi, OTP, atau memberikan penawaran investasi perorangan. Jika menemukan aktivitas mencurigakan, hubungi WhatsApp resmi kami di <span className="underline font-bold text-amber-300">+62 896-6688-8288</span> atau <span className="underline font-bold text-amber-300">+62 896-6688-8788</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
