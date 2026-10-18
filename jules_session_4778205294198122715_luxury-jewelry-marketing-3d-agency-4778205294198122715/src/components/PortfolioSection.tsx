"use client";

import React, { useState } from "react";
import { Sparkles, Eye, Award, ArrowUpRight, Play, Filter, CheckCircle } from "lucide-react";

interface PortfolioItem {
  id: string;
  category: "photography" | "video" | "branding" | "campaign";
  title: string;
  brand: string;
  metrics: string;
  description: string;
  gradient: string;
  tags: string[];
}

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "1",
    category: "photography",
    title: "Solstice Diamond Solitaire Collection",
    brand: "L'AURA HAUTE JOAILLERIE",
    metrics: "+380% Online Conversion",
    description: "Macro focus-stacked 8K editorial capture showcasing 5-carat cushion cut diamonds with warm champagne studio reflections.",
    gradient: "from-amber-950/80 via-zinc-900 to-black",
    tags: ["Macro Photography", "Focus Stacking", "E-Commerce"]
  },
  {
    id: "2",
    category: "campaign",
    title: "Royal Emerald & Rose Gold Heritage",
    brand: "MAISON DE VERNE",
    metrics: "4.9x Verified ROAS",
    description: "Integrated omnichannel launch campaign generating over $4.2M in pre-orders within 30 days.",
    gradient: "from-emerald-950/80 via-zinc-900 to-black",
    tags: ["Paid Ads", "Campaign Strategy", "Video Commercial"]
  },
  {
    id: "3",
    category: "video",
    title: "Eternity Pavilion - 4K Cinema Commercial",
    brand: "AURUM TIMEPIECES",
    metrics: "2.8M High-Net-Worth Views",
    description: "Cinematic brand story featuring anamorphic macro lens footage and custom classical orchestral sound architecture.",
    gradient: "from-amber-900/60 via-zinc-900 to-black",
    tags: ["4K Video Production", "Sound Design", "Cinema"]
  },
  {
    id: "4",
    category: "branding",
    title: "Celestial Pearl Identity & Packaging",
    brand: "NOCTURNE PEARLS",
    metrics: "$1,850 Average Order Value",
    description: "Complete luxury brand overhaul including textured black velvet gold-embossed packaging and high-ticket Shopify Plus redesign.",
    gradient: "from-zinc-900 via-amber-950/40 to-black",
    tags: ["Packaging", "Brand Identity", "Shopify UX"]
  },
  {
    id: "5",
    category: "photography",
    title: "High-Jewelry Sapphire High-Tension Rings",
    brand: "VALLIER GENÈVE",
    metrics: "Featured in Vogue & Harper's Bazaar",
    description: "Precision laser lighting setup highlighting extreme blue purity in unheated Ceylon sapphires.",
    gradient: "from-blue-950/80 via-zinc-900 to-black",
    tags: ["Vogue Editorial", "Macro Focus", "Gemology"]
  },
  {
    id: "6",
    category: "campaign",
    title: "Bridal Heirloom Global Fall Launch",
    brand: "SOLITAIRE & CO.",
    metrics: "$8.5M Direct Digital Sales",
    description: "Full funnel performance marketing campaign targeting luxury engaged couples across Meta, Pinterest, and Google Search.",
    gradient: "from-rose-950/60 via-zinc-900 to-black",
    tags: ["Performance Ads", "Retargeting", "Bridal Luxury"]
  }
];

export function PortfolioSection({ onOpenModal }: { onOpenModal?: (title: string) => void }) {
  const [filter, setFilter] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const filteredItems = filter === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-black relative border-t border-amber-500/10">
      
      {/* Background Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-medium tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Signature Case Studies</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              Selected <span className="gold-gradient-text">Jewelry Campaigns</span>
            </h2>

            <p className="text-zinc-400 text-sm font-light">
              Explore our portfolio of high-converting visual assets and high-ROI campaigns crafted for prestigious jewelry houses.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-wider">
            {[
              { id: "all", label: "All Projects" },
              { id: "photography", label: "Macro Photography" },
              { id: "video", label: "4K Film" },
              { id: "campaign", label: "Campaigns" },
              { id: "branding", label: "Branding" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-full border transition-all ${
                  filter === tab.id
                    ? "bg-amber-500 text-black border-amber-400 font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "bg-zinc-950 border-amber-500/20 text-zinc-300 hover:border-amber-500/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative rounded-2xl border border-amber-500/20 bg-zinc-950 overflow-hidden cursor-pointer hover:border-amber-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] flex flex-col justify-between"
            >
              {/* Visual Simulated Showcase Canvas */}
              <div className={`h-64 bg-gradient-to-br ${item.gradient} p-6 flex flex-col justify-between relative overflow-hidden border-b border-amber-500/20`}>
                
                {/* Subtle Geometric Jewel Diamond Graphic Accent */}
                <div className="absolute -right-8 -bottom-8 w-40 h-40 border border-amber-500/10 rotate-45 pointer-events-none group-hover:scale-125 transition-transform duration-700" />
                <div className="absolute right-12 top-8 w-24 h-24 border border-amber-400/10 rotate-12 pointer-events-none" />

                <div className="flex justify-between items-start z-10">
                  <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase bg-black/60 px-2.5 py-1 rounded border border-amber-500/30">
                    {item.brand}
                  </span>

                  <div className="w-8 h-8 rounded-full bg-black/60 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-400 group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4 text-amber-400 group-hover:text-black" />
                  </div>
                </div>

                {/* Simulated Lens Aperture Ring Graphic */}
                <div className="my-auto text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full border border-amber-400/30 flex items-center justify-center bg-black/40 group-hover:scale-110 transition-transform duration-500 shadow-inner">
                    <Eye className="w-7 h-7 text-amber-300" />
                  </div>
                </div>

                {/* Metrics Pill */}
                <div className="z-10 bg-amber-500/20 border border-amber-400/40 px-3 py-1.5 rounded-lg text-amber-200 font-mono text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.metrics}</span>
                </div>
              </div>

              {/* Text Info Body */}
              <div className="p-6 space-y-4 bg-zinc-950/90 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-serif font-bold text-white group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-amber-500/10">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-zinc-400 bg-zinc-900 border border-amber-500/10 px-2 py-0.5 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Popup for Case Study Inspection */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6">
            <div className="bg-zinc-950 border border-amber-400/50 rounded-3xl max-w-2xl w-full p-8 shadow-2xl relative space-y-6">
              
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 text-zinc-400 hover:text-amber-400 text-sm font-mono border border-amber-500/30 px-3 py-1 rounded-full"
              >
                [ CLOSE X ]
              </button>

              <div className="space-y-2">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  {activeItem.brand} — Case Study
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-400/30 text-amber-300 font-mono text-sm flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400" />
                <span>Verified Impact: <strong>{activeItem.metrics}</strong></span>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed font-light">
                {activeItem.description} This production included custom studio set design, focus stacking, raw cinema color grading, and a tailored media buyer matrix targeting ultra-high net worth diamond collectors.
              </p>

              <div className="flex justify-between items-center pt-4 border-t border-amber-500/20">
                <div className="flex gap-2">
                  {activeItem.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono text-amber-300 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    setActiveItem(null);
                    onOpenModal && onOpenModal(activeItem.title);
                  }}
                  className="gold-button px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2"
                >
                  <span>Request Similar Campaign</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
