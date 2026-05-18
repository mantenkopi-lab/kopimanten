# Dokumentasi Proyek Kopi Manten

## ⚠️ PERINGATAN PENTING: Pengelolaan File `.env`
**DILARANG KERAS mengubah file `.env` atau `.env.local` tanpa dokumentasi yang jelas!**
Perubahan pada file environment variables (seperti URL Supabase atau Anon Key) dapat merusak koneksi database dan sistem checkout yang sudah berjalan. Jika terpaksa harus mengubahnya, pastikan:
1. Mengabari pemilik proyek terlebih dahulu.
2. Mencatat perubahan tersebut di file log atau dokumentasi ini.
3. Memastikan variabel di Cloudflare Pages juga ikut diperbarui jika proyek di-deploy di sana.

---

## 🛠️ Status Proyek Saat Ini (Per Mei 2026)

### 1. Sistem Login (Dihapus)
*   **Status:** Dinonaktifkan.
*   **Alasan:** Mempersingkat alur belanja pelanggan dan menghindari masalah limitasi email (Error 429) dari Supabase.
*   **Cara Kerja:** Pelanggan tidak perlu login. Cukup masukkan produk ke keranjang, isi Nama dan nomor WhatsApp di form keranjang, lalu klik Checkout.

### 2. Katalog Produk (Hardcoded)
*   **Status:** Data produk disimpan langsung di dalam kode (`src/components/HomeClient.tsx`).
*   **Alasan:** Menghindari kerumitan penggunaan CMS Sanity dan mengamankan foto produk dari limit penyimpanan.
*   **Detail:** Ada 9 produk asli yang datanya ditarik dari proyek Sanity lama. Gambar produk diambil langsung dari CDN Sanity proyek lama tersebut sehingga tidak membebani server website ini.

### 3. Database Pesanan (Supabase)
*   **Status:** Aktif.
*   **Fungsi:** Menyimpan data pesanan yang masuk dari form checkout (Nama, WA, Produk yang dibeli, dan Total Harga).
