// ===============================
// script.js - Tugas Individu 2
// Studi kasus: Menu Kafe
// ===============================

// 1. Array of object (minimal 5 data)
const menu = [
  { id: 1, nama: "Kopi Susu", kategori: "Minuman", harga: 18000, stok: 25, tersedia: true },
  { id: 2, nama: "Es Teh Manis", kategori: "Minuman", harga: 8000, stok: 40, tersedia: true },
  { id: 3, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, stok: 10, tersedia: true },
  { id: 4, nama: "Mie Ayam", kategori: "Makanan", harga: 20000, stok: 0, tersedia: false },
  { id: 5, nama: "Roti Bakar", kategori: "Snack", harga: 15000, stok: 15, tersedia: true },
  { id: 6, nama: "Kentang Goreng", kategori: "Snack", harga: 12000, stok: 0, tersedia: false },
];

// 2a. Function: menghitung rata-rata harga
function hitungRataRataHarga(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].harga;
  }
  return total / data.length;
}

// 2b. Function: memfilter menu berdasarkan kategori (for...of)
function filterByKategori(data, kategori) {
  const hasil = [];
  for (const item of data) {
    if (item.kategori === kategori) {
      hasil.push(item);
    }
  }
  return hasil;
}

// 2c. Function: mencari menu termurah yang tersedia (operator logika &&)
function cariTermurahTersedia(data) {
  let termurah = null;
  data.forEach((item) => {
    if (item.tersedia && item.stok > 0) {
      if (termurah === null || item.harga < termurah.harga) {
        termurah = item;
      }
    }
  });
  return termurah;
}

// 2d. Function: mencari menu berdasarkan nama
function cariByNama(data, keyword) {
  return data.filter((item) => item.nama.toLowerCase().includes(keyword.toLowerCase()));
}

// ===============================
// 3 & 4. Tampilkan hasil di Console
// ===============================

console.log("===== DAFTAR SEMUA MENU =====");
menu.forEach((item, index) => {
  const status = item.tersedia && item.stok > 0 ? "Tersedia" : "Habis";
  console.log(`${index + 1}. ${item.nama} (${item.kategori}) - Rp${item.harga.toLocaleString("id-ID")} | Stok: ${item.stok} | ${status}`);
});

console.log("\n===== RATA-RATA HARGA =====");
console.log("Rata-rata harga menu: Rp" + hitungRataRataHarga(menu).toLocaleString("id-ID"));

console.log("\n===== FILTER KATEGORI: MINUMAN =====");
console.log(filterByKategori(menu, "Minuman"));

console.log("\n===== MENU TERMURAH YANG TERSEDIA =====");
const termurah = cariTermurahTersedia(menu);
console.log(`${termurah.nama} - Rp${termurah.harga.toLocaleString("id-ID")}`);

console.log("\n===== PENCARIAN: 'goreng' =====");
console.log(cariByNama(menu, "goreng"));

console.log("\n===== MENU DENGAN HARGA > 15000 ATAU STOK HABIS =====");
for (const item of menu) {
  if (item.harga > 15000 || item.stok === 0) {
    console.log(`- ${item.nama} (Rp${item.harga.toLocaleString("id-ID")}, stok ${item.stok})`);
  }
}
