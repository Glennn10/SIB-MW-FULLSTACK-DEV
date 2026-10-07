function Footer() {
  return (
    <div className="container">
      <footer className="py-2 my-2">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="#home" className="nav-link px-2 text-body-secondary">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#book" className="nav-link px-2 text-body-secondary">
              Book
            </a>
          </li>
          <li className="nav-item">
            <a href="#team" className="nav-link px-2 text-body-secondary">
              Team
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link px-2 text-body-secondary">
              Contact
            </a>
          </li>
        </ul>
        <p className="text-center text-body-secondary">
          &copy; 2026 BookSales. Created by Revani - STT Terpadu Nurul Fikri.
        </p>
      </footer>
    </div>
  );
}

export default Footer;