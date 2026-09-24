# Aturan Kolaborasi Tim SIAKAD

## 1. Jangan kerja langsung di `main`

`main` adalah versi yang selalu stabil. Semua pekerjaan dilakukan di branch.

```bash
git switch main
git pull
git switch -c feature/dosen-rina
```

## 2. Penamaan branch

| Jenis | Format | Contoh |
|---|---|---|
| Fitur baru | `feature/<fitur>-<nama>` | `feature/dosen-rina` |
| Perbaikan bug | `fix/<masalah>-<nama>` | `fix/ipk-yoga` |
| Latihan anggota | `anggota/<nama>` | `anggota/rina` |

Gunakan huruf kecil dan tanda `-`, tanpa spasi.

## 3. Pesan commit

Tulis dalam bahasa Inggris, diawali kata kerja, singkat dan jelas.

| ✅ Baik | ❌ Kurang baik |
|---|---|
| `Add dosen page` | `update` |
| `Add dosen menu to navbar` | `fix` |
| `Fix IPK calculation using SKS` | `asdfgh` |
| `Add empty password validation` | `revisi final beneran` |

## 4. Pull Request

- Satu Pull Request = satu fitur atau satu perbaikan.
- Isi template Pull Request (judul, apa yang berubah, cara mengetes).
- Minta minimal **1 reviewer** dari anggota tim.
- Jangan merge Pull Request milik sendiri sebelum di-approve.

## 5. Code review

Reviewer memeriksa:

- [ ] Halaman bisa dibuka di browser tanpa error.
- [ ] Menu atau kartu di `index.html` mengarah ke halaman yang benar.
- [ ] Tidak ada conflict marker (`<<<<<<<`, `=======`, `>>>>>>>`).
- [ ] Nama branch dan pesan commit mengikuti aturan.
- [ ] Tidak ada perubahan di luar lingkup tugas.

Komentar yang baik: **spesifik, sopan, dan memberi alasan.**
Contoh: *"Link di menu masih `dosen.htm`, seharusnya `pages/dosen.html` supaya halamannya terbuka."*

## 6. Setelah merge

Semua anggota memperbarui `main` di laptop masing-masing:

```bash
git switch main
git pull
```
