import { NavLink, Outlet } from "react-router-dom";

function SiteLayout() {
  return (
    <main className="page">
      <header className="topbar">
        <NavLink to="/" className="logo">
          Jan Ivan
        </NavLink>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <Outlet />

      <footer className="footer">
        <p>© 2026 Jan Ivan Montenegro.</p>
        <p>
          <a href="https://github.com/johnivn" target="_blank" rel="noreferrer">
            GitHub
          </a>{" "}
          · <a href="mailto:janivantot@gmail.com">Email</a> ·{" "}
          <a
            href="https://www.linkedin.com/in/jan-ivan-montenegro-b499b139a"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </main>
  );
}

export default SiteLayout;
