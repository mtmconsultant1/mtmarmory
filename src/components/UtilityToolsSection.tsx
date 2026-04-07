"use client"
import { useState } from "react"

interface Tool {
  name: string
  desc: string
  icon: string
  sigil: string
  tags: string[]
  persona: string
  features: { icon: string; text: string }[]
  wide?: boolean
}

const tools: Tool[] = [
  {
    name: "Slop Filter",
    desc: "Drops your AI content in. Scores it on generic, repetitive, low-trust, off-brand, slop level. Tells you exactly what needs fixing.",
    icon: "/gold-mtm-pen-(1).webp",
    sigil: "/roman's-shield-sigil-(1).webp",
    tags: ["AI QUALITY", "BRAND CHECK"],
    persona: "roman",
    features: [
      { icon: "📊", text: "Slop Score out of 100" },
      { icon: "🔍", text: "Generic Pattern Detection" },
      { icon: "⚡", text: "Off-brand Signal Alerts" }
    ],
    wide: true
  },
  {
    name: "Competitor Pulse",
    desc: "Tracks competitor website changes, message shifts, ad activity, ranking moves. Sends you alerts with 'what this means' insights. Never get blindsided.",
    icon: "/Competitor-Pulse-App-Icon-4k-clear.webp",
    sigil: "/nina's-sigil-white.webp",
    tags: ["LIVE TRACKING", "ECOSYSTEM INTEL"],
    persona: "nina",
    features: [
      { icon: "📡", text: "Real-time Monitoring" },
      { icon: "🔔", text: "Smart Alert System" },
      { icon: "📈", text: "Impact Analysis" }
    ]
  },
  {
    name: "Authority Gap Scanner",
    desc: "Scans your website and scores where your authority leaks. Homepage clarity, trust signals, positioning, premium perception. Shows the gaps.",
    icon: "/Apex-Predator-Pipeline-Icon-4k.webp",
    sigil: "/roman's-shield-sigil-(1).webp",
    tags: ["DIAGNOSTIC", "PREMIUM AUDIT"],
    persona: "roman",
    features: [
      { icon: "🎯", text: "Positioning Score" },
      { icon: "🛡️", text: "Trust Signal Audit" },
      { icon: "💎", text: "Premium Perception" }
    ]
  },
  {
    name: "Clarity Engine",
    desc: "Drop in your messy idea, offer, pitch. Get back clear messaging, cleaner structure, stronger angles. We bring clarity to chaos.",
    icon: "/gold-T---stacked-mtm-pen-tip-logo-gold.webp",
    sigil: "/goldie's-sigil.webp",
    tags: ["MESSAGING", "INSTANT CLARITY"],
    persona: "goldie",
    features: [
      { icon: "💡", text: "Angle Discovery" },
      { icon: "📝", text: "Message Refinement" },
      { icon: "🔗", text: "Structure Optimization" }
    ]
  },
  {
    name: "Positioning Pressure Test",
    desc: "Paste your homepage headline. We pressure-test clarity, differentiation, authority, trust, relevance, premium feel. Scores it. Shows gaps.",
    icon: "/FLUX_-_Midas_Mailer_Agent_Icon_-(1).webp",
    sigil: "/goldie's-sigil.webp",
    tags: ["STRATEGY", "CONVERSION"],
    persona: "goldie",
    features: [
      { icon: "🧪", text: "Multi-axis Testing" },
      { icon: "📋", text: "Conversion Scoring" },
      { icon: "📐", text: "Differentiation Map" }
    ]
  },
  {
    name: "Signal Scan",
    desc: "Daily intelligence snapshot: market shifts, content opportunities, search trends, AI visibility changes, sentiment patterns. What matters NOW.",
    icon: "/Syn_-_Synapse_Agent_Icon.webp",
    sigil: "/echo-black-crown-black-shield-sigil.webp",
    tags: ["DAILY SIGNALS", "MARKET PULSE"],
    persona: "echo",
    features: [
      { icon: "📰", text: "Market Shift Alerts" },
      { icon: "🔎", text: "Trend Detection" },
      { icon: "🧠", text: "Sentiment Analysis" }
    ]
  }
]

const personaGlow = (p: string) => {
  switch (p) {
    case "goldie": return "rgba(212,175,55,0.5)";
    case "roman": return "rgba(91,141,239,0.5)";
    case "nina": return "rgba(232,240,254,0.5)";
    case "echo": return "rgba(122,122,142,0.5)";
    default: return "rgba(255,255,255,0.5)";
  }
}

const personaNames: Record<string, string> = {
  goldie: "Goldie",
  roman: "Roman",
  nina: "Nina",
  echo: "Echo"
}

export default function UtilityToolsSection() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null)
  const tool = expandedIdx !== null ? tools[expandedIdx] : null

  return (
    <section className="utility-section reveal" id="tools">
      <div className="utility-header">
        <span className="section-label">Utility Intelligence</span>
        <h2 className="section-title">Utility <span className="gold">Tools</span></h2>
        <p className="section-subtitle">Try the tools. Feel the difference. This is just the surface.</p>
      </div>

      <div className="bento-grid">
        {tools.map((t, i) => (
          <div
            key={i}
            className={`bento-card ${t.persona} ${t.wide ? 'span-2' : ''} stagger-${(i % 6) + 1}`}
            onClick={() => setExpandedIdx(i)}
            role="button"
            tabIndex={0}
          >
            <img src={t.icon} alt={t.name} className="bento-tool-icon" />
            <h3 className="bento-tool-name">{t.name}</h3>
            <p className="bento-tool-desc">{t.desc}</p>
            <div className="bento-tags">
              {t.tags.map((tag: string, j: number) => (
                <span key={j} className="bento-tag">{tag}</span>
              ))}
            </div>
            <span className="bento-card-cta">Click to explore →</span>
            <img
              src={t.sigil}
              alt="Sigil"
              className="bento-sigil"
            />
          </div>
        ))}
      </div>

      {/* Expanded overlay */}
      {tool && (
        <div
          className={`bento-overlay ${expandedIdx !== null ? 'active' : ''}`}
          onClick={() => setExpandedIdx(null)}
        >
          <div
            className={`bento-expanded ${tool.persona}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="bento-exit-btn"
              onClick={() => setExpandedIdx(null)}
            >
              ✕
            </button>
            <img
              src={tool.sigil}
              alt="Sigil"
              className={`bento-sigil-expanded ${tool.persona}`}
            />
            <div className="bento-expanded-content">
              <img
                src={tool.icon}
                alt={tool.name}
                className="bento-tool-icon"
                style={{ filter: `drop-shadow(0 0 10px ${personaGlow(tool.persona)})`, marginBottom: '1.5rem' }}
              />
              <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: personaGlow(tool.persona), marginBottom: '0.5rem', marginTop: '-1rem' }}>
                Forge Persona: {personaNames[tool.persona]}
              </p>
              <h3 className="bento-tool-name">{tool.name}</h3>
              <p className="bento-tool-desc">{tool.desc}</p>
              <div className="bento-tags">
                {tool.tags.map((tag, j) => (
                  <span key={j} className="bento-tag">{tag}</span>
                ))}
              </div>
              <div className="bento-features">
                {tool.features.map((f, j) => (
                  <div key={j} className="bento-feature">
                    <span className="bento-feature-icon">{f.icon}</span>
                    <p className="bento-feature-text">{f.text}</p>
                  </div>
                ))}
              </div>
              <div className="bento-cta-row">
                <a href="#contact" className="bento-try-btn">REQUEST DEMO</a>
                <a href="#contact" className="bento-request-btn">GET ACCESS</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
