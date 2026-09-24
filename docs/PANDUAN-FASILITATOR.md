# Panduan Fasilitator

Dokumen ini untuk pemateri dan asisten. Peserta cukup membaca `SKENARIO.md`.

## 1. Isi repository

Repository ini sudah memiliki **history** dan **branch** yang disiapkan agar cocok dengan slide:

| Branch | Isi | Dipakai di |
|---|---|---|
| `main` | Project awal SIAKAD (Login, Mahasiswa, KRS) | semua sesi |
| `latihan/judul-dashboard` | Budi mengganti `<h1>` beranda menjadi "Sistem Informasi Akademik Terpadu" | Sesi 4A (conflict terkontrol) |

History `main` (`git log --oneline`) berisi commit dari Ahmad, Budi, dan Citra, antara lain *Initial project*, *Add login page*, *Add login validation*, *Add mahasiswa page*, dan *Add KRS page*. History ini bisa dipakai saat membahas slide "Git History".

**Bug yang sengaja ditanam** (untuk Sesi 5):
1. `js/data.js` → `hitungIPK()` membagi total bobot dengan jumlah mata kuliah, bukan dengan total SKS.
   - Salah: Rina 3.00, Yoga 3.67, Sari 3.00, Dimas 3.33
   - Benar: Rina 3.22, Yoga 3.60, Sari 2.89, Dimas 3.25
2. `pages/login.html` → password kosong tetap bisa login.

Kunci jawaban ada di bagian 7.

## 2. Persiapan (H-1)

### Pilih model repository

| Jumlah peserta | Rekomendasi |
|---|---|
| ≤ 12 orang | 1 repository untuk semua peserta |
| > 12 orang | 1 repository **per kelompok** (4 orang), supaya daftar Pull Request tidak terlalu ramai |

### Upload ke GitHub

1. Buat repository **kosong** di GitHub (tanpa README), misalnya `[org]/siakad-workshop`. Sebaiknya **Public**.
2. Dari folder project ini:
   ```bash
   git remote add origin https://github.com/[org]/siakad-workshop.git
   git push -u origin --all
   ```
   `--all` wajib dipakai agar branch `latihan/judul-dashboard` ikut terkirim.
3. Untuk model per kelompok, ada dua pilihan:
   - Ulangi langkah 1–2 untuk setiap kelompok (`siakad-kelompok-1`, `siakad-kelompok-2`, ...).
   - Atau jadikan repository sebagai template (Settings → centang **Template repository**). Ketua kelompok membuat repo dengan **Use this template** dan wajib mencentang **Include all branches**.

### Pengaturan repository

- **Collaborators:** Settings → Collaborators → undang username peserta. Kumpulkan username sebelum hari H lewat formulir.
- **Proteksi `main`:** Settings → Branches (atau Rules → Rulesets) → aktifkan:
  - *Require a pull request before merging*
  - *Require approvals: 1*

  Pengaturan ini membuat peserta **tidak bisa** push langsung ke `main`, sehingga mereka terpaksa memakai alur yang benar. Pada akun gratis, fitur ini hanya tersedia untuk repository **Public**.

### Checklist peserta (kirim H-1)

- [ ] Git terpasang (`git --version`)
- [ ] Akun GitHub aktif dan username sudah dikirim ke panitia
- [ ] Editor teks terpasang (disarankan VS Code)
- [ ] (Opsional) GitHub CLI: `gh auth login` untuk menghindari masalah password saat push

## 3. Susunan waktu

### Versi lengkap (± 2 jam praktik)

