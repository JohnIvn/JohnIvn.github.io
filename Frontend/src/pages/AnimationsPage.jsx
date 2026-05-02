import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  animationAssets,
  dontLookAnimation,
  makingOfDontLook,
} from "../data/animationAssets";

function AnimationsPage() {
  const [showFramesModal, setShowFramesModal] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  const videoAssets = animationAssets.filter((a) => a.type === "video");
  const imageAssets = animationAssets.filter((a) => a.type === "image");
  const storyboardAsset = animationAssets.find(
    (a) => a.fileName === "StoryBoardCompiled.png",
  );

  const scrollToSection = (sectionId) => {
    if (sectionId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("top");
      return;
    }
    const element = document.querySelector(`[data-collection="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 300) {
        setActiveSection("top");
        return;
      }
      const sections = [
        "animation_library",
        "aseprite",
        "animate",
        "premiere_pro",
        "photoshop",
      ];
      for (const section of sections) {
        const element = document.querySelector(
          `[data-collection="${section}"]`,
        );
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="section">
        <div className="container-xl">
          <div className="animation-hero reveal">
            <div className="glass-card p-4 p-md-5 animation-hero-copy">
              <span className="eyebrow mb-3">
                <i className="bi bi-film"></i> Animations
              </span>
              <h1>Motion studies and character work.</h1>
              <p className="section-copy">
                A collection of animated sequences, walk cycles, and storyboard
                work. The page keeps the animations organized by type so the
                work reads like a study series instead of a scattered archive.
              </p>
              <div className="hero-actions mt-4">
                <Link to="/projects" className="btn btn-primary">
                  View projects
                </Link>
                <Link to="/gallery" className="btn btn-secondary">
                  See gallery
                </Link>
              </div>
            </div>

            <aside className="glass-card p-4 p-md-5 animation-hero-panel">
              <span className="eyebrow light mb-3">Featured work</span>
              <div className="animation-featured">
                <div className="animation-featured-icon tone-5">
                  <i className={`bi ${dontLookAnimation.icon}`}></i>
                </div>
                <div>
                  <strong>{dontLookAnimation.title}</strong>
                  <p>{dontLookAnimation.description}</p>
                </div>
              </div>
              <div className="animation-stats">
                <div className="animation-stat">
                  <strong>{videoAssets.length}</strong>
                  <span>Videos</span>
                </div>
                <div className="animation-stat">
                  <strong>{imageAssets.length}</strong>
                  <span>Images</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {(videoAssets.length > 0 || showFramesModal) && (
        <nav className="gallery-pill-nav">
          <button
            className={`pill-nav-link ${activeSection === "top" ? "active" : ""}`}
            onClick={() => scrollToSection("top")}
          >
            Top
          </button>
          <button
            className={`pill-nav-link ${activeSection === "animation_library" ? "active" : ""}`}
            onClick={() => scrollToSection("animation_library")}
          >
            Animation Library
          </button>
          <button
            className={`pill-nav-link ${activeSection === "aseprite" ? "active" : ""}`}
            onClick={() => scrollToSection("aseprite")}
          >
            Aseprite
          </button>
          <button
            className={`pill-nav-link ${activeSection === "animate" ? "active" : ""}`}
            onClick={() => scrollToSection("animate")}
          >
            Animate
          </button>
          <button
            className={`pill-nav-link ${activeSection === "premiere_pro" ? "active" : ""}`}
            onClick={() => scrollToSection("premiere_pro")}
          >
            Premiere Pro
          </button>
          <button
            className={`pill-nav-link ${activeSection === "photoshop" ? "active" : ""}`}
            onClick={() => scrollToSection("photoshop")}
          >
            Photoshop
          </button>
        </nav>
      )}

      {storyboardAsset && (
        <section className="section section-tight pt-0">
          <div className="container-xl">
            <div className="storyboard-hero reveal">
              <a
                href={`/images/animations/${storyboardAsset.fileName}`}
                target="_blank"
                rel="noreferrer"
                className="storyboard-link"
              >
                <img
                  src={`/images/animations/${storyboardAsset.fileName}`}
                  alt={storyboardAsset.title}
                  className="storyboard-image"
                />
              </a>
              <div className="storyboard-caption">
                <h3>{storyboardAsset.title}</h3>
                <p>Click to view full resolution</p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="section section-tight pt-0">
        <div className="container-xl" data-collection="animation_library">
          <div className="section-heading reveal">
            <span className="eyebrow mb-3">
              <i className="bi bi-play-circle"></i> Motion sequences
            </span>
            <h2>Animation Library</h2>
            <p className="section-copy mx-auto">
              Each piece is a motion study, exploring character movement,
              timing, and narrative flow through video and storyboards.
            </p>
          </div>

          <div className="animation-grid">
            {videoAssets.map((asset, index) => (
              <article
                className={`glass-card animation-card reveal delay-${(index % 3) + 1}`}
                key={asset.fileName}
              >
                <div className="animation-media-wrapper">
                  <video
                    className="animation-media"
                    controls
                    preload="metadata"
                  >
                    <source
                      src={`/images/animations/${asset.fileName}`}
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="animation-card-body">
                  <p className="animation-card-title">{asset.title}</p>
                  <span className="animation-card-type">{asset.type}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight pt-0">
        <div className="container-xl" data-collection="aseprite">
          <div className="making-of-collection reveal">
            <div className="making-of-header">
              <div className="making-of-icon tone-3">
                <img
                  src="/images/aseprite.png"
                  alt="Aseprite logo"
                  className="making-of-icon-img"
                />
              </div>
              <div>
                <h3>Aseprite</h3>
                <p className="making-of-description">
                  I use Aseprite for pixel animation studies, including
                  character motion tests and frame-by-frame timing work.
                </p>
              </div>
            </div>

            <div className="gallery-grid rimworld-preview">
              <article className="glass-card aseprite-card reveal delay-1">
                <a
                  href="/images/iron_trauma/human.gif"
                  target="_blank"
                  rel="noreferrer"
                  className="aseprite-card-link"
                >
                  <img
                    src="/images/iron_trauma/human.gif"
                    alt="Human pixel animation"
                    className="aseprite-card-image"
                  />
                </a>
                <div className="aseprite-card-body">
                  <p className="aseprite-card-label">Human Pixel Loop</p>
                  <span className="aseprite-card-type">GIF</span>
                  <button
                    onClick={() => setShowFramesModal(true)}
                    className="btn btn-secondary"
                    style={{
                      marginTop: "8px",
                      fontSize: "0.8rem",
                      padding: "6px 12px",
                    }}
                  >
                    View Frames
                  </button>
                </div>
              </article>

              <article className="glass-card aseprite-card reveal delay-2">
                <a
                  href="/images/iron_trauma/bhs_aseprite.png"
                  target="_blank"
                  rel="noreferrer"
                  className="aseprite-card-link"
                >
                  <img
                    src="/images/iron_trauma/bhs_aseprite.png"
                    alt="BHS Aseprite preview"
                    className="aseprite-card-image"
                  />
                </a>
                <div className="aseprite-card-body">
                  <p className="aseprite-card-label">BHS Aseprite</p>
                  <span className="aseprite-card-type">PNG</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Making of Don't Look */}
      <section className="section">
        <div className="container-xl" data-collection="dont_look">
          <div className="section-heading reveal">
            <span className="eyebrow mb-3">
              <i className="bi bi-wrench"></i> Production pipeline
            </span>
            <h2>Making of "Don't Look"</h2>
            <p className="section-copy mx-auto">
              Behind-the-scenes glimpses into the production process across
              multiple tools and stages of development.
            </p>
          </div>

          <div className="making-of-collections">
            {makingOfDontLook.map((collection, colIndex) => (
              <div
                key={colIndex}
                className={`making-of-collection reveal delay-${(colIndex % 3) + 1}`}
                data-collection={
                  collection.title === "Adobe Animate"
                    ? "animate"
                    : collection.title === "Adobe Premiere Pro"
                      ? "premiere_pro"
                      : "photoshop"
                }
              >
                <div className="making-of-header">
                  <div className="making-of-icon tone-2">
                    <img
                      src={`/images/${collection.icon}`}
                      alt={collection.title}
                      className="making-of-icon-img"
                    />
                  </div>
                  <div>
                    <h3>{collection.title}</h3>
                    <p className="making-of-description">
                      {collection.description}
                    </p>
                  </div>
                </div>

                <div className="making-of-grid">
                  {collection.images.map((image, imgIndex) => (
                    <article
                      key={imgIndex}
                      className={`glass-card gallery-card reveal delay-${(imgIndex % 2) + 1}`}
                    >
                      <a
                        href={`/images/animations/${image.fileName}`}
                        target="_blank"
                        rel="noreferrer"
                        className="gallery-image-link"
                      >
                        <img
                          src={`/images/animations/${image.fileName}`}
                          alt={`${collection.title} - ${imgIndex + 1}`}
                          className="gallery-image"
                        />
                      </a>
                      <div className="gallery-card-body">
                        <p className="gallery-card-label">
                          {image.fileName.replace(/\.[^/.]+$/, "")}
                        </p>
                        <span className="gallery-card-folder">IMAGE</span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showFramesModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowFramesModal(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Animation Frames</h2>
              <button
                className="modal-close"
                onClick={() => setShowFramesModal(false)}
                aria-label="Close modal"
              >
                ×
              </button>
            </div>
            <div className="frames-grid">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                <div key={`frame-h${num}`} className="frame-item">
                  <img
                    src={`/images/iron_trauma/h${num}.png`}
                    alt={`Frame H${num}`}
                    className="frame-image"
                  />
                  <p className="frame-label">H{num}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AnimationsPage;
