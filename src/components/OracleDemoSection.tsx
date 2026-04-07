"use client";

export default function OracleDemoSection() {
  return (
    <section id="oracle" className="relative py-32 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4AF37]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="scroll-reveal">
            <p className="text-[#D4AF37] text-xs tracking-[0.5em] uppercase mb-4">
              Oracle Voice Demo
            </p>
            <h2
              className="text-4xl md:text-5xl text-white mb-6 zolly-text"
              style={{ fontFamily: "var(--font-playfair)", animationFillMode: "both" }}
            >
              Intelligence, On Demand
            </h2>
            <div className="w-16 h-px bg-[#D4AF37] mb-6" />
            <p className="text-[#C0C0C0]/60 text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-merriweather)", fontWeight: 300 }}>
              The Oracle is not a chatbot. It is a multi-persona intelligence system. Each voice brings a different strategic lens to your questions. Visionary insight. Architectural precision. Skeptical rigor. Resonant amplification.
            </p>
            <p className="text-[#C0C0C0]/40 text-xs" style={{ fontFamily: "var(--font-merriweather)", fontWeight: 300 }}>
              Click the floating sigil at the bottom right to begin.
            </p>
          </div>

          {/* Visual Demo */}
          <div className="scroll-reveal flex justify-center">
            <div className="relative w-72 h-72">
              {/* Orbiting sigils */}
              {["🔆", "⚔", "❄", "📡"].map((sigil, i) => {
                const angle = (i * 360) / 4;
                return (
                  <div
                    key={sigil}
                    className="absolute w-14 h-14 flex items-center justify-center text-2xl bg-[#0A0A0A]/80 backdrop-blur"
                    style={{
                      borderRadius: "50%",
                      boxShadow: "0 1px 0 rgba(255,255,255,0.1) inset, 0 4px 16px rgba(0,0,0,0.3)",
                      left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 110}px - 28px)`,
                      top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 110}px - 28px)`,
                      animation: `float 3s ease-in-out infinite`,
                      animationDelay: `${i * 0.75}s`,
                    }}
                  >
                    {sigil}
                  </div>
                );
              })}

              {/* Center orb */}
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 flex items-center justify-center"
                style={{ borderRadius: "50%", animation: "goldPulse 3s ease-in-out infinite", background: "rgba(212,175,55,0.08)", backdropFilter: "blur(16px)", boxShadow: "0 1px 0 rgba(255,255,255,0.15) inset, 0 8px 24px rgba(0,0,0,0.4), 0 0 20px rgba(212,175,55,0.1)" }}
              >
                <div className="w-12 h-12 bg-[#D4AF37]/10 flex items-center justify-center" style={{ borderRadius: "50%" }}>
                  <span className="text-[#D4AF37] text-xl" style={{ fontFamily: "var(--font-playfair)" }}>M</span>
                </div>
              </div>

              {/* Connecting lines SVG */}
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                {["🔆", "⚔", "❄", "📡"].map((_, i) => {
                  const angle = (i * 360) / 4;
                  const x2 = 50 + Math.cos((angle * Math.PI) / 180) * (110 / 2.88 * 100 / 100) * 0.36;
                  const y2 = 50 + Math.sin((angle * Math.PI) / 180) * (110 / 2.88 * 100 / 100) * 0.36;
                  return (
                    <line
                      key={i}
                      x1="50%"
                      y1="50%"
                      x2={`${50 + Math.cos((angle * Math.PI) / 180) * 38}%`}
                      y2={`${50 + Math.sin((angle * Math.PI) / 180) * 38}%`}
                      stroke="rgba(212,175,55,0.15)"
                      strokeWidth="1"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
