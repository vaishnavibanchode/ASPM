import React from 'react';
import { 
  Award, 
  GraduationCap, 
  BookOpen, 
  HeartPulse, 
  ShieldCheck, 
  Activity, 
  Users, 
  HeartHandshake,
  Sparkles
} from 'lucide-react';
import { websiteData } from '../data/websiteData';
import { soundManager } from '../utils/soundEffects';

export default function KeyFeatures() {
  const iconMap = {
    Award: Award,
    GraduationCap: GraduationCap,
    BookOpen: BookOpen,
    HeartPulse: HeartPulse,
    ShieldCheck: ShieldCheck,
    Activity: Activity,
    Users: Users,
    HeartHandshake: HeartHandshake
  };

  return (
    <section 
      id="features" 
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
            <Sparkles size={14} />
            <span>Core Institutional Verticals</span>
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
            Our Key Features & <br />
            <span style={{ color: '#2E5E4C', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Community Initiatives</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#4A5851', lineHeight: 1.7 }}>
            Operating under Registered Public Trust F 2405 MAH Nashik across healthcare education, nutrition, youth leadership, and mental wellness.
          </p>
        </div>

        {/* 8 Features Grid in Warm Cards */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}
        >
          {websiteData.keyFeatures.map((feat, idx) => {
            const IconComponent = iconMap[feat.icon] || Award;
            return (
              <div
                key={idx}
                className="warm-card"
                onMouseEnter={() => soundManager.playChime(500 + idx * 30, 'sine', 0.15, 0.02)}
                style={{
                  padding: '32px 26px',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Number Watermark in Soft Sand */}
                <div 
                  className="font-mono"
                  style={{
                    position: 'absolute',
                    top: '18px',
                    right: '22px',
                    fontSize: '1.6rem',
                    fontWeight: 800,
                    color: '#E6DFD4',
                    pointerEvents: 'none'
                  }}
                >
                  0{idx + 1}
                </div>

                {/* Circular Icon in Pastel Sage */}
                <div 
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '16px',
                    background: '#EAF2ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1E3A2F',
                    marginBottom: '20px'
                  }}
                >
                  <IconComponent size={26} />
                </div>

                <div style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: '#6F7D75', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '6px' }}>
                  {feat.subtitle}
                </div>

                <h3 className="font-display" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#182520', marginBottom: '10px' }}>
                  {feat.title}
                </h3>

                <p style={{ fontSize: '0.86rem', color: '#4A5851', lineHeight: 1.6 }}>
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
