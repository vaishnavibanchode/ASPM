import React, { useState } from 'react';
import { 
  Heart, 
  ShieldAlert, 
  PhoneCall, 
  Users, 
  HeartPulse, 
  HeartHandshake, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  LifeBuoy
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export default function ProjectManobal() {
  const [activeStep, setActiveStep] = useState(0);

  const pillars = [
    {
      title: "Suicide Prevention",
      desc: "Immediate psychological first aid, 24/7 crisis intervention, and distress counseling for youth and migrant workers.",
      icon: ShieldAlert,
      color: "#C85A3E",
      bg: "#FDF1ED"
    },
    {
      title: "Drug & Alcohol De-Addiction",
      desc: "Comprehensive rehabilitation, supervised detox support, and long-term sobriety coaching through Manas Vyasanmukti Kendra.",
      icon: HeartPulse,
      color: "#1E3A2F",
      bg: "#EAF2ED"
    },
    {
      title: "Youth Support Circles",
      desc: "Open dialogues, anxiety destigmatization, and emotional resilience workshops across colleges and rural youth clubs.",
      icon: Users,
      color: "#2E5E4C",
      bg: "#EAF2ED"
    },
    {
      title: "Migrant Worker Welfare",
      desc: "Field outreach clinics, nutritional guidance, and community mental resilience for vulnerable workers and families.",
      icon: HeartHandshake,
      color: "#B3822A",
      bg: "#FAF4E6"
    }
  ];

  const recoverySteps = [
    {
      step: "01",
      title: "Confidential Call & Triage",
      desc: "Dial +91 70588 30058 for compassionate, non-judgmental crisis listening by trained psychological responders."
    },
    {
      step: "02",
      title: "Personalized Care Mapping",
      desc: "Careful evaluation of distress level, substance dependency history, and family support dynamics."
    },
    {
      step: "03",
      title: "Therapy & Reconciliation",
      desc: "One-on-one counseling, psychological rehabilitation protocols, mindfulness, and family reconnection."
    },
    {
      step: "04",
      title: "Sustained Re-Integration",
      desc: "Ongoing support circles, vocational skill building, and peer networks to ensure lifelong recovery."
    }
  ];

  return (
    <section 
      id="manobal" 
      style={{
        position: 'relative',
        padding: '120px 0',
        background: '#FAF8F5',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
          <div className="pill-badge coral" style={{ marginBottom: '16px' }}>
            <Heart size={14} color="#C85A3E" />
            <span>Manas Vyasanmukti Kendra • Project Manobal</span>
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
            Project Manobal: <br />
            <span style={{ color: '#C85A3E', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Suicide Prevention & De-Addiction</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#4A5851', lineHeight: 1.7 }}>
            A compassionate social initiative specifically targeted towards youth and migrant workers in Maharashtra. Offering free, private, and 24/7 psychological first-aid.
          </p>
        </div>

        {/* 24/7 Crisis Hotline Warm Banner */}
        <div 
          className="warm-card"
          style={{
            maxWidth: '1000px',
            margin: '0 auto 60px auto',
            padding: '32px 40px',
            borderRadius: '28px',
            background: 'linear-gradient(135deg, #FDF3F0 0%, #FAF0EB 100%)',
            border: '1.5px solid #F5C6B8',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div 
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: '#C85A3E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                boxShadow: '0 8px 20px rgba(200, 90, 62, 0.3)',
                flexShrink: 0
              }}
            >
              <LifeBuoy size={28} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#C85A3E', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                <span className="pulse-dot" style={{ background: '#C85A3E' }} />
                <span>24/7 Confidential Crisis Helpline</span>
              </div>
              <div className="font-display" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#182520', marginTop: '2px' }}>
                You Are Not Alone. Speak With Our Counselors.
              </div>
              <div style={{ fontSize: '0.86rem', color: '#6F7D75' }}>
                100% Free, safe, and private counseling for youth and families in distress.
              </div>
            </div>
          </div>

          <a
            href="tel:+917058830058"
            onClick={() => soundManager.playChime(440, 'triangle', 0.2)}
            className="btn-magnetic btn-crisis"
            style={{ padding: '16px 32px', fontSize: '1rem', whiteSpace: 'nowrap' }}
          >
            <PhoneCall size={18} />
            <span>Call +91 70588 30058</span>
          </a>
        </div>

        {/* 2-Column Split */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(12, 1fr)', 
            gap: '40px', 
            alignItems: 'center', 
            marginBottom: '70px' 
          }}
        >
          {/* Left Community Circle Photo */}
          <div style={{ gridColumn: 'span 12' }} className="lg:col-span-5">
            <div 
              className="warm-card"
              style={{
                padding: '12px',
                borderRadius: '32px',
                overflow: 'hidden',
                background: '#FFFFFF'
              }}
            >
              <img 
                src="/images/manobal-support.jpg" 
                alt="Project Manobal Mental Health & De-Addiction Circle in Nashik" 
                style={{
                  width: '100%',
                  height: '420px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  display: 'block'
                }}
              />
              <div style={{ padding: '16px 12px 6px 12px' }}>
                <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#182520', marginBottom: '2px' }}>
                  Community De-Stigmatization Circles
                </div>
                <div style={{ fontSize: '0.82rem', color: '#6F7D75' }}>
                  "बोलूया... आपण आहोत सोबत" — Providing empathetic peer counseling in Nashik, Maharashtra.
                </div>
              </div>
            </div>
          </div>

          {/* Right 4 Pillars Grid */}
          <div style={{ gridColumn: 'span 12' }} className="lg:col-span-7">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="warm-card"
                    style={{
                      padding: '28px 24px',
                      borderRadius: '24px',
                      background: '#FFFFFF'
                    }}
                  >
                    <div 
                      style={{
                        width: '50px',
                        height: '50px',
                        borderRadius: '16px',
                        background: pillar.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: pillar.color,
                        marginBottom: '16px'
                      }}
                    >
                      <Icon size={24} />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '1.15rem', color: '#182520', marginBottom: '8px' }}>
                      {pillar.title}
                    </div>
                    <div style={{ fontSize: '0.86rem', color: '#4A5851', lineHeight: 1.6 }}>
                      {pillar.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 4-Step Recovery Journey */}
        <div style={{ marginTop: '30px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 className="font-display" style={{ fontSize: '1.9rem', fontWeight: 800, color: '#182520' }}>
              The Pathway to Recovery & Well-being
            </h3>
            <p style={{ color: '#6F7D75', fontSize: '0.92rem' }}>
              Structured, compassionate steps to reclaim purposeful living
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '16px' }}>
            {recoverySteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveStep(idx);
                  }}
                  className="warm-card"
                  style={{
                    padding: '24px 20px',
                    borderRadius: '22px',
                    cursor: 'pointer',
                    background: isSelected ? '#FFFFFF' : '#F6F2EA',
                    border: isSelected ? '2px solid #C85A3E' : '1px solid #E6E0D5',
                    transition: 'all 0.25s'
                  }}
                >
                  <div className="font-mono" style={{ fontSize: '1.4rem', fontWeight: 800, color: isSelected ? '#C85A3E' : '#78867E', marginBottom: '6px' }}>
                    {step.step}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#182520', marginBottom: '6px' }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#4A5851', lineHeight: 1.5 }}>
                    {step.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
