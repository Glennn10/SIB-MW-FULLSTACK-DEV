const EventEmitter = require("events");

let produkList = [
  { id: 1, nama: "Laptop", harga: 12000000 },
  { id: 2, nama: "Smartphone", harga: 5000000 },
  { id: 3, nama: "Headphone", harga: 750000 },
  { id: 4, nama: "Keyboard", harga: 350000 },
  { id: 5, nama: "Monitor", harga: 2500000 }
];

const emitter = new EventEmitter();

const eventHandler = {
  tambah: (id, nama, harga) => {
    tambahProduk(id, nama, harga);
    console.log(`\nProduk "${nama}" berhasil ditambahkan.`);
  },
  hapus: (...ids) => {
    hapusProduk(...ids);
    console.log(`\nProduk dengan id ${ids.join(", ")} berhasil dihapus.`);
  },
  tampil: () => {
    console.log("\nDaftar Produk:");
    tampilkanProduk();
  }
};

emitter.on("tambahProduk", eventHandler.tambah);
emitter.on("hapusProduk", eventHandler.hapus);
emitter.on("tampilkanProduk", eventHandler.tampil);

function tambahProduk(id, nama, harga) {
  produkList = [...produkList, { id, nama, harga }];
}

function hapusProduk(...ids) {
  produkList = produkList.filter(({ id }) => !ids.includes(id));
}

function tampilkanProduk() {
  produkList.forEach(({ id, nama, harga }) => {
    console.log(`ID: ${id} | Nama: ${nama} | Harga: Rp${harga.toLocaleString("id-ID")}`);
  });
}

emitter.emit("tampilkanProduk");
emitter.emit("tambahProduk", 6, "Tablet", 7000000);
emitter.emit("tampilkanProduk");
emitter.emit("hapusProduk", 2);
emitter.emit("tampilkanProduk");
