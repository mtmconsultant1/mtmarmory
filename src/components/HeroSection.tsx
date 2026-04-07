"use client"

import React, { useEffect, useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#050510] flex flex-col items-center justify-center">
      
      {/* 1. THE INFINITY BACKGROUND LAYER */}
      {/* Replaces the static image. Auto-playing, looping, filling the viewport */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-80"
          style={{ mixBlendMode: 'screen', filter: 'brightness(0.6)' }}
        >
          <source 
            src="https://assets.codepen.io/1948355/earth-loop.mp4" 
            type="video/mp4" 
          />
        </video>
        {/* Ambient radial glow to blend video into the galaxy */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510] opacity-40 z-20" />
      </div>

      {/* 2. THE CONTENT LAYER (Embedded in Hero) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center h-full">
        
        {/* Navbar Integration */}
        <nav className="w-full py-8 flex items-center justify-between text-white">
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* MTM Shield Logo - Placeholder for branded shield */}
            <span className="font-bold text-xl tracking-widest font-heading group-hover:text-[#D4AF37] transition-colors duration-300">MTM ARMORY</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#pillars" className="text-sm font-medium text-zinc-400 hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Pillars</a>
            <a href="#arsenal" className="text-sm font-medium text-zinc-400 hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Arsenal</a>
            <a href="#contact" className="text-sm font-medium text-zinc-400 hover:text-[#D4AF37] transition-colors uppercase tracking-wider">Contact</a>
          </div>

          <div className="md:hidden">
             {/* Mobile menu placeholder if needed, kept minimal */}
          </div>
        </nav>

        {/* Hero Body */}
        <div className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mt-[-40px]">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest text-white mb-6 font-heading">
              MTM ARMORY
            </h1>
            
            <p className="text-zinc-300 text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto font-body mb-10">
              Elite tools and sovereign infrastructure for the modern architect. We don't sell campaigns. We build shovels.
            </p>

            {/* Tactical Email Capture (Vanity Display -> Gmail Route) */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="w-full max-w-lg"
            >
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl">
                <div className="flex items-center flex-1 pl-4 gap-3 py-1">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm font-mono text-zinc-300 tracking-wide">kareem.mtmediaai.com</span>
                </div>
                <a 
                  href="mailto:mtmconsultant1@gmail.com?subject=Legion Access Inquiry"
                  className="w-full sm:w-auto bg-[#D4AF37] text-black hover:bg-white hover:text-black px-6 py-3 rounded-md font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 uppercase tracking-wider"
                >
                  Request Access <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
      </div>

      {/* Background Glow Effect (Cosmic Depth) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;