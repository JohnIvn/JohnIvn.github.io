import { projects } from "../data/siteContent";

function ProjectsPage() {
  return (
    <>
      <section className="section projects-hero">
        <div className="hero-copy card">
          <p className="eyebrow">Selected Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="hero-copy-text">
            A collection of full-stack development, IoT systems, and
            architecture focused on reliability and performance.
          </p>
        </div>

        <aside className="card project-note">
          <p className="eyebrow">Approach</p>
          <p className="card-text">
            Each project features intentional color cues and clear visual
            hierarchy for a hand-crafted feel.
          </p>
        </aside>
      </section>

      <section className="section">
        <div className="grid project-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="card project-card">
              <div className="project-media">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <span className="project-index">0{index + 1}</span>
              <h3 className="card-title">{project.title}</h3>
              <p className="card-text">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-pill">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="button-link"
              >
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
