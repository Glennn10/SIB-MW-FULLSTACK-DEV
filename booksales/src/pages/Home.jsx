import { Link } from "react-router";

const categories = [
  { icon: "fa-feather-pointed", name: "Fiksi & Sastra", count: "Cerita yang tinggal lama" },
  { icon: "fa-brain", name: "Pengembangan Diri", count: "Ide untuk bertumbuh" },
  { icon: "fa-compass", name: "Sejarah & Sains", count: "Dunia dari sudut baru" },
  { icon: "fa-wand-magic-sparkles", name: "Fantasi", count: "Petualangan tanpa batas" },
];

function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="home-eyebrow">
                <i className="fa-solid fa-sparkles" aria-hidden="true"></i>
                Ruang kecil untuk cerita besar
              </span>
              <h1 className="home-title">
                Satu buku,
                <br />
                <span>seribu dunia.</span>
              </h1>
              <p className="home-description">
                Temukan bacaan yang pas untuk menemani jeda, memantik rasa
                ingin tahu, atau membawamu pergi ke tempat yang belum pernah
                kamu kunjungi.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-3 mt-4">
                <Link to="/book" className="btn home-primary-btn">
                  Temukan bukumu
                  <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>
                </Link>
                <span className="home-note">
                  <i className="fa-solid fa-book-open" aria-hidden="true"></i>
                  Banyak cerita, satu rak
                </span>
              </div>
              <div className="home-proof">
                <div className="home-proof-avatars" aria-hidden="true">
                  <span>R</span>
                  <span>A</span>
                  <span>D</span>
                </div>
                <p>
                  <strong>Teman baca barumu</strong>
                  <span>dimulai dari satu halaman</span>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="home-visual">
                <img
                  className="home-hero-image"
                  src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=1200&q=85"
                  alt="Seseorang menikmati buku di ruang yang nyaman"
                />
                <div className="home-image-caption">
                  <span className="home-caption-icon">
                    <i className="fa-solid fa-bookmark" aria-hidden="true"></i>
                  </span>
                  <span>
                    <strong>Waktu untuk dirimu</strong>
                    <small>Mulai dari halaman pertama</small>
                  </span>
                </div>
                <div className="home-image-sticker" aria-hidden="true">
                  <i className="fa-solid fa-quote-left"></i>
                  <span>Buka buku.<br />Buka kemungkinan.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-categories">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <span className="home-kicker">Pilih suasananya</span>
              <h2>Mau membaca tentang apa?</h2>
            </div>
            <Link to="/book" className="home-text-link">
              Lihat semua buku
              <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>
            </Link>
          </div>
          <div className="row g-3">
            {categories.map((category) => (
              <div className="col-sm-6 col-xl-3" key={category.name}>
                <Link to="/book" className="home-category-card">
                  <span className="home-category-icon">
                    <i className={`fa-solid ${category.icon}`} aria-hidden="true"></i>
                  </span>
                  <span className="home-category-copy">
                    <strong>{category.name}</strong>
                    <small>{category.count}</small>
                  </span>
                  <i className="fa-solid fa-arrow-up-right-from-square home-category-arrow" aria-hidden="true"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-feature">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="home-feature-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1000&q=85"
                  alt="Rak buku penuh dengan bacaan pilihan"
                  className="home-feature-image"
                  loading="lazy"
                />
                <span className="home-feature-label">
                  <i className="fa-solid fa-heart me-2" aria-hidden="true"></i>
                  Dipilih dengan rasa
                </span>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <span className="home-kicker">Lebih dari sekadar halaman</span>
              <h2 className="home-feature-title">
                Temukan buku yang terasa seperti <em>“ini aku banget.”</em>
              </h2>
              <p className="home-feature-description">
                Setiap orang punya cerita yang sedang dicari. Jelajahi koleksi
                kami, ikuti rasa penasaranmu, dan biarkan buku berikutnya
                menemukan jalannya ke tanganmu.
              </p>
              <ul className="home-benefits">
                <li>
                  <i className="fa-solid fa-check" aria-hidden="true"></i>
                  Pilihan bacaan dari beragam genre
                </li>
                <li>
                  <i className="fa-solid fa-check" aria-hidden="true"></i>
                  Deskripsi yang membantumu memilih
                </li>
                <li>
                  <i className="fa-solid fa-check" aria-hidden="true"></i>
                  Inspirasi untuk membaca lebih sering
                </li>
              </ul>
              <Link to="/book" className="home-text-link home-feature-link">
                Jelajahi rak buku
                <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="container">
          <div className="home-cta-card">
            <div>
              <span className="home-kicker">Cerita berikutnya menunggumu</span>
              <h2>Siap jatuh cinta pada bacaan baru?</h2>
              <p>Mulai petualanganmu dari rak pilihan BookSales.</p>
            </div>
            <Link to="/book" className="btn home-cta-btn">
              Cari buku sekarang
              <i className="fa-solid fa-arrow-right ms-2" aria-hidden="true"></i>
            </Link>
            <i className="fa-solid fa-book-open home-cta-decoration" aria-hidden="true"></i>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
