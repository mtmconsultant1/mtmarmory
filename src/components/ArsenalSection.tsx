export default function ArsenalSection() {
  const tools = [
    {
      icon: "/Midas-Mailer-App-Icon---Flux-4k.webp",
      title: "Midas Mailer",
      desc: "AI email campaigns that convert. Personalized at scale. Every inbox opened like a VIP invitation.",
      tags: ["EMAIL", "CONVERSION"]
    },
    {
      icon: "/FLUX_-_Midas_Mailer_Agent_Icon_-(1).webp",
      title: "FLUX Pipeline",
      desc: "Automated content pipeline. Generate, refine, deploy. The factory that feeds every channel.",
      tags: ["AUTOMATION", "CONTENT"]
    },
    {
      icon: "/Rogue-icon-clear-1.webp",
      title: "Rogue Engine",
      desc: "Unconventional growth hacking. Strategies that break the mold and capture untapped markets.",
      tags: ["GROWTH", "UNCONVENTIONAL"]
    },
    {
      icon: "/gold-mtm-pen-(1).webp",
      title: "MTM Pen",
      desc: "Precision copywriting tool. Every word earns its place. Sharp, persuasive, unforgettable.",
      tags: ["COPY", "PRECISION"]
    },
    {
      icon: "/Apex-Predator-Pipeline-Icon-4k.webp",
      title: "Apex Pipeline",
      desc: "Lead generation machine. Hunt, capture, nurture. Your funnel runs on autopilot.",
      tags: ["LEADS", "PIPELINE"]
    },
    {
      icon: "/Syn_-_Synapse_Agent_Icon.webp",
      title: "Synapse Agent",
      desc: "Neural network marketing intelligence. Connects dots humans miss. Patterns become profits.",
      tags: ["INTELLIGENCE", "SIGNALS"]
    }
  ]

  return (
    <section className="arsenal-section reveal" id="arsenal">
      <div className="arsenal-header">
        <span className="section-label">The Armory</span>
        <h2 className="section-title">Deployable <span className="gold">Intelligence</span></h2>
        <p className="section-subtitle">Every tool in this arsenal has been battle-tested. These are not concepts — they are systems that generate revenue.</p>
      </div>
      <div className="arsenal-grid">
        {tools.map((tool, i) => (
          <div key={i} className={`arsenal-card stagger-${i + 1}`}>
            <img src={tool.icon} alt={tool.title} className="arsenal-icon" />
            <h3 className="arsenal-title">{tool.title}</h3>
            <p className="arsenal-desc">{tool.desc}</p>
            <div>
              {tool.tags.map((tag, j) => (
                <span key={j} className="arsenal-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
