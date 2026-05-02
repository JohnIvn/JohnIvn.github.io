import { projects } from "../data/siteContent";
import { useState, useEffect } from "react";

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

  // Modal carousel state
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImages, setPreviewImages] = useState([]);
  const [previewIndex, setPreviewIndex] = useState(0);

  useEffect(() => {
    const onKey = (e) => {
      if (!previewOpen) return;
      if (e.key === "ArrowRight")
        setPreviewIndex((i) => Math.min(i + 1, previewImages.length - 1));
      if (e.key === "ArrowLeft") setPreviewIndex((i) => Math.max(i - 1, 0));
      if (e.key === "Escape") setPreviewOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [previewOpen, previewImages.length]);

  const openPreview = (samples, start = 0) => {
    const imgs = Array.isArray(samples) && samples.length ? samples : [];
    setPreviewImages(imgs.length ? imgs : ["/images/223152.png"]);
    setPreviewIndex(start);
    setPreviewOpen(true);
  };

  const closePreview = () => setPreviewOpen(false);

  const nextPreview = () =>
    setPreviewIndex((i) => Math.min(i + 1, previewImages.length - 1));
  const prevPreview = () => setPreviewIndex((i) => Math.max(i - 1, 0));

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
              <article
                key={index}
                className={`project-card-featured delay-${index + 1}`}
              >
                {/* Image Container */}
                <div className="project-featured-image">
                  <img
                    src={project.icon || project.image}
                    alt={project.title}
                    className={`project-image ${project.icon ? "project-icon" : ""}`}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <div className="project-image-overlay"></div>
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
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="btn btn-outline"
                      onClick={() => openPreview(project.samples)}
                    >
                      <i className="bi bi-eye"></i> Preview
                    </button>
                    <a
                      className="btn btn-primary"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="bi bi-box-arrow-up-right"></i> Visit Site
                    </a>
                  </div>
                </div>
              </article>
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
                      src={project.icon || project.image}
                      alt={project.title}
                      className={`project-image ${project.icon ? "project-icon" : ""}`}
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

                    {/* Action Buttons */}
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        marginTop: "12px",
                      }}
                    >
                      <button
                        className="btn btn-outline"
                        onClick={() => openPreview(project.samples)}
                      >
                        <i className="bi bi-eye"></i> Preview
                      </button>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary w-100"
                      >
                        <i className="bi bi-github"></i> View Repository
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Preview modal */}
      {previewOpen && (
        <div className="preview-modal" role="dialog" aria-modal="true">
          <div className="preview-backdrop" onClick={closePreview}></div>
          <div className="preview-dialog">
            <button
              className="preview-close"
              onClick={closePreview}
              aria-label="Close"
            >
              ×
            </button>
            <div className="preview-inner">
              <button
                className="preview-nav left"
                onClick={prevPreview}
                disabled={previewIndex === 0}
              >
                ‹
              </button>
              <div className="preview-image-wrap">
                <img
                  src={previewImages[previewIndex]}
                  alt={`Preview ${previewIndex + 1}`}
                />
              </div>
              <button
                className="preview-nav right"
                onClick={nextPreview}
                disabled={previewIndex === previewImages.length - 1}
              >
                ›
              </button>
            </div>
            <div className="preview-footer">
              <span>
                {previewIndex + 1} / {previewImages.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectsPage;
