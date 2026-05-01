import { skillGroups } from "../data/siteContent";

function SkillsPage() {
  return (
    <>
      <section className="section skills-hero">
        <div className="hero-copy card">
          <p className="eyebrow">Technical Expertise</p>
          <h2 className="section-title">Skills</h2>
          <p className="hero-copy-text">
            A comprehensive toolkit spanning robust backend systems, dynamic
            frontends, and connected hardware.
          </p>
        </div>

        <aside className="card skills-note">
          <p className="eyebrow">Methodology</p>
          <p className="card-text">
            Structure first, color second, motion last. Color organizes
            knowledge into readable blocks.
          </p>
        </aside>
      </section>

      <section className="section">
        <div className="grid skill-layout">
          {skillGroups.map((group) => (
            <article key={group.title} className="card skill-card">
              <div className="skill-topbar" />
              <h3 className="card-title">{group.title}</h3>
              <p className="card-text">{group.description}</p>
              <div className="skill-pill-wrap">
                {group.items.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

export default SkillsPage;
