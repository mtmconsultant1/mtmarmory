export default function DisplaySection() {
  return (
    <section className="display-section reveal">
      <div className="display-header">
        <span className="section-label">Visual Experience</span>
        <h2 className="section-title">Cinematic <span className="gold">Display</span></h2>
        <p className="section-subtitle">Every touchpoint is designed as a cinematic experience. Lenz Effect. Curved displays. Immersive presence.</p>
      </div>
      <div className="display-grid">
        <div className="display-card stagger-1">
          <div className="display-visual">📺</div>
          <div className="display-info">
            <h3 className="display-title">Curved TV Carousels</h3>
            <p className="display-desc">Dynamic visual displays that wrap around your space. Your brand, presented like a gallery.</p>
          </div>
        </div>
        <div className="display-card stagger-2">
          <div className="display-visual">✨</div>
          <div className="display-info">
            <h3 className="display-title">Lenz Effect</h3>
            <p className="display-desc">Lens flare, depth of field, cinematic transitions. The feel of Hollywood in every interaction.</p>
          </div>
        </div>
        <div className="display-card stagger-3">
          <div className="display-visual">🎭</div>
          <div className="display-info">
            <h3 className="display-title">Cinematic Modules</h3>
            <p className="display-desc">Animated reveals, parallax layers, scroll-triggered drama. Your website becomes a film.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
