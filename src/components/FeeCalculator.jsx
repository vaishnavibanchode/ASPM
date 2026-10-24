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
        padding: 'clamp(60px, 8vw, 110px) 0',
        background: '#FBF9F5',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto' }}>
          <div className="pill-badge sage" style={{ marginBottom: '14px' }}>
            <Calculator size={14} />
            <span>Academic Session 2025 - 2026</span>
          </div>
          <h2 
            className="font-display" 
            style={{ 
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', 
              fontWeight: 800, 
              lineHeight: 1.15,
              color: '#182520',
              marginBottom: '16px'
            }}
          >
            Transparent Fee & <br />
            <span style={{ color: '#2E5E4C', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Eligibility Estimator</span>
          </h2>
          <p style={{ fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)', color: '#4A5851', lineHeight: 1.68 }}>
            Plan your nursing education with complete transparency. Government-subsidized rates with zero hidden capitation charges.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="warm-card fee-calculator-card">
          <div className="fee-calculator-grid">
            
            {/* Left Controls */}
            <div>
              
              {/* Step 1: 12th Stream */}
              <div style={{ marginBottom: '26px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#1E3A2F', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  1. Select Your 12th Standard (10+2) Background
                </label>
                <div className="fee-stream-grid">
                  {['Science', 'Commerce', 'Arts'].map((stream) => {
                    const isSelected = selectedStream === stream;
                    return (
                      <button
                        key={stream}
                        onClick={() => {
                          soundManager.playClick();
                          setSelectedStream(stream);
                        }}
                        className={`fee-stream-btn ${isSelected ? 'selected' : ''}`}
                      >
                        <span className="fee-stream-name">{stream}</span>
                        <span className="fee-stream-badge">
                          ✓ 100% Eligible
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Course Selection */}
              <div style={{ marginBottom: '26px' }}>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#1E3A2F', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  2. Choose Nursing Program
                </label>
                <div className="fee-course-grid">
                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedCourse('anm');
                    }}
                    className={`fee-course-btn ${selectedCourse === 'anm' ? 'selected' : ''}`}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 800, fontSize: '1.12rem', color: '#182520' }}>
                        ANM Nursing
                      </span>
                      <span className="fee-course-pill">₹34,000 / Yr</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#4A5851' }}>
                      2 Years Diploma • Primary Healthcare & Midwifery
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      soundManager.playClick();
                      setSelectedCourse('gnm');
                    }}
                    className={`fee-course-btn ${selectedCourse === 'gnm' ? 'selected' : ''}`}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 800, fontSize: '1.12rem', color: '#182520' }}>
                        GNM Nursing
                      </span>
                      <span className="fee-course-pill">₹44,000 / Yr</span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#4A5851' }}>
                      3 Years Comprehensive • Hospital Clinical & Trauma Care
                    </div>
                  </button>
                </div>
              </div>

              {/* Step 3: Optional Facilities */}
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#1E3A2F', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '10px' }}>
                  3. Optional Academic & Hostelry Facilities
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label className="fee-facility-item">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <input 
                        type="checkbox" 
                        checked={includeKit} 
                        onChange={(e) => setIncludeKit(e.target.checked)}
                        style={{ width: '18px', height: '18px', accentColor: '#1E3A2F', marginTop: '2px', flexShrink: 0 }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#182520' }}>Clinical Practice Kit & Uniforms</div>
                        <div style={{ fontSize: '0.78rem', color: '#6F7D75' }}>Stethoscope, BP kit, medical scrubs & lab badge (One-time)</div>
                      </div>
                    </div>
                    <span className="fee-facility-price">+₹{current.kitCost.toLocaleString('en-IN')}</span>
                  </label>

                  <label className="fee-facility-item">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <input 
                        type="checkbox" 
                        checked={includeLibrary} 
                        onChange={(e) => setIncludeLibrary(e.target.checked)}
                        style={{ width: '18px', height: '18px', accentColor: '#1E3A2F', marginTop: '2px', flexShrink: 0 }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#182520' }}>Medical Library & Digital Journals Access</div>
                        <div style={{ fontSize: '0.78rem', color: '#6F7D75' }}>Reference textbooks and curriculum resources ({current.durationYears} Years)</div>
                      </div>
                    </div>
                    <span className="fee-facility-price">+₹{(current.annualLibrary * current.durationYears).toLocaleString('en-IN')}</span>
                  </label>

                  <label className="fee-facility-item">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <input 
                        type="checkbox" 
                        checked={includeHostel} 
                        onChange={(e) => setIncludeHostel(e.target.checked)}
                        style={{ width: '18px', height: '18px', accentColor: '#1E3A2F', marginTop: '2px', flexShrink: 0 }}
                      />
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#182520' }}>Hostel Lodging & Mess Option</div>
                        <div style={{ fontSize: '0.78rem', color: '#6F7D75' }}>Optional accommodation assistance near Nashik campus (Est. 10 mos/yr)</div>
                      </div>
                    </div>
                    <span className="fee-facility-price">
                      +₹{(current.monthlyHostel * 10 * current.durationYears).toLocaleString('en-IN')}
                    </span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Summary Breakdown */}
            <div>
              <div className="fee-summary-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#22865E', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
                  <ShieldCheck size={16} />
                  <span>100% Eligible: 12th ({selectedStream})</span>
                </div>

                <div className="font-display" style={{ fontSize: '1.45rem', fontWeight: 800, color: '#182520', marginBottom: '4px' }}>
                  {current.name}
                </div>
                <div style={{ fontSize: '0.82rem', color: '#6F7D75', marginBottom: '18px' }}>
                  Swami Narayan Nursing Institute • Academic Year 2025-26
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid #E6DFD4', borderBottom: '1px solid #E6DFD4', padding: '16px 0', marginBottom: '18px', fontSize: '0.88rem' }}>
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
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.76rem', textTransform: 'uppercase', color: '#6F7D75', fontWeight: 700 }}>
                    Estimated Total Course Investment
                  </div>
                  <div className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 800, color: '#1E3A2F', lineHeight: 1.1, marginTop: '2px' }}>
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#22865E', fontWeight: 600, marginTop: '4px' }}>
                    1st Year Initial Due: ₹{firstYearInvestment.toLocaleString('en-IN')} (Easy Installments)
                  </div>
                </div>

                <button
                  onClick={() => {
                    soundManager.playChime(660);
                    onOpenAdmissionModal(selectedCourse);
                  }}
                  className="btn-magnetic btn-primary"
                  style={{ width: '100%', padding: '15px', fontSize: '0.94rem', whiteSpace: 'normal', lineHeight: 1.3 }}
                >
                  <Sparkles size={16} />
                  <span>Reserve Seat with This Breakdown</span>
                </button>

                <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.72rem', color: '#78867E' }}>
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
