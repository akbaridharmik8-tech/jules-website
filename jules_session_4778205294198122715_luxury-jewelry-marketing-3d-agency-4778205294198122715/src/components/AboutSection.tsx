"use client";

import React from "react";
import { Sparkles, Camera, ShieldCheck, Gem, Award, ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutSection({ onBookClick }: { onBookClick?: () => void }) {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black relative border-t border-amber-500/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Graphic Card */}
        <div className="lg:col-span-5 relative">
          <div className="rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-zinc-900 to-black p-8 md:p-10 shadow-2xl relative overflow-hidden group">
            
            {/* Diamond Cut Frame */}
            <div className="absolute -top-10 -right-10 w-48 h-48 border border-amber-500/20 rotate-45 pointer-events-none group-hover:rotate-90 transition-transform duration-1000" />

            <div className="space-y-6 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center">
                <Gem className="w-8 h-8 text-amber-400" />
              </div>

              <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                Crafted Exclusively For Haute Joaillerie
              </h3>

              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                Founded by former luxury editorial directors and precision camera engineers, Aura Haute Media operates at the intersection of fine art and high-performance digital marketing.
              </p>

              <div className="space-y-3 pt-4 border-t border-amber-500/20">
                {[
                  "In-House 8K Hasselblad & ARRI Macro Cinema Rig",
                  "Certified Luxury Brand Strategy & Media Buyers",
                  "Dedicated Creative Director for Every Account",
                  "Strict Brand Non-Compete Guarantee per Region"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column Story & Values */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-medium tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Our Heritage & Craftsmanship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            We Don't Just Market Jewelry. <br />
            <span className="gold-gradient-text">We Immortalize Brilliance.</span>
          </h2>

          <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
            Standard marketing agencies fail with fine jewelry because they treat diamonds like fast-fashion commodities. We understand that luxury buyers purchase heritage, emotion, and flawless craftsmanship.
          </p>

          <p className="text-zinc-400 text-sm leading-relaxed font-light">
            Through custom-engineered optical setups, focus stacking, 3D interactive camera viewports, and highly target-segmented media distribution, we deliver measurable financial growth while preserving your brand's prestige.
          </p>

          {/* Key Milestones */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-4 border-y border-amber-500/20 my-6">
            <div>
              <div className="text-3xl font-serif font-bold text-amber-400">12+</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono">Years Specialization</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-amber-400">$140M+</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono">Client Revenue</div>
            </div>
            <div>
              <div className="text-3xl font-serif font-bold text-amber-400">98%</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-mono">Client Retention</div>
            </div>
          </div>

          <div>
            <button
              onClick={onBookClick}
              className="gold-button px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl"
            >
              <span>Explore Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
