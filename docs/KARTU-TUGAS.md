# Kartu Tugas — Sprint Fitur SIAKAD

Setiap anggota kelompok memilih **satu kartu**. Setiap kartu dikerjakan di branch sendiri dan masuk ke `main` melalui Pull Request.

## Aturan yang sama untuk semua kartu

1. Salin `pages/_template.html` menjadi file halaman baru.
2. Isi judul, deskripsi, dan konten sesuai kartu.
3. Tambahkan **1 menu** di `index.html` tepat di bawah baris
   `<!-- MENU: tambahkan menu fitur baru di bawah baris ini -->`
4. Tambahkan **1 kartu** di `index.html` tepat di bawah baris
   `<!-- KARTU: tambahkan kartu fitur baru di bawah baris ini -->`

> ⚠️ Karena semua orang menambahkan baris di **tempat yang sama** di `index.html`, sebagian dari Anda akan mengalami **merge conflict**. Ini disengaja — Anda akan berlatih menyelesaikannya di Sesi 4.

Contoh baris menu dan kartu:

```html
<a href="pages/dosen.html">Dosen</a>
```

```html
<a class="kartu" href="pages/dosen.html">
  <h3>Dosen</h3>
  <p>Daftar dosen pengampu</p>
</a>
```

---

## Kartu #1 — Dosen ⭐
- **File:** `pages/dosen.html`
- **Branch:** `feature/dosen-<nama>`
- **Isi:** Tabel 4 dosen: NIDN, nama, bidang keahlian.
- **Contoh data:** `0012038501 · Dr. Hendra Wijaya · Rekayasa Perangkat Lunak`

## Kartu #2 — Nilai ⭐⭐
- **File:** `pages/nilai.html`
- **Branch:** `feature/nilai-<nama>`
- **Isi:** Tabel nilai Rina Lestari (kode MK, nama MK, SKS, nilai huruf).
- **Petunjuk:** Gunakan `MAHASISWA[0].nilai` dan `cariMatakuliah(kode)` dari `js/data.js`.

## Kartu #3 — Jadwal Kuliah ⭐
- **File:** `pages/jadwal.html`
- **Branch:** `feature/jadwal-<nama>`
- **Isi:** Tabel jadwal: hari, jam, mata kuliah, ruang (minimal 5 baris).

## Kartu #4 — Pengumuman ⭐
- **File:** `pages/pengumuman.html`
- **Branch:** `feature/pengumuman-<nama>`
- **Isi:** 3 pengumuman akademik (judul, tanggal, isi singkat). Boleh memakai `<div class="kartu">`.

## Kartu #5 — Mata Kuliah ⭐⭐
- **File:** `pages/matakuliah.html`
- **Branch:** `feature/matakuliah-<nama>`
- **Isi:** Tabel semua mata kuliah beserta total SKS di bawah tabel.
- **Petunjuk:** Gunakan array `MATAKULIAH` dari `js/data.js`.

## Kartu #6 — Kalender Akademik ⭐
- **File:** `pages/kalender.html`
- **Branch:** `feature/kalender-<nama>`
- **Isi:** Tabel kegiatan: pengisian KRS, awal kuliah, UTS, UAS, libur semester.

## Kartu #7 — Profil Mahasiswa ⭐⭐
- **File:** `pages/profil.html`
- **Branch:** `feature/profil-<nama>`
- **Isi:** Profil satu mahasiswa: NIM, nama, jumlah mata kuliah, IPK.
- **Petunjuk:** Gunakan `MAHASISWA[1]` dan fungsi `hitungIPK()`.

## Kartu #8 — Transkrip ⭐⭐⭐
- **File:** `pages/transkrip.html`
- **Branch:** `feature/transkrip-<nama>`
- **Isi:** Dropdown pilih mahasiswa → tampilkan tabel nilai dan IPK mahasiswa itu.

## Kartu #9 — Kontak Akademik ⭐
- **File:** `pages/kontak.html`
- **Branch:** `feature/kontak-<nama>`
- **Isi:** Alamat, email, telepon, jam layanan bagian akademik.

## Kartu #10 — Absensi ⭐⭐
- **File:** `pages/absensi.html`
- **Branch:** `feature/absensi-<nama>`
- **Isi:** Tabel kehadiran 4 mahasiswa untuk 5 pertemuan (✓ / ✗) dan persentase kehadiran.

---

⭐ mudah · ⭐⭐ sedang (memakai `js/data.js`) · ⭐⭐⭐ menantang

Jika jumlah anggota lebih banyak dari kartu, dua orang boleh memilih fitur yang sama dengan nama file berbeda, misalnya `pengumuman-rina.html` dan `pengumuman-yoga.html`.
