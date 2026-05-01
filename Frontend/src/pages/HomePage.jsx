import { Link } from "react-router-dom";
import { whatIDo } from "../data/siteContent";

function HomePage() {
  return (
    <>
      <section className="section">
        <h1>Full Stack Developer and Tech Visionary</h1>
        <p className="lead">Hi I am Jan Ivan</p>
        <p className="muted">one two three four five</p>
        <p>
          <Link to="/projects">View Work</Link>
        </p>
      </section>

      <section className="section">
        <h2>What I Do</h2>
        <div className="grid grid-4">
          {whatIDo.map((item) => (
            <article key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <small>{item.badge}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>GitHub Activity</h2>
        <div className="grid grid-2">
          <img
            src="https://github-readme-stats.vercel.app/api?username=johnivn&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub stats"
          />
          <img
            src="https://github-readme-stats.vercel.app/api/top-langs?username=johnivn&layout=compact&theme=tokyonight&hide_border=true"
            alt="Top languages"
          />
        </div>
      </section>
    </>
  );
}

export default HomePage;
