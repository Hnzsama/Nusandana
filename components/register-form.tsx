import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-5", className)} onSubmit={(e) => e.preventDefault()} {...props}>
      <FieldGroup className="space-y-3.5">
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Daftar Akun Merchant</h1>
          <p className="text-xs sm:text-sm text-gray-500">
            Registrasi gratis untuk mulai menerima pembayaran digital
          </p>
        </div>

        <Field className="space-y-1">
          <FieldLabel htmlFor="fullname" className="text-xs font-bold uppercase text-gray-700">Nama Lengkap</FieldLabel>
          <Input id="fullname" type="text" placeholder="Nama Anda" required className="rounded-xl py-2" />
        </Field>

        <Field className="space-y-1">
          <FieldLabel htmlFor="business_name" className="text-xs font-bold uppercase text-gray-700">Nama Perusahaan / Bisnis</FieldLabel>
          <Input id="business_name" type="text" placeholder="Contoh: Toko Kopi Utama" required className="rounded-xl py-2" />
        </Field>

        <Field className="space-y-1">
          <FieldLabel htmlFor="email" className="text-xs font-bold uppercase text-gray-700">Email Perusahaan</FieldLabel>
          <Input id="email" type="email" placeholder="nama@perusahaan.com" required className="rounded-xl py-2" />
        </Field>

        <Field className="space-y-1">
          <FieldLabel htmlFor="phone" className="text-xs font-bold uppercase text-gray-700">Nomor WhatsApp / HP</FieldLabel>
          <Input id="phone" type="tel" placeholder="081234567890" required className="rounded-xl py-2" />
        </Field>

        <Field className="space-y-1">
          <FieldLabel htmlFor="password" className="text-xs font-bold uppercase text-gray-700">Kata Sandi</FieldLabel>
          <Input id="password" type="password" placeholder="••••••••" required className="rounded-xl py-2" />
        </Field>

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
  )
}
