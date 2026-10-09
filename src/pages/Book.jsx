import { useState } from "react";
import { Link } from "react-router";
import BookCover from "../components/BookCover";
import initialBooks from "../utils/books";

function Book() {
  const [books, setBooks] = useState(initialBooks);

  const handleAddBook = () => {
    const nextIndex = books.length + 1;
    const newBook = {
      id: Date.now(),
      title: `Buku Baru ${nextIndex}`,
      author: "Penulis Baru",
      year: 2026,
      description: "Buku tambahan yang ditambahkan dari tombol interaktif menggunakan useState.",
      image: "",
      price: `Rp ${90 + nextIndex * 5}.000`,
      from: "#7c3aed",
      to: "#312e81",
    };

    setBooks((currentBooks) => [...currentBooks, newBook]);
  };

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
              <div className="d-flex justify-content-center gap-2 mt-4 flex-wrap">
                <Link to="/contact" className="btn btn-primary px-4">
                  Tanya Stok
                </Link>
                <Link to="/team" className="btn btn-outline-primary px-4">
                  Kenal Tim Kami
                </Link>
                <button type="button" className="btn btn-success px-4" onClick={handleAddBook}>
                  Tambah Buku
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="book-album py-5">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4">
            {books.map((book) => (
              <div className="col" key={book.id}>
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
