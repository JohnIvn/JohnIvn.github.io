import { projects } from "../data/siteContent";

function ProjectsPage() {
  return (
    <section className="section">
      <h2>Projects</h2>
      <p className="muted">
        A collection of work spanning full-stack development, IoT, and system
        architecture.
      </p>
      <div className="grid grid-3">
        {projects.map((project) => (
          <article key={project.title} className="card">
            <img src={project.image} alt={project.title} loading="lazy" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tags">{project.tags.join(" · ")}</p>
            <a href={project.url} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
