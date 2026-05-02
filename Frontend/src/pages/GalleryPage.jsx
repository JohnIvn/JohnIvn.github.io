import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { galleryCollections, geometronBhsImages } from "../data/galleryAssets";

const iconDrafts = [
  {
    fileName: "nutribin_icon.png",
    title: "Nutribin",
  },
  {
    fileName: "eyj_icon.png",
    title: "Ely and Yolly Jewelry",
  },
  {
    fileName: "gofare_icon.png",
    title: "GoFare",
  },
  {
    fileName: "rollcall_icon.png",
    title: "RollCall",
  },
  {
    fileName: "duhone_icon.png",
    title: "DuhOne",
  },
  {
    fileName: "nihon_icon.png",
    title: "Nihon Gaku",
  },
];

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
  const [geometronExpanded, setGeometronExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      // Detect the section nearest the threshold from above.
      const sections = [
        "figma",
        "canva",
        "icon_drafts",
        "geometron",
        "krita",
        "rimworld",
        "rusted_warfare",
      ];
      const threshold = window.innerHeight * 0.4;
      let currentSection = "top";
      let bestTop = Number.NEGATIVE_INFINITY;

      for (const s of sections) {
        const el = document.querySelector(`[data-collection="${s}"]`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.top > bestTop) {
            currentSection = s;
            bestTop = rect.top;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
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
            className={`pill-nav-link ${activeSection === "icon_drafts" ? "active" : ""}`}
            onClick={() => scrollToSection("icon_drafts")}
          >
            Icon Drafts
          </button>
          <button
            className={`pill-nav-link ${activeSection === "geometron" ? "active" : ""}`}
            onClick={() => scrollToSection("geometron")}
          >
            Geometron
          </button>
          <button
            className={`pill-nav-link ${activeSection === "krita" ? "active" : ""}`}
            onClick={() => scrollToSection("krita")}
          >
            Krita
          </button>
          <button
            className={`pill-nav-link ${activeSection === "rimworld" ? "active" : ""}`}
            onClick={() => scrollToSection("rimworld")}
          >
            RimWorld
          </button>
          <button
            className={`pill-nav-link ${activeSection === "rusted_warfare" ? "active" : ""}`}
            onClick={() => scrollToSection("rusted_warfare")}
          >
            Rusted Warfare
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

      <section
        className="section section-tight pt-0"
        data-collection="icon_drafts"
      >
        <div className="container-xl">
          <div className="section-heading reveal">
            <span className="eyebrow mb-3">
              <i className="bi bi-palette2"></i> Icon Drafts
            </span>
            <h2>Project icons and early marks.</h2>
            <p className="section-copy mx-auto">
              These are the icons and draft marks for several projects I’ve
              worked on, created to establish a consistent visual identity
              before the final presentation assets were refined.
            </p>
          </div>

          <div className="gallery-grid icon-drafts-grid">
            {iconDrafts.map((asset, index) => (
              <article
                key={asset.fileName}
                className={`glass-card gallery-card reveal delay-${(index % 3) + 1}`}
              >
                <a
                  href={`/images/${asset.fileName}`}
                  target="_blank"
                  rel="noreferrer"
                  className="gallery-image-link"
                >
                  <img
                    src={`/images/${asset.fileName}`}
                    alt={asset.title}
                    className="gallery-image"
                    loading="lazy"
                  />
                </a>
                <div className="gallery-card-body">
                  <p className="gallery-card-label">{asset.title}</p>
                  <span className="gallery-card-folder">draft icon</span>
                </div>
              </article>
            ))}
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
                collection.folder === "rimworld" ||
                collection.folder === "rusted_warfare"
                  ? "rimworld-preview"
                  : collection.folder === "geometron"
                    ? "geometron-three"
                    : ""
              }`}
            >
              {(collection.folder === "rimworld" && !rimworldExpanded
                ? collection.images.slice(0, 14)
                : collection.folder === "geometron" && !geometronExpanded
                  ? collection.images.slice(0, 4)
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
            {collection.folder === "geometron" &&
              collection.images.length > 4 && (
                <div className="mt-3 text-center">
                  <button
                    className="btn btn-secondary"
                    onClick={() => setGeometronExpanded((current) => !current)}
                  >
                    {geometronExpanded
                      ? "Show less"
                      : `Show more (${collection.images.length - 4} more)`}
                  </button>
                </div>
              )}

            {collection.folder === "geometron" &&
              geometronBhsImages.length > 0 && (
                <div className="mt-4" data-collection="krita">
                  <div className="making-of-collection reveal">
                    <div className="making-of-header">
                      <div className="making-of-icon tone-4">
                        <img
                          src="/images/krita.svg"
                          alt="Krita icon"
                          className="making-of-icon-img"
                        />
                      </div>
                      <div>
                        <h3>Krita Section</h3>
                        <p className="making-of-description">
                          The Geometron concepts were created in Krita, and this
                          section highlights the draft and exploration files
                          from the project.
                        </p>
                      </div>
                    </div>

                    <div className="making-of-grid">
                      {geometronBhsImages.map((fileName, index) => (
                        <article
                          className={`glass-card animation-card reveal delay-${(index % 2) + 1}`}
                          key={`${collection.folder}-${fileName}`}
                        >
                          <a
                            href={`/images/${collection.folder}/${fileName}`}
                            target="_blank"
                            rel="noreferrer"
                            className="animation-image-link"
                          >
                            <div className="animation-media-wrapper">
                              <img
                                src={`/images/${collection.folder}/${fileName}`}
                                alt={prettyLabel(fileName)}
                                className="animation-media"
                                loading="lazy"
                              />
                            </div>
                          </a>
                          <div className="animation-card-body">
                            <p className="animation-card-title">
                              {prettyLabel(fileName)}
                            </p>
                            <span className="animation-card-type">
                              {collection.folder}
                            </span>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              )}
          </div>
        </section>
      ))}
    </>
  );
}

export default GalleryPage;
