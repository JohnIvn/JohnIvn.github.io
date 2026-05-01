import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container-xl">
          <div className="section-heading text-center mx-auto reveal">
            <span className="eyebrow mb-3">
              <i className="bi bi-person-vcard"></i> About
            </span>
            <h1 className="mx-auto" style={{ maxWidth: "11ch" }}>
              A builder with an art director&apos;s eye.
            </h1>
            <p className="section-copy mx-auto">
              I enjoy turning technical systems into experiences that feel
              organized, tactile, and visually deliberate.
            </p>
          </div>

          <div className="about-grid align-items-stretch">
            <div className="glass-card p-4 p-md-5 reveal">
              <span className="eyebrow mb-3">
                <i className="bi bi-brush"></i> Artist statement
              </span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                I think in layers, contrast, and flow.
              </h2>
              <p className="section-copy">
                My work sits between product design and engineering. I like systems
                that are clean enough to use, but expressive enough to remember.
                That is why this portfolio leans on color fields, frosted surfaces,
                and motion that feels calm rather than flashy.
              </p>
              <div className="button-row mt-4">
                <a href="mailto:janivantot@gmail.com" className="btn btn-primary">
                  Email Me
                </a>
                <Link to="/projects" className="btn btn-secondary">
                  See projects
                </Link>
              </div>
            </div>

            <div className="glass-card p-4 p-md-5 reveal delay-1">
              <span className="eyebrow mb-3">
                <i className="bi bi-info-circle"></i> Personal notes
              </span>
              <div className="timeline">
                <div className="timeline-item">
                  <h4>Pronouns</h4>
                  <p className="mb-0 muted">He/Him</p>
                </div>
                <div className="timeline-item">
                  <h4>Location</h4>
                  <p className="mb-0 muted">Meycauayan, Bulacan / Caloocan City</p>
                </div>
                <div className="timeline-item">
                  <h4>Affiliation</h4>
                  <p className="mb-0 muted">University of Caloocan City</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container-xl">
          <div className="section-heading reveal">
            <span className="eyebrow mb-3">
              <i className="bi bi-briefcase"></i> Experience
            </span>
            <h2>Professional work and study.</h2>
          </div>

          <div className="split-grid">
            <div className="timeline-item reveal delay-1">
              <p className="muted mb-2">Sep 2025 - Present</p>
              <h4>Back End &amp; DevOps Developer</h4>
              <p className="mb-2">
                <strong>Ely &amp; Yolly Jewelry (Freelance)</strong>
              </p>
              <p className="muted mb-0">
                Maintaining server-side systems, APIs, and databases while
                managing deployment pipelines and reliability.
              </p>
              <div className="tag-row mt-3">
                <span className="tag">NestJS</span>
                <span className="tag">React.js</span>
                <span className="tag">CI/CD</span>
              </div>
            </div>

            <div className="timeline-item reveal delay-2">
              <p className="muted mb-2">2023 - 2027</p>
              <h4>Bachelor of Science in Information Technology</h4>
              <p className="mb-2">
                <strong>University of Caloocan City</strong>
              </p>
              <p className="muted mb-0">
                Academic foundation in software development, systems thinking, and
                applied problem solving.
              </p>
              <div className="tag-row mt-3">
                <span className="tag">Systems</span>
                <span className="tag">Software</span>
                <span className="tag">Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="section-heading text-center mx-auto reveal">
            <span className="eyebrow mb-3">
              <i className="bi bi-award"></i> Highlights
            </span>
            <h2>Selected accomplishments.</h2>
            <p className="section-copy mx-auto">
              Recent recognitions, certifications, and language fluency that support
              the work behind the portfolio.
            </p>
          </div>

          <div className="skill-grid">
            <div className="glass-card p-4 p-md-5 reveal delay-1">
              <div className="project-mark mb-3 tone-1">
                <i className="bi bi-trophy-fill"></i>
              </div>
              <h3>Honors &amp; Awards</h3>
              <div className="timeline mt-4">
                <div className="timeline-item">
                  <h4>Champion in the Python Competition of CSD Fair 2025</h4>
                  <p className="muted mb-0">
                    Issued by University of Caloocan City, Oct 2025
                  </p>
                </div>
                <div className="timeline-item">
                  <h4>1st Place in the C# Competition of CSD Fair 2025</h4>
                  <p className="muted mb-0">
                    Issued by University of Caloocan City, Oct 2025
                  </p>
                </div>
                <div className="timeline-item">
                  <h4>1st Place in the C Competition of CSD Fair 2025</h4>
                  <p className="muted mb-0">
                    Issued by University of Caloocan City, Mar 2025
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 p-md-5 reveal delay-2">
              <div className="project-mark mb-3 tone-2">
                <i className="bi bi-patch-check-fill"></i>
              </div>
              <h3>Licenses &amp; Certifications</h3>
              <div className="timeline mt-4">
                <div className="timeline-item">
                  <h4>Operating Systems Basics</h4>
                  <p className="muted mb-2">Cisco, issued Dec 2025</p>
                  <a
                    href="https://www.credly.com/badges/927dfee6-c4bd-4f1a-9ce1-7ac34c1270de/linked_in_profile"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    Show credential
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-4 p-md-5 reveal delay-3">
              <div className="project-mark mb-3 tone-3">
                <i className="bi bi-translate"></i>
              </div>
              <h3>Languages</h3>
              <div className="tag-row mt-4">
                <span className="tag">English</span>
                <span className="tag">Full professional proficiency</span>
                <span className="tag">Tagalog</span>
                <span className="tag">Full professional proficiency</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
