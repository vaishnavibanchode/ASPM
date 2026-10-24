import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Sparkles, 
  Menu, 
  X, 
  GraduationCap
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export default function Navbar({ onOpenAdmissionModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
        className="floating-header-bar"
        style={{
          position: 'fixed',
          top: isScrolled ? '10px' : '18px',
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '0 20px',
          boxSizing: 'border-box',
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div 
          className="floating-header-inner"
          style={{
            background: isScrolled 
              ? 'rgba(255, 255, 255, 0.98)' 
              : 'rgba(251, 249, 245, 0.96)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid #E6E0D5',
            borderRadius: '9999px',
            boxShadow: isScrolled 
              ? '0 14px 36px -8px rgba(30, 58, 47, 0.09), 0 2px 8px rgba(30, 58, 47, 0.04)' 
              : '0 8px 24px -6px rgba(30, 58, 47, 0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            maxWidth: '1360px',
            margin: '0 auto',
            width: '100%',
            padding: isScrolled ? '7px 22px 7px 22px' : '9px 26px 9px 24px',
            boxSizing: 'border-box',
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
              gap: '10px', 
              textDecoration: 'none', 
              color: 'inherit',
              flexShrink: 0,
              whiteSpace: 'nowrap'
            }}
          >
            <div 
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: '#EAF2ED',
                border: '1.5px solid #C8DED1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              <GraduationCap size={19} color="#1E3A2F" />
            </div>
            <div style={{ whiteSpace: 'nowrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span className="font-display" style={{ fontWeight: 800, fontSize: '1.1rem', color: '#182520', letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>
                  ASPM <span style={{ color: '#2E5E4C' }}>INDIA</span>
                </span>
                <span className="pulse-dot" />
              </div>
              <div style={{ fontSize: '0.62rem', color: '#6F7D75', letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 700, lineHeight: 1, marginTop: '2px' }}>
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

          {/* Right Action Cluster: Helpline + Apply 2025 (Comfortable Spacing) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, whiteSpace: 'nowrap', paddingRight: '2px' }}>
            {/* Helpline Pill */}
            <a
              href="tel:+917058830058"
              onClick={() => soundManager.playChime(440, 'triangle', 0.2)}
              className="nav-helpline-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '7px',
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
              className="btn-magnetic btn-primary nav-apply-btn"
              style={{
                padding: '9px 20px',
                fontSize: '0.85rem',
                flexShrink: 0,
                whiteSpace: 'nowrap',
                marginRight: '2px'
              }}
            >
              <Sparkles size={14} />
              <span>Apply 2025</span>
            </button>

            {/* Mobile Hamburger Button (High visibility on mobile) */}
            <button
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="mobile-menu-btn"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={19} /> : <Menu size={19} />}
              <span className="mobile-menu-text">Menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div 
              onClick={() => setMobileMenuOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(24, 37, 32, 0.45)',
                backdropFilter: 'blur(4px)',
                WebkitBackdropFilter: 'blur(4px)',
                zIndex: 10002
              }}
            />

            <div 
              className="mobile-dropdown-menu"
              style={{
                position: 'relative',
                zIndex: 10005,
                marginTop: '10px',
                background: '#FFFFFF',
                border: '1.5px solid #E6E0D5',
                borderRadius: '24px',
                padding: '20px 18px',
                boxShadow: '0 20px 45px rgba(30, 58, 47, 0.16)',
                maxWidth: '1240px',
                margin: '10px auto 0',
                maxHeight: 'calc(100vh - 100px)',
                overflowY: 'auto'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1.5px solid #ECE6DB', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2E5E4C', fontWeight: 800 }}>
                    Navigation Menu
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#6F7D75' }}>
                    Trust F 2405
                  </span>
                </div>

                {navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={handleLinkClick}
                    style={{
                      color: '#182520',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 700,
                      padding: '12px 14px',
                      borderRadius: '14px',
                      background: '#FAF8F5',
                      border: '1px solid #EFEAE1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      transition: 'all 0.2s'
                    }}
                  >
                    <span>{item.label}</span>
                    <span style={{ color: '#2E5E4C', fontSize: '0.9rem' }}>→</span>
                  </a>
                ))}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '12px', paddingTop: '10px', borderTop: '1px solid #ECE6DB' }}>
                  <a
                    href="tel:+917058830058"
                    className="btn-magnetic btn-crisis"
                    style={{ 
                      padding: '13px 18px', 
                      fontSize: '0.88rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '8px',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      fontWeight: 700
                    }}
                  >
                    <PhoneCall size={16} />
                    <span>Call Helpline: +91 70588 30058</span>
                  </a>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenAdmissionModal();
                    }}
                    className="btn-magnetic btn-primary"
                    style={{ 
                      padding: '13px 18px', 
                      fontSize: '0.88rem', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      gap: '8px',
                      borderRadius: '9999px',
                      fontWeight: 700
                    }}
                  >
                    <Sparkles size={16} />
                    <span>Apply Now for 2025-26 Batch</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
