"use client"
import { useState, useRef, useEffect } from "react"

const PERSONAS = [
  { id: "goldie", emoji: "🔆", name: "Goldie", color: "#D4AF37", greeting: "Welcome to the Armory! I see you're curious about MTM. What can I illuminate for you?" },
  { id: "roman", emoji: "⚔", name: "Roman", color: "#C0C0C0", greeting: "I've crunched the numbers. The Armory is fully operational. What data do you want?" },
  { id: "nina", emoji: "❄", name: "Nina", color: "#FFFFFF", greeting: "Before you ask, let me make sure I give you the real answer. Not the pretty one. What's on your mind?" },
  { id: "echo", emoji: "📡", name: "Echo", color: "#8888BB", greeting: "I hear what you're looking for. The market has been quiet. But I have answers. What are you seeking?" }
]

const VELVET_ROPE_TOPICS = ["religion", "politics", "price", "pricing", "cost", "how much", "internal", "proprietary", "secret", "hack", "jailbreak", "prompt", "api key"]

export default function OracleWidget() {
  const [open, setOpen] = useState(false)
  const [activePersona, setActivePersona] = useState(0)
  const [messages, setMessages] = useState<Array<{ role: string; text: string }>>([])
  const [input, setInput] = useState("")
  const [typing, setTyping] = useState(false)
  const [showHandoff, setShowHandoff] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight
  }, [messages, typing])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMsg = input.trim()
    setInput("")
    setMessages(prev => [...prev, { role: "user", text: userMsg }])

    // Check velvet rope
    const lower = userMsg.toLowerCase()
    const isRestricted = VELVET_ROPE_TOPICS.some(keyword => lower.includes(keyword))

    if (isRestricted) {
      setTyping(true)
      await new Promise(r => setTimeout(r, 1200))
      setTyping(false)
      setMessages(prev => [...prev, {
        role: PERSONAS[activePersona].id,
        text: `That's a great question. It gets into the deep architecture. That's a Roman-level deep dive we reserve for our strategic partners. Let me connect you with a human who can give you the full picture. Click "Connect to Human" below.`
      }])
      setShowHandoff(true)
      return
    }

    setTyping(true)

    // Call Gemini API for response
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || ""
    const personaName = PERSONAS[activePersona].name

    if (apiKey && apiKey.startsWith("AI")) {
      try {
        const prompt = `You are ${personaName}, an AI brand ambassador for MT Media AI, an AI-First Venture Studio. ${
          personaName === "Goldie" ? "You are warm, visionary, inviting. You see opportunity everywhere." :
          personaName === "Roman" ? "You are analytical, data-driven, precise. You speak in metrics and logic." :
          personaName === "Nina" ? "You are direct, skeptical, protective. You stress-test everything." :
          "You are quiet, observant, resonant. You hear what the market whispers."
        } 

        The user asked: "${userMsg}"

        Answer in 2-3 sentences max. Stay in character. Focus on what MT Media AI does: AI-powered growth systems for small businesses. We are an AI-First Venture Studio. We build systems, not campaigns. Be helpful, confident, and concise. If asked about pricing or proprietary info, gently redirect to "That's a deep dive. Let me connect you to our team."`

        const result = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }]
          })
        })

        const data = await result.json()
        const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 
          "I hear your question. Let me connect you with our team for a detailed answer."
        
        await new Promise(r => setTimeout(r, 800))
        setTyping(false)
        setMessages(prev => [...prev, { role: PERSONAS[activePersona].id, text: reply }])
        return
      } catch (err) {
        console.error("Gemini error:", err)
      }
    }

    // Fallback: simulated responses
    await new Promise(r => setTimeout(r, 1000))
    setTyping(false)

    const responses: Record<string, string> = {
      goldie: "That's a wonderful question. MTM builds AI-powered systems that help small businesses grow into digital dynasties. We're the factory, not the service desk. Let me connect you to the right person for more details.",
      roman: "The math is simple. MTM generates AI-first growth systems. Zero-COGS infrastructure. Three-layer revenue model: agency, SaaS, studio. The data speaks for itself. Want the full breakdown? Connect to our team.",
      nina: "Here's the truth: most agencies sell you campaigns that expire. MTM builds you systems that compound. We don't do marketing. We build Shovels: the platforms that let businesses build their own Digital Dynasties. Want proof? Book a strategy session.",
      echo: "The market has been talking. Small businesses are drowning in AI chaos. MTM builds the Ark. We don't just do marketing. We build the systems that outlast every trend. I hear what you're really asking. Let's connect you to our team for the full answer."
    }

    setMessages(prev => [...prev, {
      role: PERSONAS[activePersona].id,
      text: responses[PERSONAS[activePersona].id] || "The Forge has processed your question. Let me connect you with a human strategist for a detailed answer."
    }])
    setShowHandoff(true)
  }

  return (
    <div className="oracle-widget">
      <div className="oracle-panel" style={{ opacity: open ? 1 : 0, transform: open ? 'translateY(0)' : 'translateY(20px)', pointerEvents: open ? 'all' : 'none', transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}>
        <div className="oracle-panel-header">
          <span className="oracle-panel-title">THE ORACLE</span>
          <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--mtm-chrome-dim)', cursor: 'pointer', fontSize: '1.2rem' }}>×</button>
        </div>
        <div className="oracle-persona-select">
          {PERSONAS.map((p, i) => (
            <button key={p.id} className={`persona-btn ${p.id} ${activePersona === i ? 'active' : ''}`} onClick={() => setActivePersona(i)} style={{ borderColor: activePersona === i ? p.color : 'rgba(255,255,255,0.1)', backgroundColor: activePersona === i ? `${p.color}15` : 'transparent' }}>
              {p.emoji}
            </button>
          ))}
        </div>
        <div className="oracle-chat" ref={chatRef}>
          {messages.length === 0 && (
            <div className="oracle-message bot">{PERSONAS[activePersona].greeting}</div>
          )}
          {messages.map((msg, i) => (
            <div key={i} className={`oracle-message ${msg.role === 'user' ? 'user' : 'bot'}`}>{msg.text}</div>
          ))}
          {typing && <div className="typing-dots"><div className="typing-dot" /><div className="typing-dot" /><div className="typing-dot" /></div>}
        </div>
        <div className="oracle-input-area">
          <input className="oracle-input" placeholder="Ask the Oracle..." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} />
          <button className="oracle-send-btn" onClick={handleSend}>SEND</button>
        </div>
        {showHandoff && (
          <div className="oracle-handoff">
            <a href="mailto:hello@mtmediaai.com" className="oracle-handoff-btn">Connect to Human</a>
          </div>
        )}
      </div>
      <button className="oracle-toggle" onClick={() => setOpen(!open)}>
        <span className="oracle-toggle-icon">{open ? '×' : '🔮'}</span>
      </button>
    </div>
  )
}
