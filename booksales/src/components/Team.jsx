const members = [
  {
    name: "Muhamad Wildan",
    description:
      "Frontend Developer yang bertanggung jawab dalam membuat dan mengembangkan tampilan website BookSales.",
  },
  {
    name: "Muhamad Wildan",
    description:
      "UI/UX Designer yang bertanggung jawab dalam merancang tampilan dan pengalaman pengguna pada website.",
  },
  {
    name: "Muhamad Wildan",
    description:
      "Backend Developer yang bertanggung jawab dalam mengelola data dan sistem pada website BookSales.",
  },
];

function Team() {
  return (
    <section id="team" className="team-section py-5">
      <div className="container px-4">
        <h2 className="section-title">Tim Kami</h2>
        <p className="lead text-body-secondary mt-4">
          BookStore dikembangkan oleh tim dengan peran yang berbeda dan saling
          bekerja sama untuk menciptakan website yang menarik, mudah digunakan,
          dan nyaman bagi para pembaca.
        </p>
        <div className="row g-4 py-4 row-cols-1 row-cols-lg-3">
          {members.map((member, index) => (
            <div className="col text-center" key={index}>
              <div className="team-card">
                <div className="team-icon d-inline-flex align-items-center justify-content-center fs-3 mb-3">
                  <i className="fa-solid fa-user"></i>
                </div>
                <h3 className="team-name fs-3">{member.name}</h3>
                <p className="text-body-secondary mb-0">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-body-secondary mt-3 mb-0">
          Dengan kolaborasi dan kreativitas setiap anggota, kami berusaha
          menghadirkan BookSales yang dapat memberikan pengalaman berbelanja
          buku yang menyenangkan bagi pengguna. Setiap anggota berkontribusi
          sesuai dengan keahlian masing-masing untuk menciptakan website yang
          menarik, informatif, dan mudah digunakan. Kami juga terus berusaha
          memberikan pengalaman yang lebih baik bagi setiap pengunjung
          BookSales.
        </p>
      </div>
    </section>
  );
}

export default Team;
