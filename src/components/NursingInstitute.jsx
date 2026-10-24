import React, { useState } from 'react';
import { 
  GraduationCap, 
  CheckCircle2, 
  Stethoscope, 
  Clock, 
  BookOpen, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Building,
  HeartPulse,
  BadgeCheck,
  Activity
} from 'lucide-react';
import { websiteData } from '../data/websiteData';
import { soundManager } from '../utils/soundEffects';

export default function NursingInstitute({ onOpenAdmissionModal }) {
  const [activeCourseId, setActiveCourseId] = useState('anm');

  const activeCourse = websiteData.courses.find(c => c.id === activeCourseId) || websiteData.courses[0];

  return (
    <section 
      id="nursing" 
      style={{
        position: 'relative',
        padding: '120px 0',
        background: '#1E3A2F', // Contrast deep botanical forest spruce from reference image
        color: '#FFFFFF',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Centered Header */}
        <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 60px auto' }}>
          <div 
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.78rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: '#A7C9B8',
              marginBottom: '16px'
            }}
          >
            <GraduationCap size={15} />
            <span>Swami Narayan Nursing Institute • Established 2005</span>
          </div>

          <h2 
            className="font-display section-heading" 
            style={{ 
              fontSize: 'clamp(2.2rem, 3.8vw, 3.2rem)', 
              fontWeight: 800, 
              lineHeight: 1.15,
              color: '#FFFFFF',
              marginBottom: '18px',
              letterSpacing: '-0.025em'
            }}
          >
            We Provide The Best <br />
            <span style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', color: '#D2E3D8' }}>Nursing Education & Care</span>
          </h2>

          <p style={{ fontSize: '1.05rem', color: '#B6C8BF', lineHeight: 1.7 }}>
            Government-approved diplomas under Anusaya Shikshan Prasarak Mandal with subsidized fee structures, hospital ward internships, and eligibility for all 12th streams.
          </p>
        </div>

        {/* 3 Floating White Stadium Cards (Matching Reference Image "Our Services") */}
        <div className="services-three-grid" style={{ marginBottom: '70px' }}>
          {/* Card 1: ANM Nursing */}
          <div 
            style={{
              background: '#FFFFFF',
              color: '#182520',
              borderRadius: '40px',
              padding: '40px 32px',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}
          >
            {/* Circular Stadium Icon */}
            <div 
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: '#EAF2ED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1E3A2F',
                marginBottom: '20px'
              }}
            >
              <Stethoscope size={34} />
            </div>

            <div style={{ fontSize: '0.8rem', color: '#6F7D75', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              2 Years Diploma • Govt. Approved
            </div>

            <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#182520', margin: '8px 0 12px 0' }}>
              ANM Nursing
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#4A5851', lineHeight: 1.6, marginBottom: '20px' }}>
              Auxiliary Nurse Midwife. Foundational maternal & infant care, community primary health center (PHC) rotations, and emergency response.
            </p>

            <div 
              style={{
                background: '#F6F2EA',
                borderRadius: '16px',
                padding: '12px 20px',
                width: '100%',
                marginBottom: '24px'
              }}
            >
              <div style={{ fontSize: '0.74rem', color: '#6F7D75', textTransform: 'uppercase', fontWeight: 700 }}>
                Annual Fee (2025-26 Batch)
              </div>
              <div className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1E3A2F', marginTop: '2px' }}>
                ₹34,000 <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#4A5851' }}>/ Year</span>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playChime(660);
                onOpenAdmissionModal('anm');
              }}
              className="btn-magnetic btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '0.9rem' }}
            >
              <span>Learn More & Apply</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Card 2: GNM Nursing */}
          <div 
            style={{
              background: '#FFFFFF',
              color: '#182520',
              borderRadius: '40px',
              padding: '40px 32px',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}
          >
            {/* Circular Stadium Icon */}
            <div 
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: '#EAF2ED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1E3A2F',
                marginBottom: '20px'
              }}
            >
              <Activity size={34} />
            </div>

            <div style={{ fontSize: '0.8rem', color: '#6F7D75', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              3 Years Comprehensive • Govt. Approved
            </div>

            <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#182520', margin: '8px 0 12px 0' }}>
              GNM Nursing
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#4A5851', lineHeight: 1.6, marginBottom: '20px' }}>
              General Nursing & Midwifery. Clinical hospital training in ICUs, emergency trauma, operation theatres, pharmacology, and psychiatric nursing.
            </p>

            <div 
              style={{
                background: '#F6F2EA',
                borderRadius: '16px',
                padding: '12px 20px',
                width: '100%',
                marginBottom: '24px'
              }}
            >
              <div style={{ fontSize: '0.74rem', color: '#6F7D75', textTransform: 'uppercase', fontWeight: 700 }}>
                Annual Fee (2025-26 Batch)
              </div>
              <div className="font-display" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#1E3A2F', marginTop: '2px' }}>
                ₹44,000 <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#4A5851' }}>/ Year</span>
              </div>
            </div>

            <button
              onClick={() => {
                soundManager.playChime(660);
                onOpenAdmissionModal('gnm');
              }}
              className="btn-magnetic btn-primary"
              style={{ width: '100%', padding: '14px', fontSize: '0.9rem' }}
            >
              <span>Learn More & Apply</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Card 3: Project Manobal (De-Addiction & Suicide Prevention) */}
          <div 
            style={{
              background: '#FFFFFF',
              color: '#182520',
              borderRadius: '40px',
              padding: '40px 32px',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'transform 0.3s ease'
            }}
          >
            {/* Circular Stadium Icon in Terracotta */}
            <div 
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: '#FDF1ED',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#C85A3E',
                marginBottom: '20px'
              }}
            >
              <HeartPulse size={34} />
            </div>

            <div style={{ fontSize: '0.8rem', color: '#C85A3E', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em' }}>
              Manas Vyasanmukti Kendra
            </div>

            <h3 className="font-display" style={{ fontSize: '1.6rem', fontWeight: 800, color: '#182520', margin: '8px 0 12px 0' }}>
              Project Manobal
            </h3>

            <p style={{ fontSize: '0.88rem', color: '#4A5851', lineHeight: 1.6, marginBottom: '20px' }}>
              A targeted mission for youth and migrant laborers: suicide prevention, psychological distress counseling, and drug de-addiction rehabilitation.
            </p>

            <div 
              style={{
                background: '#FDF1ED',
                borderRadius: '16px',
                padding: '12px 20px',
                width: '100%',
                marginBottom: '24px'
              }}
            >
              <div style={{ fontSize: '0.74rem', color: '#C85A3E', textTransform: 'uppercase', fontWeight: 700 }}>
                24/7 Confidential Lifeline
              </div>
              <div className="font-display" style={{ fontSize: '1.3rem', fontWeight: 800, color: '#C85A3E', marginTop: '2px' }}>
                +91 70588 30058
              </div>
            </div>

            <a
              href="tel:+917058830058"
              onClick={() => soundManager.playChime(440, 'triangle', 0.2)}
              className="btn-magnetic btn-crisis"
              style={{ width: '100%', padding: '14px', fontSize: '0.9rem' }}
            >
              <span>Connect to Helpline</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* 12th Stream Eligibility Banner */}
        <div className="nursing-eligibility-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <BadgeCheck size={22} color="#A7C9B8" style={{ flexShrink: 0 }} />
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFFFFF' }}>
                12th Standard Eligibility for Academic Year 2025-26
              </div>
              <div style={{ fontSize: '0.8rem', color: '#B6C8BF' }}>
                Candidates from Science, Commerce, and Arts streams are all eligible for admission
              </div>
            </div>
          </div>

          <div className="nursing-stream-pills">
            {['Science', 'Commerce', 'Arts'].map((stream) => (
              <span key={stream} className="nursing-stream-pill">
                ✓ {stream}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
