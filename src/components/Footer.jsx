import React from 'react';
import { 
  GraduationCap, 
  Heart, 
  ShieldCheck, 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowUp,
  Award
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export default function Footer() {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        position: 'relative',
        background: '#1E3A2F',
        color: '#D2E0D8',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '80px',
        paddingBottom: '40px'
      }}
    >
      <div className="container-custom">
        {/* Main 4-Column Aligned Grid (Pure CSS responsive layout) */}
        <div className="footer-grid-layout" style={{ marginBottom: '60px' }}>
          
          {/* Col 1: Trust Identity & Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div 
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.15)',
                  border: '1.5px solid rgba(255, 255, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <GraduationCap size={22} color="#FFFFFF" />
              </div>
              <div>
                <span className="font-display" style={{ fontWeight: 800, fontSize: '1.25rem', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                  ASPM <span style={{ color: '#A7C9B8' }}>INDIA</span>
                </span>
              </div>
            </div>

            <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1rem', marginBottom: '6px' }}>
              Anusaya Shikshan Prasarak Mandal
            </div>
            <div style={{ fontSize: '0.82rem', color: '#A7C9B8', marginBottom: '16px', fontWeight: 600 }}>
              Registered Public Trust F 2405 MAH Nashik (Sanctioned 17-10-1989)
            </div>

            <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: '#B6C8BF', marginBottom: '24px', maxWidth: '340px' }}>
              Dedicated to health and education across Maharashtra for over 36 years. Operating the government-approved <strong>Swami Narayan Nursing Institute</strong> and the <strong>Project Manobal</strong> crisis rehabilitation initiative.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                <a
                  key={platform}
                  href="#contact"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF',
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#1E3A2F';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  {platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.96rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px' }}>
              Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <a href="#home" style={{ color: '#B6C8BF', textDecoration: 'none', transition: 'color 0.2s' }}>Home</a>
              <a href="#about" style={{ color: '#B6C8BF', textDecoration: 'none', transition: 'color 0.2s' }}>About ASPM</a>
              <a href="#nursing" style={{ color: '#B6C8BF', textDecoration: 'none', transition: 'color 0.2s' }}>Nursing Institute</a>
              <a href="#manobal" style={{ color: '#B6C8BF', textDecoration: 'none', transition: 'color 0.2s' }}>Project Manobal</a>
              <a href="#features" style={{ color: '#B6C8BF', textDecoration: 'none', transition: 'color 0.2s' }}>Trust Features</a>
              <a href="#calculator" style={{ color: '#B6C8BF', textDecoration: 'none', transition: 'color 0.2s' }}>Fee Estimator</a>
              <a href="#contact" style={{ color: '#B6C8BF', textDecoration: 'none', transition: 'color 0.2s' }}>Contact & Location</a>
            </div>
          </div>

          {/* Col 3: Academic Programs */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.96rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px' }}>
              Academic Programs
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.88rem' }}>
              <a href="#nursing" style={{ color: '#B6C8BF', textDecoration: 'none' }}>
                <strong style={{ color: '#FFFFFF' }}>ANM Nursing</strong> — 2 Years Diploma
              </a>
              <div style={{ fontSize: '0.8rem', color: '#8EAFA0' }}>₹34,000 / Year (Subsidized)</div>

              <a href="#nursing" style={{ color: '#B6C8BF', textDecoration: 'none', marginTop: '4px' }}>
                <strong style={{ color: '#FFFFFF' }}>GNM Nursing</strong> — 3 Years Comprehensive
              </a>
              <div style={{ fontSize: '0.8rem', color: '#8EAFA0' }}>₹44,000 / Year (Subsidized)</div>

              <div style={{ fontSize: '0.82rem', color: '#B6C8BF', marginTop: '8px' }}>
                ✓ 12th Science, Arts & Commerce
              </div>
              <div style={{ fontSize: '0.82rem', color: '#B6C8BF' }}>
                ✓ Hospital Ward Practical Training
              </div>
            </div>
          </div>

          {/* Col 4: Contact & Emergency */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontWeight: 800, fontSize: '0.96rem', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '20px' }}>
              Campus Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} color="#A7C9B8" style={{ marginTop: '3px', flexShrink: 0 }} />
                <span style={{ lineHeight: 1.5, color: '#D2E0D8' }}>
                  Building no 1, Stadium Complex, Above Ramesh Opticians, MG Road, Nashik 422001, Maharashtra, India
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <PhoneCall size={18} color="#A7C9B8" style={{ flexShrink: 0 }} />
                <a href="tel:+917058830058" style={{ color: '#FFFFFF', fontWeight: 700, textDecoration: 'none' }}>
                  +91 70588 30058
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={18} color="#A7C9B8" style={{ flexShrink: 0 }} />
                <a href="mailto:mvknashik@gmail.com" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                  mvknashik@gmail.com
                </a>
              </div>

              {/* 24/7 Helpline Callout */}
              <div 
                style={{
                  marginTop: '6px',
                  padding: '12px 16px',
                  borderRadius: '14px',
                  background: 'rgba(200, 90, 62, 0.2)',
                  border: '1px solid rgba(200, 90, 62, 0.4)',
                  color: '#FDDAD1',
                  fontSize: '0.8rem'
                }}
              >
                <strong>24/7 Crisis Hotline:</strong> Call +91 70588 30058 for free suicide prevention & distress support.
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Aligned */}
        <div 
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '0.84rem',
            color: '#A7C9B8'
          }}
        >
          <div>
            © 2025 Anusaya Shikshan Prasarak Mandal Nashik. All Rights Reserved. Reg. Public Trust F 2405 MAH Nashik.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span>Privacy Policy</span>
            <span>Terms & Transparency</span>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.12)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#FFFFFF';
                e.currentTarget.style.color = '#1E3A2F';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.12)';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
