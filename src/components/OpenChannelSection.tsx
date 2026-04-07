"use client"
import { useState, useEffect } from "react"

// ═══ INITIAL FAQ SEED ═══
// These will be replaced/updated by the weekly AGO Schema Scan
// which pulls "People Also Ask" data from search engines.
// For now, static but curated to match current market questions.
const faqs = [
  {
    q: "What exactly does MT Media AI do?",
    a: "We engineer cognitive systems that replace digital marketing overwhelm with compounding digital authority. Not campaigns. Infrastructure. Systems that work while you sleep and recommend your business to the right people."
  },
  {
    q: "Is this for my type of business?",
    a: "If you generate $1M–$10M in revenue, serve a premium niche, and are tired of watching less-qualified competitors outrank you online — yes. We build for ambitious operators, not hobbyists."
  },
  {
    q: "What's the difference between MTM and a normal marketing agency?",
    a: "Agencies sell hours and campaigns. We build systems that compound. One campaign ends when the budget runs out. One of our systems keeps paying dividends for months. Different game entirely."
  },
  {
    q: "What's a Sovereignty Audit?",
    a: "Our entry offer. An 8-dimension digital vulnerability assessment that scores your business across visibility, authority, content infrastructure, GEO readiness, and competitive positioning. You get a precise map of where blind spots are costing you revenue."
  },
  {
    q: "What does GEO mean and why should I care?",
    a: "Generative Engine Optimization. It's the practice of positioning your business so AI language models recommend it when someone asks for help in your niche. As more consumers ask ChatGPT, Claude, and Gemini instead of Googling, businesses without GEO infrastructure become invisible."
  },
  {
    q: "What is The Forge?",
    a: "Our internal AI team — four specialized personas that work together to generate competitive intelligence, content strategies, and actionable insights. Think of it as your personal intelligence unit."
  },
  {
    q: "How fast can I expect results?",
    a: "You'll see your digital footprint improve within the first 30 days. Meaningful competitive shifts typically show up between 60 and 90 days. We build infrastructure, not fireworks. Infrastructure compounds."
  },
  {
    q: "Do I need to understand AI to work with you?",
    a: "No. You need to understand your business. We handle the rest. If you can tell us who your ideal client is and what you offer, we build everything else."
  },
]

// ═══ FINGERPRINT ID INITIALIZATION ═══
// Reads mtm_vid from cookie/localStorage set in layout.tsx
function getVisitorId(): string | null {
  const cookie = document.cookie.split('; ').find(r => r.startsWith('mtm_vid='))
  if (cookie) return cookie.split('=')[1]
  return localStorage.getItem('mtm_vid')
}

// ═══ SOVEREIGN WELCOME COMPONENT ═══
function SovereignWelcome({ visitorId, onDismiss }: { visitorId: string | null; onDismiss: () => void }) {
  const [visitorName, setVisitorName] = useState<string | null>(null)
  const [showInput, setShowInput] = useState(false)
  const [nameInput, setNameInput] = useState("")

  useEffect(() => {
    const saved = localStorage.getItem('mtm_visitor_name')
    if (saved) setVisitorName(saved)
    else if (visitorId) {
      // Check if name was captured through direct channel (WhatsApp/Telegram)
      const nameFromContact = localStorage.getItem('mtm_visitor_name') // Will be set by bot after first contact
      if (nameFromContact) setVisitorName(nameFromContact)
      else setShowInput(true)
    }
  }, [visitorId])

  const handleNameSubmit = () => {
    if (nameInput.trim()) {
      localStorage.setItem('mtm_visitor_name', nameInput.trim())
      setVisitorName(nameInput.trim())
      setShowInput(false)
    }
  }

  const handleDismiss = () => {
    localStorage.setItem('mtm_welcome_dismissed', 'true')
    onDismiss()
  }

  // Check if already welcomed this session
  useEffect(() => {
    const dismissed = sessionStorage.getItem('mtm_welcome_shown')
    if (dismissed) onDismiss()
  }, [])

  if (!visitorId) return null

  return (
    <div className="sovereign-welcome">
      {showInput ? (
        <div className="welcome-name-input">
          <span className="welcome-gold">✦</span>
          <span>Welcome to the Armory. What should we call you?</span>
          <input
            type="text"
            className="name-input-field"
            value={nameInput}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNameInput(e.target.value)}
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleNameSubmit()}
            placeholder="Your name..."
            maxLength={30}
            autoFocus
          />
          <button className="name-submit-btn" onClick={handleNameSubmit}>→</button>
          <button className="welcome-dismiss" onClick={handleDismiss}>×</button>
        </div>
      ) : visitorName ? (
        <>
          <span className="welcome-gold">✦</span>
          <span>Welcome back, {visitorName}. The channel is open.</span>
          <button className="welcome-dismiss" onClick={() => {
            sessionStorage.setItem('mtm_welcome_shown', 'true')
            onDismiss()
          }}>×</button>
        </>
      ) : null}
    </div>
  )
}

