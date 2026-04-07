"use client"

import { useEffect, useRef, useState } from "react"

export default function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Array<{ x: number; y: number; r: number; a: number; s: number; g: boolean }>>([])
  const [scroll, setScroll] = useState(0)

  // Track scroll
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setScroll(maxScroll > 0 ? window.scrollY / maxScroll : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Star canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      if (starsRef.current.length === 0) {
        const stars = []
        for (let i = 0; i < 180; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5 + 0.3,
            a: Math.random(),
            s: Math.random() * 0.005 + 0.002,
            g: Math.random() > 0.7,
          })
        }
        starsRef.current = stars
      }
    }
    window.addEventListener('resize', resize)
    resize()

    let animId: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const star of starsRef.current) {
        star.a += star.s
        const alpha = 0.3 + Math.abs(Math.sin(star.a)) * 0.7
        if (star.g) {
          const grad = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.r * 3)
          grad.addColorStop(0, `rgba(212,175,55,${alpha * 0.15})`)
          grad.addColorStop(1, 'rgba(212,175,55,0)')
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.r * 3, 0, Math.PI * 2)
          ctx.fill()
        }
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fillStyle = star.g
          ? `rgba(212,175,55,${alpha * 0.8})`
          : `rgba(245,245,245,${alpha * 0.5})`
        ctx.fill()
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      {/* Canvas star layer — always on top, animated */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* ACT 1: Deep Space Hero Background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: Math.max(0, 0.35 - scroll * 1.5),
        }}
      >
        <img
          src="/kareem-crown-hero-section-site-reference-image-(1).webp"
          alt="Hero Galaxy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* ACT 2: Main Galaxy Background — primary throughout */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: 0.32,
          transition: 'opacity 0.8s ease',
        }}
      >
        <img
          src="/galaxy-bg/Dark galaxy 2 (1).webp"
          alt="Galaxy Background"
          style={{
            position: 'absolute',
            inset: 0,
            width: '101%',
            height: '101%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* ACT 3: Earth — The Calm Before the Storm — 70-75% scroll */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: scroll > 0.55 ? Math.min(0.32, (scroll - 0.55) * 1.28) : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        <img
          src="/galaxy-bg/dark galaxy earth 1 (1).webp"
          alt="Earth Galaxy"
          style={{
            position: 'absolute',
            inset: 0,
            width: '101%',
            height: '101%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* ACT 4: AI Impact — The Storm — 90-95% scroll */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          opacity: scroll > 0.78 ? Math.min(0.32, (scroll - 0.78) * 1.45) : 0,
          transition: 'opacity 0.6s ease',
        }}
      >
        <img
          src="/galaxy-bg/dark galaxy ai asteroid hit (1).webp"
          alt="AI Impact"
          style={{
            position: 'absolute',
            inset: 0,
            width: '101%',
            height: '101%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Top-down light gradient overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background: 'linear-gradient(180deg, rgba(5,5,16,0.3) 0%, rgba(5,5,16,0.0) 15%, rgba(5,5,16,0.0) 70%, rgba(5,5,16,0.6) 100%)',
        }}
      />
    </>
  )
}
