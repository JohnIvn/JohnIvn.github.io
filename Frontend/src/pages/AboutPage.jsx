import { awards } from "../data/siteContent";

function AboutPage() {
  return (
    <>
      <section className="section about-hero">
        <div className="hero-copy card">
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">About</h2>
          <p className="hero-copy-text">
            Jan Ivan Montenegro. Full Stack Developer passionate about clean
            architecture and beautiful interfaces.
          </p>
        </div>

        <aside className="card about-note">
          <p className="eyebrow">Philosophy</p>
          <p className="card-text">
            I work at the intersection of design, reliability, and performance.
          </p>
        </aside>
      </section>

      <section className="section">
        <div className="grid about-intro-grid">
          <div className="about-copy">
            <h3 className="card-title">Passion for Tech</h3>
            <p className="card-text">
              I'm a passionate full-stack developer with a deep love for
              technology and problem-solving. Specialized in building robust,
              scalable applications that solve real-world problems.
            </p>
            <div className="about-links" style={{ marginTop: "24px" }}>
              <a href="mailto:janivantot@gmail.com" className="btn btn-primary">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Personal Info</h3>
            <ul className="about-list">
              <li>
                <strong>Pronouns:</strong> He/Him
              </li>
              <li>
                <strong>Location:</strong> Meycauayan, Bulacan / Caloocan City
              </li>
              <li>
                <strong>Affiliation:</strong> University of Caloocan City
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="experience-wrap">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Professional Background</h2>
          <div className="card experience-card">
            <h3>Back End &amp; DevOps Developer</h3>
            <p className="card-text">
              <strong>Ely &amp; Yolly Jewelry (Freelance)</strong>
            </p>
            <p className="card-text">
              Maintaining server-side systems, APIs, and databases while
              managing deployment pipelines and system reliability. Ensuring
              applications run efficiently, scale properly, and are continuously
              delivered through automated CI/CD processes.
            </p>
            <p
              className="card-text"
              style={{ marginTop: "12px", fontSize: "14px" }}
            >
              <strong>Sep 2025 - Present</strong> | NestJS, React.js
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="education-wrap">
          <p className="eyebrow">Education &amp; Accomplishments</p>
          <h2 className="section-title">Growth &amp; Achievements</h2>

          <div className="grid about-two-col">
            <article className="card">
              <h3 className="card-title">Education</h3>
              <p className="card-text">
                Bachelor of Science in Information Technology
              </p>
              <p className="card-text">
                University of Caloocan City (2023 - 2027)
              </p>
            </article>

            <article className="card">
              <h3 className="card-title">Honors &amp; Awards</h3>
              <ul className="about-list">
                {awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </article>

            <article className="card">
              <h3 className="card-title">Certifications</h3>
              <p className="card-text">Operating Systems Basics - Cisco</p>
              <p
                className="card-text"
                style={{ fontSize: "14px", marginBottom: "12px" }}
              >
                Issued Dec 2025
              </p>
              <a
                href="https://www.credly.com/badges/927dfee6-c4bd-4f1a-9ce1-7ac34c1270de/linked_in_profile"
                target="_blank"
                rel="noreferrer"
                className="button-link"
              >
                View Credential
              </a>
            </article>

            <article className="card">
              <h3 className="card-title">Languages</h3>
              <ul className="about-list">
                <li>English - Full professional proficiency</li>
                <li>Tagalog - Full professional proficiency</li>
              </ul>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
