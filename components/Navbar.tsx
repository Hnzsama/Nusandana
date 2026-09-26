"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    {
      label: "Kanal Pembayaran",
      href: "/payments",
      hasDropdown: true,
      items: [
        { name: "Semua Kanal Pembayaran", href: "/payments?cat=all" },
        { name: "Virtual Account Multi-Bank", href: "/payments?cat=va" },
        { name: "QRIS Instant & E-Wallet", href: "/payments?cat=qris-wallet" },
        { name: "Kartu Kredit & International", href: "/payments?cat=card" },
        { name: "Retail & PayLater", href: "/payments?cat=paylater" },
      ],
    },
    {
      label: "Support UMKM",
      href: "/program-support",
      hasDropdown: true,
      highlight: true,
      items: [
        { name: "Program Support Hub", href: "/program-support" },
        { name: "Solusi Payment Links UMKM", href: "/program-support/payment-links" },
        { name: "Artikel & Panduan UMKM", href: "/program-support/artikel" },
      ],
    },
    {
      label: "Kerja Sama Mitra",
      href: "/mitra",
      hasDropdown: false,
    },
    {
      label: "Lisensi BI & Legal",
      href: "/lisensi",
      hasDropdown: false,
    },
    {
      label: "Kontak & Alamat",
      href: "/kontak",
      hasDropdown: false,
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 transition-all shadow-xs">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
          <span className="text-2xl sm:text-3xl font-black tracking-wider logo-indonesia select-none">
            NUSANDANA
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-1 font-semibold text-xs xl:text-sm text-gray-700">
          <Link
            href="/"
            className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
              pathname === "/"
                ? "text-red-600 font-bold bg-red-50/90 shadow-xs border border-red-100/50"
                : "hover:text-red-600 hover:bg-red-50/50"
            }`}
          >
            Beranda
          </Link>

          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    item.highlight
                      ? "bg-red-50 text-red-600 font-bold hover:bg-red-100/80"
                      : isActive
                      ? "text-red-600 font-bold bg-red-50/90 shadow-xs border border-red-100/50"
                      : "hover:text-red-600 hover:bg-red-50/50"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === item.label || isActive || item.highlight ? "text-red-600" : "text-gray-400"} ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                  )}
                </Link>

                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-red-600 hover:bg-red-50/70 rounded-xl transition-colors cursor-pointer"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden xl:flex items-center gap-3">
          <Link
            href="/kontak"
            className="px-4 py-2.5 rounded-xl border border-red-600 text-red-600 font-bold text-sm hover:bg-red-50 transition-all cursor-pointer"
          >
            Hubungi Kami
          </Link>
          <Link
            href="/payments"
            className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md shadow-red-600/30 hover:shadow-lg hover:shadow-red-600/40 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            Mulai <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger Menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-3">
          <Link
            href="/"
            className={`block font-bold py-2 border-b border-gray-100 ${
              pathname === "/" ? "text-red-600 bg-red-50/70 px-3 rounded-lg" : "text-gray-900"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Beranda
          </Link>

          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <div key={item.label} className="border-b border-gray-100 pb-2">
                <Link
                  href={item.href}
                  className={`font-bold block py-1.5 ${
                    isActive ? "text-red-600 bg-red-50/70 px-3 rounded-lg" : "text-gray-900 hover:text-red-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-3 space-y-1 mt-1">
                    {item.items?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        className="block py-1 text-xs text-gray-600 hover:text-red-600 cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/kontak"
              className="w-full text-center py-2.5 rounded-xl border border-red-600 text-red-600 font-bold text-sm cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hubungi Kami
            </Link>
            <Link
              href="/payments"
              className="w-full text-center py-2.5 rounded-xl bg-red-600 text-white font-bold text-sm flex items-center justify-center gap-1 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Mulai <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
