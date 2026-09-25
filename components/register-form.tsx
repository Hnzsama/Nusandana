"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [merchantType, setMerchantType] = useState<"individu" | "badan_hukum">("badan_hukum");

  return (
    <form className={cn("flex flex-col gap-5", className)} onSubmit={(e) => e.preventDefault()} {...props}>
      <FieldGroup className="space-y-3.5">
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Daftar Akun Merchant</h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Registrasi gratis untuk mulai menerima pembayaran digital
          </p>
        </div>

        {/* Tipe Akun Merchant Radio */}
        <Field className="space-y-1.5">
          <FieldLabel className="text-xs font-bold uppercase text-gray-700">Tipe Akun Merchant</FieldLabel>
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            <label className={cn(
              "flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all",
              merchantType === "individu"
                ? "border-red-600 bg-red-50/50 text-red-600 shadow-xs"
                : "border-gray-200 text-gray-700 hover:bg-gray-50"
            )}>
              <input
                type="radio"
                name="merchantType"
                value="individu"
                checked={merchantType === "individu"}
                onChange={() => setMerchantType("individu")}
                className="w-3.5 h-3.5 text-red-600 border-gray-300 focus:ring-red-500 cursor-pointer"
              />
              Merchant Individu
            </label>
            <label className={cn(
              "flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-semibold cursor-pointer transition-all",
              merchantType === "badan_hukum"
                ? "border-red-600 bg-red-50/50 text-red-600 shadow-xs"
                : "border-gray-200 text-gray-700 hover:bg-gray-50"
            )}>
              <input
                type="radio"
                name="merchantType"
                value="badan_hukum"
                checked={merchantType === "badan_hukum"}
                onChange={() => setMerchantType("badan_hukum")}
                className="w-3.5 h-3.5 text-red-600 border-gray-300 focus:ring-red-500 cursor-pointer"
              />
              Badan Hukum (PT/CV)
            </label>
          </div>
        </Field>

        {/* Nama Lengkap */}
        <Field className="space-y-1.5">
          <FieldLabel htmlFor="fullname" className="text-xs font-bold uppercase text-gray-700">Nama Lengkap</FieldLabel>
          <Input id="fullname" type="text" placeholder="Masukkan nama lengkap Anda" required className="rounded-xl py-2.5" />
        </Field>

        {/* Nama Perusahaan / Bisnis */}
        <Field className="space-y-1.5">
          <FieldLabel htmlFor="business_name" className="text-xs font-bold uppercase text-gray-700">Nama Perusahaan / Bisnis</FieldLabel>
          <Input id="business_name" type="text" placeholder="Contoh: Toko Kopi Utama" required className="rounded-xl py-2.5" />
        </Field>

        {/* Email Perusahaan */}
        <Field className="space-y-1.5">
          <FieldLabel htmlFor="email" className="text-xs font-bold uppercase text-gray-700">Email Perusahaan</FieldLabel>
          <Input id="email" type="email" placeholder="nama@perusahaan.com" required className="rounded-xl py-2.5" />
        </Field>

        {/* Nomor WhatsApp / HP */}
        <Field className="space-y-1.5">
          <FieldLabel htmlFor="phone" className="text-xs font-bold uppercase text-gray-700">Nomor WhatsApp / HP</FieldLabel>
          <Input id="phone" type="tel" placeholder="081234567890" required className="rounded-xl py-2.5" />
        </Field>

        {/* Kata Sandi */}
        <Field className="space-y-1.5">
          <FieldLabel htmlFor="password" className="text-xs font-bold uppercase text-gray-700">Kata Sandi</FieldLabel>
          <Input id="password" type="password" placeholder="••••••••" required className="rounded-xl py-2.5" />
        </Field>

        {/* Konfirmasi Kata Sandi */}
        <Field className="space-y-1.5">
          <FieldLabel htmlFor="confirmPassword" className="text-xs font-bold uppercase text-gray-700">Konfirmasi Kata Sandi</FieldLabel>
          <Input id="confirmPassword" type="password" placeholder="••••••••" required className="rounded-xl py-2.5" />
        </Field>

        {/* Submit Button */}
        <Field className="pt-2">
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/30 transition-all cursor-pointer"
          >
            Daftar Merchant Gratis
          </button>
        </Field>

        <FieldDescription className="text-center text-xs text-gray-600 pt-1">
          Sudah memiliki akun Nusandana?{" "}
          <Link href="/login" className="font-bold text-red-600 hover:underline">
            Masuk ke Akun
          </Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  );
}
