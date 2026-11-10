import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { BookingModal } from './components/BookingModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | undefined>(undefined);

  const handleOpenBooking = (specialtyTitle?: string) => {
    setSelectedSpecialty(specialtyTitle);
    setIsBookingOpen(true);
  };

  const handleSelectSpecialtyFromGrid = (specialtyTitle: string) => {
    // Scrolls to contact with preselected specialty or opens booking modal
    setSelectedSpecialty(specialtyTitle);
    const contactElem = document.getElementById('contato');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsBookingOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans selection:bg-[#0F172A] selection:text-white flex flex-col">
      {/* Top Fixed Header */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Page Flow (Strictly ordered: inicio → especialidades → sobre → depoimentos → contato) */}
      <main className="flex-grow">
        {/* 1. Início / Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 2. Especialidades (RPG, Pilates, Reabilitação Ortopédica) */}
        <SpecialtiesSection onSelectSpecialty={handleSelectSpecialtyFromGrid} />

        {/* 3. Sobre (Formação acadêmica, metodologia clínica em 4 passos) */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Depoimentos de Recuperação (Casos clínicos e testemunhos) */}
        <TestimonialsSection />

        {/* 5. Contato & Agendamento Online com Triagem Clínica e FAQ */}
        <ContactSection preselectedSpecialty={selectedSpecialty} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Interactive Modal for Evaluations */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialSpecialty={selectedSpecialty}
      />

      {/* Discrete Pulse Floating WhatsApp Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
