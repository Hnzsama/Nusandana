import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Home, CreditCard, Headphones, ShieldCheck, HelpCircle } from "lucide-react";

export const metadata = {
  title: "404 - Halaman Tidak Ditemukan | Nusandana",
  description: "Halaman yang Anda cari tidak dapat ditemukan di portal gerbang pembayaran digital Nusandana.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Navbar />

      <main className="flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50/50 via-white to-slate-50/50">
        <div className="max-w-2xl w-full text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-red-600" /> Error 404 - Page Not Found
          </div>

          {/* Big Number */}
          <h1 className="text-7xl sm:text-9xl font-black tracking-tight text-gray-900 leading-none">
            4<span className="text-red-600">0</span>4
          </h1>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Halaman Tidak Ditemukan
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto leading-relaxed">
              Maaf, halaman yang Anda tuju telah dipindahkan, dihapus, atau alamat URL yang Anda masukkan kurang tepat.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Home className="w-4 h-4" /> Kembali ke Beranda
            </Link>

            <Link
              href="/payments"
              className="w-full sm:w-auto px-6 py-3 rounded-xl border border-gray-300 hover:border-red-600 bg-white hover:bg-red-50/50 text-gray-800 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <CreditCard className="w-4 h-4 text-red-600" /> Lihat Metode Pembayaran
            </Link>
          </div>

          {/* Quick Helpful Links Grid */}
          <div className="pt-8 border-t border-gray-200/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-lg mx-auto">
            <Link
              href="/program-support"
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-red-50/60 border border-gray-200 hover:border-red-300 transition-all group"
            >
              <p className="font-bold text-xs text-gray-900 group-hover:text-red-600">Support Product Hub</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Aplikasi, Web & Soundbox</p>
            </Link>

            <Link
              href="/lisensi"
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-red-50/60 border border-gray-200 hover:border-red-300 transition-all group"
            >
              <p className="font-bold text-xs text-gray-900 group-hover:text-red-600">Lisensi BI & Legal</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Sertifikasi Keamanan</p>
            </Link>

            <Link
              href="/kontak"
              className="p-3.5 rounded-xl bg-slate-50 hover:bg-red-50/60 border border-gray-200 hover:border-red-300 transition-all group"
            >
              <p className="font-bold text-xs text-gray-900 group-hover:text-red-600">Pusat Bantuan</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Hubungi Support 24/7</p>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
