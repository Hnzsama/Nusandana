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
    badge: "Otoritas Bank Indonesia",
    title: "Lisensi PJP Bank Indonesia",
    desc: "Terdaftar dan diawasi secara resmi oleh Bank Indonesia sebagai Penyelenggara Jasa Pembayaran (PJP) Kategori Izin 1.",
    points: [
      "Kategori Izin 1 PJP Bank Indonesia",
      "Perhitungan & settlement dana transparan",
      "Audit kepatuhan regulasi berkala",
    ],
    linkText: "Verifikasi Lisensi BI",
  },
  {
    icon: <Lock className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-indigo-50 border-indigo-100",
    badge: "Keamanan Finansial",
    title: "PCI-DSS Level 1 Compliance",
    desc: "Sertifikasi standar enkripsi data transaksi kartu kredit internasional tingkat tertinggi untuk menjamin perlindungan data pengguna.",
    points: [
      "Sertifikasi PCI-DSS Level 1 Internasional",
      "Tokenisasi & 3D Secure v2.0",
      "Pengujian Penetration Testing rutin",
    ],
    linkText: "Lihat Sertifikat PCI-DSS",
  },
  {
    icon: <FileCheck className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-emerald-50 border-emerald-100",
    badge: "Manajemen Data Global",
    title: "Sertifikasi ISO 27001",
    desc: "Standar manajemen keamanan informasi (ISMS) global yang terverifikasi secara akurat untuk melindungi seluruh aset data bisnis.",
    points: [
      "Sertifikasi Standar ISO 27001:2022",
      "Sistem mitigasi risiko & enkripsi 256-bit",
      "Perlindungan privasi data pengguna",
    ],
    linkText: "Pelajari Standar ISO",
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
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Keamanan transaksi dan kepatuhan hukum adalah komitmen utama infrastruktur kami.
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
                <p className="mt-3 text-sm sm:text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Perlindungan data keuangan dengan infrastruktur teruji.
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

                      <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-red-600 transition-colors relative z-10">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 relative z-10">
                        {item.desc}
                      </p>

                      {/* Points Checklist */}
                      <div className="space-y-2.5 mb-8 relative z-10 pt-4 border-t border-gray-100">
                        {item.points.map((point, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
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
