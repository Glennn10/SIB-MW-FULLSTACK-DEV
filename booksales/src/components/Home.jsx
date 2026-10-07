function Home() {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row hero-card g-0 align-items-stretch">
          <div className="col-lg-7 p-4 p-lg-5">
            <h1 className="hero-title display-4 fw-bold lh-sm">
              Temukan Buku <span>Favoritmu</span>
            </h1>
            <p className="lead mt-3">
              Temukan berbagai pilihan buku menarik untuk menemani waktu
              membaca kamu. Mulai dari cerita yang menginspirasi, petualangan
              yang seru, hingga buku yang menambah wawasan dan pengetahuan.
            </p>
            <p className="text-body-secondary">
              BookSales hadir untuk membantu kamu menemukan koleksi buku yang
              sesuai dengan minat dan kebutuhanmu. Jelajahi berbagai pilihan
              buku dan temukan cerita atau pengetahuan baru yang menarik untuk
              dibaca.
            </p>
            <div className="d-grid gap-2 d-md-flex mt-4">
              <a href="#book" className="btn btn-primary btn-lg px-4 fw-bold">
                Beli Sekarang
              </a>
              <a href="#book" className="btn btn-outline-primary btn-lg px-4">
                Jelajahi Buku
              </a>
            </div>
          </div>
          <div className="col-lg-5">
            <img
              className="hero-image"
              src="https://images.unsplash.com/photo-1597105026857-eda9652f9e49?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Koleksi buku BookSales"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
