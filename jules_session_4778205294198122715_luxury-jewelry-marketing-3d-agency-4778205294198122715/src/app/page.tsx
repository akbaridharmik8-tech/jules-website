"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { CalculatorSection } from "@/components/CalculatorSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("Haute Jewelry Photography");

  const handleOpenModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0B0B0C] text-[#FDFBF7] selection:bg-amber-500 selection:text-black">
      {/* Navigation Header */}
      <Navbar onBookClick={() => handleOpenModal()} />

      {/* Hero Section with Interactive 3D DSLR Camera */}
      <HeroSection onBookClick={() => handleOpenModal()} />

      {/* Services Section */}
      <ServicesSection onSelectService={(service) => handleOpenModal(service)} />

      {/* Portfolio & Interactive Case Studies */}
      <PortfolioSection onOpenModal={(title) => handleOpenModal(`Campaign for: ${title}`)} />

      {/* Interactive ROI & Revenue Calculator */}
      <CalculatorSection onBookClick={() => handleOpenModal("Full Omnichannel Growth Package")} />

      {/* Agency Craftsmanship & About */}
      <AboutSection onBookClick={() => handleOpenModal()} />

      {/* Testimonials & Social Proof */}
      <TestimonialsSection onBookClick={() => handleOpenModal()} />

      {/* Contact Section */}
      <ContactSection preselectedService={selectedService} />

      {/* Footer */}
      <Footer />

      {/* VIP Strategy Booking Modal */}
      {isModalOpen && (
        <ContactSection
          isOpenModal={true}
          onCloseModal={() => setIsModalOpen(false)}
          preselectedService={selectedService}
        />
      )}
    </main>
  );
}
