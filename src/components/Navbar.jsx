import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Sparkles, 
  Menu, 
  X, 
  Volume2, 
  VolumeX, 
  GraduationCap
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export default function Navbar({ onOpenAdmissionModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = soundManager.toggle();
    setSoundEnabled(active);
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About ASPM', href: '#about' },
    { label: 'Nursing Institute', href: '#nursing' },
    { label: 'Project Manobal', href: '#manobal' },
    { label: 'Key Features', href: '#features' },
    { label: 'Fee Estimator', href: '#calculator' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    soundManager.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '3px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #1E3A2F, #2E5E4C, #22865E)',
          zIndex: 10001,
          transition: 'width 0.1s linear'
        }}
      />

      {/* Floating Header Bar */}
      <header 
        style={{
          position: 'fixed',
          top: isScrolled ? '12px' : '20px',
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          padding: '0 20px'
        }}
      >
        <div 
          style={{
            background: isScrolled 
              ? 'rgba(255, 255, 255, 0.98)' 
              : 'rgba(251, 249, 245, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid #E6E0D5',
            borderRadius: '9999px',
            padding: isScrolled ? '10px 24px' : '12px 28px',
            boxShadow: isScrolled 
              ? '0 14px 36px -8px rgba(30, 58, 47, 0.09), 0 2px 8px rgba(30, 58, 47, 0.04)' 
              : '0 8px 24px -6px rgba(30, 58, 47, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'nowrap', // Strictly single line
            maxWidth: '1360px',
            margin: '0 auto',
            width: '100%',
            gap: '16px',
            transition: 'all 0.3s ease'
          }}
        >
          {/* Logo & Emblem (Single Line, No Wrap) */}
          <a 
            href="#home" 
            onClick={() => soundManager.playClick()}
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              textDecoration: 'none', 
              color: 'inherit',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
          >
            <div 
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: '#EAF2ED',
                border: '1.5px solid #C8DED1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <GraduationCap size={22} color="#1E3A2F" />
            </div>
            <div style={{ whiteSpace: 'nowrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className="font-display" style={{ fontWeight: 800, fontSize: '1.16rem', color: '#182520', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
                  ASPM <span style={{ color: '#2E5E4C' }}>INDIA</span>
                </span>
                <span className="pulse-dot" />
              </div>
              <div style={{ fontSize: '0.64rem', color: '#6F7D75', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 700, lineHeight: 1, marginTop: '2px' }}>
                Trust F 2405 • Est. 1989
              </div>
            </div>
          </a>

          {/* Single Desktop Nav Menu (Strictly in One Line, Comfortable Spacing) */}
          <nav className="desktop-nav-menu">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className="desktop-nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster (Single Line, Comfortable Padding) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, whiteSpace: 'nowrap' }}>
            {/* Audio Toggle */}
            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Mute sound' : 'Enable sound'}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: soundEnabled ? '#EAF2ED' : '#F4F0E8',
                border: soundEnabled ? '1px solid #2E5E4C' : '1px solid #E6E0D5',
                color: soundEnabled ? '#1E3A2F' : '#6F7D75',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'all 0.2s ease'
              }}
            >
              {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Helpline Pill */}
            <a
              href="tel:+917058830058"
              onClick={() => soundManager.playChime(440, 'triangle', 0.2)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '9999px',
                background: 'var(--accent-coral-light)',
                border: '1px solid var(--accent-coral-border)',
                color: 'var(--accent-coral)',
                textDecoration: 'none',
                fontSize: '0.82rem',
                fontWeight: 700,
                flexShrink: 0,
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              <PhoneCall size={14} color="var(--accent-coral)" />
              <span>Helpline</span>
            </a>

            {/* Apply Button */}
            <button
              onClick={() => {
                soundManager.playChime(660);
                onOpenAdmissionModal();
              }}
              className="btn-magnetic btn-primary"
              style={{
                padding: '10px 22px',
                fontSize: '0.86rem',
                flexShrink: 0,
                whiteSpace: 'nowrap'
              }}
            >
              <Sparkles size={15} />
              <span>Apply 2025</span>
            </button>

            {/* Mobile Hamburger Button (Only on smaller screens) */}
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="mobile-menu-btn"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#F4F0E8',
                border: '1px solid #E6E0D5',
                color: '#182520',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Under 1080px) */}
        {mobileMenuOpen && (
          <div 
            style={{
              marginTop: '10px',
              background: '#FFFFFF',
              border: '1px solid #E6E0D5',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 20px 45px rgba(30, 58, 47, 0.12)',
              maxWidth: '1240px',
              margin: '10px auto 0'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  style={{
                    color: '#182520',
                    textDecoration: 'none',
                    fontSize: '0.98rem',
                    fontWeight: 600,
                    padding: '8px 0',
                    borderBottom: '1px solid #F3EFE8'
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
                <a
                  href="tel:+917058830058"
                  className="btn-magnetic btn-crisis"
                  style={{ flex: 1, padding: '12px', fontSize: '0.88rem' }}
                >
                  <PhoneCall size={15} />
                  <span>Call Helpline</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAdmissionModal();
                  }}
                  className="btn-magnetic btn-primary"
                  style={{ flex: 1, padding: '12px', fontSize: '0.88rem' }}
                >
                  <Sparkles size={15} />
                  <span>Apply Now</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
