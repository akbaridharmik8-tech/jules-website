"use client";

import React from "react";
import { Sparkles, Star, Quote, Award, ShieldCheck, CheckCircle, ArrowRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "Aura Haute Media completely transformed our online sales trajectory. The 3D macro diamond imagery and cinematic video ads tripled our average order value to $4,200 within 60 days.",
    author: "Henriette Du Pont",
    title: "Founder & Creative Director",
    brand: "Du Pont Haute Joaillerie, Paris",
    rating: 5,
    metrics: "+310% Revenue Growth"
  },
  {
    quote: "Finding an agency that truly understands the nuanced psychology of high-net-worth jewelry collectors is rare. Their team delivered a 5.2x ROAS on our flagship emerald campaign.",
    author: "Marcus Thorne",
    title: "Chief Marketing Officer",
    brand: "Thorne & Co. Fine Timepieces, London",
    rating: 5,
    metrics: "5.2x Verified ROAS"
  },
  {
    quote: "The 3D DSLR interactive visuals and focus-stacked macro assets were featured directly on our Vogue campaign pages. The return on investment has been phenomenal.",
    author: "Elena Rostova",
    title: "Managing Director",
    brand: "Solitaire Genève",
    rating: 5,
    metrics: "$6.8M Direct Digital Sales"
  }
];

const PRESS_LOGOS = [
  "VOGUE JEWELRY",
  "ROBB REPORT",
  "BAZAAR HAUTE",
  "FINANCIAL TIMES",
  "ELLE LUXURY"
];

export function TestimonialsSection({ onBookClick }: { onBookClick?: () => void }) {
  return (
    <section id="testimonials" className="py-24 bg-black relative border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-medium tracking-widest uppercase">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Client Endorsements</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Trusted By The World's <span className="gold-gradient-text">Finest Jewelry Houses</span>
          </h2>

          <p className="text-zinc-400 text-sm font-light">
            Read testimonials from founders and marketing executives who scaled their luxury jewelry brands with our signature campaigns.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-amber-500/20 rounded-3xl p-8 flex flex-col justify-between hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 shadow-2xl relative group"
            >
              <Quote className="w-10 h-10 text-amber-500/20 absolute top-6 right-6 group-hover:text-amber-500/40 transition-colors" />

              <div className="space-y-4 relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed font-light italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-amber-500/15 mt-6 space-y-3">
                <div className="inline-block px-2.5 py-1 rounded bg-amber-500/10 text-amber-300 text-[10px] font-mono border border-amber-500/20">
                  {t.metrics}
                </div>

                <div>
                  <h4 className="text-white font-serif font-bold text-sm">
                    {t.author}
                  </h4>
                  <p className="text-xs text-amber-400/90 font-mono">
                    {t.title} — <span className="text-zinc-400 font-sans">{t.brand}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Press Badges / Trust Banner */}
        <div className="pt-12 border-t border-amber-500/20 flex flex-col items-center gap-6 text-center">
          <span className="text-xs font-mono tracking-widest text-zinc-500 uppercase">
            CAMPAIGN FEATURES & PRESS MENTIONS
          </span>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
            {PRESS_LOGOS.map((logo, idx) => (
              <span key={idx} className="font-serif text-sm md:text-base font-bold text-amber-200/80 tracking-widest">
                {logo}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
