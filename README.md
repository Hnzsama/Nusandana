# 💳 Nusandana - Payment Infrastructure 3.0

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38BDF8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-BI_PJP_Category_1-emerald?style=for-the-badge)](https://www.bi.go.id/)

**Nusandana** adalah platform infrastruktur gerbang pembayaran (*payment gateway*) digital terdepan yang dirancang untuk mendukung pertumbuhan bisnis, UMKM, dan perusahaan skala enterprise di Indonesia serta Asia Tenggara.

Dengan satu integrasi API modern, Nusandana memungkinkan bisnis untuk menerima pembayaran dari 30+ kanal perbankan, QRIS, e-wallet, kartu kredit, hingga jaringan gerai retail nasional.

---

## 🚀 Struktur Menu & Penjelasan Fitur Halaman

Sistem navigasi dan halaman web **Nusandana** tersusun secara terstruktur, rapi, dan mudah diakses dari setiap halaman:

```
Nusandana Web Structure
├── 🏠 Beranda ( / )
├── ⚡ Kanal Pembayaran ( /payments )
│   ├── All Channels (?cat=all)
│   ├── Virtual Account (?cat=va)
│   ├── QRIS & E-Wallet (?cat=qris-wallet)
│   ├── Kartu Kredit (?cat=card)
│   └── Retail & PayLater (?cat=paylater)
├── 🤝 Support UMKM ( /program-support )
│   ├── Program Support Hub ( /program-support )
│   ├── Solusi Payment Links ( /program-support/payment-links )
│   └── Blog & Artikel UMKM ( /program-support/artikel )
├── 🏢 Kerja Sama Mitra ( /mitra )
├── 🛡️ Lisensi BI & Legal ( /lisensi )
└── 📞 Kontak & Alamat ( /kontak )
```

---

### 1. 🏠 Beranda (`/`)
Halaman utama yang menyajikan gambaran menyeluruh tentang keunggulan dan infrastruktur Nusandana:
* **Hero Section**: Judul utama, ringkasan nilai platform, indikator kepercayaan (Lisensi BI, PCI-DSS Level 1, Uptime 99.99%), serta simulasi pratinjau dashboard.
* **Mitra Terkemuka**: Showcase logo vektor interaktif dari brand terpercaya (*Qoala, Bukalapak, Traveloka, Grab, Telkomsel, Ciputra, Garuda Indonesia, Tokopedia*).
* **Statistik Keuangan**: Metrik transparan (*Volume Rp 50T+*, *500k+ Merchant*, *Latency <100ms*).
* **Solusi Pembayaran Moduler**: Ringkasan metode transaksi utama (VA, QRIS, E-Wallet, Card).
* **Ekspansi Asia**: Fitur transaksi lintas negara (*multi-currency settlement*).
* **Fitur Skala Enterprise**: Otomatisasi transfer massal (*Batch Payouts*), penagihan berulang (*Subscriptions*), dan analitik real-time.
* **Customer Stories & FAQ**: Testimonial mitra bisnis dan jawaban atas pertanyaan umum.

---

### 2. ⚡ Kanal Pembayaran (`/payments`)
Halaman khusus matriks penerimaan pembayaran terlengkap dengan filter interaktif:
* **Filter Parameter URL (`?cat=...`)**:
  * `?cat=va`: Virtual Account Multi-Bank (BCA, BNI, BRI, Mandiri, Permata, CIMB).
  * `?cat=qris-wallet`: QRIS Instant Dynamic/Static & E-Wallet (GoPay, OVO, ShopeePay, DANA, LinkAja).
  * `?cat=card`: Kartu Kredit & Debit Internasional (Visa, Mastercard, JCB, Amex).
  * `?cat=paylater`: PayLater (Kredivo, Akulaku, Atome, Indodana) & Retail (Indomaret, Alfamart Group).
* **Metadata Presisi**: Setiap kanal dilengkapi dengan kecepatan settlement (*Real-Time/H+0*), limit per transaksi, status `Ready API`, serta tautan langsung ke dokumentasi API.
* **Bar Pencarian**: Fitur pencarian instan nama bank atau metode pembayaran.

---

### 3. 🤝 Support UMKM (`/program-support`)
Pusat solusi digital dan pemberdayaan bagi Usaha Mikro, Kecil, dan Menengah (UMKM):
* **Program Support Hub (`/program-support`)**: Halaman induk yang mengintegrasikan seluruh fasilitas bantuan digitalisasi UMKM.
* **Payment Links (`/program-support/payment-links`)**: Fitur pembuatan link pembayaran instan tanpa memerlukan pemograman/coding untuk jualan di WhatsApp, Instagram, dan Toko Online.
* **Blog & Artikel UMKM (`/program-support/artikel`)**: Edukasi bisnis, panduan pembayaran, daftar isi interaktif, dan tombol langganan newsletter dengan kontras tinggi.

---

### 4. 🏢 Kerja Sama Mitra (`/mitra`)
Halaman skema kemitraan strategis bagi pihak ketiga:
* **Mitra Integrator & ISV**: Program integrasi gateway pembayaran ke dalam software POS, ERP, atau platform SaaS.
* **Mitra Perbankan & FinTech**: Protokol transaksi direct host-to-host berkecepatan tinggi.
* **Program Reseller & Agency**: Skema bagi hasil komisi (*revenue sharing*) transparan dan recurring untuk setiap merchant baru.

---

### 5. 🛡️ Lisensi BI & Legal (`/lisensi`)
Halaman keterbukaan kepatuhan regulasi dan standar keamanan data:
* **Lisensi PJP Bank Indonesia**: Terdaftar resmi sebagai Penyelenggara Jasa Pembayaran (PJP) Kategori Izin 1.
* **PCI-DSS Level 1 Compliance**: Standar perlindungan data kartu kredit tingkat tertinggi di dunia.
* **Sertifikasi ISO 27001:2022**: Standar manajemen keamanan informasi terverifikasi secara berkala.

---

### 6. 📞 Kontak & Alamat (`/kontak`)
Halaman pusat bantuan dan alamat operasional perusahaan:
* **Informasi Lokasi**: Alamat kantor pusat SCBD Tower Jakarta Selatan.
* **Kontak Direct**: Email `support@nusandana.co` & `sales@nusandana.co`, serta hotline 24/7.
* **Formulir Konsultasi**: Form pengiriman pesan konsultasi integrasi gratis untuk calon mitra.

---

## 🛠️ Teknologi Utama (Tech Stack)

* **Framework**: [Next.js 16 (App Router & Turbopack)](https://nextjs.org/)
* **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Iconography**: [Lucide React](https://lucide.dev/)
* **Interaktivitas**: [IntersectionObserver AnimateOnScroll](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
* **Design System**: Modern SaaS Aesthetics, Glassmorphism, Dark Mode accents.

---

## 💻 Cara Menjalankan Project (Local Development)

### 1. Clone Repository
```bash
git clone https://github.com/Hnzsama/Nusandana.git
cd Nusandana
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Server Dev
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) pada browser Anda.

### 4. Build untuk Production
```bash
npm run build
npm run start
```

---

&copy; 2026 **Nusandana** (PT Nusandana Digital Pembayaran). All rights reserved.
