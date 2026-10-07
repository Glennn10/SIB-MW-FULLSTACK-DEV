const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "Buku tentang cara membangun kebiasaan baik melalui perubahan kecil yang dilakukan secara konsisten.",
    price: "Rp 150.000",
    image: "https://jbr.id/wp-content/uploads/atomic-habits-1.jpg",
  },
  {
    title: "Laut Bercerita",
    author: "Leila S. Chudori",
    description:
      "Novel tentang persahabatan, keluarga, perjuangan, dan kehilangan dengan latar kehidupan sosial-politik Indonesia.",
    price: "Rp 115.000",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhcN759QYZubLElQPlu7jo1-sj6x5ql6ua4OHQrPobQFu6-aYzY3R47AuR9m5IPFVOT2X3dDQ1BtAYesFknsCY-un1qJZepq1UYzG17blhTJwtjjOQMYup0pCLsYTeUOV2z5oIb0MrVtIZ8VGlGkhKofEBK_1VGvfqWbDMf_kYk0a_sT860uMJ1xlsJqQ/s4032/Sinopsis%20Novel%20Sejarah%20Laut%20Bercerita.jpg",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description:
      "Cerita perjalanan seorang pemuda dalam mengejar impian dan menemukan makna dari perjalanan hidupnya.",
    price: "Rp 105.000",
    image:
      "https://bookmarkandworld.com/cdn/shop/files/WhatsAppImage2024-10-06at4.15.37PM_1.jpg?v=1728211642",
  },
  {
    title: "Laskar Pelangi",
    author: "Andrea Hirata",
    description:
      "Kisah perjuangan dan persahabatan sekelompok anak dalam mengejar pendidikan dan meraih impian.",
    price: "Rp 95.000",
    image:
      "https://down-id.img.susercontent.com/file/id-11134207-7rbk6-mart1uxfeip0d6",
  },
  {
    title: "Bumi Manusia",
    author: "Pramoedya Ananta Toer",
    description:
      "Novel yang menceritakan kehidupan, pendidikan, cinta, dan perjuangan dalam latar masa kolonial.",
    price: "Rp 110.000",
    image: "https://cdn.mediajabar.com/2023/08/novel-bumi-manusia.webp",
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    description:
      "Membahas cara manusia berpikir dan mengambil keputusan mengenai uang, kekayaan, dan keuangan.",
    price: "Rp 135.000",
    image:
      "https://penerbitbaca.com/wp-content/uploads/2023/10/The-Psychology-of-Money.jpg",
  },
  {
    title: "Negeri 5 Menara",
    author: "Ahmad Fuadi",
    description:
      "Kisah persahabatan dan perjuangan sekelompok santri dalam mengejar cita-cita dan masa depan.",
    price: "Rp 100.000",
    image:
      "https://filebroker-cdn.lazada.co.id/kf/Sa6e36ecff3ac4042a2e9ed3fe2bb75fdQ.jpg",
  },
  {
    title: "Perahu Kertas",
    author: "Dee Lestari",
    description:
      "Kisah tentang cinta, impian, persahabatan, dan perjalanan menemukan jati diri.",
    price: "Rp 100.000",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-7rdyu-mcn42bokjha80a",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    description:
      "Membahas pola pikir mengenai uang, investasi, dan pentingnya pendidikan finansial.",
    price: "Rp 125.000",
    image:
      "https://down-id.img.susercontent.com/file/sg-11134201-8259d-mrl613ab0dms4d",
  },
];

function Book() {
  return (
    <section id="book">
      <div className="book-intro py-5 text-center">
        <div className="container">
          <div className="row py-lg-4">
            <div className="col-lg-7 col-md-9 mx-auto">
              <h2 className="display-6">Jelajahi Koleksi Buku Kami</h2>
              <p className="lead text-body-secondary mt-3">
                Temukan berbagai pilihan buku yang telah kami pilih untuk
                memenuhi kebutuhan setiap pembaca. Mulai dari cerita yang
                menginspirasi, petualangan yang menarik, hingga buku yang
                menambah pengetahuan dan pengembangan diri. BookSales membantu
                kamu menemukan buku yang sesuai dengan minat dan kebutuhanmu.
              </p>
              <div className="d-flex justify-content-center gap-2 mt-4">
                <a href="#book" className="btn btn-primary px-4">
                  Lihat
                </a>
                <a href="#book" className="btn btn-outline-primary px-4">
                  Buku Lainnya
                </a>
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
                  <img
                    className="book-cover"
                    src={book.image}
                    alt={book.title}
                    loading="lazy"
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
                          Lihat
                        </button>
                        <button type="button" className="btn btn-sm btn-primary">
                          Beli
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
