"use client"

import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const handleMailRedirect = () => {
    window.location.href = "mailto:mtmconsultant1@gmail.com?subject=Legion Access Inquiry";
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#050510]" id="hero">
      
      {/* 
        ========================================
        1. THE INFINITY BACKGROUND LAYER
        ========================================
        This is the "Environment". 
        Video + Image blend to ensure visual continuity even if video loads slowly.
      */}
      <div className="absolute inset-0 z-0">
        
        {/* Base Image: Earth from space (Always visible, immediate load) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80")',
            filter: 'brightness(0.6)'
          }}
        />

        {/* Video Overlay: The animated "Living" Earth 
            Swap the src with your local file like: src="/earth-glowing.mp4" 
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-screen"
        >
          <source 
            src="https://assets.codepen.io/1948355/earth-loop.mp4" 
            type="video/mp4" 
          />
        </video>
        
        {/* Seamless Blend: Radial Gradient to melt edges into the galaxy below */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510]/30 via-transparent to-[#050510] opacity-90" />
      </div>

      {/* 
        ========================================
        2. THE CONTENT LAYER
        ========================================
        Embedded directly on top. No containers.
      */}
      <div className="relative z-10 w-full h-full flex flex-col">
        
        {/* --- Embedded Navbar --- */}
        <nav className="w-full px-6 md:px-12 py-8 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* MTM Logo Placeholder - Replace src with your asset */}
            {/* <img src="/mtm-shield-logo.webp" className="w-10 h-10" alt="MTM" /> */}
            <span className="font-bold text-xl tracking-widest text-white group-hover:text-[#D4AF37] transition-colors font-heading">MTM ARMORY</span>
          </div>
          
          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#pillars" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Pillars</a>
            <a href="#arsenal" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Arsenal</a>
            <a href="#contact" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors">Contact</a>
          </div>
        </nav>

        {/* --- Hero Body: Centered --- */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            {/* Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest text-white mb-6 font-heading drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]">
              MTM ARMORY
            </h1>
            
            {/* Description */}
            <p className="text-zinc-300 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto mb-10 font-body">
              Elite tools and sovereign infrastructure for the modern architect.<br />We don't sell campaigns. We build shovels.
            </p>

            {/* Tactical Email Capture */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full max-w-md"
            >
              <div className="p-1.5 rounded-lg bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <div className="flex items-center flex-1 pl-4 gap-3 py-1 sm:py-0">
                    <Mail className="w-5 h-5 text-[#D4AF37]" />
                    <span className="text-sm font-mono text-zinc-300">kareem.mtmediaai.com</span>
                  </div>
                  <button 
                    onClick={handleMailRedirect}
                    className="w-full sm:w-auto bg-[#D4AF37] text-black hover:bg-white px-6 py-3 rounded-md font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 uppercase tracking-wider"
                  >
                    Request Access <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Spacer for bottom fade */}
        <div className="h-24 bg-gradient-to-t from-[#050510] to-transparent w-full pointer-events-none" />
      </div>
    </section>
  );
};

export default HeroSection;