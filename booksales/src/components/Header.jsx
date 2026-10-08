import { Link, NavLink } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/book", label: "Book" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  return (
    <header className="site-header">
      <div className="container d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link to="/" className="brand d-inline-flex align-items-center text-decoration-none">
            <i className="fa-solid fa-book fa-xl"></i>
            <span className="ms-2 fs-4">BookSales</span>
          </Link>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 mb-md-0 justify-content-center">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className="nav-link px-3">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="col-md-3 text-md-end">
          <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button>
          <button type="button" className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
