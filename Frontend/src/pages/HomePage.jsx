import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container-xl">
          <div className="hero-grid">
            <div className="reveal">
              <span className="kicker">
                <i className="bi bi-stars"></i> Graphic Art Portfolio
              </span>
              <h1>Color, motion, and systems with a tactile edge.</h1>
              <p className="lead">
                I design art-forward digital experiences, brand visuals, and
                interactive interfaces that feel composed, expressive, and
                intentional.
              </p>
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  View Works
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  About the Artist
                </Link>
              </div>

              <div className="split-grid mt-5">
                <div className="metric reveal delay-1">
                  <strong>6+</strong>
                  <div className="muted">project series and system studies</div>
                </div>
                <div className="metric reveal delay-2">
                  <strong>5</strong>
                  <div className="muted">
                    palette tones guiding the whole site
                  </div>
                </div>
              </div>
            </div>

            <div className="art-panel glass-card reveal delay-1">
              <div className="art-stack"></div>
              <div className="art-sheet">
                <div className="art-card art-primary d-flex flex-column justify-content-between">
                  <div>
                    <div className="eyebrow mb-3">
                      <i className="bi bi-brush"></i> Visual studies
                    </div>
                    <h3 style={{ fontSize: "2rem", maxWidth: "9ch" }}>
                      Graphic compositions built like poster layouts.
                    </h3>
                  </div>
                  <div className="tag-row mt-4">
                    <span className="tag">Typography</span>
                    <span className="tag">Layout</span>
                    <span className="tag">Motion</span>
                  </div>
                </div>

                <div className="art-secondary">
                  <div className="swatch one"></div>
                  <div className="swatch two"></div>
                  <div className="swatch three"></div>
                  <div className="swatch four"></div>
                </div>

                <div className="figure-caption">
                  <span>Palette study</span>
                  <span>Frosted glass, soft contrast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="section-heading reveal">
            <span className="eyebrow mb-3">
              <i className="bi bi-paint-bucket"></i> Creative direction
            </span>
            <h2>Built to feel like an art book, not a template.</h2>
            <p className="section-copy">
              The portfolio leans into soft color fields, layered glass panels,
              and a graphic rhythm that keeps each page feeling like a curated
              spread.
            </p>
          </div>

          <div className="feature-grid">
            <article className="card reveal delay-1">
              <div className="card-body">
                <div className="project-mark mb-3 tone-1">
                  <i className="bi bi-layers"></i>
                </div>
                <h3 className="card-title">Editorial composition</h3>
                <p className="card-text">
                  Layouts are spaced like poster grids, with strong hierarchy
                  and breathing room instead of dense blocks.
                </p>
              </div>
            </article>

            <article className="card reveal delay-2">
              <div className="card-body">
                <div className="project-mark mb-3 tone-2">
                  <i className="bi bi-droplet-half"></i>
                </div>
                <h3 className="card-title">Palette-led identity</h3>
                <p className="card-text">
                  The five-tone palette drives highlights, panels, and gradients
                  so the whole site feels visually unified.
                </p>
              </div>
            </article>

            <article className="card reveal delay-3">
              <div className="card-body">
                <div className="project-mark mb-3 tone-3">
                  <i className="bi bi-lightning-charge"></i>
                </div>
                <h3 className="card-title">Quiet motion</h3>
                <p className="card-text">
                  Gentle float, lift, and reveal animations add energy without
                  making the interface noisy.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container-xl">
          <div className="section-heading reveal">
            <span className="eyebrow mb-3">
              <i className="bi bi-camera-reels"></i> Featured studies
            </span>
            <h2>Selected works and systems.</h2>
          </div>

          <div className="project-grid">
            <article className="card project-card reveal delay-1">
              <div className="card-media tone-1">
                <div>
                  <div className="project-mark mb-3">
                    <i className="bi bi-trash3-fill"></i>
                  </div>
                  <h3 className="mb-0">Nutribin Ecosystem</h3>
                </div>
              </div>
              <div className="card-body">
                <p className="project-description">
                  A smart compost platform with monitoring, automation, and a
                  web-mobile experience shaped like a product prototype.
                </p>
                <div className="project-tags mb-4">
                  <span className="project-tag">NestJS</span>
                  <span className="project-tag">React</span>
                  <span className="project-tag">IoT</span>
                </div>
                <Link to="/projects" className="btn btn-secondary w-100">
                  Open project series
                </Link>
              </div>
            </article>

            <article className="card project-card reveal delay-2">
              <div className="card-media tone-2">
                <div>
                  <div className="project-mark mb-3">
                    <i className="bi bi-credit-card-fill"></i>
                  </div>
                  <h3 className="mb-0">GoFare Ecosystem</h3>
                </div>
              </div>
              <div className="card-body">
                <p className="project-description">
                  A fare management system built around reliability, fast
                  interaction, and structured service flows.
                </p>
                <div className="project-tags mb-4">
                  <span className="project-tag">Express</span>
                  <span className="project-tag">MySQL</span>
                  <span className="project-tag">Stripe</span>
                </div>
                <Link to="/projects" className="btn btn-secondary w-100">
                  Open project series
                </Link>
              </div>
            </article>

            <article className="card project-card reveal delay-3">
              <div className="card-media tone-3">
                <div>
                  <div className="project-mark mb-3">
                    <i className="bi bi-palette"></i>
                  </div>
                  <h3 className="mb-0">Nihon Gaku</h3>
                </div>
              </div>
              <div className="card-body">
                <p className="project-description">
                  A language learning experience shaped around clarity, teaching
                  flow, and playful visual structure.
                </p>
                <div className="project-tags mb-4">
                  <span className="project-tag">React</span>
                  <span className="project-tag">UX/UI</span>
                  <span className="project-tag">Learning</span>
                </div>
                <Link to="/projects" className="btn btn-secondary w-100">
                  Open project series
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-xl">
          <div className="split-grid align-items-stretch">
            <div className="glass-card p-4 p-md-5 reveal">
              <span className="eyebrow mb-3">
                <i className="bi bi-activity"></i> Working in public
              </span>
              <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}>
                The technical side stays visible.
              </h2>
              <p className="section-copy">
                This page keeps the portfolio feeling art-led while still
                highlighting the systems work behind it.
              </p>
              <div className="tag-row mt-4">
                <span className="tag">APIs</span>
                <span className="tag">Interfaces</span>
                <span className="tag">IoT</span>
                <span className="tag">Motion</span>
              </div>
            </div>

            <div className="glass-card p-4 p-md-5 reveal delay-1">
              <div className="timeline">
                <div className="timeline-item">
                  <h4>Current focus</h4>
                  <p className="mb-0 muted">
                    Graphic interfaces with clean motion and strong composition.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4>Preferred stack</h4>
                  <p className="mb-0 muted">
                    React, NestJS, PostgreSQL, and hardware-connected
                    prototypes.
                  </p>
                </div>
                <div className="timeline-item">
                  <h4>What I ship</h4>
                  <p className="mb-0 muted">
                    Portfolio systems, product studies, and concept interfaces
                    that feel finished.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
