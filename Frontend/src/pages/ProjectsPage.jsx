import { projects } from "../data/siteContent";

function ProjectsPage() {
  // Identify featured projects
  const featuredProjects = projects.filter(
    (p) =>
      p.title === "Nutribin Ecosystem" || p.title === "Ely and Yolly Jewelry",
  );
  const regularProjects = projects.filter(
    (p) =>
      p.title !== "Nutribin Ecosystem" && p.title !== "Ely and Yolly Jewelry",
  );

  return (
    <>
      <section className="section">
        <div className="container-xl">
          {/* Hero Section */}
          <div className="projects-hero reveal">
            <div className="projects-hero-content">
              <span className="eyebrow mb-3">
                <i className="bi bi-code-square"></i> Portfolio Projects
              </span>
              <h1 className="ga-title">Full-stack solutions</h1>
              <h1 className="ga-title">from concept to production.</h1>
              <p className="ga-copy mb-0">
                A collection of complete projects spanning IoT ecosystems,
                e-commerce platforms, transit systems, and educational tools.
                Each represents end-to-end development with focus on user
                experience, scalability, and technical excellence.
              </p>
            </div>
            <div className="projects-stats">
              <div className="stat-item">
                <span className="stat-label">Projects</span>
                <strong className="stat-value">{projects.length}</strong>
              </div>
              <div className="stat-item">
                <span className="stat-label">Technologies</span>
                <strong className="stat-value">15+</strong>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div className="featured-projects reveal">
            {featuredProjects.map((project, index) => (
              <a
                key={index}
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className={`project-card-featured delay-${index + 1}`}
              >
                {/* Image Container */}
                <div className="project-featured-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="project-image-overlay"></div>
                  <div className="project-click-hint">
                    <i className="bi bi-arrow-up-right"></i>
                    <span>Visit live site</span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="project-featured-content">
                  <span className="featured-badge">
                    <i className="bi bi-star-fill"></i> Featured
                  </span>
                  <h2 className="project-featured-title">{project.title}</h2>
                  <p className="project-featured-description">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="project-tags">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link Button */}
                  <span className="btn btn-primary">
                    <i className="bi bi-box-arrow-up-right"></i> Visit Site
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Regular Projects Grid */}
          <div className="projects-section">
            <h3 className="section-subtitle">Other Projects</h3>
            <div className="projects-grid">
              {regularProjects.map((project, index) => (
                <article
                  key={index}
                  className={`project-card-v2 reveal delay-${(index % 3) + 1}`}
                >
                  {/* Image Container */}
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <div className="project-image-overlay"></div>
                  </div>

                  {/* Content Container */}
                  <div className="project-content">
                    <div className="project-header">
                      <h2 className="project-title">{project.title}</h2>
                    </div>

                    <p className="project-description">{project.description}</p>

                    {/* Tags */}
                    <div className="project-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="project-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Link Button */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary w-100"
                    >
                      <i className="bi bi-github"></i> View Repository
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
