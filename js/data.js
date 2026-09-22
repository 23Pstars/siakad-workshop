// ============================================
// SIAKAD Workshop — data contoh (tanpa database)
// Semua halaman memakai data dari file ini.
// ============================================

const MATAKULIAH = [
  { kode: "IF101", nama: "Algoritma dan Pemrograman", sks: 4 },
  { kode: "IF102", nama: "Basis Data", sks: 3 },
  { kode: "IF103", nama: "Jaringan Komputer", sks: 3 },
  { kode: "IF104", nama: "Pemrograman Web", sks: 3 },
  { kode: "IF105", nama: "Matematika Diskrit", sks: 2 },
  { kode: "IF106", nama: "Bahasa Inggris Teknik", sks: 2 },
];

// Bobot nilai huruf: A = 4, B = 3, C = 2, D = 1, E = 0
const BOBOT = { A: 4, B: 3, C: 2, D: 1, E: 0 };

const MAHASISWA = [
  {
    nim: "F1D024001",
    nama: "Rina Lestari",
    nilai: [
      { kode: "IF101", huruf: "A" },
      { kode: "IF102", huruf: "B" },
      { kode: "IF105", huruf: "C" },
    ],
  },
  {
    nim: "F1D024002",
    nama: "Yoga Pratama",
    nilai: [
      { kode: "IF101", huruf: "B" },
      { kode: "IF102", huruf: "A" },
      { kode: "IF103", huruf: "A" },
    ],
  },
  {
    nim: "F1D024003",
    nama: "Sari Wulandari",
    nilai: [
      { kode: "IF101", huruf: "C" },
      { kode: "IF104", huruf: "A" },
      { kode: "IF106", huruf: "B" },
    ],
  },
  {
    nim: "F1D024004",
    nama: "Dimas Saputra",
    nilai: [
      { kode: "IF102", huruf: "B" },
      { kode: "IF103", huruf: "B" },
      { kode: "IF105", huruf: "A" },
    ],
  },
];

function cariMatakuliah(kode) {
  return MATAKULIAH.find((mk) => mk.kode === kode);
}

// Menghitung IPK mahasiswa
function hitungIPK(daftarNilai) {
  let total = 0;
  for (const n of daftarNilai) {
    total += BOBOT[n.huruf];
  }
  return total / daftarNilai.length;
}
