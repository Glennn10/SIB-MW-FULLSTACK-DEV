const links = [
  { href: "#home", label: "Home" },
  { href: "#book", label: "Book" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <ul className="nav justify-content-center footer-divider pb-3 mb-3">
          {links.map((link) => (
            <li className="nav-item" key={link.href}>
              <a href={link.href} className="nav-link px-3">
                {link.label}
              </a>
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
