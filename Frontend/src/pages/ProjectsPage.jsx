function ProjectsPage() {
  return (
    <>
      <section className="section">
        <div className="container-xl">
          <div className="ga-hero reveal">
            <div className="ga-hero-panel">
              <span className="eyebrow mb-3">
                <i className="bi bi-brush-fill"></i> Graphic artist portfolio
              </span>
              <h1 className="ga-title">Design systems with poster energy.</h1>
              <p className="ga-copy mb-0">
                A curated wall of interface projects composed like print spreads:
                expressive color, strong hierarchy, and interaction-led storytelling.
              </p>
            </div>
            <div className="ga-stamp">
              <span>Issue 2026</span>
              <strong>06</strong>
              <span>Interactive works</span>
            </div>
          </div>

          <div className="ga-collage">
            <article className="card project-card ga-tile ga-feature-1 reveal delay-1">
              <div className="card-media tone-1 ga-media">
                <div>
                  <span className="kicker mb-3">
                    <i className="bi bi-broadcast-pin"></i> Live canvas
                  </span>
                  <h2 className="magazine-title mb-2">Nutribin Ecosystem</h2>
                  <p className="magazine-dek mb-0">
                    Smart compost visuals and operations dashboard in one narrative flow.
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="ga-meta mb-3">Series 01 / Eco systems</div>
                <div className="project-tags mb-3">
                  <span className="project-tag">NestJS</span>
                  <span className="project-tag">React</span>
                  <span className="project-tag">IoT</span>
                </div>
                <a
                  href="https://nutribin.up.railway.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary w-100"
                >
                  Open live site
                </a>
              </div>
            </article>

            <article className="card project-card ga-tile ga-feature-2 reveal delay-2">
              <div className="card-media tone-6 ga-media">
                <div>
                  <span className="kicker mb-3">
                    <i className="bi bi-broadcast-pin"></i> Live canvas
                  </span>
                  <h2 className="magazine-title mb-2">Ely and Yolly Jewelry</h2>
                  <p className="magazine-dek mb-0">
                    Commerce composition with production support tooling behind the scenes.
                  </p>
                </div>
              </div>
              <div className="card-body">
                <div className="ga-meta mb-3">Series 06 / Commerce stack</div>
                <div className="project-tags mb-3">
                  <span className="project-tag">NestJS</span>
                  <span className="project-tag">React</span>
                  <span className="project-tag">DevOps</span>
                </div>
                <a
                  href="https://ely-and-yolly.up.railway.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary w-100"
                >
                  Open live site
                </a>
              </div>
            </article>

            <article className="card project-card ga-tile ga-small reveal delay-3">
              <div className="card-media tone-2 ga-media">
                <div>
                  <h3 className="mb-1">GoFare Ecosystem</h3>
                  <p className="mb-0 muted">Transit operations / Series 02</p>
                </div>
              </div>
              <div className="card-body">
                <p className="project-description">
                  Fare management design with secure flows and structured operation rhythm.
                </p>
                <a
                  href="https://github.com/UnexpectedFeatures/GoFare-Server"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary w-100"
                >
                  Open details
                </a>
              </div>
            </article>

            <article className="card project-card ga-tile ga-small reveal delay-1">
              <div className="card-media tone-3 ga-media">
                <div>
                  <h3 className="mb-1">RollCall SAS</h3>
                  <p className="mb-0 muted">RFID attendance / Series 03</p>
                </div>
              </div>
              <div className="card-body">
                <p className="project-description">
                  RFID attendance flow designed for speed, clarity, and admin usability.
                </p>
                <a
                  href="https://github.com/JohnIvn/RollCall-SAS"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary w-100"
                >
                  Open details
                </a>
              </div>
            </article>

            <article className="card project-card ga-tile ga-small reveal delay-2">
              <div className="card-media tone-4 ga-media">
                <div>
                  <h3 className="mb-1">DuhOne Solutions</h3>
                  <p className="mb-0 muted">ISP systems / Series 04</p>
                </div>
              </div>
              <div className="card-body">
                <p className="project-description">
                  ISP-facing system architecture for service and operations reliability.
                </p>
                <a
                  href="https://github.com/JohnIvn"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary w-100"
                >
                  Open details
                </a>
              </div>
            </article>

            <article className="card project-card ga-tile ga-small reveal delay-3">
              <div className="card-media tone-5 ga-media">
                <div>
                  <h3 className="mb-1">Nihon Gaku</h3>
                  <p className="mb-0 muted">Learning product / Series 05</p>
                </div>
              </div>
              <div className="card-body">
                <p className="project-description">
                  Learning interface focused on warmth, readability, and playful pacing.
                </p>
                <a
                  href="https://github.com/JohnIvn"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary w-100"
                >
                  Open details
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProjectsPage;
