import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} onSubmit={(e) => e.preventDefault()} {...props}>
      <FieldGroup className="space-y-4">
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">Masuk ke Akun Dashboard</h1>
          <p className="text-sm text-gray-500">
            Masukkan email dan kata sandi akun Nusandana Anda
          </p>
        </div>

        <Field className="space-y-1.5">
          <FieldLabel htmlFor="email" className="text-xs font-bold uppercase text-gray-700">Email Perusahaan</FieldLabel>
          <Input id="email" type="email" placeholder="nama@perusahaan.com" required className="rounded-xl py-2.5" />
        </Field>

        <Field className="space-y-1.5">
          <div className="flex items-center justify-between">
            <FieldLabel htmlFor="password" className="text-xs font-bold uppercase text-gray-700">Kata Sandi</FieldLabel>
            <a
              href="#"
              className="text-xs font-semibold text-red-600 hover:underline"
            >
              Lupa kata sandi?
            </a>
          </div>
          <Input id="password" type="password" placeholder="••••••••" required className="rounded-xl py-2.5" />
        </Field>

        <Field className="pt-2">
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/30 transition-all cursor-pointer"
          >
            Masuk Sekarang
          </button>
        </Field>

        <FieldDescription className="text-center text-xs text-gray-600 pt-2">
          Belum memiliki akun Nusandana?{" "}
          <Link href="/register" className="font-bold text-red-600 hover:underline">
            Daftar sekarang
          </Link>
        </FieldDescription>
      </FieldGroup>
    </form>
  )
}

