import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  Calendar, 
  FileCheck2, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Compass,
  Target
} from 'lucide-react';
import { websiteData } from '../data/websiteData';
import { soundManager } from '../utils/soundEffects';

export default function AboutSection() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [showTrustDrawer, setShowTrustDrawer] = useState(false);

  return (
    <section 
      id="about" 
      style={{
        position: 'relative',
        padding: '110px 0',
        background: '#FBF9F5',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top Header Tag */}
        <div style={{ marginBottom: '14px' }}>
          <div className="pill-badge sage">
            <Award size={14} />
            <span>About Anusaya Shikshan Prasarak Mandal</span>
          </div>
        </div>

        {/* 2-Column Split matching the Reference Image */}
        <div className="two-col-grid" style={{ marginBottom: '80px' }}>
          
          {/* Left Narrative with Vision & Mission Columns */}
          <div>
            <h2 
              className="font-display" 
              style={{ 
                fontSize: 'clamp(2.2rem, 3.6vw, 3.2rem)', 
                fontWeight: 800, 
                lineHeight: 1.15,
                color: '#182520',
                marginBottom: '20px'
              }}
            >
              Over 36 Years of Transforming <br />
              <span style={{ color: '#2E5E4C', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Healthcare & Education</span>
            </h2>

            <p style={{ color: '#4A5851', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '24px' }}>
              <strong>Anusaya Shikshan Prasarak Mandal Nashik Sanchalit Manas Vyasanmukti Kendra</strong> is a registered public charitable trust (Reg. F 2405 MAH Nashik, sanctioned 17-10-1989). Over three decades, we have bridged the gap between affordable nursing education for rural youth and compassionate psychological rehabilitation for distressed families in Maharashtra.
            </p>

            {/* Vision and Mission Columns (from Reference Image) */}
            <div className="about-vision-grid">
              <div 
                className="warm-card"
                style={{ padding: '24px 20px', borderRadius: '20px', background: '#F8F5EE', border: '1px solid #E6E0D5' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E3A2F', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>
                  <Compass size={18} color="#2E5E4C" />
                  <span>Our Vision</span>
                </div>
                <div style={{ fontSize: '0.86rem', color: '#4A5851', lineHeight: 1.6 }}>
                  To build an empowered, educated, and addiction-free society where every young aspirant has access to accredited healthcare training.
                </div>
              </div>

              <div 
                className="warm-card"
                style={{ padding: '24px 20px', borderRadius: '20px', background: '#F8F5EE', border: '1px solid #E6E0D5' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E3A2F', fontWeight: 800, fontSize: '1.1rem', marginBottom: '8px' }}>
                  <Target size={18} color="#2E5E4C" />
                  <span>Our Mission</span>
                </div>
                <div style={{ fontSize: '0.86rem', color: '#4A5851', lineHeight: 1.6 }}>
                  Delivering premier nursing courses (ANM & GNM), holistic suicide prevention, and community health drives with strict public trust integrity.
                </div>
              </div>
            </div>

            {/* Action to Verify Trust Credentials */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <button
                onClick={() => {
                  soundManager.playClick();
                  setShowTrustDrawer(true);
                }}
                className="btn-magnetic btn-primary"
                style={{ padding: '14px 24px', fontSize: '0.9rem', maxWidth: '100%', whiteSpace: 'normal', textAlign: 'center' }}
              >
                <ShieldCheck size={17} />
                <span>Verify Trust Credentials (F 2405)</span>
              </button>
            </div>
          </div>

          {/* Right Side: Triptych of 3 Vertical Pill/Stadium Images (Responsive Layout) */}
          <div>
            <div className="about-triptych-grid">
              {/* Triptych Pill 1: Simulation Ward */}
              <div 
                className="about-triptych-pill"
                style={{
                  transform: 'translateY(-15px)'
                }}
              >
                <img 
                  src="/images/hero-students.jpg" 
                  alt="Clinical simulation ward training" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Triptych Pill 2: Patient Bedside Care */}
              <div 
                className="about-triptych-pill"
                style={{
                  transform: 'translateY(15px)'
                }}
              >
                <img 
                  src="/images/clinical-practice.jpg" 
                  alt="Compassionate patient bedside clinical care" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Triptych Pill 3: Campus Gardens & Building */}
              <div 
                className="about-triptych-pill"
                style={{
                  transform: 'translateY(-15px)'
                }}
              >
                <img 
                  src="/images/campus-building.jpg" 
                  alt="ASPM Educational Campus Building" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

        </div>

        {/* 36-Year Historical Evolution Bar */}
        <div style={{ marginTop: '20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="pill-badge sage" style={{ marginBottom: '10px' }}>
              <Calendar size={14} />
              <span>Institutional Evolution</span>
            </div>
            <h3 className="font-display" style={{ fontSize: '2.1rem', fontWeight: 800, color: '#182520' }}>
              The 36-Year Journey (1989 – 2025+)
            </h3>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
              gap: '16px'
            }}
          >
            {websiteData.milestones.map((milestone, idx) => {
              const isSelected = activeMilestone === idx;
              return (
                <div
                  key={milestone.year}
                  onClick={() => {
                    soundManager.playClick();
                    setActiveMilestone(idx);
                  }}
                  className="warm-card"
                  style={{
                    padding: '24px 20px',
                    borderRadius: '24px',
                    cursor: 'pointer',
                    background: isSelected ? '#FFFFFF' : '#F6F2EA',
                    border: isSelected ? '2px solid #2E5E4C' : '1px solid #E6E0D5',
                    boxShadow: isSelected ? '0 16px 35px rgba(30, 58, 47, 0.08)' : 'none',
                    transform: isSelected ? 'translateY(-6px)' : 'none',
                    transition: 'all 0.25s'
                  }}
                >
                  <div 
                    className="font-display" 
                    style={{ 
                      fontSize: '1.8rem', 
                      fontWeight: 800, 
                      color: isSelected ? '#1E3A2F' : '#78867E',
                      marginBottom: '6px'
                    }}
                  >
                    {milestone.year}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem', color: '#182520', marginBottom: '6px' }}>
                    {milestone.title}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#4A5851', lineHeight: 1.5 }}>
                    {milestone.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Trust Credentials Modal Drawer */}
      {showTrustDrawer && (
        <div 
          className="modal-backdrop-blur"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10050,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '14px',
            overflowY: 'auto'
          }}
          onClick={() => setShowTrustDrawer(false)}
        >
          <div 
            className="warm-card"
            style={{
              maxWidth: '580px',
              width: '100%',
              maxHeight: '92vh',
              overflowY: 'auto',
              padding: 'clamp(24px, 5vw, 36px) clamp(18px, 4vw, 32px)',
              borderRadius: '28px',
              position: 'relative',
              background: '#FFFFFF',
              border: '1px solid #E6E0D5',
              boxShadow: '0 30px 70px rgba(30, 58, 47, 0.2)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={24} color="#1E3A2F" />
                <h3 className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#182520' }}>
                  Public Trust Verification Records
                </h3>
              </div>
              <button 
                onClick={() => setShowTrustDrawer(false)}
                style={{
                  background: '#F4F0E8',
                  border: 'none',
                  color: '#182520',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                ✕
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.9rem' }}>
              <div style={{ background: '#F8F5EE', padding: '16px', borderRadius: '16px', border: '1px solid #E6E0D5' }}>
                <div style={{ color: '#6F7D75', fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700 }}>
                  Full Registered Entity Name
                </div>
                <div style={{ fontWeight: 700, color: '#182520', marginTop: '3px' }}>
                  Anusaya Shikshan Prasarak Mandal Nashik Sanchalit Manas Vyasanmukti Kendra
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                <div style={{ background: '#F8F5EE', padding: '14px', borderRadius: '14px', border: '1px solid #E6E0D5' }}>
                  <div style={{ color: '#6F7D75', fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700 }}>Registration No.</div>
                  <div style={{ fontWeight: 800, color: '#1E3A2F', marginTop: '2px', fontSize: '1.05rem' }}>
                    F 2405 MAH Nashik
                  </div>
                </div>

                <div style={{ background: '#F8F5EE', padding: '14px', borderRadius: '14px', border: '1px solid #E6E0D5' }}>
                  <div style={{ color: '#6F7D75', fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700 }}>Sanction Date</div>
                  <div style={{ fontWeight: 800, color: '#182520', marginTop: '2px', fontSize: '1.05rem' }}>
                    17-10-1989
                  </div>
                </div>
              </div>

              <div style={{ background: '#F8F5EE', padding: '16px', borderRadius: '16px', border: '1px solid #E6E0D5' }}>
                <div style={{ color: '#6F7D75', fontSize: '0.74rem', textTransform: 'uppercase', fontWeight: 700 }}>Head Office Address</div>
                <div style={{ fontWeight: 600, color: '#182520', marginTop: '3px' }}>
                  Building no 1, Stadium Complex, Above Ramesh Opticians, MG Road, Nashik 422001, Maharashtra, India
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowTrustDrawer(false)}
              className="btn-magnetic btn-primary"
              style={{ width: '100%', marginTop: '20px' }}
            >
              Close Record
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
