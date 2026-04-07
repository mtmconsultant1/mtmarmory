"use client"
import { useState } from "react"

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const faqs = [
    {
      q: "What exactly does MT Media AI do?",
      a: "We are an AI-First Venture Studio. We build systems, not campaigns. Our clients get deployable AI-powered growth engines that compound over time — email systems, content pipelines, intelligence dashboards, and complete web experiences."
    },
    {
      q: "How is MTM different from a traditional marketing agency?",
      a: "Agencies sell services that expire when the contract ends. We build infrastructure that you own. Think 'factory' versus 'service desk.' Our systems keep working long after the initial build."
    },
    {
      q: "What is The Forge?",
      a: "The Forge is our internal AI team — four specialized personas (Goldie, Roman, Nina, Echo) that each handle different aspects of the build process: vision, architecture, quality assurance, and market intelligence. They work together to produce outputs that no single AI could achieve."
    },
    {
      q: "Who is MTM built for?",
      a: "Small to mid-size businesses ready to scale with AI. If you&apos;re tired of agencies that over-promise and under-deliver, and you want real systems that generate measurable results, you&apos;re in the right place."
    },
    {
      q: "What is Sovereign Intelligence?",
      a: "Sovereign Intelligence is our framework for building AI systems that operate independently. Once deployed, they generate content, track competitors, optimize messaging, and provide decision intelligence — all while you focus on running your business."
    },
    {
      q: "How long does a typical build take?",
      a: "Most systems are deployed within 2-4 weeks. Complex enterprise builds may take 6-8 weeks. Every engagement starts with our 6-step Throne Intel process to ensure we build exactly what your business needs."
    },
    {
      q: "Do you work with industries outside of traditional marketing?",
      a: "Absolutely. Our systems are industry-agnostic. We&apos;ve deployed across healthcare, real estate, finance, e-commerce, B2B services, and more. The AI adapts to your market, your audience, your voice."
    },
    {
      q: "What does 'Proof of Work' mean in the MTM Armory?",
      a: "It means everything you see here is real. Every tool, every system, every metric has been tested in the field. This is not a concept deck or a pitch template. This is the actual factory floor. Come see the machines."
    }
  ]

  return (
    <section className="faq-section reveal" id="faq">
      <div className="faq-header">
        <span className="section-label">Intelligence Briefing</span>
        <h2 className="section-title">Frequently <span className="gold">Asked</span></h2>
      </div>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item ${openIdx === i ? 'open' : ''}`}>
            <button className="faq-question" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
              {faq.q}
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-answer">
              <p className="faq-answer-text">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
