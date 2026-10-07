function Contact() {
  return (
    <section id="contact" className="container px-4 py-5">
      <h2 className="section-title">Hubungi Kami</h2>
      <div className="row g-4 py-4">
        <div className="col-md-5">
          <div className="contact-info">
            <h3>Mari Terhubung</h3>
            <p className="mt-3">
              Jika memiliki pertanyaan atau ingin mengetahui informasi lebih
              lanjut mengenai BookSales, silakan hubungi kami melalui informasi
              kontak berikut.
            </p>
            <div className="mt-4">
              <p>
                <i className="fa-solid fa-location-dot me-2"></i>
                <strong>Alamat:</strong> Bogor, Jawa Barat
              </p>
              <p>
                <i className="fa-solid fa-envelope me-2"></i>
                <strong>Email:</strong> bookstore@mail.com
              </p>
              <p className="mb-0">
                <i className="fa-solid fa-phone me-2"></i>
                <strong>Telepon:</strong> +62 812-3456-3462
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="contact-form">
            <h3 className="mb-3">Kirim Pesan</h3>
            <form>
              <div className="row g-3">
                <div className="col-12">
                  <label htmlFor="name" className="form-label">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Masukkan nama"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="nama@gmail.com"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    Pesan
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Tulis pesan Anda..."
                  ></textarea>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary px-4">
                    <i className="fa-solid fa-paper-plane me-2"></i>
                    Kirim Pesan
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
