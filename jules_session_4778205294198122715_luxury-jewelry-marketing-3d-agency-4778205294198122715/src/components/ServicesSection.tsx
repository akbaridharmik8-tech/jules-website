"use client";

import React, { useState } from "react";
import { Camera, Video, Sparkles, TrendingUp, Gem, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string;
  badge: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: "photography",
    icon: <Camera className="w-8 h-8 text-amber-400" />,
    title: "Haute Jewelry Photography",
    tagline: "Extreme Macro & Studio Precision",
    description: "Focus-stacked high-resolution diamond and gemstone photography capturing every facet, light refractions, and flawless brilliance.",
    features: [
      "100+ Frame Focus Stacking for edge-to-edge sharpness",
      "Custom Studio Reflector Lighting for VVS Diamond Clarity",
      "Model & Editorial Lifestyle Staging",
      "360-Degree Interactive Product Viewers"
    ],
    deliverables: "8K Ultra-HD Master Files + E-commerce Web Ready Assets",
    badge: "Core Expertise"
  },
  {
    id: "video",
    icon: <Video className="w-8 h-8 text-amber-400" />,
    title: "Cinematic 4K Campaign Videos",
    tagline: "Emotionally Captivating Storytelling",
    description: "High-end commercial video production tailored for luxury jewelry lines, boutique launches, and high-converting paid social commercials.",
    features: [
      "RED / ARRI Cinema Camera Macro Cinematography",
      "Dynamic Light Play & Custom Sound Design",
      "Editorial Concepting & Creative Direction",
      "Vertical Video Cuts for Instagram Reels & TikTok Luxury"
    ],
    deliverables: "Full 60s Brand Film + 15s/30s High-Conversion Ad Cuts",
    badge: "Most Popular"
  },
  {
    id: "branding",
    icon: <Gem className="w-8 h-8 text-amber-400" />,
    title: "Luxury Brand Identity & Positioning",
    tagline: "Exclusivity & Heritage Architecture",
    description: "Transforming jewelry labels into timeless luxury houses with bespoke typography, gold-embossed packaging, and prestige brand guidelines.",
    features: [
      "Brand Storytelling & Heritage Strategy",
      "Bespoke Typography & Gold-Foil Packaging Design",
      "E-commerce UI/UX for High-Ticket Checkout",
      "VIP Client Unboxing Experience Design"
    ],
    deliverables: "Comprehensive Brand Guidelines & Packaging Blueprints",
    badge: "Brand Strategy"
  },
  {
    id: "ads",
    icon: <TrendingUp className="w-8 h-8 text-amber-400" />,
    title: "Precision Paid Media & Scaling",
    tagline: "Ultra High-Net-Worth Targeting",
    description: "Algorithmic ad campaigns across Meta, Google Ads, and Pinterest targeting affluent buyers, collectors, and luxury gift shoppers.",
    features: [
      "HNWI & Collector Audience Targeting Matrix",
      "Omnichannel Retargeting Sequences",
      "A/B Creative Optimization for High AOV ($2,000+)",
      "Real-Time ROAS Dashboard & Attribution"
    ],
    deliverables: "Guaranteed 3.5x+ ROAS Campaign Execution",
    badge: "Performance Driven"
  }
];

export function ServicesSection({ onSelectService }: { onSelectService?: (title: string) => void }) {
  const [activeTab, setActiveTab] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeTab) || SERVICES[0];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden border-t border-amber-500/10">
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-medium tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Exquisite Craftsmanship</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Comprehensive <span className="gold-gradient-text">Marketing Solutions</span> For Jewelry Houses
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base font-light">
            We specialize exclusively in high-value jewelry and luxury timepieces. Every service is engineered to convey prestige and accelerate sales.
          </p>
        </div>

        {/* Interactive Service Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Navigation Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {SERVICES.map((service) => {
              const isActive = service.id === activeTab;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-start gap-4 group relative overflow-hidden ${
                    isActive
                      ? "bg-zinc-900/90 border-amber-400 shadow-[0_0_25px_rgba(212,175,55,0.2)]"
                      : "bg-zinc-950/50 border-amber-500/10 hover:border-amber-500/30 hover:bg-zinc-900/40"
                  }`}
                >
                  <div className={`p-3 rounded-xl border ${isActive ? "bg-amber-500/20 border-amber-400" : "bg-black/50 border-amber-500/20"}`}>
                    {service.icon}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                        {service.badge}
                      </span>
                      <ArrowUpRight className={`w-4 h-4 transition-transform ${isActive ? "text-amber-400 translate-x-1 -translate-y-1" : "text-zinc-600"}`} />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-zinc-400 font-light mt-0.5">
                      {service.tagline}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Active Service Showcase Card */}
          <div className="lg:col-span-7 bg-zinc-900/60 border border-amber-500/25 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-xl relative flex flex-col justify-between min-h-[480px]">
            
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
                    Service Highlight
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mt-1">
                    {activeService.title}
                  </h3>
                </div>
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-400/30">
                  {activeService.icon}
                </div>
              </div>

              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
                {activeService.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-widest text-amber-300 font-semibold">
                  What We Deliver:
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {activeService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deliverables Banner */}
              <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs text-amber-200 font-mono flex items-center gap-2 mt-4">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span><strong>Deliverable Output:</strong> {activeService.deliverables}</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-8 border-t border-amber-500/20 mt-8 flex justify-end">
              <button
                onClick={() => onSelectService && onSelectService(activeService.title)}
                className="gold-button px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2"
              >
                <span>Request Custom Proposal</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