| Waktu | Kegiatan | Slide |
|---|---|---|
| 0:00 | Sesi 0 — Persiapan | 1–5 |
| 0:10 | Demo repository & commit dengan repo ini | 6–7 |
| 0:20 | **Sesi 1** — Daftar Hadir Digital | 13–15 |
| 0:40 | Demo branch & merge | 8–10 |
| 0:50 | **Sesi 2** — Sprint Fitur | 17–18 |
| 1:25 | **Sesi 3** — Code Review | 16 |
| 1:40 | Demo conflict, lalu **Sesi 4** | 11–12 |
| 2:05 | **Sesi 5** (bonus, bagi yang sudah selesai) | — |
| 2:05 | Diskusi & penutup | 19–20 |

### Versi singkat (45 menit, sesuai slide 18)

- Sesi 1 (15 menit) → langsung Sesi 2 dengan 1 kartu per orang (20 menit).
- Review cukup 1 komentar + approve (5 menit).
- Conflict akan muncul secara alami di Sesi 2. Selesaikan bersama di depan kelas memakai layar salah satu peserta (5 menit).

## 4. Naskah demo (memakai repo ini)

```bash
git clone https://github.com/[org]/siakad-workshop.git
cd siakad-workshop
git log --oneline                        # slide 7: history nyata
git show HEAD~1 --stat                   # siapa, kapan, file apa
git switch -c feature/demo-login         # slide 8
# edit pages/login.html
git add . && git commit -m "Add login hint text"
git switch main && git merge feature/demo-login    # slide 10
git merge origin/latihan/judul-dashboard            # slide 11: conflict langsung muncul
                                                    # jika main lokal Anda sudah mengubah <h1>
```

Agar conflict pada demo selalu muncul, ubah dulu `<h1>` di `main` lokal menjadi "Dashboard Akademik" lalu commit, sebelum menjalankan `git merge origin/latihan/judul-dashboard`. Commit demo ini **jangan di-push**.

## 5. Masalah yang sering muncul

| Gejala | Penyebab | Solusi |
|---|---|---|
| `Please tell me who you are` | Git belum dikonfigurasi | `git config --global user.name/user.email` |
| Diminta password, lalu gagal | GitHub tidak menerima password akun untuk Git | Personal Access Token, `gh auth login`, atau Git Credential Manager |
| `403` / `Permission denied` | Undangan collaborator belum diterima | Buka `github.com/[org]/siakad-workshop/invitations` |
| `rejected ... (fetch first)` | Ada perubahan baru di remote | `git pull`, lalu `git push` lagi |
| `protected branch hook declined` | Peserta push ke `main` | Buat branch: `git switch -c feature/x`, lalu push branch itu |
| Terbuka editor Vim saat merge | Pesan merge commit default | Ketik `:wq` lalu Enter. Untuk jangka panjang: `git config --global core.editor "code --wait"` |
| Beranda menampilkan `<<<<<<<` | Marker conflict ikut ter-commit | Hapus marker, commit, push lagi |
| Branch `latihan/judul-dashboard` tidak ada | Repo diupload tanpa `--all` | Fasilitator menjalankan `git push origin latihan/judul-dashboard` |
| Peserta di Windows, `cp` tidak jalan | Perintah Linux | Salin file lewat File Explorer atau VS Code |

## 6. Setelah workshop

- Biarkan repository tetap ada sebagai portofolio peserta. Isi `anggota/` dan history Pull Request menjadi bukti praktik.
- Untuk memakai ulang di kelas berikutnya: buat repository baru dari zip asli, jangan mereset repository yang lama.

## 7. Kunci jawaban Sesi 5

**5A — `js/data.js`**
```js
function hitungIPK(daftarNilai) {
  let totalBobot = 0;
  let totalSks = 0;
  for (const n of daftarNilai) {
    const sks = cariMatakuliah(n.kode).sks;
    totalBobot += BOBOT[n.huruf] * sks;
    totalSks += sks;
  }
  return totalBobot / totalSks;
}
```

**5B — `pages/login.html`** (tambahkan setelah validasi NIM)
```js
if (password === "") {
  pesan.className = "pesan-error";
  pesan.textContent = "Password tidak boleh kosong.";
  return;
}
```
