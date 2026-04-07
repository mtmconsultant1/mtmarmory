"use client"

import React, { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Play, Pause, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface MTMHeroProps {
  heroTitle?: string;
  heroDescription?: string;
  backgroundImage?: string;
  videoUrl?: string;
}

const HeroSection: React.FC<MTMHeroProps> = ({
  heroTitle = "MTM ARMORY",
  heroDescription = "Elite tools and sovereign infrastructure for the modern architect. We don't sell campaigns. We build shovels.",
  backgroundImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2072&q=80",
  videoUrl = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
}) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMailRedirect = () => {
    window.location.href = "mailto:mtmconsultant1@gmail.com?subject=Legion Access Inquiry";
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden" id="hero">
      
      {/* --- HERO CONTENT --- */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-24 pb-12">
        
        {/* Logo / Brand */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-10 h-10 md:w-12 md:h-12 text-[#D4AF37] flex items-center justify-center drop-shadow-[0_0_15px_rgba(212,175,55,0.4)]">
             <ShieldCheck className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1.5} color="#D4AF37" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-widest text-white mb-6 font-heading"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          {heroTitle}
        </motion.h1>
        
        {/* Description */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-[#E1E1E1] mb-12 font-body"
          style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 300 }}
        >
          {heroDescription}
        </motion.p>

        {/* Email Capture Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-1 p-1.5 rounded-2xl border border-[rgba(212,175,55,0.25)] backdrop-blur-md w-full max-w-lg mx-auto"
          style={{ background: 'linear-gradient(135deg, rgba(20,20,40,0.6), rgba(10,10,30,0.8))', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)' }}
        >
          <div className="flex items-center flex-1 px-4 gap-3 py-2">
            <Mail className="h-5 w-5 text-[#D4AF37]" />
            <span className="text-[#F5F5F5] font-mono text-sm tracking-wider">kareem.mtmediaai.com</span>
          </div>
          <button 
            onClick={handleMailRedirect}
            className="w-full sm:w-auto text-[#D4AF37] px-6 py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:text-white hover:bg-[#D4AF37] transition-all duration-300 font-heading"
          >
            Request Access <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>
      </div>

      {/* --- SEAMLESS ANIMATED MEDIA CONTAINER --- */}
      <div className="relative w-full max-w-7xl mx-auto px-4 md:px-6 mt-4 md:mt-12 z-10 group">
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
          
          {/* Seamless Blend Gradient (The "Void" Bleed) */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050510] via-transparent to-[#050510] opacity-90 pointer-events-none" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#050510] via-transparent to-[#050510] opacity-90 pointer-events-none" />
          
          {/* Image Fallback */}
          <motion.img 
            animate={{ scale: isVideoPlaying ? 1.05 : 1 }}
            transition={{ duration: 1 }}
            src={backgroundImage} 
            className={`w-full h-full object-cover transition-opacity duration-700 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`} 
          />
          
          {/* Video Stream */}
          <video 
            ref={videoRef} 
            src={videoUrl} 
            className={`w-full h-full absolute inset-0 object-cover transition-opacity duration-700 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'}`} 
            onEnded={() => setIsVideoPlaying(false)}
            playsInline 
            muted 
          />

          {/* Play/Pause Control */}
          <div className="absolute bottom-8 right-8 z-20">
            <button 
              onClick={isVideoPlaying ? (isVideoPaused ? () => {videoRef.current?.play(); setIsVideoPlaying(true); setIsVideoPaused(false)} : () => {videoRef.current?.pause(); setIsVideoPaused(true)}) : () => {videoRef.current?.play(); setIsVideoPlaying(true); setIsVideoPaused(false)}}
              className="p-4 bg-black/20 backdrop-blur-md border border-[rgba(255,255,255,0.1)] rounded-full hover:bg-[rgba(212,175,55,0.2)] transition-all duration-300 group"
            >
              {isVideoPlaying && !isVideoPaused ? <Play className="text-white fill-white" /> : <Play className="text-[#D4AF37] fill-[#D4AF37] group-hover:scale-110 transition-transform" />}
            </button>
          </div>
        </div>
      </div>

      {/* Background Atmospheric Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 blur-[150px] rounded-full -z-10 pointer-events-none" />

    </section>
  );
};

export default HeroSection;
