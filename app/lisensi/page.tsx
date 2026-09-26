import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { ShieldCheck, Lock, Award, FileCheck, CheckCircle2, Sparkles, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Lisensi & Keamanan Sistem | Nusandana",
  description: "Informasi lisensi resmi Bank Indonesia, PCI-DSS Level 1, ISO 27001, dan sertifikasi keamanan transaksi digital Nusandana.",
};

const licenseItems = [
  {
    icon: <Award className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-red-50 border-red-100",
    badge: "Otoritas Resmi",
    title: "Lisensi Bank Indonesia",
    numberLabel: "Nomor Lisensi BI:",
    numberValue: "No. 24/632/DKSP/Srt/B",
    desc: "Izin resmi dari Bank Indonesia sebagai Penyelenggara Jasa Pembayaran (PJP) yang terpercaya dan terdaftar.",
    linkText: "Verifikasi Lisensi BI",
  },
  {
    icon: <Lock className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-indigo-50 border-indigo-100",
    badge: "Regulasi Kepatuhan",
    title: "Kepatuhan APPU PPT",
    numberLabel: "Nomor APPU PPT:",
    numberValue: "No. 01/APPU-PPT/NUSD/2024",
    desc: "Penerapan Program Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme sesuai regulasi yang berlaku.",
    linkText: "Dokumen Kepatuhan",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-emerald-50 border-emerald-100",
    badge: "Keanggotaan Asosiasi",
    title: "Anggota ASPI",
    numberLabel: "Nomor Anggota ASPI:",
    numberValue: "No. 189/ASPI/NUSD/2024",
    desc: "Anggota resmi Asosiasi Sistem Pembayaran Indonesia dalam pengembangan ekosistem pembayaran nasional.",
    linkText: "Lihat Sertifikat ASPI",
  },
];

export default function LisensiPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 sm:pt-28 sm:pb-24 bg-gradient-to-b from-red-50/70 via-white to-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll animation="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-red-600" /> Regulasi & Keamanan Tingkat Tinggi
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                Lisensi Bank Indonesia & <span className="bg-gradient-to-r from-red-600 via-red-600 to-rose-400 bg-clip-text text-transparent">Sertifikasi Keamanan</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                Jaminan keamanan transaksi dan kepatuhan hukum penuh adalah komitmen utama infrastruktur gerbang pembayaran digital Nusandana.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Security & Licensing Cards */}
        <section className="py-16 sm:py-24 bg-slate-50/50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            
            <AnimateOnScroll animation="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
                  <Shield className="w-3.5 h-3.5" /> Standar Keamanan
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                  Sertifikasi & Kepatuhan <span className="text-red-600">Internasional</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-600 font-medium">
                  Perhitungan enkripsi berlapis, lisensi resmi Bank Indonesia, serta audit sertifikasi keamanan teruji untuk melindungi data transaksi Anda.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {licenseItems.map((item, idx) => (
                <AnimateOnScroll key={item.title} animation="fade-up" delay={idx * 100}>
                  <div className="h-full bg-white rounded-3xl p-8 border border-gray-200/90 shadow-xs hover:border-red-400 hover:shadow-2xl hover:shadow-red-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                    
                    {/* Top Accent Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-50 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      {/* Icon & Badge */}
                      <div className="flex items-center justify-between mb-6 relative z-10">
                        <div className={`w-14 h-14 rounded-2xl ${item.iconBg} border flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-gray-900 mb-2 group-hover:text-red-600 transition-colors relative z-10">
                        {item.title}
                      </h3>

                      {/* Display License Number Box */}
                      <div className="mb-4 p-3 rounded-xl bg-red-50/70 border border-red-100 relative z-10">
                        <span className="block text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                          {item.numberLabel}
                        </span>
                        <span className="block text-sm font-bold text-red-600 tracking-tight mt-0.5">
                          {item.numberValue}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 relative z-10 font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Action Button */}
                    <a
                      href="/kontak"
                      className="w-full py-3 px-4 rounded-xl bg-gray-50 group-hover:bg-red-600 text-gray-800 group-hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-gray-200 group-hover:border-red-600 transition-all duration-300 cursor-pointer shadow-2xs group/btn relative z-10"
                    >
                      {item.linkText}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>

                  </div>
                </AnimateOnScroll>
              ))}
            </div>

          </div>
        </section>

        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
