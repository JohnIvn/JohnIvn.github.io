import { Link } from "react-router-dom";
import { whatIDo } from "../data/siteContent";

function HomePage() {
  return (
    <>
      <section className="section home-hero">
        <div className="hero-copy card">
          <p className="eyebrow">Jan Ivan Montenegro</p>
          <h1>Full Stack Developer &amp; Tech Visionary.</h1>
          <p className="hero-copy-text">
            Crafting beautiful, functional web experiences with clean
            architecture and bold design.
          </p>
          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View Work
            </Link>
          </div>
        </div>

        <aside className="hero-aside">
          <article className="card color-card">
            <p className="eyebrow">Focus</p>
            <h3>Clean Interfaces &amp; Reliable Systems</h3>
            <p className="card-text">
              I build practical work that feels polished, structured, and easy
              to use.
            </p>
          </article>

          <div className="swatch-grid">
            <div className="swatch swatch-yellow">#feedb3</div>
            <div className="swatch swatch-pink">#fdd0fd</div>
            <div className="swatch swatch-blue">#dcebfd</div>
            <div className="swatch swatch-mint">#dff8c2</div>
            <div className="swatch swatch-peach">#fed2e4</div>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">What I Do</p>
          <h2 className="section-title">Creative systems with utility.</h2>
        </div>
        <div className="grid four-up bento-grid">
          {whatIDo.map((item) => (
            <article key={item.title} className="card feature-card">
              <span className="feature-icon">{item.badge}</span>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-text">{item.description}</p>
              <div className="palette-strip" />
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">GitHub Activity</p>
          <h2 className="section-title">Signals from the code side.</h2>
        </div>
        <div className="grid gallery-grid">
          <img
            src="https://github-readme-stats.vercel.app/api?username=johnivn&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub stats"
            className="stats-card"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=johnivn&layout=compact&theme=tokyonight&hide_border=true"
            alt="Top languages"
            className="stats-card"
          />
        </div>
      </section>
    </>
  );
}

export default HomePage;
