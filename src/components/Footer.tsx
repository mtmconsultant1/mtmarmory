export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">MTM ARMORY</div>
      <p className="footer-tagline">The factory, not the service desk.</p>
      <div className="footer-links">
        <a href="#arsenal">Arsenal</a>
        <a href="#forge">The Forge</a>
        <a href="#tools">Tools</a>
        <a href="#throne">Throne Intel</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
      <p className="footer-copy">&copy; {new Date().getFullYear()} MT Media AI. All Systems Operational.</p>
    </footer>
  )
}
