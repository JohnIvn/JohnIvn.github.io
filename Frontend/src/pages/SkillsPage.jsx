import { skillGroups } from "../data/siteContent";

function SkillsPage() {
  return (
    <section className="section">
      <h2>Technical Expertise</h2>
      <p className="muted">
        A comprehensive toolkit spanning across robust backend systems, dynamic
        frontends, and embedded connected hardware.
      </p>
      <div className="grid grid-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="card">
            <h3>{group.title}</h3>
            <p>{group.description}</p>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SkillsPage;
