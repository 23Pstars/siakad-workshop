# Skenario Praktik Workshop Git & GitHub

**Project:** SIAKAD Workshop (Sistem Informasi Akademik versi mini)
**Tujuan akhir:** Anda mampu menjalankan alur

```
Clone → Branch → Code → Commit → Push → Pull Request → Review → Merge → Pull
```

## Peta sesi

| Sesi | Nama | Bentuk | Waktu | Yang dilatih |
|---|---|---|---|---|
| 0 | Persiapan | individu | 10 menit | konfigurasi Git, akses repo |
| 1 | Daftar Hadir Digital | individu | 20 menit | clone, branch, commit, push, PR, merge |
| 2 | Sprint Fitur SIAKAD | kelompok 4 orang | 35 menit | kerja paralel dengan branch |
| 3 | Code Review | kelompok | 15 menit | review, request changes, approve |
| 4 | Merge Conflict | individu + kelompok | 25 menit | membaca & menyelesaikan conflict |
| 5 | Bonus: Bug Hunt | individu/berpasangan | 20 menit | git log, git diff, branch `fix/` |

Setiap sesi memiliki **✅ Hasil yang diharapkan**. Centang sebelum lanjut ke sesi berikutnya.

---

## Sesi 0 — Persiapan (10 menit)

### Langkah

1. Cek Git sudah terpasang:
   ```bash
   git --version
   ```
2. Perkenalkan diri ke Git (sekali saja per laptop). Gunakan email yang sama dengan akun GitHub:
   ```bash
   git config --global user.name "Rina Lestari"
   git config --global user.email "rina@email.com"
   git config --global init.defaultBranch main
   ```
3. Login ke GitHub di browser, lalu terima undangan collaborator dari fasilitator (cek email atau buka halaman repo).

### ✅ Hasil yang diharapkan
- `git --version` menampilkan versi, misalnya `git version 2.4x.x`.
- `git config --global user.name` menampilkan nama Anda.
- Anda bisa membuka halaman repository workshop di GitHub.

---

## Sesi 1 — Daftar Hadir Digital (20 menit, individu)

**Cerita:** Tim SIAKAD kedatangan anggota baru, yaitu Anda! Langkah pertama anggota baru adalah menambahkan file perkenalan ke folder `anggota/`.
Karena setiap orang membuat **file yang berbeda**, sesi ini **tidak akan menimbulkan conflict**. Fokusnya adalah memahami alur.

### Langkah

**1. Clone repository**
```bash
git clone https://github.com/[org]/siakad-workshop.git
cd siakad-workshop
```

**2. Lihat isi dan history project**
```bash
git log --oneline
```
Anda akan melihat commit dari Ahmad, Budi, dan Citra. History project sudah dimulai sebelum Anda datang.

**3. Buat branch sendiri**
```bash
git switch -c anggota/rina
```

**4. Buat file perkenalan**

Salin `anggota/contoh-ahmad.md` menjadi `anggota/rina.md`, lalu ubah isinya.

**5. Cek status, lalu commit**
```bash
git status
git add anggota/rina.md
git commit -m "Add Rina to member list"
```

**6. Push branch ke GitHub**
```bash
git push -u origin anggota/rina
```

**7. Buat Pull Request**
- Buka repository di GitHub. Akan muncul tombol kuning **Compare & pull request**. Klik tombol itu.
- Pastikan: `base: main` ← `compare: anggota/rina`.
- Isi template, lalu klik **Create pull request**.

**8. Minta review ke teman sebelah.** Setelah di-approve, klik **Merge pull request**.

**9. Perbarui `main` di laptop**
```bash
git switch main
git pull
```

### ✅ Hasil yang diharapkan
- File `anggota/rina.md` ada di `main`, baik di GitHub maupun di laptop Anda.
- `git log --oneline` menampilkan commit Anda dan commit teman-teman yang sudah di-merge.

