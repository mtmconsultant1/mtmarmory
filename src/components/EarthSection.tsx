export default function EarthSection() {
  return (
    <section className="earth-section reveal" id="earth">
      <div className="earth-bg">
        <img src="/galaxy/dark galaxy earth 1 (1).webp" alt="Earth Space" />
      </div>
      <div className="earth-overlay" />
      <div className="earth-content">
        <span className="earth-pct">70%</span>
        <span className="section-label" style={{ color: 'var(--mtm-chrome)' }}>The Calm Before</span>
        <h2 className="earth-title">Earth&apos;s First <span className="gold">Glimpse</span></h2>
        <p className="earth-text">
          The calm before. The world as it was.
          <br /><br />
          We built the Ark before anyone knew the tsunami was coming.
          <br /><br />
          While others celebrated the dawn of AI without asking <span className="gold">who it would serve</span>,
          we were already engineering the systems that would <span className="gold">outlast the chaos</span>.
          <br /><br />
          This is not a warning. This is a <span className="gold">record of what was built</span>.
        </p>
      </div>
    </section>
  )
}
