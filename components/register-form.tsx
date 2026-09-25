"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [merchantType, setMerchantType] = useState<"individu" | "badan_hukum">("badan_hukum");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">
        Daftar
      </h1>

      <form className={cn("space-y-4", className)} onSubmit={(e) => e.preventDefault()} {...props}>
        {/* Kategori Merchant Radio Group */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold text-gray-700">
            Kategori Merchant
          </label>
          <div className="flex items-center gap-4 pt-1">
            <label className="flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="merchantType"
                value="individu"
                checked={merchantType === "individu"}
                onChange={() => setMerchantType("individu")}
                className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500 cursor-pointer"
              />
              Merchant Individu
            </label>
            <label className="flex items-center gap-2 text-xs font-medium text-gray-700 cursor-pointer">
              <input
                type="radio"
                name="merchantType"
                value="badan_hukum"
                checked={merchantType === "badan_hukum"}
                onChange={() => setMerchantType("badan_hukum")}
                className="w-4 h-4 text-red-600 border-gray-300 focus:ring-red-500 cursor-pointer"
              />
              Merchant badan hukum ( PT,CV )
            </label>
          </div>
        </div>

        {/* Nama Pengguna */}
        <div className="space-y-1">
          <label htmlFor="username" className="block text-xs font-semibold text-gray-700">
            <span className="text-red-500 font-bold mr-1">*</span>
            Nama Pengguna
          </label>
          <input
            id="username"
            type="text"
            placeholder="Masukkan nama pengguna"
            required
            className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder:text-gray-400 bg-gray-50/30 transition-all"
          />
        </div>

        {/* Nomor Telepon */}
        <div className="space-y-1">
          <label htmlFor="phone" className="block text-xs font-semibold text-gray-700">
            <span className="text-red-500 font-bold mr-1">*</span>
            Nomor Telepon
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="Masukkan nomor telepon"
            required
            className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder:text-gray-400 bg-gray-50/30 transition-all"
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label htmlFor="email" className="block text-xs font-semibold text-gray-700">
            <span className="text-red-500 font-bold mr-1">*</span>
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Masukkan email"
            required
            className="w-full px-3.5 py-2.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder:text-gray-400 bg-gray-50/30 transition-all"
          />
        </div>

        {/* Atur Kata Sandi */}
        <div className="space-y-1">
          <label htmlFor="password" className="block text-xs font-semibold text-gray-700">
            <span className="text-red-500 font-bold mr-1">*</span>
            Atur Kata Sandi
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi 6-20 karakter, hanya boleh berisi huruf, angka, dan garis..."
              required
              className="w-full pl-3.5 pr-10 py-2.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder:text-gray-400 bg-gray-50/30 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Konfirmasi Kata Sandi */}
        <div className="space-y-1">
          <label htmlFor="confirmPassword" className="block text-xs font-semibold text-gray-700">
            <span className="text-red-500 font-bold mr-1">*</span>
            Konfirmasi Kata Sandi
          </label>
          <div className="relative">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Masukkan kata sandi lagi"
              required
              className="w-full pl-3.5 pr-10 py-2.5 text-xs rounded-lg border border-gray-200 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 text-gray-900 placeholder:text-gray-400 bg-gray-50/30 transition-all"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Toggle confirm password visibility"
            >
              {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/30 transition-all cursor-pointer"
          >
            Daftar
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-xs text-gray-600 pt-2">
          Sudah memiliki akun Nusandana?{" "}
          <Link href="/login" className="font-bold text-red-600 hover:underline">
            Masuk ke Akun
          </Link>
        </p>
      </form>
    </div>
  );
}
