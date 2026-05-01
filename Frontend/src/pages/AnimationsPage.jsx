import React from "react";

function AnimationsPage() {
  return (
    <>
      <section className="section animations-hero">
        <div className="hero-copy card">
          <p className="eyebrow">Motion & Sprites</p>
          <h2 className="section-title">Animations & Sprites</h2>
          <p className="hero-copy-text">
            A small demo of motion and a simple sprite animation using CSS.
          </p>
        </div>

        <aside className="card about-note">
          <p className="eyebrow light">Play</p>
          <p className="card-text light">
            Interactive motion snippets and sprite loops.
          </p>
        </aside>
      </section>

      <section className="section">
        <div className="section-head">
          <p className="eyebrow">Demo</p>
          <h2 className="section-title">Sprite & Keyframe Examples</h2>
        </div>

        <div style={{ display: "grid", gap: 20 }}>
          <div
            className="card"
            style={{ display: "flex", gap: 20, alignItems: "center" }}
          >
            <div
              style={{
                width: 120,
                height: 120,
                background:
                  "linear-gradient(135deg, var(--palette-peach), var(--palette-pink))",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                animation: "float 3s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  background: "#fff",
                  borderRadius: 6,
                }}
              />
            </div>

            <div>
              <h3 className="card-title">Floating token</h3>
              <p className="card-text">
                A subtle keyframe-driven float for UI accents.
              </p>
            </div>
          </div>

          <div
            className="card"
            style={{ display: "flex", gap: 20, alignItems: "center" }}
          >
            <div className="sprite-strip" aria-hidden="true" />
            <div>
              <h3 className="card-title">Sprite loop</h3>
              <p className="card-text">
                A tiny sprite-strip animation implemented with
                background-position keyframes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes float { 0% { transform: translateY(0) } 50% { transform: translateY(-12px) } 100% { transform: translateY(0) }}
        .sprite-strip { width:120px; height:80px; border-radius:10px; background: linear-gradient(90deg, var(--palette-blue), var(--palette-mint)); background-size: 480px 80px; animation: sprite 0.9s steps(4) infinite; }
        @keyframes sprite { from { background-position: 0 0 } to { background-position: -480px 0 } }
      `}</style>
    </>
  );
}

export default AnimationsPage;
