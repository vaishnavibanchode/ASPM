import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import AboutSection from './components/AboutSection';
import NursingInstitute from './components/NursingInstitute';
import ProjectManobal from './components/ProjectManobal';
import KeyFeatures from './components/KeyFeatures';
import FeeCalculator from './components/FeeCalculator';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [modalInitialCourse, setModalInitialCourse] = useState('anm');

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateLenis);
    };
  }, []);

  const handleOpenAdmissionModal = (courseId = 'anm') => {
    setModalInitialCourse(courseId);
    setAdmissionModalOpen(true);
  };

  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#FBF9F5', color: '#182520' }}>
      {/* Subtle Noise Texture */}
      <div className="noise-overlay" />

      {/* Fluid Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Top Floating Warm Glass Navbar */}
      <Navbar onOpenAdmissionModal={handleOpenAdmissionModal} />

      {/* Main Page Layout */}
      <main>
        {/* 3-Column Warm Hero matching Reference Image */}
        <Hero onOpenAdmissionModal={handleOpenAdmissionModal} />

        {/* Clean Partner & Trust Ribbon */}
        <MarqueeTicker />

        {/* About ASPM Trust with Vision/Mission & 3-Pill Triptych */}
        <AboutSection />

        {/* Contrast Botanical Spruce Band with Floating Stadium Cards */}
        <NursingInstitute onOpenAdmissionModal={handleOpenAdmissionModal} />

        {/* Project Manobal Suicide Prevention & De-Addiction */}
        <ProjectManobal />

        {/* 8 Core Public Trust Verticals */}
        <KeyFeatures />

        {/* Interactive Fee & Eligibility Estimator (2025-26) */}
        <FeeCalculator onOpenAdmissionModal={handleOpenAdmissionModal} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact, Campus Location & Newsletter */}
        <ContactSection />
      </main>

      {/* Aligned 4-Column Spruce Footer */}
      <Footer />

      {/* Admission / Inquiry Modal with Confetti */}
      <AdmissionModal 
        isOpen={admissionModalOpen} 
        onClose={() => setAdmissionModalOpen(false)} 
        initialCourse={modalInitialCourse} 
      />
    </div>
  );
}
