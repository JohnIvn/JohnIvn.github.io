import { Link } from "react-router-dom";
import { skillGroups } from "../data/siteContent";

const skillCards = [
  {
    ...skillGroups[0],
    icon: "bi-code-slash",
    tone: "tone-1",
    note: "Languages & syntax",
  },
  {
    ...skillGroups[1],
    icon: "bi-window-sidebar",
    tone: "tone-2",
    note: "Interfaces & motion",
  },
  {
    ...skillGroups[2],
    icon: "bi-server",
    tone: "tone-3",
    note: "APIs & runtime",
  },
  {
    ...skillGroups[3],
    icon: "bi-database-fill",
    tone: "tone-4",
    note: "Storage & retrieval",
  },
  {
    ...skillGroups[4],
    icon: "bi-motherboard",
    tone: "tone-5",
    note: "Embedded systems",
  },
  {
    title: "Design Direction",
    description:
      "Visual framing, composition, and pacing that shape the portfolio into a cohesive experience.",
    items: ["Layout", "Typography", "Brand Systems", "Motion"],
    icon: "bi-bounding-box-circles",
    tone: "tone-6",
    note: "Creative layer",
  },
];

const totalSkills = skillCards.reduce(
  (count, group) => count + group.items.length,
  0,
);

function SkillsPage() {
  return (
    <>
      <section className="section">
        <div className="container-xl">
          <div className="skills-hero reveal">
            <div className="skills-hero-copy glass-card p-4 p-md-5">
              <span className="eyebrow mb-3">
                <i className="bi bi-tools"></i> Studio capabilities
              </span>
              <h1>Tools for art, interface, and systems.</h1>
              <p className="section-copy">
                A practical toolkit for building polished interfaces, connected
                hardware, and the logic behind both. The page now follows the
                rest of the portfolio: structured, expressive, and easier to
                scan.
              </p>
              <div className="hero-actions mt-4">
                <Link to="/projects" className="btn btn-primary">
                  See projects
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  About me
                </Link>
              </div>
            </div>

            <aside className="skills-hero-panel glass-card p-4 p-md-5">
              <span className="eyebrow light mb-3">Current stack</span>
              <div className="skills-metric-grid">
                <div className="skills-metric">
                  <strong>{skillCards.length}</strong>
                  <span>disciplines</span>
                  <p>From code and data to product design and hardware.</p>
                </div>
                <div className="skills-metric">
                  <strong>{totalSkills}+</strong>
                  <span>tools and practices</span>
                  <p>
                    Grouped into a single view so the stack reads at a glance.
                  </p>
                </div>
              </div>

              <div className="skills-focus-list">
                <div className="skills-focus-item">
                  <i className="bi bi-lightning-charge-fill"></i>
                  <div>
                    <strong>Fast UI delivery</strong>
                    <p>React, CSS, and component-driven layouts.</p>
                  </div>
                </div>
                <div className="skills-focus-item">
                  <i className="bi bi-diagram-3-fill"></i>
                  <div>
                    <strong>Systems thinking</strong>
                    <p>APIs, databases, and deployment flows.</p>
                  </div>
                </div>
                <div className="skills-focus-item">
                  <i className="bi bi-cpu-fill"></i>
                  <div>
                    <strong>Physical computing</strong>
                    <p>IoT prototypes and embedded integrations.</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-tight pt-0">
        <div className="container-xl">
          <div className="section-heading reveal">
            <span className="eyebrow mb-3">
              <i className="bi bi-grid-1x2-fill"></i> Capability map
            </span>
            <h2>What I use to ship work.</h2>
            <p className="section-copy mx-auto">
              The stack is organized by how it is used in practice, not just by
              technology category, so the page feels like a working reference.
            </p>
          </div>

          <div className="skill-grid">
            {skillCards.map((group, index) => (
              <article
                key={group.title}
                className={`glass-card skill-card p-4 p-md-5 reveal delay-${(index % 3) + 1}`}
              >
                <div className={`project-mark mb-3 ${group.tone}`}>
                  <i className={`bi ${group.icon}`}></i>
                </div>
                <div className="skills-card-head">
                  <div>
                    <p className="skills-card-note">{group.note}</p>
                    <h3>{group.title}</h3>
                  </div>
                  <span className="skills-card-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="section-copy">{group.description}</p>
                <div className="tag-row">
                  {group.items.map((item) => (
                    <span key={item} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsPage;
