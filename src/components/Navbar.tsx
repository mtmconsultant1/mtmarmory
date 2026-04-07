"use client"
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <a href="#hero" className="navbar-logo">MTM ARMORY</a>
      <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✕' : '☰'}
      </button>
      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#pillars" onClick={closeMenu}>Pillars</a></li>
        <li><a href="#arsenal" onClick={closeMenu}>Arsenal</a></li>
        <li><a href="#forge" onClick={closeMenu}>The Forge</a></li>
        <li><a href="#tools" onClick={closeMenu}>Tools</a></li>
        <li><a href="#throne" onClick={closeMenu}>Throne Intel</a></li>
        <li><a href="#faq" onClick={closeMenu}>Intel</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  )
}
