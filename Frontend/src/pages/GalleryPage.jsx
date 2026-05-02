import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { galleryCollections } from "../data/galleryAssets";

function prettyLabel(fileName) {
  return fileName
    .replace(/\.[^.]+$/, "")
    .replace(/^Raw_?/, "")
    .replace(/^Raw\s+/, "")
    .replace(/^([0-9]+)\s*-\s*/, "$1 ")
    .replace(/[_-]+/g, " ")
    .replace(/(\d+)/g, " $1")
    .replace(/\s+/g, " ")
    .trim();
}

function GalleryPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Detect which section is in view
      const rimworldSection = document.querySelector(
        '[data-collection="rimworld"]',
      );
      const rustedWarfareSection = document.querySelector(
        '[data-collection="rusted_warfare"]',
      );

      if (rimworldSection && rustedWarfareSection) {
        const rimworldRect = rimworldSection.getBoundingClientRect();
        const rustedRect = rustedWarfareSection.getBoundingClientRect();

        if (rimworldRect.top < window.innerHeight / 2) {
          setActiveSection("rimworld");
        } else if (rustedRect.top < window.innerHeight / 2) {
          setActiveSection("rusted_warfare");
        } else {
          setActiveSection("top");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section) => {
    if (section === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("top");
    } else {
      const element = document.querySelector(`[data-collection="${section}"]`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
      }
    }
  };

  const totalImages = galleryCollections.reduce(
    (count, collection) => count + collection.images.length,
    0,
  );

  return (
    <>
      {/* Pill Navbar - visible when scrolled */}
      {isScrolled && (
        <nav className="gallery-pill-nav">
          <button
            className={`pill-nav-link ${activeSection === "top" ? "active" : ""}`}
            onClick={() => scrollToSection("top")}
          >
            Top
          </button>
          <button
            className={`pill-nav-link ${activeSection === "rusted_warfare" ? "active" : ""}`}
            onClick={() => scrollToSection("rusted_warfare")}
          >
            Rusted Warfare
          </button>
          <button
            className={`pill-nav-link ${activeSection === "rimworld" ? "active" : ""}`}
            onClick={() => scrollToSection("rimworld")}
          >
            RimWorld
          </button>
        </nav>
      )}

      <section className="section">
        <div className="container-xl">
          <div className="gallery-hero reveal">
            <div className="glass-card p-4 p-md-5 gallery-hero-copy">
              <span className="eyebrow mb-3">
                <i className="bi bi-images"></i> Gallery
              </span>
              <h1>Modding references and sprite studies.</h1>
              <p className="section-copy">
                A visual archive of assets from RimWorld and Rusted Warfare. It
                keeps the modding work grouped by folder so the page reads like
                a focused reference library instead of a random wall of images.
              </p>
              <div className="hero-actions mt-4">
                <Link to="/projects" className="btn btn-primary">
                  View projects
                </Link>
                <Link to="/skills" className="btn btn-secondary">
                  See skills
                </Link>
              </div>
            </div>

            <aside className="glass-card p-4 p-md-5 gallery-hero-panel">
              <span className="eyebrow light mb-3">Modding section</span>
              <div className="gallery-stats">
                <div className="gallery-stat">
                  <strong>{galleryCollections.length}</strong>
                  <span>folders</span>
                </div>
                <div className="gallery-stat">
                  <strong>{totalImages}</strong>
                  <span>images</span>
                </div>
              </div>
              <div className="gallery-note">
                <i className="bi bi-folder-symlink"></i>
                <div>
                  <strong>Public assets</strong>
                  <p>Loaded directly from the `public/images` folders.</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {galleryCollections.map((collection) => (
        <section
          className="section section-tight pt-0"
          key={collection.folder}
          data-collection={collection.folder}
        >
          <div className="container-xl">
            <div className="section-heading reveal">
              <span className="eyebrow mb-3">
                <i className="bi bi-folder2-open"></i> {collection.folder}
              </span>
              <h2>{collection.title}</h2>
              <p className="section-copy mx-auto">{collection.description}</p>
            </div>

            <div className="gallery-grid">
              {collection.images.map((fileName, index) => (
                <article
                  className={`glass-card gallery-card reveal delay-${(index % 3) + 1}`}
                  key={`${collection.folder}-${fileName}`}
                >
                  <a
                    href={`/images/${collection.folder}/${fileName}`}
                    target="_blank"
                    rel="noreferrer"
                    className="gallery-image-link"
                  >
                    <img
                      src={`/images/${collection.folder}/${fileName}`}
                      alt={prettyLabel(fileName)}
                      className="gallery-image"
                      loading="lazy"
                    />
                  </a>
                  <div className="gallery-card-body">
                    <p className="gallery-card-label">
                      {prettyLabel(fileName)}
                    </p>
                    <span className="gallery-card-folder">
                      {collection.folder}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}

export default GalleryPage;
