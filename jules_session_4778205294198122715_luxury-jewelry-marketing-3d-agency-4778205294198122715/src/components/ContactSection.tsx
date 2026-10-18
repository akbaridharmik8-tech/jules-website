"use client";

import React, { useState } from "react";
import { Sparkles, PhoneCall, Mail, User, Building2, Send, CheckCircle2, X } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
  preselectedService?: string;
}

export function ContactSection({ isOpenModal, onCloseModal, preselectedService }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brandName: "",
    monthlyBudget: "$10,000 - $25,000",
    serviceInterest: preselectedService || "Haute Jewelry Photography",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Trigger festive luxury confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#F3E5AB", "#FFFFFF"]
      });
    } catch {
      // fallback
    }
  };

  const formContent = (
    <div className="space-y-6">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-zinc-300">Your Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-amber-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Lord Charles Sterling"
                  className="w-full bg-black/80 border border-amber-500/25 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-zinc-300">Business Email *</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-amber-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="charles@morganjewels.com"
                  className="w-full bg-black/80 border border-amber-500/25 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Brand / Company Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-zinc-300">Brand / House Name *</label>
              <div className="relative">
                <Building2 className="w-4 h-4 text-amber-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  placeholder="Maison Sterling Joaillerie"
                  className="w-full bg-black/80 border border-amber-500/25 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>
            </div>

            {/* Monthly Budget Range */}
            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase text-zinc-300">Est. Monthly Ad Spend</label>
              <select
                value={formData.monthlyBudget}
                onChange={(e) => setFormData({ ...formData, monthlyBudget: e.target.value })}
                className="w-full bg-black/80 border border-amber-500/25 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
              >
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                <option value="$50,000+">$50,000+ (Enterprise)</option>
              </select>
            </div>

          </div>

          {/* Primary Service Interest */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase text-zinc-300">Primary Service Interest</label>
            <select
              value={formData.serviceInterest}
              onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
              className="w-full bg-black/80 border border-amber-500/25 rounded-xl py-2.5 px-4 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
            >
              <option value="Haute Jewelry Photography">Haute Jewelry Photography</option>
              <option value="Cinematic 4K Campaign Videos">Cinematic 4K Campaign Videos</option>
              <option value="Luxury Brand Identity & Packaging">Luxury Brand Identity & Packaging</option>
              <option value="Precision Paid Media & Scaling">Precision Paid Media & Scaling</option>
              <option value="Full Omnichannel Growth Package">Full Omnichannel Growth Package</option>
            </select>
          </div>

          {/* Project Details */}
          <div className="space-y-1.5">
            <label className="text-xs font-mono uppercase text-zinc-300">Project Goals / Campaign Details</label>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us about your upcoming collection launch or campaign objectives..."
              className="w-full bg-black/80 border border-amber-500/25 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>

          <button
            type="submit"
            className="w-full gold-button py-4 rounded-full text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl mt-4"
          >
            <Send className="w-4 h-4" />
            <span>Submit Strategy Call Request</span>
          </button>
        </form>
      ) : (
        <div className="text-center py-10 space-y-4">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400 flex items-center justify-center mx-auto text-amber-400">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-serif font-bold text-white">
            Strategy Session Confirmed
          </h3>
          <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-amber-400 font-semibold">{formData.name}</span>. Our Senior Creative Director for <span className="text-amber-400 font-semibold">{formData.brandName}</span> will review your request and send a calendar invitation within 4 business hours.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              onCloseModal && onCloseModal();
            }}
            className="px-6 py-2.5 rounded-full border border-amber-500/40 text-amber-300 text-xs uppercase font-mono hover:bg-amber-500/10 transition-colors mt-4"
          >
            Close Window
          </button>
        </div>
      )}
    </div>
  );

  // If presented as a pop-up modal
  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6">
        <div className="bg-zinc-950 border border-amber-400/50 rounded-3xl max-w-xl w-full p-8 shadow-2xl relative space-y-6">
          <button
            onClick={onCloseModal}
            className="absolute top-6 right-6 text-zinc-400 hover:text-amber-400 p-2"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              VIP Strategy Call Booking
            </span>
            <h3 className="text-2xl font-serif font-bold text-white">
              Schedule Your Private Consultation
            </h3>
          </div>

          {formContent}
        </div>
      </div>
    );
  }

  // On-page section layout
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black relative border-t border-amber-500/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column Text & Contact Details */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-medium tracking-widest uppercase">
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Private Strategy Booking</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Elevate Your <span className="gold-gradient-text">Jewelry House</span> Today.
          </h2>

          <p className="text-zinc-300 text-sm font-light leading-relaxed">
            Ready to scale your online revenues with 8K focus-stacked macro visuals, cinematic video campaigns, and high-ROAS paid media targeting?
          </p>

          <div className="space-y-4 pt-4 border-t border-amber-500/20 font-mono text-xs">
            <div className="flex items-center gap-3 text-zinc-300">
              <Mail className="w-4 h-4 text-amber-400" />
              <span>concierge@aurahautemedia.com</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-300">
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>Place Vendôme, Paris & Mayfair, London</span>
            </div>
          </div>
        </div>

        {/* Right Column Form Card */}
        <div className="lg:col-span-7 bg-zinc-950 border border-amber-500/30 rounded-3xl p-8 md:p-10 shadow-2xl backdrop-blur-xl">
          {formContent}
        </div>

      </div>
    </section>
  );
}
