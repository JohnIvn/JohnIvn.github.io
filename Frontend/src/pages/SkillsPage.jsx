function SkillsPage() {
  return (
    <>
      <section className="section">
        <div className="container-xl">
          <div className="section-heading text-center mx-auto reveal">
            <span className="eyebrow mb-3">
              <i className="bi bi-tools"></i> Studio capabilities
            </span>
            <h1 className="mx-auto" style={{ maxWidth: "11ch" }}>
              Tools for art, interface, and systems.
            </h1>
            <p className="section-copy mx-auto">
              A practical toolkit for building polished interfaces, connected
              hardware, and the logic behind both.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-tight pt-0">
        <div className="container-xl">
          <div className="skill-grid">
            <div className="glass-card p-4 p-md-5 reveal">
              <div className="project-mark mb-3 tone-1">
                <i className="bi bi-code-slash"></i>
              </div>
              <h3>Programming Languages</h3>
              <p className="section-copy">
                The core logic, structure, and syntax powering the portfolio's
                applications and systems.
              </p>
              <div className="tag-row">
                <span className="skill-pill">C / C++</span>
                <span className="skill-pill">C#</span>
                <span className="skill-pill">Java</span>
                <span className="skill-pill">JavaScript</span>
                <span className="skill-pill">TypeScript</span>
                <span className="skill-pill">Python</span>
                <span className="skill-pill">SQL</span>
              </div>
            </div>

            <div className="glass-card p-4 p-md-5 reveal delay-1">
              <div className="project-mark mb-3 tone-2">
                <i className="bi bi-window-sidebar"></i>
              </div>
              <h3>Frontend Engineering</h3>
              <p className="section-copy">
                Crafting responsive, tactile interfaces with modern component
                systems and visual hierarchy.
              </p>
              <div className="tag-row">
                <span className="skill-pill">React.js</span>
                <span className="skill-pill">Next.js</span>
                <span className="skill-pill">Angular</span>
                <span className="skill-pill">HTML5</span>
                <span className="skill-pill">CSS3</span>
                <span className="skill-pill">Three.js</span>
              </div>
            </div>

            <div className="glass-card p-4 p-md-5 reveal delay-2">
              <div className="project-mark mb-3 tone-3">
                <i className="bi bi-server"></i>
              </div>
              <h3>Backend &amp; Systems</h3>
              <p className="section-copy">
                Architecting APIs, services, and deployment flows that stay
                stable under real usage.
              </p>
              <div className="tag-row">
                <span className="skill-pill">Node.js</span>
                <span className="skill-pill">NestJS</span>
                <span className="skill-pill">Express.js</span>
                <span className="skill-pill">Fastify</span>
                <span className="skill-pill">Electron</span>
              </div>
            </div>

            <div className="glass-card p-4 p-md-5 reveal delay-3">
              <div className="project-mark mb-3 tone-4">
                <i className="bi bi-database-fill"></i>
              </div>
              <h3>Data &amp; Storage</h3>
              <p className="section-copy">
                Managing relational and cloud-backed data layers with a focus on
                reliability and retrieval.
              </p>
              <div className="tag-row">
                <span className="skill-pill">PostgreSQL</span>
                <span className="skill-pill">MySQL</span>
                <span className="skill-pill">MSSQL</span>
                <span className="skill-pill">MongoDB</span>
                <span className="skill-pill">Firebase</span>
              </div>
            </div>

            <div className="glass-card p-4 p-md-5 reveal delay-1">
              <div className="project-mark mb-3 tone-5">
                <i className="bi bi-motherboard"></i>
              </div>
              <h3>Hardware &amp; IoT</h3>
              <p className="section-copy">
                Bridging digital interfaces and physical devices with embedded
                systems and sensors.
              </p>
              <div className="tag-row">
                <span className="skill-pill">Arduino</span>
                <span className="skill-pill">ESP32</span>
                <span className="skill-pill">RFID / NFC</span>
                <span className="skill-pill">IoT Integration</span>
              </div>
            </div>

            <div className="glass-card p-4 p-md-5 reveal delay-2">
              <div className="project-mark mb-3 tone-6">
                <i className="bi bi-bounding-box-circles"></i>
              </div>
              <h3>Design Direction</h3>
              <p className="section-copy">
                Visual framing, composition, and pacing that shape the overall
                feel of the portfolio and project pages.
              </p>
              <div className="tag-row">
                <span className="skill-pill">Layout</span>
                <span className="skill-pill">Typography</span>
                <span className="skill-pill">Brand Systems</span>
                <span className="skill-pill">Motion</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SkillsPage;
