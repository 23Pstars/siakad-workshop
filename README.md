# SIAKAD Workshop

Project latihan untuk **Workshop Version Control System untuk Kolaborasi Proyek Teknologi Informasi**.

Ini adalah versi mini *Sistem Informasi Akademik* (SIAKAD). Project ini sengaja dibuat sederhana: hanya HTML, CSS, dan JavaScript. Tidak perlu instalasi, server, atau database. Fokus workshop adalah **alur kerja Git dan GitHub**, bukan pemrograman.

## Cara menjalankan

1. Clone repository ini.
2. Buka file `index.html` dengan browser (klik dua kali).

## Struktur project

```
siakad-workshop/
├── index.html              ← Beranda: menu dan kartu fitur
├── css/style.css           ← Tampilan bersama
├── js/data.js              ← Data contoh: mahasiswa, mata kuliah, nilai
├── pages/
│   ├── _template.html      ← Template untuk halaman fitur baru
│   ├── login.html          ← Fitur Login (Ahmad)
│   ├── mahasiswa.html      ← Fitur Mahasiswa (Budi)
│   └── krs.html            ← Fitur KRS (Citra)
├── anggota/                ← Latihan Sesi 1: file perkenalan peserta
├── docs/
│   ├── SKENARIO.md         ← Panduan langkah demi langkah untuk peserta
│   ├── KARTU-TUGAS.md      ← Daftar fitur yang bisa dikerjakan
│   └── PANDUAN-FASILITATOR.md
├── CONTRIBUTING.md         ← Aturan kolaborasi tim
└── .github/pull_request_template.md
```

## Mulai dari mana?

Baca [`docs/SKENARIO.md`](docs/SKENARIO.md), lalu ikuti sesi demi sesi.

## Aturan singkat

- Jangan commit langsung ke `main`. Selalu buat branch.
- Nama branch: `feature/<fitur>-<nama>` atau `fix/<masalah>-<nama>`.
- Setiap perubahan masuk ke `main` melalui **Pull Request** dan minimal **1 review**.

Detail lengkap ada di [`CONTRIBUTING.md`](CONTRIBUTING.md).
