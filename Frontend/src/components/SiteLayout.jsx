import { NavLink, Outlet } from "react-router-dom";

function SiteLayout() {
  return (
    <>
      <nav>
        <div className="container-xl d-flex align-items-center justify-content-between gap-3 py-2">
          <NavLink to="/" className="logo">
            <i className="bi bi-palette2"></i>
            Jan Ivan
          </NavLink>
          <ul className="nav-links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/skills">Skills</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <main className="page-shell">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container-xl d-flex align-items-center justify-content-between gap-3 flex-wrap">
          <p className="mb-0 text-secondary">
            &copy; 2026 Jan Ivan Montenegro.
          </p>
          <ul className="footer-links">
            <li>
              <a
                href="https://github.com/johnivn"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github me-1"></i> GitHub
              </a>
            </li>
            <li>
              <a href="mailto:janivantot@gmail.com">
                <i className="bi bi-envelope me-1"></i> Email
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jan-ivan-montenegro-b499b139a"
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-linkedin me-1"></i> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default SiteLayout;
