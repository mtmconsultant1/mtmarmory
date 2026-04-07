"use client"

import { useEffect, useRef, useState } from "react"

interface Star {
  x: number
  y: number
  r: number
  a: number
  s: number
  g: boolean
}

interface Comet {
  x: number
  y: number
  vx: number
  vy: number
  len: number
  life: number
  active: boolean
}

interface Nebula {
  x: number
  y: number
  r: number
  color: string
  phase: number
  speed: number
  drift: number
}

interface SolarFlare {
  angle: number
  life: number
  intensity: number
  active: boolean
}

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const cometsRef = useRef<Comet[]>([])
  const nebulaeRef = useRef<Nebula[]>([])
  const flaresRef = useRef<SolarFlare[]>([])
  const timeRef = useRef(0)
  const [scroll, setScroll] = useState(0)

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScroll(maxScroll > 0 ? window.scrollY / maxScroll : 0)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Star canvas + all background animations
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const init = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const w = canvas.width
      const h = canvas.height

      // Stars: 250 for density
      if (starsRef.current.length === 0) {
        for (let i = 0; i < 250; i++) {
          starsRef.current.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: Math.random() * 1.8 + 0.3,
            a: Math.random(),
            s: Math.random() * 0.008 + 0.002,
            g: Math.random() > 0.7,
          })
        }
      }

      // Comets: start with 2
      cometsRef.current = []
      for (let i = 0; i < 3; i++) {
        spawnComet(w, h)
      }

      // Nebula clouds: 5 large drifting clouds
      nebulaeRef.current = []
      const nebulaColors = [
        "rgba(212,175,55,0.012)",
        "rgba(91,141,239,0.008)",
        "rgba(168,100,200,0.008)",
        "rgba(212,175,55,0.006)",
        "rgba(70,130,180,0.008)",
        "rgba(20,30,60,0.02)",
      ]
      for (let i = 0; i < 6; i++) {
        nebulaeRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.random() * 300 + 200,
          color: nebulaColors[i % nebulaColors.length],
          phase: Math.random() * Math.PI * 2,
          speed: 0.003 + Math.random() * 0.004,
          drift: (Math.random() - 0.5) * 0.15,
        })
      }

      // Solar flares: 4
      flaresRef.current = []
      for (let i = 0; i < 4; i++) {
        flaresRef.current.push({
          angle: (Math.PI * 2 * i) / 4,
          life: 0,
          intensity: 0,
          active: false,
        })
      }
    }

    const spawnComet = (w: number, h: number) => {
      const fromLeft = Math.random() > 0.3
      cometsRef.current.push({
        x: fromLeft ? -50 : w + 50,
        y: Math.random() * h * 0.6,
        vx: fromLeft ? 2 + Math.random() * 3 : -(2 + Math.random() * 3),
        vy: 0.5 + Math.random() * 1.5,
        len: 40 + Math.random() * 60,
        life: 1,
        active: true,
      })
    }

    const resize = () => {
      init()
    }
    window.addEventListener("resize", resize)
    init()

    let animId: number
    const draw = () => {
      timeRef.current += 0.01
      const t = timeRef.current
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      // === NEBULA CLOUDS (bottom layer, slow drift) ===
      for (const n of nebulaeRef.current) {
        n.phase += n.speed
        n.x += n.drift * 0.3
        if (n.x > w + n.r) n.x = -n.r
        if (n.x < -n.r) n.x = w + n.r

        const breathe = (Math.sin(n.phase) + 1) * 0.5
        const opacity = 0.5 + breathe * 0.5
        const grad = ctx.createRadialGradient(
          n.x,
          n.y + Math.sin(n.phase * 0.7) * 15,
          0,
          n.x,
          n.y + Math.sin(n.phase * 0.7) * 15,
          n.r * (0.9 + breathe * 0.2)
        )
        grad.addColorStop(0, n.color.replace("0.0", (0.022 * opacity).toFixed(3)))
        grad.addColorStop(0.5, n.color.replace("0.0", (0.01 * opacity).toFixed(3)))
        grad.addColorStop(1, "transparent")
        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(n.x, n.y + Math.sin(n.phase * 0.7) * 15, n.r, 0, Math.PI * 2)
        ctx.fill()
      }

      // === SOLAR FLARES (top section radiant bursts) ===
      const sunX = w * 0.5
      const sunY = h * 0.25
      for (const f of flaresRef.current) {
        if (!f.active) {
          // Random chance to activate
          if (Math.random() < 0.0008) {
            f.active = true
            f.life = 1
            f.angle = Math.random() * Math.PI * 2
          }
          continue
        }
        f.life -= 0.008
        f.intensity = f.life
        if (f.life <= 0) {
          f.active = false
          continue
        }
        // Draw ray
        const rayLen = 120 * f.intensity
        const spread = 0.04
        const fx = sunX + Math.cos(f.angle) * 40
        const fy = sunY + Math.sin(f.angle) * 40
        const ex = sunX + Math.cos(f.angle) * (40 + rayLen)
        const ey = sunY + Math.sin(f.angle) * (40 + rayLen)

        const grad = ctx.createLinearGradient(fx, fy, ex, ey)
        grad.addColorStop(0, `rgba(212,175,55,${0.06 * f.intensity})`)
        grad.addColorStop(0.3, `rgba(212,175,55,${0.03 * f.intensity})`)
        grad.addColorStop(1, "rgba(212,175,55,0)")

        ctx.strokeStyle = grad
        ctx.lineWidth = 2 + f.intensity * 4
        ctx.beginPath()
        ctx.moveTo(fx - Math.sin(f.angle) * spread * rayLen, fy + Math.cos(f.angle) * spread * rayLen)
        ctx.lineTo(ex, ey)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(fx + Math.sin(f.angle) * spread * rayLen, fy - Math.cos(f.angle) * spread * rayLen)
        ctx.lineTo(ex, ey)
        ctx.stroke()
      }

      // === TOP-DOWN RADIANT GLOW ===
      const topGlow = ctx.createRadialGradient(sunX, 0 - h * 0.1, 0, sunX, h * 0.15, h * 0.6)
      topGlow.addColorStop(0, `rgba(212,175,55,${0.04 + Math.sin(t * 0.5) * 0.01})`)
      topGlow.addColorStop(0.3, `rgba(212,175,55,${0.015 + Math.sin(t * 0.7) * 0.005})`)
      topGlow.addColorStop(1, "transparent")
      ctx.fillStyle = topGlow
      ctx.fillRect(0, 0, w, h)

      // === BOTTOM WARMTH (rising energy) ===
      const bottomGlow = ctx.createRadialGradient(w * 0.5, h * 1.1, 0, w * 0.5, h * 0.8, h * 0.5)
      bottomGlow.addColorStop(0, `rgba(255,200,100,${0.025 + Math.cos(t * 0.4) * 0.01})`)
      bottomGlow.addColorStop(1, "transparent")
      ctx.fillStyle = bottomGlow
      ctx.fillRect(0, 0, w, h)

      // === STARS (twinkling, breathing) ===
      for (const star of starsRef.current) {
        star.a += star.s
        const alpha = 0.2 + Math.abs(Math.sin(star.a)) * 0.8
        if (star.g) {
          // Gold halo: bigger glow area
          const haloGrad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r * 4)
          haloGrad.addColorStop(0, `rgba(212,175,55,${alpha * 0.08})`)
          haloGrad.addColorStop(1, "rgba(212,175,55,0)")
          ctx.fillStyle = haloGrad
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.r * 4, 0, Math.PI * 2)
          ctx.fill()
        }
        // Star core
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = star.g
          ? `rgba(212,175,55,${alpha * 0.85})`
          : `rgba(245,245,245,${alpha * 0.6})`
        ctx.fill()
      }

      // === SHOOTING STARS (occasional) ===
      if (Math.random() < 0.001) {
        const sx = Math.random() * w * 0.5
        const sy = Math.random() * h * 0.3
        ctx.strokeStyle = "rgba(212,175,55,0.3)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(sx, sy)
        ctx.lineTo(sx + 50, sy + 30)
        ctx.stroke()
        const shotGrad = ctx.createLinearGradient(sx, sy, sx + 50, sy + 30)
        shotGrad.addColorStop(0, "rgba(255,255,255,0.4)")
        shotGrad.addColorStop(1, "rgba(212,175,55,0)")
        ctx.strokeStyle = shotGrad
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      // === COMETS WITH TAILS ===
      for (let i = cometsRef.current.length - 1; i >= 0; i--) {
        const c = cometsRef.current[i]
        if (!c.active) {
          if (Math.random() < 0.0003) {
            cometsRef.current[i] = {
              x: Math.random() > 0.5 ? -50 : w + 50,
              y: Math.random() * h * 0.4,
              vx: c.vx > 0 ? 1.5 + Math.random() * 2 : -(1.5 + Math.random() * 2),
              vy: 0.3 + Math.random() * 0.8,
              len: 50 + Math.random() * 80,
              life: 1,
              active: true,
            }
          }
          continue
        }
        c.x += c.vx
        c.y += c.vy
        c.life -= 0.003

        if (c.life <= 0 || c.x < -200 || c.x > w + 200 || c.y > h + 100) {
          cometsRef.current[i].active = false
          continue
        }

        // Comet head
        const headGrad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, 4)
        headGrad.addColorStop(0, `rgba(255,255,255,${0.7 * c.life})`)
        headGrad.addColorStop(0.5, `rgba(212,175,55,${0.3 * c.life})`)
        headGrad.addColorStop(1, "rgba(212,175,55,0)")
        ctx.fillStyle = headGrad
        ctx.beginPath()
        ctx.arc(c.x, c.y, 4, 0, Math.PI * 2)
        ctx.fill()

        // Comet tail
        const tailLen = c.len * c.life
        const tailAngle = Math.atan2(-c.vy, -c.vx)
        const ex = c.x + Math.cos(tailAngle) * tailLen
        const ey = c.y + Math.sin(tailAngle) * tailLen
        const tailGrad = ctx.createLinearGradient(c.x, c.y, ex, ey)
        tailGrad.addColorStop(0, `rgba(212,175,55,${0.25 * c.life})`)
        tailGrad.addColorStop(0.3, `rgba(212,175,55,${0.08 * c.life})`)
        tailGrad.addColorStop(1, "rgba(212,175,55,0)")
        ctx.strokeStyle = tailGrad
        ctx.lineWidth = 2 * c.life
        ctx.lineCap = "round"
        ctx.beginPath()
        ctx.moveTo(c.x, c.y)
        ctx.lineTo(ex, ey)
        ctx.stroke()
      }

      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      {/* Canvas layer: stars, comets, nebulae, flares */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* ACT 1: Hero Sun Galaxy (fades as you scroll down) */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: Math.max(0, 0.35 - scroll * 1.2),
          animation: "galaxyPulse 25s ease-in-out infinite",
        }}
      >
        <img
          src="/kareem-crown-hero-section-site-reference-image-(1).webp"
          alt="Hero Galaxy"
          style={{
            position: "absolute",
            inset: 0,
            width: "101%",
            height: "101%",
            objectFit: "cover",
            filter: "brightness(0.9)",
          }}
        />
      </div>

      {/* ACT 2: Main Galaxy: primary deep space backdrop */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: 0.3,
          animation: "galaxyBreath 30s ease-in-out infinite",
        }}
      >
        <img
          src="/galaxy-bg/Dark galaxy 2 (1).webp"
          alt="Galaxy Background"
          style={{
            position: "absolute",
            inset: 0,
            width: "101%",
            height: "101%",
            objectFit: "cover",
            filter: "brightness(0.85)",
          }}
        />
      </div>

      {/* ACT 3: Earth: The Calm: fades in at 55% scroll, peaks 70-75% */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: scroll > 0.45 ? Math.min(0.3, (scroll - 0.45) * 0.75) : 0,
          transition: "opacity 1.2s ease",
          animation: scroll > 0.5 ? "galaxyPulse 20s ease-in-out infinite" : "none",
        }}
      >
        <img
          src="/galaxy-bg/dark galaxy earth 1 (1).webp"
          alt="Earth"
          style={{
            position: "absolute",
            inset: 0,
            width: "101%",
            height: "101%",
            objectFit: "cover",
            filter: "brightness(0.8)",
          }}
        />
      </div>

      {/* ACT 4: AI Impact: The Storm: 78%+ scroll */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: scroll > 0.78 ? Math.min(0.32, (scroll - 0.78) * 1.45) : 0,
          transition: "opacity 1s ease",
          animation: scroll > 0.8 ? "galaxyQuake 5s ease-in-out infinite" : "none",
        }}
      >
        <img
          src="/galaxy-bg/dark galaxy ai asteroid hit (1).webp"
          alt="AI Impact"
          style={{
            position: "absolute",
            inset: 0,
            width: "102%",
            height: "102%",
            objectFit: "cover",
            filter: "brightness(0.75)",
            transform: "translate(-1%, -1%)",
          }}
        />
      </div>

      {/* Top-down light gradient: celestial crown illumination */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(180deg, rgba(5,5,16,0.25) 0%, rgba(5,5,16,0.0) 12%, rgba(5,5,16,0.0) 65%, rgba(5,5,16,0.35) 85%, rgba(5,5,16,0.55) 100%)",
          animation: "overlayBreath 20s ease-in-out infinite",
        }}
      />
    </>
  )
}
