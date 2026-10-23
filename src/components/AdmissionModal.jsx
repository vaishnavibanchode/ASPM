import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sparkles, 
  GraduationCap, 
  CheckCircle2, 
  PhoneCall, 
  ShieldCheck,
  Send,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundManager } from '../utils/soundEffects';

export default function AdmissionModal({ isOpen, onClose, initialCourse = 'anm' }) {
  const [course, setCourse] = useState(initialCourse);
  const [stream, setStream] = useState('Science');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialCourse) {
      setCourse(initialCourse);
    }
  }, [initialCourse]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playChime(880, 'sine', 0.4, 0.08);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsSuccess(true);
  };

  const handleClose = () => {
    soundManager.playClick();
    setIsSuccess(false);
    onClose();
  };

  return (
    <div 
      className="modal-backdrop-blur"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 20000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        overflowY: 'auto'
      }}
      onClick={handleClose}
    >
      <div 
        className="warm-card"
        style={{
          maxWidth: '560px',
          width: '100%',
          background: '#FFFFFF',
          border: '1px solid #E6E0D5',
          borderRadius: '32px',
          padding: '38px',
          position: 'relative',
          boxShadow: '0 30px 80px rgba(30, 58, 47, 0.25)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            background: '#F4F0E8',
            border: 'none',
            color: '#182520',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s'
          }}
        >
          <X size={18} />
        </button>

        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div 
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: '#EAF2ED',
                border: '2px solid #22865E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                color: '#22865E'
              }}
            >
              <CheckCircle2 size={40} />
            </div>

            <h3 className="font-display" style={{ fontSize: '2rem', fontWeight: 800, color: '#182520', marginBottom: '8px' }}>
              Application Received!
            </h3>

            <p style={{ color: '#4A5851', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Thank you, <strong>{name || 'Student'}</strong>! Your inquiry for <strong>{course.toUpperCase()} Nursing (2025-26 Batch)</strong> has been logged with Swami Narayan Nursing Institute.
            </p>

            <div 
              style={{
                background: '#FAF8F5',
                border: '1px solid #E6E0D5',
                borderRadius: '18px',
                padding: '20px',
                marginBottom: '24px',
                textAlign: 'left',
                fontSize: '0.88rem',
                color: '#182520'
              }}
            >
              <div><strong>Next Steps:</strong></div>
              <ul style={{ paddingLeft: '20px', marginTop: '6px', color: '#4A5851', lineHeight: 1.6 }}>
                <li>Our admission counselor will contact you at <strong>{phone}</strong> within 24 hours.</li>
                <li>Please have your 12th standard marksheets ready for merit verification.</li>
                <li>Direct campus hotline: <strong>+91 70588 30058</strong>.</li>
              </ul>
            </div>

            <button
              onClick={handleClose}
              className="btn-magnetic btn-primary"
              style={{ width: '100%', padding: '15px' }}
            >
              Done & Return to Website
            </button>
          </div>
        ) : (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E3A2F', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '8px' }}>
              <GraduationCap size={16} />
              <span>Swami Narayan Nursing Institute • Admissions 2025-26</span>
            </div>

            <h3 className="font-display" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#182520', marginBottom: '6px' }}>
              Apply for Nursing Admission
            </h3>

            <p style={{ color: '#6F7D75', fontSize: '0.88rem', marginBottom: '24px' }}>
              Reserve your seat for ANM or GNM diploma. Subsidized government rate guaranteed.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Course Selection */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#182520', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Select Course *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  <button
                    type="button"
                    onClick={() => setCourse('anm')}
                    style={{
                      padding: '14px',
                      borderRadius: '14px',
                      border: course === 'anm' ? '2px solid #2E5E4C' : '1px solid #E6DFD4',
                      background: course === 'anm' ? '#EAF2ED' : '#FAF8F5',
                      color: '#182520',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      cursor: 'pointer'
                    }}
                  >
                    <div>ANM (2 Years)</div>
                    <div style={{ fontSize: '0.74rem', color: '#2E5E4C', fontWeight: 800 }}>₹34,000 / Year</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCourse('gnm')}
                    style={{
                      padding: '14px',
                      borderRadius: '14px',
                      border: course === 'gnm' ? '2px solid #2E5E4C' : '1px solid #E6DFD4',
                      background: course === 'gnm' ? '#EAF2ED' : '#FAF8F5',
                      color: '#182520',
                      fontWeight: 700,
                      fontSize: '0.92rem',
                      cursor: 'pointer'
                    }}
                  >
                    <div>GNM (3 Years)</div>
                    <div style={{ fontSize: '0.74rem', color: '#2E5E4C', fontWeight: 800 }}>₹44,000 / Year</div>
                  </button>
                </div>
              </div>

              {/* Stream Selection */}
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#182520', textTransform: 'uppercase', marginBottom: '8px' }}>
                  12th Passing Stream *
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {['Science', 'Commerce', 'Arts'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setStream(s)}
                      style={{
                        padding: '10px',
                        borderRadius: '10px',
                        border: stream === s ? '2px solid #2E5E4C' : '1px solid #E6DFD4',
                        background: stream === s ? '#EAF2ED' : '#FAF8F5',
                        color: '#182520',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer'
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Student Name */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#182520', marginBottom: '6px' }}>
                  Candidate Full Name *
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Priya Ashok Deshmukh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    background: '#FAF8F5',
                    border: '1px solid #E6DFD4',
                    color: '#182520',
                    fontSize: '0.92rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Phone & City */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#182520', marginBottom: '6px' }}>
                    Mobile Number *
                  </label>
                  <input 
                    type="tel" 
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: '#FAF8F5',
                      border: '1px solid #E6DFD4',
                      color: '#182520',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#182520', marginBottom: '6px' }}>
                    District / City in Maharashtra *
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Nashik / Pune"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      background: '#FAF8F5',
                      border: '1px solid #E6DFD4',
                      color: '#182520',
                      fontSize: '0.92rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              {/* Action Button */}
              <button
                type="submit"
                className="btn-magnetic btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '6px' }}
              >
                <Sparkles size={18} />
                <span>Submit Admission Inquiry for 2025-26</span>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '0.74rem', color: '#6F7D75' }}>
                <ShieldCheck size={14} color="#22865E" />
                <span>Government Recognized Trust F 2405 MAH Nashik</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
