import { Link } from "react-router";

function NotFound() {
  return (
    <section className="container text-center py-5 my-5">
      <h1 className="display-1 fw-bold not-found-code">404</h1>
      <p className="lead text-body-secondary">Halaman tidak ditemukan.</p>
      <Link to="/" className="btn btn-primary px-4">
        Kembali ke Home
      </Link>
    </section>
  );
}

export default NotFound;
