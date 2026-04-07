"use client"
import { useState } from 'react'

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg">
        <img src="/galaxy/Dark galaxy 2 (1).webp" alt="MTM Armory Background" />
      </div>
      <div className="hero-overlay" />
      <div className="hero-scanline" />

      <div className="hero-content">
        <div className="hero-sigil-wrapper">
          <div className="hero-sigil-glow" />
          <img
            className="hero-sigil"
            src="/mt-shield-logo-4k-clear.webp"
            alt="MTM Shield" />
        </div>
        <span className="hero-badge">PROOF OF WORK SHOWROOM</span>
        <h1 className="hero-title">MTM <span className="shimmer-text">ARMORY</span></h1>
        <div className="hero-divider" />
        <p className="hero-subtitle">An Arsenal of Proof</p>
        <p className="hero-description">
          A living showroom of MT Media AI&apos;s systems, tools, and intelligence.
          Every component is a deployable weapon. Every metric is a trophy.
          <br /><br />
          Built by <span className="gold">MTM</span>. Powered by <span className="gold">The Forge</span>.
        </p>
        <div className="hero-cta">
          <a href="#arsenal" className="glass-btn-gold-main">ENTER THE ARSENAL</a>
          <a href="#contact" className="glass-btn-main">REQUEST ACCESS</a>
        </div>
      </div>
    </section>
  )
}
