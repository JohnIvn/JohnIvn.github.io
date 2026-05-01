import { Link } from "react-router-dom";
import { animationAssets, dontLookAnimation } from "../data/animationAssets";

function AnimationsPage() {
  const videoAssets = animationAssets.filter((a) => a.type === "video");
  const imageAssets = animationAssets.filter((a) => a.type === "image");
  const storyboardAsset = animationAssets.find(
    (a) => a.fileName === "StoryBoardCompiled.png",
  );

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
        <div className="container-xl">
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
    </>
  );
}

export default AnimationsPage;
