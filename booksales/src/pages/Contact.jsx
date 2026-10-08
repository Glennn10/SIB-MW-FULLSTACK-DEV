import { useState } from "react";

const infos = [
  {
    icon: "fa-location-dot",
    title: "Lokasi",
    text: "Ciawi, Bogor, Jawa Barat",
  },
  {
    icon: "fa-envelope",
    title: "Surel",
    text: "halo@booksales.id",
  },
  {
    icon: "fa-phone",
    title: "Telepon",
    text: "+62 857-7084-1303",
  },
];

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    event.target.reset();
  };

  return (
    <section id="contact" className="contact-section py-5">
      <div className="container px-4">
        <div className="text-center mx-auto contact-head">
          <h2 className="section-title d-inline-block">Ada Pertanyaan?</h2>
          <p className="lead text-body-secondary mt-4">
            Tanyakan stok, harga, atau rekomendasi bacaan. Kami usahakan
            membalas secepat mungkin.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {infos.map((info) => (
            <div className="col-md-4" key={info.title}>
              <div className="contact-card text-center">
                <div className="contact-icon d-inline-flex align-items-center justify-content-center mb-3">
                  <i className={`fa-solid ${info.icon}`}></i>
                </div>
                <h3 className="fs-5">{info.title}</h3>
                <p className="text-body-secondary mb-0">{info.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-lg-8 mx-auto">
            <div className="contact-form">
              <h3 className="mb-1">Tinggalkan Pesan</h3>
              <p className="text-body-secondary mb-4">
                Isi formulir di bawah ini dan kami akan menghubungi kamu kembali.
              </p>
              {sent && (
                <div className="alert alert-success" role="alert">
                  Pesan kamu sudah terkirim. Terima kasih!
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="name" className="form-label">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Contoh: Budi Santoso"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Alamat Surel
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="budi@gmail.com"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject" className="form-label">
                      Topik
                    </label>
                    <select className="form-select" id="subject" defaultValue="stok">
                      <option value="stok">Ketersediaan buku</option>
                      <option value="pesanan">Status pesanan</option>
                      <option value="rekomendasi">Minta rekomendasi</option>
                      <option value="lainnya">Lainnya</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Isi Pesan
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      placeholder="Tuliskan pertanyaan kamu di sini..."
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary px-4">
                      <i className="fa-solid fa-paper-plane me-2"></i>
                      Kirim
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
