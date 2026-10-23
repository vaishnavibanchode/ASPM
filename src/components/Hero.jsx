import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  PhoneCall, 
  GraduationCap, 
  CheckCircle,
  Stethoscope,
  Heart
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export default function Hero({ onOpenAdmissionModal }) {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const centerImgRef = useRef(null);
  const rightStatsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out', clearProps: 'all' } });

      tl.from(leftColRef.current.children, {
        opacity: 0,
        y: 15,
        duration: 0.45,
        stagger: 0.06
      })
      .from(centerImgRef.current, {
        opacity: 0,
        scale: 0.96,
        duration: 0.5,
        ease: 'power1.out'
      }, '-=0.3')
      .from(rightStatsRef.current.children, {
        opacity: 0,
        y: 12,
        duration: 0.4,
        stagger: 0.06
      }, '-=0.3');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      style={{
        position: 'relative',
        paddingTop: '150px',
        paddingBottom: '90px',
        background: 'radial-gradient(ellipse at 50% 25%, #FAF5EC 0%, #FBF9F5 75%)',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Top 3-Part Hero Grid */}
        <div className="hero-layout-grid">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div ref={leftColRef}>
            {/* Subtitle Pill Badge */}
            <div style={{ marginBottom: '18px' }}>
              <div className="pill-badge sage">
                <ShieldCheck size={14} />
                <span>Anusaya Shikshan Prasarak Mandal • Est. 1989</span>
              </div>
            </div>

            {/* Editorial Heading */}
            <h1 
              className="font-display" 
              style={{ 
                fontSize: 'clamp(2.3rem, 3.8vw, 3.6rem)', 
                fontWeight: 800, 
                lineHeight: 1.12,
                color: '#182520',
                marginBottom: '18px',
                letterSpacing: '-0.03em'
              }}
            >
              Destination For <br />
              <span style={{ color: '#2E5E4C', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Relief, Healing</span> <br />
              & Nursing Wisdom.
            </h1>

            {/* Description */}
            <p 
              style={{ 
                fontSize: 'clamp(0.96rem, 1.1vw, 1.08rem)', 
                color: '#4A5851', 
                marginBottom: '28px',
                lineHeight: 1.68,
                maxWidth: '520px'
              }}
            >
              Since 1989, <strong>Anusaya Shikshan Prasarak Mandal (Reg. F 2405 MAH Nashik)</strong> has dedicated over 36 continuous years to society. Home of the government-approved <strong>Swami Narayan Nursing Institute</strong> and the life-saving <strong>Project Manobal</strong> suicide prevention initiative.
            </p>

            {/* Pill Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '28px' }}>
              <button
                onClick={() => {
                  soundManager.playChime(660);
                  onOpenAdmissionModal();
                }}
                className="btn-magnetic btn-primary"
                style={{ padding: '15px 30px', fontSize: '0.94rem' }}
              >
                <span>Make Application</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#manobal"
                onClick={() => soundManager.playClick()}
                className="btn-magnetic btn-crisis"
                style={{ padding: '15px 24px', fontSize: '0.92rem' }}
              >
                <Heart size={15} />
                <span>Crisis Hotline</span>
              </a>
            </div>

            {/* Verification Checklist */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.84rem', color: '#6F7D75' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={15} color="#22865E" />
                <span>Govt. Approved (ANM & GNM)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle size={15} color="#22865E" />
                <span>All 12th Streams Eligible</span>
              </div>
            </div>
          </div>

          {/* Center Column: Arched Doctor Portrait */}
          <div ref={centerImgRef} style={{ display: 'flex', justifyContent: 'center' }}>
            <div 
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '340px'
              }}
            >
              {/* Arched Oval Stadium Frame */}
              <div 
                style={{
                  width: '100%',
                  height: '430px',
                  borderRadius: '180px 180px 36px 36px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px -12px rgba(30, 58, 47, 0.16)',
                  border: '5px solid #FFFFFF',
                  background: '#EAF2ED',
                  position: 'relative'
                }}
              >
                <img 
                  src="/images/nurse-portrait.jpg" 
                  alt="Senior Nurse Educator at Swami Narayan Nursing Institute" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(30, 58, 47, 0.35) 0%, transparent 40%)',
                    pointerEvents: 'none'
                  }}
                />
              </div>

              {/* Floating Bottom Badge */}
              <div 
                style={{
                  position: 'absolute',
                  bottom: '-12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#FFFFFF',
                  borderRadius: '9999px',
                  padding: '7px 18px',
                  border: '1px solid #E6E0D5',
                  boxShadow: '0 8px 20px rgba(30, 58, 47, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap'
                }}
              >
                <Stethoscope size={15} color="#1E3A2F" />
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#182520' }}>
                  Swami Narayan Nursing Institute
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Spacious Stat Cards */}
          <div ref={rightStatsRef} className="hero-stats-panel">
            {/* Card 1 */}
            <div 
              className="warm-card"
              style={{
                padding: '34px 38px',
                borderRadius: '30px',
                textAlign: 'left',
                background: '#FFFFFF',
                border: '1.5px solid #ECE6DB',
                boxShadow: '0 10px 32px -8px rgba(30, 58, 47, 0.08), 0 2px 8px rgba(30, 58, 47, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="font-display" style={{ fontSize: '2.8rem', fontWeight: 800, color: '#1E3A2F', lineHeight: 1, marginBottom: '12px' }}>
                36<span style={{ fontSize: '2rem', color: '#2E5E4C' }}>+</span>
              </div>
              <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2E5E4C', fontWeight: 800, marginBottom: '8px' }}>
                Years of Service
              </div>
              <div style={{ fontSize: '0.92rem', color: '#4A5851', lineHeight: 1.5 }}>
                Serving Maharashtra since 1989
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className="warm-card"
              style={{
                padding: '34px 38px',
                borderRadius: '30px',
                textAlign: 'left',
                background: '#FFFFFF',
                border: '1.5px solid #ECE6DB',
                boxShadow: '0 10px 32px -8px rgba(30, 58, 47, 0.08), 0 2px 8px rgba(30, 58, 47, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="font-display" style={{ fontSize: '2.8rem', fontWeight: 800, color: '#1E3A2F', lineHeight: 1, marginBottom: '12px' }}>
                5,000<span style={{ fontSize: '2rem', color: '#22865E' }}>+</span>
              </div>
              <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2E5E4C', fontWeight: 800, marginBottom: '8px' }}>
                Trained Graduates
              </div>
              <div style={{ fontSize: '0.92rem', color: '#4A5851', lineHeight: 1.5 }}>
                In hospitals & health centers
              </div>
            </div>

            {/* Card 3 */}
            <div 
              className="warm-card"
              style={{
                padding: '34px 38px',
                borderRadius: '30px',
                textAlign: 'left',
                background: '#FFFFFF',
                border: '1.5px solid #ECE6DB',
                boxShadow: '0 10px 32px -8px rgba(30, 58, 47, 0.08), 0 2px 8px rgba(30, 58, 47, 0.03)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="font-display" style={{ fontSize: '2.6rem', fontWeight: 800, color: '#1E3A2F', lineHeight: 1, marginBottom: '12px' }}>
                ₹34,000
              </div>
              <div style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#2E5E4C', fontWeight: 800, marginBottom: '8px' }}>
                Annual ANM Fee
              </div>
              <div style={{ fontSize: '0.92rem', color: '#4A5851', lineHeight: 1.5 }}>
                Govt-subsidized rate for 2025–26
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
