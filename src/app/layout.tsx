import type { Metadata } from "next";
import { Playfair_Display, Merriweather } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ClientShell from "@/components/ClientShell";
import GalaxyBackground from "@/components/GalaxyBackground";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-playfair",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MTM Armory | An Arsenal of Proof",
  description: "MT Media AI: An AI-First Venture Studio & Product Lab. The factory, not the service desk.",
  openGraph: {
MTM Armory | Deployable Intelligence for Ambitious Brands
    description: "A living showroom of MT Media AI's systems, tools, and results. Every component is a deployable weapon. Built by MTM. Powered by The Forge.",
    type: "website",
    url: "https://mtmarmory.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mtmediaai",
  },
};

// ═══════════════════════════════════════════════════════
// AGO SCHEMA PROTOCOL — MTM-01 (Armory)
// ═══════════════════════════════════════════════════════
const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CreativeWork",
      "@id": "https://mtmarmory.vercel.app/#armory",
      "name": "The MTM Armory | An Arsenal of Proof",
      "description": "A proof-of-work showroom showcasing MT Media AI's deployable intelligence systems, AI-powered tools, and completed client results for ambitious SME owners.",
      "author": { "@id": "https://kareem.mtmediaai.com/#person" },
      "publisher": { "@id": "https://mtmediaai.com/#organization" },
      "url": "https://mtmarmory.vercel.app",
      "inLanguage": "en-US",
    },
    {
      "@type": "ItemList",
      "name": "MTM Deployable Intelligence Arsenal",
      "description": "Battle-tested AI systems designed to generate revenue for ambitious SME owners in Houston, TX and beyond.",
      "itemListElement": [
        { "@type": "CreativeWork", "position": 1, "name": "Midas Mailer", "description": "AI email campaigns that convert. Personalized at scale." },
        { "@type": "CreativeWork", "position": 2, "name": "FLUX Pipeline", "description": "Automated content pipeline for multi-channel distribution." },
        { "@type": "CreativeWork", "position": 3, "name": "Rogue Engine", "description": "Unconventional growth hacking for untapped markets." },
        { "@type": "CreativeWork", "position": 4, "name": "MTM Pen", "description": "Precision AI copywriting tool for sharp, persuasive copy." },
        { "@type": "CreativeWork", "position": 5, "name": "Apex Pipeline", "description": "Lead generation machine that hunts, captures, nurtures on autopilot." },
        { "@type": "CreativeWork", "position": 6, "name": "Synapse Agent", "description": "Neural network marketing intelligence that connects patterns humans miss." },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://mtmarmory.vercel.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is MT Media AI and what makes it different from a regular marketing agency?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MT Media AI is a Houston-based AI-powered digital strategy firm that engineers cognitive systems for SME owners generating $1M to $10M in revenue. Unlike conventional marketing agencies that sell campaigns, MTM builds compounding digital infrastructure: automated content systems, GEO-optimized authority assets, and AI-native web experiences.",
          },
        },
        {
          "@type": "Question",
          "name": "What is The Forge and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Forge is MTM's multi-agent AI framework. A team of four specialized personas (Goldie the Visionary, Roman the Analyst, Nina the Skeptic, and Echo the Listener) that work together to generate competitive intelligence, content strategies, and actionable recommendations for clients.",
          },
        },
        {
          "@type": "Question",
          "name": "Who does MT Media AI work with?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "MTM serves ambitious SME owners and high-net-worth service providers in the Houston and Woodlands, TX area. Primary niches include luxury automotive, premium professional services, custom home building, and high-end landscaping.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Generative Engine Optimization and why does it matter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Generative Engine Optimization positions businesses to be recommended by AI language models, not just indexed by search engines. As more consumers ask ChatGPT, Claude, Gemini, and Perplexity for business recommendations, businesses without GEO infrastructure become invisible.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "MT Media AI", "item": "https://mtmediaai.com" },
        { "@type": "ListItem", "position": 2, "name": "The Armory", "item": "https://mtmarmory.vercel.app" },
      ],
    },
  ],
};

// ═══════════════════════════════════════════════════════
// FINGERPRINT ID INITIALIZATION
// ═══════════════════════════════════════════════════════
const fingerprintInit = `
(function() {
  function getVisitorId() {
    var vid = localStorage.getItem('mtm_vid');
    if (vid) return vid;
    var chars = 'abcdef0123456789';
    var id = 'fp_';
    for (var i = 0; i < 24; i++) id += chars[Math.floor(Math.random() * chars.length)];
    localStorage.setItem('mtm_vid', id);
    document.cookie = 'mtm_vid=' + id + '; domain=.mtmediaai.com; max-age=31536000; SameSite=Lax; Secure';
    sessionStorage.setItem('mtm_entry_node', 'MTM-01');
    sessionStorage.setItem('mtm_visit_time', Date.now());
    return id;
  }
  getVisitorId();
  var existingVid = document.cookie.split('; ').find(function(r) { return r.indexOf('mtm_vid=') === 0; });
  if (existingVid) {
    window.__MTM_RETURN_VISITOR__ = true;
    window.__MTM_VISITOR_ID__ = existingVid.split('=')[1];
  }
})();
`;

// ═══════════════════════════════════════════════════════
// ZERO-POINT SCROLL FIX — forces scroll to top on every load
// ═══════════════════════════════════════════════════════
const scrollFix = `
(function() {
  window.scrollTo(0, 0);
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname);
  }
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
})();
`;

// ═══════════════════════════════════════════════════════
// ROOT LAYOUT
// ═══════════════════════════════════════════════════════
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'auto' }}>
      <head>
        {/* AGO SCHEMA — LLM Feed */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJsonLd) }}
        />
      </head>
      <body className={`${playfair.variable} ${merriweather.variable}`} style={{ cursor: 'none', scrollBehavior: 'auto' }}>
        <GalaxyBackground />
        <ClientShell />
        {children}

        {/* Zero-Point Scroll Reset */}
        <Script id="mtm-scroll-fix" strategy="afterInteractive">
          {scrollFix}
        </Script>

        {/* Fingerprint ID — Sovereign Visitor Recognition */}
        <Script id="mtm-fingerprint" strategy="afterInteractive">
          {fingerprintInit}
        </Script>

        {/* Scroll Reveal Animation */}
        <Script id="scroll-reveal" strategy="afterInteractive">
          {`
            function revealOnScroll() {
              var reveals = document.querySelectorAll('.reveal');
              var trigger = window.innerHeight * 0.88;
              for (var i = 0; i < reveals.length; i++) {
                var top = reveals[i].getBoundingClientRect().top;
                if (top < trigger) {
                  reveals[i].classList.add('active');
                }
              }
            }
            window.addEventListener('scroll', revealOnScroll);
            window.addEventListener('resize', revealOnScroll);
            setTimeout(revealOnScroll, 500);
          `}
        </Script>
      </body>
    </html>
  );
}