### 🔧 Kalau ada masalah
| Pesan | Solusi |
|---|---|
| `Please tell me who you are` | Ulangi Sesi 0 langkah 2 |
| Diminta password saat push | GitHub tidak menerima password akun. Buat **Personal Access Token** (Settings → Developer settings → Tokens) atau jalankan `gh auth login` |
| `Permission denied` / `403` | Anda belum menerima undangan collaborator |
| Terlanjur commit di `main` | Jalankan `git switch -c anggota/rina`. Commit Anda ikut pindah ke branch baru. |

---

## Sesi 2 — Sprint Fitur SIAKAD (35 menit, kelompok 4 orang)

**Cerita:** Seperti Ahmad, Budi, Citra, dan Deni, kelompok Anda mendapat tugas menambah fitur baru ke SIAKAD. Semua bekerja **bersamaan**, masing-masing di branch sendiri.

### Pembagian peran

| Anggota | Mengerjakan | Me-review Pull Request milik |
|---|---|---|
| A | 1 kartu tugas | B |
| B | 1 kartu tugas | C |
| C | 1 kartu tugas | D |
| D | 1 kartu tugas | A |

Pilih kartu dari [`KARTU-TUGAS.md`](KARTU-TUGAS.md). Satu kelompok tidak boleh memilih kartu yang sama.

### Langkah (setiap anggota)

**1. Mulai dari `main` terbaru**
```bash
git switch main
git pull
git switch -c feature/dosen-rina
```

**2. Buat halaman fitur**
- Salin `pages/_template.html` menjadi `pages/dosen.html`.
- Isi sesuai kartu tugas. Buka `index.html` di browser untuk mengecek.

**3. Commit kecil dan sering.** Minimal 2 commit:
```bash
git add pages/dosen.html
git commit -m "Add dosen page"

# edit index.html: tambah menu & kartu
git add index.html
git commit -m "Add dosen menu and card to homepage"
```

**4. Push dan buat Pull Request**
```bash
git push -u origin feature/dosen-rina
```
Di GitHub: buat Pull Request, isi template, lalu pilih reviewer sesuai tabel peran (menu **Reviewers** di sisi kanan).

### ✅ Hasil yang diharapkan
- Di GitHub terdapat 4 Pull Request dari kelompok Anda, masing-masing dengan minimal 2 commit.
- Tab **Branches** menampilkan branch semua anggota.
- **Belum ada yang di-merge.** Merge dilakukan setelah review di Sesi 3.

> 💡 Jalankan `git log --oneline --graph --all` untuk melihat branch teman-teman Anda (setelah `git fetch`).

---

## Sesi 3 — Code Review (15 menit, kelompok)

**Cerita:** Di tim nyata, kode tidak langsung masuk ke `main`. Seseorang harus memeriksanya dulu, seperti Citra yang me-review Pull Request Ahmad.

### Langkah reviewer

