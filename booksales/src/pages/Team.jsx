const members = [
  {
    name: "Muhamad Wildan",
    role: "Frontend Developer",
    icon: "fa-code",
    description:
      "Menyusun halaman, komponen, dan navigasi supaya website terasa rapi dan nyaman dijelajahi.",
  },
  {
    name: "Muhamad Wildan",
    role: "UI/UX Designer",
    icon: "fa-pen-ruler",
    description:
      "Merancang alur kunjungan, palet warna, dan tata letak agar pembaca cepat menemukan buku yang dicari.",
  },
  {
    name: "Muhamad Wildan",
    role: "Backend Developer",
    icon: "fa-database",
    description:
      "Mengatur data katalog dan pesanan di balik layar agar informasi selalu akurat dan mudah diperbarui.",
  },
];

function Team() {
  return (
    <section id="team" className="team-section py-5">
      <div className="container px-4">
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="team-intro">
              <span className="team-eyebrow">Di Balik Layar</span>
              <h2 className="team-heading mt-2">Orang-orang yang membangun BookSales</h2>
              <p className="text-body-secondary mt-3">
                Setiap peran saling melengkapi, mulai dari rancangan tampilan,
                penulisan kode, sampai pengelolaan data. Tujuannya sederhana:
                membuat toko buku online yang enak dipakai.
              </p>
              <div className="team-stats d-flex gap-4 mt-4">
                <div>
                  <strong>3</strong>
                  <span>Peran</span>
                </div>
                <div>
                  <strong>9</strong>
                  <span>Judul Buku</span>
                </div>
                <div>
                  <strong>1</strong>
                  <span>Misi</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="d-flex flex-column gap-3">
              {members.map((member, index) => (
                <div className="team-row d-flex align-items-start gap-4" key={index}>
                  <div className="team-icon flex-shrink-0 d-inline-flex align-items-center justify-content-center fs-4">
                    <i className={`fa-solid ${member.icon}`}></i>
                  </div>
                  <div>
                    <h3 className="team-name fs-4 mb-1">{member.name}</h3>
                    <span className="team-role">{member.role}</span>
                    <p className="text-body-secondary mt-2 mb-0">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
