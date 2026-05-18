# Kopi Manten - Premium O2O Landing Page

Website Landing Page untuk **Kopi Manten** dengan konsep *Online-to-Offline (O2O)*. Dirancang dengan desain premium, hemat biaya (tanpa API berbayar), dan siap pakai untuk jualan.

## ⚠️ PERINGATAN PENTING: Pengelolaan File `.env`
**DILARANG KERAS mengubah file `.env` atau `.env.local` tanpa dokumentasi yang jelas!**
Perubahan pada file environment variables (seperti URL Supabase atau Anon Key) dapat merusak koneksi database dan sistem checkout yang sudah berjalan. Jika terpaksa harus mengubahnya, pastikan:
1. Mengabari pemilik proyek terlebih dahulu.
2. Mencatat perubahan tersebut di file log atau dokumentasi ini.
3. Memastikan variabel di Cloudflare Pages juga ikut diperbarui jika proyek di-deploy di sana.

## 🚀 Teknologi Utama (Tech Stack)
- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animasi**: Framer Motion
- **Icons**: Lucide React
- **Database**: Supabase (untuk menyimpan data pesanan)
- **Auth**: Firebase Auth (Google Sign-In ready, saat ini dinonaktifkan untuk menyederhanakan alur)
- **State Management**: Zustand (dengan persistence ke LocalStorage)

## ✨ Fitur Unggulan
1. **Peta & Lokasi Gratisan**: Menggunakan Leaflet & OpenStreetMap (Tanpa biaya API Key).
2. **Hitung Jarak Otomatis**: Menghitung jarak dari lokasi user ke outlet (Banjir Wijaya) menggunakan Haversine formula.
3. **Keranjang Belanja Persistent**: Isi keranjang tidak hilang saat web di-refresh.
4. **Catatan Produk**: Pembeli bisa menambahkan catatan (misal: "Less sugar") di setiap menu.
5. **Checkout via WhatsApp**: Mengirimkan ringkasan pesanan langsung ke WhatsApp kasir.
6. **Status Buka/Tutup Otomatis**: Mengikuti jam operasional (Senin-Sabtu 08.00 - 20.00 WIB).
7. **Share Menu to WhatsApp**: Tombol share di setiap kartu menu.
8. **Label Produk**: Label "Best Seller" dan "Recommended".
9. **Download Menu**: Tombol siap pakai di bagian menu (menunggu file PDF).

## 🛠️ Pengembangan Lokal
1. Clone repository ini.
2. Jalankan `npm install`.
3. Buat file `.env.local` dan masukkan variabel yang diperlukan (minta ke pemilik proyek).
4. Jalankan `npm run dev` untuk memulai server lokal.

## 📄 Lisensi
Hak Cipta © 2026 Kopi Manten.
