import React, { useState } from 'react';
import { 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  CreditCard, 
  HelpCircle, 
  ShieldCheck,
  BadgePercent,
  ArrowRight
} from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export default function FeeCalculator({ onOpenAdmissionModal }) {
  const [selectedCourse, setSelectedCourse] = useState('anm');
  const [selectedStream, setSelectedStream] = useState('Science');
  const [includeKit, setIncludeKit] = useState(true);
  const [includeLibrary, setIncludeLibrary] = useState(true);
  const [includeHostel, setIncludeHostel] = useState(false);

  const courseData = {
    anm: {
      name: 'ANM (Auxiliary Nurse Midwife)',
      durationYears: 2,
      annualTuition: 34000,
      kitCost: 3500,
      annualLibrary: 1500,
      monthlyHostel: 3200
    },
    gnm: {
      name: 'GNM (General Nursing & Midwifery)',
      durationYears: 3,
      annualTuition: 44000,
      kitCost: 4500,
      annualLibrary: 1500,
      monthlyHostel: 3200
    }
  };

  const current = courseData[selectedCourse];

  const tuitionTotal = current.annualTuition * current.durationYears;
  const kitTotal = includeKit ? current.kitCost : 0;
  const libraryTotal = includeLibrary ? current.annualLibrary * current.durationYears : 0;
  const hostelTotal = includeHostel ? current.monthlyHostel * 10 * current.durationYears : 0;

  const grandTotal = tuitionTotal + kitTotal + libraryTotal + hostelTotal;
  const firstYearInvestment = current.annualTuition + kitTotal + (includeLibrary ? current.annualLibrary : 0) + (includeHostel ? current.monthlyHostel * 10 : 0);

  return (
    <section 
      id="calculator" 
      style={{
        position: 'relative',
        padding: '120px 0',
        background: '#FBF9F5',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <div className="pill-badge sage" style={{ marginBottom: '16px' }}>
            <Calculator size={14} />
            <span>Academic Session 2025 - 2026</span>
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
            Transparent Fee & <br />
            <span style={{ color: '#2E5E4C', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Eligibility Estimator</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#4A5851', lineHeight: 1.7 }}>
            Plan your nursing education with complete transparency. Government-subsidized rates with zero hidden capitation charges.
          </p>
        </div>

        {/* Calculator Grid */}
        <div 
          className="warm-card"
          style={{
            maxWidth: '1080px',
            margin: '0 auto',
            padding: '48px 40px',
            borderRadius: '36px',
            background: '#FFFFFF',
            border: '1px solid #E6E0D5',
            boxShadow: '0 20px 50px rgba(30, 58, 47, 0.08)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px' }}>
            
            {/* Left Controls */}
            <div style={{ gridColumn: 'span 12' }} className="lg:col-span-7">
              
              {/* Step 1: 12th Stream */}
              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#1E3A2F', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  1. Select Your 12th Standard (10+2) Background
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                  {['Science', 'Commerce', 'Arts'].map((stream) => {
                    const isSelected = selectedStream === stream;
                    return (
                      <button
                        key={stream}
                        onClick={() => {
                          soundManager.playClick();
                          setSelectedStream(stream);
                        }}
                        style={{
                          padding: '14px',
                          borderRadius: '16px',
                          border: isSelected ? '2px solid #2E5E4C' : '1px solid #E6DFD4',
                          background: isSelected ? '#EAF2ED' : '#FAF8F5',
                          color: '#182520',
                          fontWeight: 700,
                          fontSize: '0.95rem',
                          cursor: 'pointer',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'all 0.2s'
                        }}
                      >
                        <span>{stream}</span>
                        <span style={{ fontSize: '0.72rem', color: '#22865E', fontWeight: 700 }}>
                          ✓ 100% Eligible
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Course Selection */}
              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#1E3A2F', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  2. Choose Nursing Program
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px' }}>
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedCourse('anm');
                    }}
                    style={{
                      padding: '20px',
                      borderRadius: '20px',
                      border: selectedCourse === 'anm' ? '2px solid #2E5E4C' : '1px solid #E6DFD4',
                      background: selectedCourse === 'anm' ? '#EAF2ED' : '#FAF8F5',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#182520' }}>
                      ANM Nursing
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#4A5851', marginTop: '3px' }}>
                      2 Years Diploma • ₹34,000 / Year
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedCourse('gnm');
                    }}
                    style={{
                      padding: '20px',
                      borderRadius: '20px',
                      border: selectedCourse === 'gnm' ? '2px solid #2E5E4C' : '1px solid #E6DFD4',
                      background: selectedCourse === 'gnm' ? '#EAF2ED' : '#FAF8F5',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#182520' }}>
                      GNM Nursing
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#4A5851', marginTop: '3px' }}>
                      3 Years Comprehensive • ₹44,000 / Year
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 3: Optional Facilities */}
              <div>
                <label style={{ display: 'block', fontSize: '0.84rem', fontWeight: 700, color: '#1E3A2F', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '12px' }}>
                  3. Optional Academic & Hostelry Facilities
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      borderRadius: '16px',
                      background: '#FAF8F5',
                      border: '1px solid #E6DFD4',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <input 
                        type="checkbox" 
                        checked={includeKit} 
                        onChange={(e) => setIncludeKit(e.target.checked)}
                        style={{ width: '18px', height: '18px', accentColor: '#1E3A2F' }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#182520' }}>Clinical Practice Kit & Uniforms</div>
                        <div style={{ fontSize: '0.78rem', color: '#6F7D75' }}>Stethoscope, BP kit, medical scrubs & lab badge (One-time)</div>
                      </div>
                    </div>
                    <span style={{ fontWeight: 800, color: '#1E3A2F', fontSize: '0.92rem' }}>+₹{current.kitCost}</span>
                  </label>

                  <label 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      borderRadius: '16px',
                      background: '#FAF8F5',
                      border: '1px solid #E6DFD4',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <input 
                        type="checkbox" 
                        checked={includeLibrary} 
                        onChange={(e) => setIncludeLibrary(e.target.checked)}
                        style={{ width: '18px', height: '18px', accentColor: '#1E3A2F' }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#182520' }}>Medical Library & Digital Journals Access</div>
                        <div style={{ fontSize: '0.78rem', color: '#6F7D75' }}>Reference textbooks and curriculum resources ({current.durationYears} Years)</div>
                      </div>
                    </div>
                    <span style={{ fontWeight: 800, color: '#1E3A2F', fontSize: '0.92rem' }}>+₹{current.annualLibrary * current.durationYears}</span>
                  </label>

                  <label 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '14px 18px',
                      borderRadius: '16px',
                      background: '#FAF8F5',
                      border: '1px solid #E6DFD4',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <input 
                        type="checkbox" 
                        checked={includeHostel} 
                        onChange={(e) => setIncludeHostel(e.target.checked)}
                        style={{ width: '18px', height: '18px', accentColor: '#1E3A2F' }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#182520' }}>Hostel Lodging & Mess Option</div>
                        <div style={{ fontSize: '0.78rem', color: '#6F7D75' }}>Optional accommodation assistance near Nashik campus (Est. 10 mos/yr)</div>
                      </div>
                    </div>
                    <span style={{ fontWeight: 800, color: '#1E3A2F', fontSize: '0.92rem' }}>
                      +₹{(current.monthlyHostel * 10 * current.durationYears).toLocaleString('en-IN')}
                    </span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Summary Breakdown */}
            <div style={{ gridColumn: 'span 12' }} className="lg:col-span-5">
              <div 
                style={{
                  background: '#F8F5EE',
                  border: '1.5px solid #E6DFD4',
                  borderRadius: '28px',
                  padding: '32px',
                  boxShadow: '0 12px 30px rgba(30, 58, 47, 0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#22865E', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                  <ShieldCheck size={16} />
                  <span>100% Eligible: 12th ({selectedStream})</span>
                </div>

                <div className="font-display" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#182520', marginBottom: '4px' }}>
                  {current.name}
                </div>
                <div style={{ fontSize: '0.84rem', color: '#6F7D75', marginBottom: '22px' }}>
                  Swami Narayan Nursing Institute • Academic Year 2025-26
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #E6DFD4', borderBottom: '1px solid #E6DFD4', padding: '16px 0', marginBottom: '20px', fontSize: '0.9rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4A5851' }}>
                    <span>Tuition ({current.durationYears} Yrs @ ₹{current.annualTuition.toLocaleString('en-IN')}/yr):</span>
                    <span style={{ color: '#182520', fontWeight: 700 }}>₹{tuitionTotal.toLocaleString('en-IN')}</span>
                  </div>

                  {includeKit && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4A5851' }}>
                      <span>Clinical Aprons & Medical Kit:</span>
                      <span style={{ color: '#182520', fontWeight: 700 }}>₹{kitTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {includeLibrary && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4A5851' }}>
                      <span>Medical Library Resource:</span>
                      <span style={{ color: '#182520', fontWeight: 700 }}>₹{libraryTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  {includeHostel && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: '#4A5851' }}>
                      <span>Hostel & Mess ({current.durationYears} Sessions):</span>
                      <span style={{ color: '#182520', fontWeight: 700 }}>₹{hostelTotal.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                </div>

                {/* Grand Total */}
                <div style={{ marginBottom: '24px' }}>
                  <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', color: '#6F7D75', fontWeight: 700 }}>
                    Estimated Total Course Investment
                  </div>
                  <div className="font-display" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#1E3A2F' }}>
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </div>
                  <div style={{ fontSize: '0.84rem', color: '#22865E', fontWeight: 600, marginTop: '2px' }}>
                    1st Year Initial Due: ₹{firstYearInvestment.toLocaleString('en-IN')} (Easy Installments)
                  </div>
                </div>

                <button
                  onClick={() => {
                    soundManager.playChime(660);
                    onOpenAdmissionModal(selectedCourse);
                  }}
                  className="btn-magnetic btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '1rem' }}
                >
                  <Sparkles size={18} />
                  <span>Reserve Seat with This Breakdown</span>
                </button>

                <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.74rem', color: '#78867E' }}>
                  Registered Public Trust F 2405 MAH Nashik • Subsidized Govt. Rate
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
