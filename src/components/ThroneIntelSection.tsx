export default function ThroneIntelSection() {
  const steps = [
    { num: "01", title: "Listen", desc: "We don't pitch first. We listen. Deep discovery of your business, market, and goals." },
    { num: "02", title: "Diagnose", desc: "We audit your entire digital footprint. Find the gaps, the leaks, the wasted spend." },
    { num: "03", title: "Architect", desc: "Custom AI system design. Not templates, not cookie-cutters. Built for YOUR battlefield." },
    { num: "04", title: "Forge", desc: "The Forge builds. Goldie visions, Roman structures, Nina shields, Echo monitors. The system comes alive." },
    { num: "05", title: "Deploy", desc: "Go live. Every system integrated. Every metric tracked. Every output monitored." },
    { num: "06", title: "Scale", desc: "Optimize and grow. The system compounds over time. Results build on results." }
  ]

  return (
    <section className="throne-section reveal" id="throne">
      <div className="throne-header">
        <span className="section-label">Our Methodology</span>
        <h2 className="section-title">Throne <span className="gold">Intel</span></h2>
        <p className="section-subtitle">Six steps from chaos to clarity. From noise to signal. From reactive to sovereign.</p>
      </div>
      <div className="throne-grid">
        {steps.map((step, i) => (
          <div key={i} className={`throne-card stagger-${i + 1}`}>
            <span className="throne-step">{step.num}</span>
            <h3 className="throne-title">{step.title}</h3>
            <p className="throne-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
