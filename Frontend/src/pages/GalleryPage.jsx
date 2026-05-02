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
  const [rimworldExpanded, setRimworldExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Detect which section is in view (priority order)
      const sections = ["figma", "canva", "rimworld", "rusted_warfare"];
      let found = false;
      for (const s of sections) {
        const el = document.querySelector(`[data-collection="${s}"]`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            setActiveSection(s);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection("top");
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
            className={`pill-nav-link ${activeSection === "figma" ? "active" : ""}`}
            onClick={() => scrollToSection("figma")}
          >
            Figma
          </button>
          <button
            className={`pill-nav-link ${activeSection === "canva" ? "active" : ""}`}
            onClick={() => scrollToSection("canva")}
          >
            Canva
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

      <section className="section section-tight pt-0" data-collection="figma">
        <div className="container-xl">
          <div className="making-of-collection reveal">
            <div className="making-of-header">
              <div className="making-of-icon tone-1">
                <img
                  src="/images/Figma.png"
                  alt="Figma logo"
                  className="making-of-icon-img"
                />
              </div>
              <div>
                <h3>Figma</h3>
                <p className="making-of-description">
                  In Figma, we developed the NutriBin system concept and user
                  interface direction to support a clear, professional design
                  workflow.
                </p>
              </div>
            </div>

            <div className="figma-embed-card glass-card">
              <div className="figma-embed-frame">
                <iframe
                  title="NutriBin Figma design"
                  src="https://embed.figma.com/design/2rKCoD4thNnS4URO66JF84/NutriBin--Excess-Food-Composting-and-Fertilizer-Monitoring-System?node-id=0-1&embed-host=share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight pt-0" data-collection="canva">
        <div className="container-xl">
          <div className="making-of-collection reveal">
            <div className="making-of-header">
              <div className="making-of-icon tone-2">
                <img
                  src="/images/Canva-icon.png"
                  alt="Canva logo"
                  className="making-of-icon-img"
                />
              </div>
              <div>
                <h3>Canva</h3>
                <p className="making-of-description">
                  Using Canva, we created a professional user guide for the
                  Nutribin system to support clear onboarding and consistent
                  documentation.
                </p>
              </div>
            </div>

            <div className="making-of-grid">
              {[
                {
                  fileName: "UserGuide.svg",
                  title: "User guide",
                  description: "System documentation layout",
                },
                {
                  fileName: "bhs_canva.png",
                  title: "Canva export",
                  description: "Presentation-ready asset",
                },
              ].map((asset, index) => (
                <article
                  key={asset.fileName}
                  className={`glass-card animation-card reveal delay-${(index % 2) + 1} ${
                    asset.fileName.endsWith(".svg") ? "canva-svg-card" : ""
                  }`}
                >
                  <a
                    href={`/images/misc/${asset.fileName}`}
                    target="_blank"
                    rel="noreferrer"
                    className={`animation-image-link ${
                      asset.fileName.endsWith(".svg") ? "canva-svg-link" : ""
                    }`}
                  >
                    <div
                      className={`animation-media-wrapper ${
                        asset.fileName.endsWith(".svg")
                          ? "canva-svg-wrapper"
                          : ""
                      }`}
                    >
                      <img
                        src={`/images/misc/${asset.fileName}`}
                        alt={asset.title}
                        className={`animation-media ${
                          asset.fileName.endsWith(".svg")
                            ? "canva-svg-image"
                            : ""
                        }`}
                        loading="lazy"
                      />
                    </div>
                  </a>
                  <div className="animation-card-body">
                    <p className="animation-card-title">{asset.title}</p>
                    <span className="animation-card-type">
                      {asset.description}
                    </span>
                  </div>
                </article>
              ))}
            </div>
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

            <div
              className={`gallery-grid ${
                collection.folder === "rimworld" ? "rimworld-preview" : ""
              }`}
            >
              {(collection.folder === "rimworld" && !rimworldExpanded
                ? collection.images.slice(0, 14)
                : collection.images
              ).map((fileName, index) => (
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
            {collection.folder === "rimworld" &&
              collection.images.length > 14 && (
                <div className="mt-3 text-center">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setRimworldExpanded((current) => !current)}
                  >
                    {rimworldExpanded
                      ? "Show less"
                      : `Show more (${collection.images.length - 14} more)`}
                  </button>
                </div>
              )}
          </div>
        </section>
      ))}
    </>
  );
}

export default GalleryPage;
