"use client"

import Link from "next/link"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2 bg-slate-50">
      <div className="flex flex-col gap-4 p-6 md:p-10 justify-between">
        <div className="flex justify-center md:justify-start">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <span className="text-2xl font-black tracking-tight text-gray-900">
              Nusan<span className="text-red-600">dana</span>
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center py-4">
          <div className="w-full max-w-md">
            <RegisterForm />
          </div>
        </div>
        <div className="text-xs text-center md:text-left text-gray-400">
          &copy; 2026 Nusandana (PT Gerbang Pembayaran Digital). Hak cipta dilindungi.
        </div>
      </div>
      <div className="relative hidden bg-slate-950 lg:block overflow-hidden">
        <img
          src="/hero/WhatsApp Image 2026-09-23 at 10.16.39 PM.jpeg"
          alt="Nusandana Hero Payment Dashboard"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-12 text-white">
          <div className="inline-block px-3 py-1 bg-red-600/80 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider mb-3 w-fit">
            Integrasi Mudah & Cepat
          </div>
          <h2 className="text-3xl font-extrabold leading-tight">
            Mulai Terima Pembayaran Digital Hari Ini
          </h2>
          <p className="mt-2 text-sm text-slate-300 max-w-md">
            Nikmati kemudahan QRIS, Virtual Account Multi-Bank, dan E-Wallet dalam satu pintu untuk perkembangan usaha Anda.
          </p>
        </div>
      </div>
    </div>
  )
}