1. Buka Pull Request yang harus Anda review → tab **Files changed**.
2. Periksa dengan checklist di [`CONTRIBUTING.md`](../CONTRIBUTING.md#5-code-review).
3. Beri **minimal 1 komentar** pada baris tertentu (klik tanda `+` di samping nomor baris).
4. Klik **Review changes** → pilih **Request changes**, lalu tulis satu permintaan perbaikan kecil.
   Contoh: *"Tolong tambahkan satu baris data lagi di tabel."* atau *"Deskripsi kartu di beranda masih 'Deskripsi singkat fitur'."*

### Langkah developer (pemilik Pull Request)

1. Baca komentar reviewer.
2. Perbaiki di laptop, **di branch yang sama**:
   ```bash
   git add .
   git commit -m "Add more dosen data"
   git push
   ```
   Tidak perlu membuat Pull Request baru. Commit baru otomatis masuk ke Pull Request yang sama.
3. Balas komentar reviewer: *"Sudah diperbaiki di commit terbaru."*

### Reviewer lagi

Periksa ulang → **Review changes** → **Approve**.

### Merge

Pemilik Pull Request klik **Merge pull request**. Jika tombolnya tidak bisa diklik karena ada conflict, lanjut ke **Sesi 4B**.

### ✅ Hasil yang diharapkan
- Setiap Pull Request memiliki riwayat: komentar → *changes requested* → commit perbaikan → *approved* → merged.
- Beranda SIAKAD di `main` menampilkan menu fitur baru dari kelompok Anda.

---

## Sesi 4 — Merge Conflict (25 menit)

### 4A. Conflict terkontrol (individu, 10 menit)

**Cerita:** Sama seperti di slide: Anda mengganti judul beranda menjadi **"Dashboard Akademik"**, sementara Budi sudah mengganti judul yang sama di branch `latihan/judul-dashboard`.

```bash
git switch main
git pull
git switch -c latihan/conflict-rina
```

Ubah baris judul di `index.html`:
```html
<h1>Dashboard Akademik</h1>
```

```bash
git add index.html
git commit -m "Change homepage title to Dashboard Akademik"

git fetch
git merge origin/latihan/judul-dashboard
```

**Output yang muncul:**
```
Auto-merging index.html
CONFLICT (content): Merge conflict in index.html
Automatic merge failed; fix conflicts and then commit the result.
```

Buka `index.html`. Anda akan melihat:
```html
<<<<<<< HEAD
    <h1>Dashboard Akademik</h1>
=======
    <h1>Sistem Informasi Akademik Terpadu</h1>
>>>>>>> origin/latihan/judul-dashboard
```

**Selesaikan:**
1. Putuskan judul yang dipakai: salah satu, atau gabungan keduanya.
2. Hapus **ketiga** baris marker (`<<<<<<<`, `=======`, `>>>>>>>`).
3. Simpan, lalu:
   ```bash
   git status          # index.html: both modified
   git add index.html
   git commit -m "Resolve homepage title conflict"
   git log --oneline --graph
   ```

> Branch latihan ini **tidak perlu di-push**. Hapus setelah selesai:
> `git switch main` lalu `git branch -D latihan/conflict-rina`

✅ **Hasil:** `git status` menampilkan `nothing to commit, working tree clean`, dan `git log --graph` menunjukkan dua jalur yang bertemu.

🆘 **Panik?** Jalankan `git merge --abort` untuk kembali ke kondisi sebelum merge, lalu coba lagi.

### 4B. Conflict nyata dari Sprint (kelompok, 15 menit)

Setelah Pull Request pertama di kelompok di-merge, Pull Request berikutnya biasanya menampilkan:

> ⚠️ **This branch has conflicts that must be resolved** — `index.html`

Penyebabnya: Anda dan teman sama-sama menambahkan menu di bawah baris `<!-- MENU: ... -->`.

**Selesaikan di laptop** (pemilik Pull Request):
```bash
git switch main
git pull                              # ambil main terbaru (berisi fitur teman)
git switch feature/dosen-rina
git merge main                        # conflict muncul di sini
```

Di `index.html` Anda akan melihat:
```html
    <!-- MENU: tambahkan menu fitur baru di bawah baris ini -->
<<<<<<< HEAD
    <a href="pages/dosen.html">Dosen</a>
=======
    <a href="pages/jadwal.html">Jadwal</a>
>>>>>>> main
```

Kali ini jawabannya **pertahankan keduanya**, karena kedua fitur memang dibutuhkan:
```html
    <!-- MENU: tambahkan menu fitur baru di bawah baris ini -->
    <a href="pages/dosen.html">Dosen</a>
    <a href="pages/jadwal.html">Jadwal</a>
```

Lakukan hal yang sama untuk bagian `<!-- KARTU: ... -->`, lalu:
```bash
git add index.html
git commit -m "Merge main and resolve menu conflict"
git push
```
Kembali ke GitHub. Pesan conflict hilang dan Pull Request siap di-merge.

✅ **Hasil:** Semua fitur kelompok ada di `main`, dan beranda menampilkan semua menu tanpa marker yang tersisa.

> 🔍 Cek terakhir sebelum push: cari teks `<<<<<<<` di semua file (Ctrl+Shift+F di VS Code). Hasilnya harus kosong.

---

## Sesi 5 — Bonus: Bug Hunt (20 menit)

### 5A. IPK yang salah 🐞

Buka halaman **Mahasiswa**. IPK Rina Lestari tertulis **3.00**. Coba hitung manual:

| Mata kuliah | SKS | Nilai | Bobot × SKS |
|---|---|---|---|
| IF101 Algoritma dan Pemrograman | 4 | A (4) | 16 |
| IF102 Basis Data | 3 | B (3) | 9 |
| IF105 Matematika Diskrit | 2 | C (2) | 4 |
| **Total** | **9** | | **29** |

IPK yang benar = 29 / 9 = **3.22**.

**Tugas:**
1. Cari kapan dan oleh siapa fungsi `hitungIPK` ditulis:
   ```bash
   git log --oneline -- js/data.js
   git log -p -- js/data.js
   ```
2. Buat branch perbaikan:
   ```bash
   git switch main && git pull
   git switch -c fix/ipk-rina
   ```
3. Perbaiki `hitungIPK` di `js/data.js` supaya memakai SKS (petunjuk: fungsi `cariMatakuliah(kode)` sudah tersedia).
4. Lihat perubahan Anda sebelum commit:
   ```bash
   git diff
   ```
5. Commit `"Fix IPK calculation using SKS"` → push → Pull Request → review → merge.

✅ **Hasil:** IPK yang benar adalah Rina **3.22**, Yoga **3.60**, Sari **2.89**, Dimas **3.25**.

> Hanya **satu** Pull Request perbaikan yang perlu di-merge. Jika sudah ada yang merge lebih dulu, tutup Pull Request Anda dengan komentar *"Sudah diperbaiki di #nomor"*. Ini juga praktik nyata dalam tim!

### 5B. Password kosong bisa login 🐞

Ini adalah permintaan reviewer yang Anda lihat di slide Pull Request: *"Please add validation for empty password."*

1. Buka halaman **Login**, isi NIM, kosongkan password, lalu klik **Masuk**. Login berhasil, padahal seharusnya tidak!
2. Branch: `fix/login-password-<nama>`.
3. Tambahkan validasi di `pages/login.html` agar muncul pesan *"Password tidak boleh kosong."*
4. Commit `"Add empty password validation"` → push → Pull Request.

---

## Checklist akhir

Centang semua sebelum sesi diskusi:

- [ ] Clone repository
- [ ] Membuat branch sendiri
- [ ] Commit (minimal 3 commit selama workshop)
- [ ] Push branch ke GitHub
- [ ] Membuat Pull Request
- [ ] Me-review Pull Request teman (komentar + approve)
- [ ] Memperbaiki Pull Request sendiri setelah review
- [ ] Menyelesaikan merge conflict
- [ ] Merge ke `main`
- [ ] `git pull` dan melihat hasil kerja seluruh tim di beranda SIAKAD

## Kartu contekan

```bash
git clone URL                 # salin repo
git switch main && git pull   # mulai dari versi terbaru
git switch -c feature/x       # buat branch & pindah
git status                    # APA yang terjadi sekarang? (sering-sering!)
git add .                     # pilih perubahan
git commit -m "Add x"         # rekam perubahan
git push -u origin feature/x  # kirim branch (pertama kali)
git push                      # kirim commit berikutnya
git merge main                # tarik main terbaru ke branch Anda
git merge --abort             # batalkan merge yang membingungkan
git log --oneline --graph     # lihat history
```
