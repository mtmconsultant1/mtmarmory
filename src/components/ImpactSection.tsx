export default function ImpactSection() {
  return (
    <section className="impact-section reveal" id="impact">
      <div className="impact-bg">
        <img src="/galaxy/dark galaxy ai asteroid hit (1).webp" alt="AI Asteroid Impact" />
      </div>
      <div className="impact-overlay" />
      <div className="impact-content">
        <span className="impact-pct">90%</span>
        <span className="section-label" style={{ color: 'var(--mtm-chrome)' }}>The Event</span>
        <h2 className="impact-title">AI: THE <span className="gold">AFTERMATH</span></h2>
        <p className="impact-text">
          The asteroid hit.
          <br /><br />
          While others feared or produced slop, we built the systems that outlast the chaos.
          <br /><br />
          We are the bridge between <span className="gold">tradition</span> and <span className="gold">tomorrow</span>.
          <br /><br />
          The old world called it a disruption. We called it <span className="gold">opportunity</span>.
          <br />
          And we arrived <span className="gold">armed</span>.
        </p>
      </div>
    </section>
  )
}
