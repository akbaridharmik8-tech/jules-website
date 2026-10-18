"use client";

import React, { useState, useEffect } from "react";
import { Camera, ArrowUp, Sparkles } from "lucide-react";

export function Footer() {
  const [year, setYear] = useState(2025);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black border-t border-amber-500/20 py-16 text-zinc-400 font-light relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-amber-500/15 pb-12">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-amber-500/40 bg-gradient-to-tr from-black to-amber-950/40 flex items-center justify-center">
              <Camera className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="font-serif text-xl tracking-wider font-bold text-white">
                AURA <span className="text-amber-400 font-sans font-light text-xs tracking-widest uppercase">HAUTE</span> MEDIA
              </span>
              <p className="text-[10px] font-mono text-amber-500/80 uppercase">
                Luxury Jewelry Marketing & 3D Visual Studio
              </p>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap gap-6 text-xs font-mono uppercase tracking-widest text-zinc-300">
            <a href="#hero" className="hover:text-amber-400 transition-colors">
              3D Studio
            </a>
            <a href="#services" className="hover:text-amber-400 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="hover:text-amber-400 transition-colors">
              Portfolio
            </a>
            <a href="#calculator" className="hover:text-amber-400 transition-colors">
              ROI Calculator
            </a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Back To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 hover:border-amber-400 transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>

        {/* Bottom Rights */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs font-mono text-zinc-500 gap-4">
          <p>
            © {year} Aura Haute Media Inc. All rights reserved. Haute Joaillerie Agency.
          </p>
          <div className="flex gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Engagement</span>
            <span>Client Portal</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
