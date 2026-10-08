let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tambahProduk(nama, harga, stok) {
  const id = produkToko.length > 0 ? Math.max(...produkToko.map(p => p.id)) + 1 : 1;
  produkToko.push({ id, nama, harga, stok });
}

function hapusProduk(id) {
  produkToko = produkToko.filter(p => p.id !== id);
}

function tampilkanProduk() {
  produkToko.forEach(p => {
    console.log(`ID: ${p.id} | Nama: ${p.nama} | Harga: Rp${p.harga.toLocaleString("id-ID")} | Stok: ${p.stok}`);
  });
}

tambahProduk("Monitor", 1500000, 4);
hapusProduk(2);
tampilkanProduk();
