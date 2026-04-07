export default function PillarCard({ icon, num, title, desc }: { icon: string; num: string; title: string; desc: string }) {
  return (
    <div className="pillar-card">
      <span className="pillar-icon">{icon}</span>
      <span className="pillar-number">{num}</span>
      <h3 className="pillar-title">{title}</h3>
      <p className="pillar-desc">{desc}</p>
    </div>
  )
}