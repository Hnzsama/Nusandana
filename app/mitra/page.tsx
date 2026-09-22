import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { Handshake, ShieldCheck, Zap, ArrowRight, Code2, Building2, Users, CheckCircle2, Sparkles, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Kerja Sama & Program Kemitraan | Nusandana",
  description: "Bergabung sebagai mitra strategis, reseller, atau partner integrasi payment gateway Nusandana.",
};

const partnershipPrograms = [
  {
    icon: <Code2 className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-blue-50 border-blue-100",
    badge: "Teknis & POS / ERP",
    title: "Mitra Integrator & ISV",
    desc: "Integrasikan gateway pembayaran Nusandana secara langsung ke dalam platform POS, ERP, SaaS, atau software bisnis milik Anda.",
    benefits: [
      "Dokumentasi API & SDK lengkap",
      "Akses environment Sandbox gratis",
      "Dukungan teknis dedicated 24/7",
    ],
    linkText: "Daftar Partner Integrator",
  },
  {
    icon: <Building2 className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-indigo-50 border-indigo-100",
    badge: "Perbankan & Financial",
    title: "Mitra Perbankan & FinTech",
    desc: "Perluas jangkauan kanal transaksi dan volume penerimaan dana melalui jaringan infrastruktur protokol API berkecepatan tinggi.",
    benefits: [
      "Protokol transaksi direct host-to-host",
      "Sertifikasi keamanan PCI-DSS Level 1",
      "Laporan rekonsiliasi otomatis H+0",
    ],
    linkText: "Hubungi Tim Partnership",
  },
  {
    icon: <Users className="w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />,
    iconBg: "bg-emerald-50 border-emerald-100",
    badge: "Reseller & Agency",
    title: "Program Reseller & Agency",
    desc: "Dapatkan bagi hasil komisi menarik dan recurring revenue untuk setiap klien atau merchant baru yang Anda rekomendasikan.",
    benefits: [
      "Bagi hasil komisi transparan & riil",
      "Dashboard monitoring transaksi mitra",
      "Materi pemasaran & konsultasi gratis",
    ],
    linkText: "Gabung Program Reseller",
  },
];

export default function MitraPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-gray-900">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-24 pb-16 sm:pt-28 sm:pb-24 bg-gradient-to-b from-blue-50/70 via-white to-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
            <AnimateOnScroll animation="fade-up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
                <Handshake className="w-4 h-4 text-blue-600" /> Program Kemitraan Strategis
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 leading-tight">
                Tumbuh Bersama Ekosistem <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">Nusandana</span>
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bergabunglah dengan ribuan mitra perbankan, platform e-commerce, dan pengembang sistem.
              </p>
            </AnimateOnScroll>
          </div>
        </section>

        {/* Benefits Grid Section */}
        <section className="py-16 sm:py-24 bg-slate-50/50 border-y border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            
            <AnimateOnScroll animation="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5" /> Skema Kemitraan
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                  Pilih Skema Kerja Sama <span className="text-blue-600">Terbaik Anda</span>
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Solusi kemitraan fleksibel dengan dukungan teknis dan komersial penuh.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {partnershipPrograms.map((item, idx) => (
                <AnimateOnScroll key={item.title} animation="fade-up" delay={idx * 100}>
                  <div className="h-full bg-white rounded-3xl p-8 border border-gray-200/90 shadow-xs hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden">
                    
                    {/* Top Accent Glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />

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

                      <h3 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors relative z-10">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 relative z-10">
                        {item.desc}
                      </p>

                      {/* Benefits Checklist */}
                      <div className="space-y-2.5 mb-8 relative z-10 pt-4 border-t border-gray-100">
                        {item.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-gray-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Action Button */}
                    <a
                      href="/kontak"
                      className="w-full py-3 px-4 rounded-xl bg-gray-50 group-hover:bg-blue-600 text-gray-800 group-hover:text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 border border-gray-200 group-hover:border-blue-600 transition-all duration-300 cursor-pointer shadow-2xs group/btn relative z-10"
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
