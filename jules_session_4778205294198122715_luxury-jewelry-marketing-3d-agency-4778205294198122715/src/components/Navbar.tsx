"use client";

import React, { useState, useEffect } from "react";
import { Camera, Sparkles, ChevronRight, Menu, X, PhoneCall } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

export function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-2xl shadow-amber-950/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-amber-500/40 bg-gradient-to-tr from-black via-zinc-900 to-amber-950/40 flex items-center justify-center group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
            <Camera className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-wider font-bold text-white group-hover:text-amber-300 transition-colors">
              AURA <span className="text-amber-400 font-sans font-light text-xs tracking-widest uppercase">HAUTE</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-amber-500/70 -mt-1 uppercase">
              Jewelry Marketing Agency
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-zinc-300">
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
          <a href="#about" className="hover:text-amber-400 transition-colors">
            About Us
          </a>
          <a href="#testimonials" className="hover:text-amber-400 transition-colors">
            Clients
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onBookClick}
            className="gold-button px-5 py-2.5 rounded-full text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Book Call</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-amber-400 p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-amber-500/30 px-6 py-6 flex flex-col gap-5 text-sm uppercase tracking-wider text-zinc-200 animate-fadeIn">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-400 transition-colors"
          >
            3D Studio
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-400 transition-colors"
          >
            Services
          </a>
          <a
            href="#portfolio"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-400 transition-colors"
          >
            Portfolio
          </a>
          <a
            href="#calculator"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-400 transition-colors"
          >
            ROI Calculator
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-400 transition-colors"
          >
            About Us
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-amber-400 transition-colors"
          >
            Clients
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookClick();
            }}
            className="gold-button mt-2 py-3 rounded-md text-xs font-bold uppercase tracking-widest text-center w-full flex justify-center items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book Strategy Call</span>
          </button>
        </div>
      )}
    </header>
  );
}
