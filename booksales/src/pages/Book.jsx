import { Link } from "react-router";
import BookCover from "../components/BookCover";

const books = [
  {
    title: "Filosofi Teras",
    author: "Henry Manampiring",
    description:
      "Pengantar filsafat Stoa yang dikemas ringan untuk membantu mengelola emosi dan menghadapi masalah sehari-hari.",
    price: "Rp 98.000",
    coverId: 15255806,
    from: "#0f766e",
    to: "#134e4a",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description:
      "Menelusuri sejarah singkat umat manusia, dari zaman batu hingga masa modern, dengan sudut pandang yang segar.",
    price: "Rp 145.000",
    coverId: 8634250,
    from: "#b45309",
    to: "#78350f",
  },
  {
    title: "Pulang",
    author: "Leila S. Chudori",
    description:
      "Novel tentang eksil politik Indonesia di Paris yang bergulat dengan rindu, identitas, dan makna rumah.",
    price: "Rp 105.000",
    coverId: 15094936,
    from: "#9f1239",
    to: "#4c0519",
  },
  {
    title: "Hujan",
    author: "Tere Liye",
    description:
      "Kisah cinta dan persahabatan di masa depan yang dibalut bencana, kenangan, serta keberanian untuk merelakan.",
    price: "Rp 90.000",
    coverId: 10872657,
    from: "#1d4ed8",
    to: "#1e1b4b",
  },
  {
    title: "Sebuah Seni untuk Bersikap Bodo Amat",
    author: "Mark Manson",
    description:
      "Panduan blak-blakan untuk memilih hal yang benar-benar penting dan melepaskan kekhawatiran yang tidak perlu.",
    price: "Rp 85.000",
    coverUrl: "https://bukukita.com/babacms/displaybuku/118789_f.jpg",
    from: "#c2410c",
    to: "#431407",
  },
  {
    title: "Ronggeng Dukuh Paruk",
    author: "Ahmad Tohari",
    description:
      "Trilogi klasik tentang seorang penari ronggeng di sebuah dusun kecil yang hidupnya dibayangi gejolak zaman.",
    price: "Rp 80.000",
    coverId: 4317176,
    from: "#4d7c0f",
    to: "#1a2e05",
  },
  {
    title: "Dunia Sophie",
    author: "Jostein Gaarder",
    description:
      "Novel yang memperkenalkan sejarah filsafat lewat surat-surat misterius yang diterima seorang gadis remaja.",
    price: "Rp 120.000",
    coverUrl: "https://down-id.img.susercontent.com/file/id-11134207-7ra0j-mb688ifz4koka3",
    from: "#7e22ce",
    to: "#3b0764",
  },
  {
    title: "Bumi",
    author: "Tere Liye",
    description:
      "Petualangan seorang remaja yang menemukan dunia paralel dan kemampuan istimewa yang selama ini ia sembunyikan.",
    price: "Rp 95.000",
    coverId: 12810708,
    from: "#0369a1",
    to: "#082f49",
  },
  {
    title: "Cantik Itu Luka",
    author: "Eka Kurniawan",
    description:
      "Saga keluarga berlatar sejarah Indonesia yang memadukan realisme magis, humor gelap, dan kisah lintas generasi.",
    price: "Rp 110.000",
    coverId: 13903116,
    from: "#be123c",
    to: "#1f2937",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "Panduan praktis membangun kebiasaan baik lewat perubahan kecil yang konsisten dan mudah dipertahankan.",
    price: "Rp 125.000",
    coverId: 12539702,
    from: "#2563eb",
    to: "#172554",
  },
  {
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    description:
      "Kisah persahabatan dan perjuangan sekelompok anak Belitung yang terus mengejar pendidikan dan cita-cita.",
    price: "Rp 99.000",
    coverId: 7079796,
    from: "#0284c7",
    to: "#164e63",
  },
  {
    title: "Negeri 5 Menara",
    author: "A. Fuadi",
    description:
      "Perjalanan enam sahabat di pesantren yang belajar bermimpi besar dan berpegang pada keyakinan mereka.",
    price: "Rp 110.000",
    coverId: 14303993,
    from: "#b45309",
    to: "#422006",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description:
      "Cerita dan pelajaran tentang bagaimana perilaku, emosi, dan kebiasaan membentuk keputusan keuangan.",
    price: "Rp 115.000",
    coverId: 10389354,
    from: "#0f766e",
    to: "#042f2e",
  },
  {
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    description:
      "Novel tentang kehilangan, persahabatan, dan keluarga yang menanti kabar di tengah gejolak sejarah.",
    price: "Rp 120.000",
    coverId: 10648285,
    from: "#1d4ed8",
    to: "#172554",
  },
];

function Book() {
  return (
    <section id="book">
      <div className="book-intro py-5 text-center">
        <div className="container">
          <div className="row py-lg-4">
            <div className="col-lg-7 col-md-9 mx-auto">
              <h2 className="display-6">Rak Buku Pilihan</h2>
              <p className="lead text-body-secondary mt-3">
                Ada {books.length} pilihan dari novel sastra, filsafat populer,
                sampai bacaan pengembangan diri. Pilih satu judul, lalu mulai
                membaca hari ini.
              </p>
              <div className="d-flex justify-content-center gap-2 mt-4">
                <Link to="/contact" className="btn btn-primary px-4">
                  Tanya Stok
                </Link>
                <Link to="/team" className="btn btn-outline-primary px-4">
                  Kenal Tim Kami
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="book-album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {books.map((book) => (
              <div className="col" key={book.title}>
                <div className="book-card card h-100 shadow-sm">
                  <BookCover
                    title={book.title}
                    author={book.author}
                    coverUrl={book.coverUrl}
                    coverId={book.coverId}
                    from={book.from}
                    to={book.to}
                  />
                  <div className="card-body d-flex flex-column">
                    <h3 className="book-title card-title">{book.title}</h3>
                    <small className="book-author">{book.author}</small>
                    <p className="card-text text-body-secondary mt-2">
                      {book.description}
                    </p>
                    <div className="d-flex justify-content-between align-items-center mt-auto pt-2">
                      <div className="btn-group">
                        <button type="button" className="btn btn-sm btn-outline-primary">
                          Detail
                        </button>
                        <button type="button" className="btn btn-sm btn-primary">
                          Pesan
                        </button>
                      </div>
                      <strong className="book-price">{book.price}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;
