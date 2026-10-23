import React from 'react';
import { Sparkles, ShieldCheck, Heart, Award, GraduationCap } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    { text: "GOVERNMENT APPROVED NURSING INSTITUTE", icon: GraduationCap, color: "#1E3A2F" },
    { text: "REGISTERED PUBLIC TRUST F 2405 MAH NASHIK", icon: ShieldCheck, color: "#2E5E4C" },
    { text: "ADMISSIONS OPEN FOR 2025-26 ACADEMIC BATCH", icon: Sparkles, color: "#B3822A" },
    { text: "PROJECT MANOBAL CRISIS HOTLINE: +91 70588 30058", icon: Heart, color: "#C85A3E" },
    { text: "36 YEARS OF HEALTHCARE EXCELLENCE (EST. 1989)", icon: Award, color: "#1E3A2F" },
    { text: "12TH PASS (SCIENCE / COMMERCE / ARTS) ELIGIBLE", icon: GraduationCap, color: "#22865E" },
  ];

  const trackItems = [...items, ...items];

  return (
    <div 
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        background: '#F3EFE7',
        borderTop: '1px solid #E6DFD4',
        borderBottom: '1px solid #E6DFD4',
        padding: '16px 0',
        zIndex: 5
      }}
    >
      <div className="marquee-track">
        {trackItems.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div 
              key={idx} 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '0 32px',
                color: '#4A5851',
                fontSize: '0.84rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}
            >
              <Icon size={16} color={item.color} />
              <span>{item.text}</span>
              <span style={{ color: '#C8C0B2', fontSize: '1.2rem', marginLeft: '12px' }}>•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
