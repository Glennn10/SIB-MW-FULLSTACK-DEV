import { NavLink } from "react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/book", label: "Book" },
  { to: "/team", label: "Team" },
  { to: "/contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <ul className="nav justify-content-center footer-divider pb-3 mb-3">
          {links.map((link) => (
            <li className="nav-item" key={link.to}>
              <NavLink to={link.to} end={link.to === "/"} className="nav-link px-3">
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <p className="text-center mb-0">
          &copy; 2026 BookSales. Created by Muhamad Wildan - STT Terpadu Nurul Fikri.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
