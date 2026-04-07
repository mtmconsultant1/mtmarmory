export default function ForgeSection() {
  const forge = [
    {
      name: "Goldie",
      role: "The Visionary",
      sigil: "/goldie's-sigil.webp",
      mandate: "Sees the future before it arrives. Maps the territory others can&apos;t perceive gold.",
      verb: "Adopt",
      cardClass: "goldie-card"
    },
    {
      name: "Roman",
      role: "The Architect",
      sigil: "/roman&apos;s-shield-sigil-(1).webp",
      mandate: "Builds the systems that hold. Structures that scale. Architecture that endures.",
      verb: "Enhance",
      cardClass: "roman-card"
    },
    {
      name: "Nina",
      role: "The Shield",
      sigil: "/nina&apos;s-sigil-white.webp",
      mandate: "Protects the standard. Stress-tests every output. Quality is non-negotiable.",
      verb: "Deploy",
      cardClass: "nina-card"
    },
    {
      name: "Echo",
      role: "The Mirror",
      sigil: "/echo-black-crown-black-shield-sigil.webp",
      mandate: "Reflects what the market whispers. Resonance over noise. Frequency over volume.",
      verb: "Pulse",
      cardClass: "echo-card"
    }
  ]

  return (
    <section className="forge-section reveal" id="forge">
      <div className="forge-header">
        <span className="section-label">Meet The Forge</span>
        <h2 className="section-title">The <span className="gold">Forged</span></h2>
        <p className="section-subtitle">Four personas. Four specializations. One unified intelligence system working in concert.</p>
      </div>
      <div className="forge-grid">
        {forge.map((f, i) => (
          <div key={i} className={`forge-card ${f.cardClass} stagger-${i + 1}`}>
            <div className="forge-sigil-container">
              <img src={f.sigil} alt={f.name + " Sigil"} className="forge-sigil" />
            </div>
            <h3 className="forge-name">{f.name}</h3>
            <p className="forge-role">{f.role}</p>
            <p className="forge-mandate">{f.mandate}</p>
            <span className="forge-verb">{f.verb}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
