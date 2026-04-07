import SectionHeader from "./SectionHeader"
import PillarCard from "./PillarCard"

export default function PillarsSection() {
  return (
    <section className="pillars-section reveal" id="pillars">
      <SectionHeader
        title="Three Pillars of Power"
        subtitle="Three pillars hold up everything we build. Each one independently powerful. Together, unstoppable."
      />
      <div className="pillars-grid" style={{ marginTop: "4rem" }}>
        <PillarCard
          icon="🧠"
          num="01"
          title="Sovereign Intelligence"
          desc="AI systems operating at peak efficiency. Zero dependency on human intervention. The machine runs while you sleep."
        />
        <PillarCard
          icon="🎬"
          num="02"
          title="Cinematic Web"
          desc="Your digital presence transformed. Not a website, an experience. Every pixel earns trust. Every interaction builds authority."
        />
        <PillarCard
          icon="👑"
          num="03"
          title="Throne Intel Framework"
          desc="Intelligence gathering at scale. Competitor tracking, signal detection, market pulse. The data that drives decisions."
        />
      </div>
    </section>
  )
}