export default function OpenChannelSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showWelcome, setShowWelcome] = useState(true)
  const [visitorId, setVisitorId] = useState<string | null>(null)

  const defaultFaqs: FAQItem[] = [
    { q: "What is MT Media AI and what do you actually build?", a: "We engineer AI-first marketing systems for ambitious brands. Sovereign intelligence, cinematic websites, and deployable tools." },
    { q: "How does The Forge produce content?", a: "Four unique voices (Goldie, Roman, Nina, Echo) process every project through adoption, strategy, and execution loops." },
    { q: "Can I use your tools as a prospect?", a: "Absolutely. Visit the Armory to interact with our live tools. Each one is proof of capability, not a mock product." },
  ]
  const [faqs, setFaqs] = useState<FAQItem[]>(defaultFaqs)
  useEffect(() => {
    const saved = localStorage.getItem('mtm_dynamic_faqs')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) setFaqs(parsed)
      } catch {}
    }
  }, [])

  useEffect(() => {
    const id = getVisitorId()
    if (id) setVisitorId(id)
  }, [])

  return (
    <section className="open-channel-section reveal" id="open-channel">
      {/* ═══ SOVEREIGN WELCOME — Dynamic Name Recognition ═══ */}
      {showWelcome && (
        <SovereignWelcome
          visitorId={visitorId}
          onDismiss={() => {
            setShowWelcome(false)
            sessionStorage.setItem('mtm_welcome_shown', 'true')
          }}
        />
      )}

      {/* ═══ QUESTION SUBMISSION — Direct Contact ═══ */}
      <div className="channel-header">
        <span className="section-label">Open Channel</span>
        <h2 className="section-title">Got <span className="gold">Questions</span>?</h2>
        <p className="channel-header-sub">The squad's always on. Tap in, tap out. No wait times, no runaround.</p>
      </div>

      {/* ═══ FAQ GLASS STACK — Dynamic Content ═══ */}
      <div className="faq-glass-stack">
        {faqs.map((faq: { q: string; a: string }, i: number) => (
          <div key={i} className={`faq-glass-card ${openIndex === i ? 'open' : ''}`}>
            <button className="faq-glass-trigger" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
              <span className="faq-glass-q">{faq.q}</span>
              <span className={`faq-arrow ${openIndex === i ? 'rotated' : ''}`}>▾</span>
            </button>
            <div className={`faq-glass-answer ${openIndex === i ? 'visible' : ''}`}>
              <p>{faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ═══ STILL NEED HELP — Direct Contact ═══ */}
      <div className="direct-contact-section">
        <p className="section-subtitle">Not covered here? Get your answer in 2 minutes.</p>
        <div className="direct-contact-buttons">
          <a href="https://wa.me/1XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c0-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .157 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp
          </a>
          <a href="https://t.me/kareemdanielp" target="_blank" rel="noopener noreferrer" className="contact-btn telegram-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Telegram
          </a>
        </div>
      </div>
    </section>
  )
}
