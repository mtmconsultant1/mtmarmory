export default function CTAChainSection() {
  const links = [
    { name: "MTM Armory", desc: "Proof of Work", status: "live", url: "#hero" },
    { name: "Kareem Crown", desc: "Personal Brand Portfolio", status: "under-construction", url: "https://kareemcrown.com" },
    { name: "MTM Forge", desc: "Meet The Forge", status: "under-construction", url: "#" },
    { name: "MT Media AI", desc: "Main Company", status: "under-construction", url: "https://mtmediaai.com" },
    { name: "Reign&apos;s Hub", desc: "Sales Engine", status: "coming-soon", url: "#" }
  ]

  return (
    <section className="cta-section reveal" id="ecosystem">
      <div className="cta-header">
        <span className="section-label">The MTM Universe</span>
        <h2 className="section-title">The <span className="gold">Ecosystem</span></h2>
        <p className="section-subtitle">Every piece is connected. Every site is a node in a growing intelligence network.</p>
      </div>
      <div className="cta-chain">
        {links.map((link, i) => (
          <a key={i} href={link.url} className={`cta-link stagger-${i + 1}`} target={link.status === "live" ? undefined : "_blank"} rel="noopener noreferrer">
            <div className="cta-link-info">
              <span className="cta-link-name">{link.name}</span>
              <span className="cta-link-desc">{link.desc}</span>
            </div>
            <div className="cta-link-status">
              <span className={`status-dot ${link.status}`} />
              <span className={`status-text ${link.status}`}>
                {link.status === "live" ? "Live" : link.status === "under-construction" ? "Under Construction" : "Coming Soon"}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
