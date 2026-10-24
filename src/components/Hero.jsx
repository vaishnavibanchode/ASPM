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
        paddingTop: 'clamp(115px, 12vw, 150px)',
        paddingBottom: 'clamp(60px, 8vw, 90px)',
        background: 'radial-gradient(ellipse at 50% 25%, #FAF5EC 0%, #FBF9F5 75%)',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Main 2-Column Hero: Text Block on one side, Image on other side */}
        <div className="hero-main-grid">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div ref={leftColRef} className="hero-text-block">
            {/* Subtitle Pill Badge */}
            <div style={{ marginBottom: '18px' }}>
              <div className="pill-badge sage">
                <ShieldCheck size={14} />
                <span>Anusaya Shikshan Prasarak Mandal • Est. 1989</span>
              </div>
            </div>

            {/* Editorial Heading */}
            <h1 
              className="font-display hero-heading" 
              style={{ 
                fontSize: 'clamp(2.2rem, 4.4vw, 3.8rem)', 
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
              className="hero-description"
              style={{ 
                fontSize: 'clamp(0.96rem, 1.15vw, 1.08rem)', 
                color: '#4A5851', 
                marginBottom: '28px',
                lineHeight: 1.68,
                maxWidth: '560px'
              }}
            >
              Since 1989, <strong>Anusaya Shikshan Prasarak Mandal (Reg. F 2405 MAH Nashik)</strong> has dedicated over 36 continuous years to society. Home of the government-approved <strong>Swami Narayan Nursing Institute</strong> and the life-saving <strong>Project Manobal</strong> suicide prevention initiative.
            </p>

            {/* Pill Action Buttons with proper spacing */}
            <div className="hero-action-buttons">
              <button
                onClick={() => {
                  soundManager.playChime(660);
                  onOpenAdmissionModal();
                }}
                className="btn-magnetic btn-primary hero-btn-apply"
                style={{ padding: '14px 28px', fontSize: '0.92rem' }}
              >
                <span>Make Application</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="#manobal"
                onClick={() => soundManager.playClick()}
                className="btn-magnetic btn-crisis hero-btn-crisis"
                style={{ padding: '14px 24px', fontSize: '0.9rem' }}
              >
                <Heart size={15} />
                <span>Crisis Hotline</span>
              </a>
            </div>

            {/* Verification Checklist */}
            <div className="hero-checklist">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#22865E" />
                <span>Govt. Approved (ANM & GNM)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle size={16} color="#22865E" />
                <span>All 12th Streams Eligible</span>
              </div>
            </div>
          </div>

          {/* Right Column: Arched Doctor Portrait (Perfect Center Alignment) */}
          <div 
            ref={centerImgRef} 
            className="hero-image-block"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              margin: '0 auto'
            }}
          >
            <div 
              className="hero-image-wrapper"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '350px',
                margin: '0 auto'
              }}
            >
              {/* Arched Oval Stadium Frame */}
              <div className="hero-arched-frame" style={{ margin: '0 auto' }}>
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
                className="hero-image-badge"
                style={{
                  position: 'absolute',
                  bottom: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#FFFFFF',
                  borderRadius: '9999px',
                  padding: '8px 18px',
                  border: '1px solid #E6E0D5',
                  boxShadow: '0 8px 24px rgba(30, 58, 47, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap'
                }}
              >
                <Stethoscope size={16} color="#1E3A2F" />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#182520' }}>
                  Swami Narayan Nursing Institute
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row Below the Section: Arranged properly across 3 cards with compact, clean padding */}
        <div ref={rightStatsRef} className="hero-stats-row">
          {/* Card 1 */}
          <div className="hero-stat-card warm-card">
            <div className="font-display stat-number">
              36<span className="stat-symbol">+</span>
            </div>
            <div className="stat-label">
              Years of Service
            </div>
            <div className="stat-sub">
              Serving Maharashtra since 1989
            </div>
          </div>

          {/* Card 2 */}
          <div className="hero-stat-card warm-card">
            <div className="font-display stat-number">
              5,000<span className="stat-symbol" style={{ color: '#22865E' }}>+</span>
            </div>
            <div className="stat-label">
              Trained Graduates
            </div>
            <div className="stat-sub">
              In hospitals & health centers
            </div>
          </div>

          {/* Card 3 */}
          <div className="hero-stat-card warm-card">
            <div className="font-display stat-number">
              ₹34,000
            </div>
            <div className="stat-label">
              Annual ANM Fee
            </div>
            <div className="stat-sub">
              Govt-subsidized rate for 2025–26
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
