import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { websiteData } from '../data/websiteData';
import { soundManager } from '../utils/soundEffects';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    soundManager.playClick();
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section 
      style={{
        position: 'relative',
        padding: '110px 0',
        background: '#F3EFE8',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <div className="pill-badge sage" style={{ marginBottom: '16px' }}>
            <HelpCircle size={14} />
            <span>Clarifications & Admissions</span>
          </div>
          <h2 
            className="font-display" 
            style={{ 
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', 
              fontWeight: 800, 
              lineHeight: 1.15,
              color: '#182520',
              marginBottom: '18px'
            }}
          >
            Frequently Asked <br />
            <span style={{ color: '#2E5E4C', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Student & Parent Questions</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#4A5851', lineHeight: 1.7 }}>
            Find quick answers about course qualifications, recognition, payment schedules, and Project Manobal services.
          </p>
        </div>

        {/* Accordion Container in Crisp White Cards */}
        <div style={{ maxWidth: '880px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {websiteData.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="warm-card"
                style={{
                  borderRadius: '20px',
                  border: isOpen ? '1.5px solid #2E5E4C' : '1px solid #E6DFD4',
                  background: '#FFFFFF',
                  overflow: 'hidden',
                  transition: 'all 0.25s'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '22px 28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    border: 'none',
                    color: '#182520',
                    textAlign: 'left',
                    cursor: 'pointer',
                    fontSize: '1.02rem',
                    fontWeight: 700
                  }}
                >
                  <span style={{ color: isOpen ? '#1E3A2F' : '#182520' }}>
                    {faq.q}
                  </span>
                  <div 
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.3s ease',
                      color: isOpen ? '#1E3A2F' : '#78867E'
                    }}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    style={{
                      padding: '0 28px 22px 28px',
                      color: '#4A5851',
                      fontSize: '0.94rem',
                      lineHeight: 1.7,
                      borderTop: '1px solid #F3EFE8',
                      paddingTop: '14px'
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
