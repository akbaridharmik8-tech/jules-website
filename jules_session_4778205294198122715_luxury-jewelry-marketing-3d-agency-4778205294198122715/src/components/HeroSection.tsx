"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Sparkles, Camera, ArrowRight, Play, CheckCircle2, Award, Eye, Maximize2 } from "lucide-react";

// Dynamically import HeroCanvas to prevent SSR window/WebGL issues
const HeroCanvas = dynamic(
  () => import("@/components/3d/HeroCanvas").then((mod) => mod.HeroCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[600px] flex flex-col items-center justify-center text-amber-400 font-serif">
        <div className="w-12 h-12 border-2 border-amber-400 border-t-transparent rounded-full animate-spin mb-4" />
        <p className="text-xs tracking-widest uppercase">Initializing High-Precision 3D DSLR Camera...</p>
      </div>
    ),
  }
);

interface HeroProps {
  onBookClick: () => void;
}

export function HeroSection({ onBookClick }: HeroProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleCameraClick = () => {
    setIsZoomed((prev) => !prev);
    // Smooth scroll down to portfolio when zoomed in
    if (!isZoomed) {
      setTimeout(() => {
        const portfolioSection = document.getElementById("portfolio");
        portfolioSection?.scrollIntoView({ behavior: "smooth" });
      }, 900);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 overflow-hidden flex flex-col justify-center">
      {/* Background Decorative Lighting Ellipses */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-amber-400/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline & Value Proposition */}
        <div className="lg:col-span-6 space-y-6 text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-medium tracking-widest uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Luxury Jewelry Marketing Agency</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.15]">
            Crafting <span className="gold-gradient-text">Cinematic Brilliance</span> For Elite Jewelry Brands.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-xl">
            We fuse ultra-high-definition 4K macro photography, cinematic video campaigns, and precision media buying to elevate haute joaillerie brands into global icons.
          </p>

          {/* Quick Stats Highlights */}
          <div className="grid grid-cols-3 gap-4 py-4 border-y border-amber-500/20 my-6">
            <div>
              <div className="text-2xl font-serif font-bold text-amber-400">$140M+</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider">Client Revenue</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-amber-400">4.8x</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider">Average ROAS</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-bold text-amber-400">250+</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider">Campaign Shoots</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onBookClick}
              className="gold-button px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-3 shadow-xl hover:scale-105 transition-transform"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleCameraClick}
              className="px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-widest text-amber-300 border border-amber-500/40 hover:border-amber-400 hover:bg-amber-500/10 transition-all flex items-center gap-2"
            >
              <Camera className="w-4 h-4 text-amber-400" />
              <span>{isZoomed ? "Reset 360° Camera" : "Interact 3D Camera"}</span>
            </button>
          </div>

          {/* Micro Guarantee */}
          <div className="flex items-center gap-2 text-xs text-zinc-400 pt-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            <span>Guaranteed high-converting visual assets & ROAS growth</span>
          </div>
        </div>

        {/* Right Column: 3D Camera Viewport */}
        <div className="lg:col-span-6 relative w-full h-[520px] md:h-[620px] rounded-3xl border border-amber-500/20 bg-gradient-to-b from-zinc-950/80 via-black to-zinc-950/90 shadow-[0_0_50px_rgba(212,175,55,0.08)] overflow-hidden group">
          
          {/* Top Camera Controls Overlay */}
          <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-amber-500/20 text-xs text-zinc-300 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>3D STUDIO VIEWPORT</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400 text-[11px]">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>{isZoomed ? "ZOOMED LCD IN" : "360° AUTO ROTATE"}</span>
            </div>
          </div>

          {/* Interactive Prompt Toast */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-black/80 border border-amber-500/40 px-5 py-2.5 rounded-full text-xs font-medium text-amber-300 flex items-center gap-2.5 shadow-2xl backdrop-blur-md pointer-events-none group-hover:border-amber-400 transition-colors">
            <Camera className="w-4 h-4 text-amber-400 animate-bounce" />
            <span>{isZoomed ? "LCD View active! Click again to reset camera" : "Click camera screen or drag to inspect 3D view"}</span>
          </div>

          {/* 3D Canvas */}
          <HeroCanvas isZoomed={isZoomed} onScreenClick={handleCameraClick} />
        </div>

      </div>
    </section>
  );
}
