import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Building,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { websiteData } from '../data/websiteData';
import { soundManager } from '../utils/soundEffects';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    soundManager.playChime(750, 'triangle', 0.3);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', subject: '', message: '' });
    }, 5000);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    soundManager.playChime(660);
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      style={{
        position: 'relative',
        padding: '120px 0 90px 0',
        background: '#FBF9F5',
        overflow: 'hidden'
      }}
    >
      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px auto' }}>
          <div className="pill-badge sage" style={{ marginBottom: '16px' }}>
            <PhoneCall size={14} />
            <span>Connect & Campus Location</span>
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
            Get in Touch With <br />
            <span style={{ color: '#2E5E4C', fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>ASPM India Today</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#4A5851', lineHeight: 1.7 }}>
            Our admissions desk and Project Manobal crisis counselors are ready to support your queries.
          </p>
        </div>

        {/* 2-Column Responsive Split */}
        <div className="contact-grid-layout">
          
          {/* Left Contact Cards */}
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              
              {/* Telephone Card */}
              <div 
                className="warm-card"
                style={{
                  padding: '24px',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px'
                }}
              >
                <div 
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: '#EAF2ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1E3A2F',
                    flexShrink: 0
                  }}
                >
                  <PhoneCall size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#6F7D75', fontWeight: 700 }}>
                    Admissions & 24/7 Helpline
                  </div>
                  <a 
                    href="tel:+917058830058"
                    style={{ fontSize: '1.25rem', fontWeight: 800, color: '#182520', textDecoration: 'none', display: 'block', marginTop: '2px' }}
                  >
                    +91 70588 30058
                  </a>
                  <div style={{ fontSize: '0.78rem', color: '#22865E', fontWeight: 600, marginTop: '2px' }}>
                    Direct connection to counsel team
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div 
                className="warm-card"
                style={{
                  padding: '24px',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px'
                }}
              >
                <div 
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: '#FAF4E6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#B3822A',
                    flexShrink: 0
                  }}
                >
                  <Mail size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#6F7D75', fontWeight: 700 }}>
                    Official Trust Email
                  </div>
                  <a 
                    href="mailto:mvknashik@gmail.com"
                    style={{ fontSize: '1.2rem', fontWeight: 800, color: '#182520', textDecoration: 'none', display: 'block', marginTop: '2px' }}
                  >
                    mvknashik@gmail.com
                  </a>
                  <div style={{ fontSize: '0.78rem', color: '#6F7D75', marginTop: '2px' }}>
                    Quick response within 24 hours
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div 
                className="warm-card"
                style={{
                  padding: '24px',
                  borderRadius: '24px',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}
              >
                <div 
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '16px',
                    background: '#FDF1ED',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#C85A3E',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}
                >
                  <MapPin size={24} />
                </div>
                <div>
                  <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#6F7D75', fontWeight: 700 }}>
                    Campus & Administrative Office
                  </div>
                  <div style={{ fontSize: '0.98rem', fontWeight: 700, color: '#182520', marginTop: '4px', lineHeight: 1.5 }}>
                    Building no 1, Stadium Complex, Above Ramesh Opticians, MG Road, Nashik 422001, Maharashtra, India
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#1E3A2F', fontWeight: 600, marginTop: '6px' }}>
                    Near Central Bus Station (CBS) & MG Road Market
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div 
                style={{
                  padding: '16px 20px',
                  borderRadius: '16px',
                  background: '#F3EFE8',
                  border: '1px solid #E6E0D5',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}
              >
                <Clock size={18} color="#1E3A2F" />
                <div style={{ fontSize: '0.84rem', color: '#4A5851' }}>
                  <strong>Office Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM <br />
                  <span style={{ color: '#C85A3E', fontWeight: 600 }}>24/7 Crisis Hotline is always live</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Message Form */}
          <div>
            <div 
              className="warm-card"
              style={{
                padding: 'clamp(24px, 5vw, 44px) clamp(18px, 4vw, 38px)',
                borderRadius: '30px',
                background: '#FFFFFF',
                border: '1px solid #E6DFD4',
                boxShadow: '0 16px 40px rgba(30, 58, 47, 0.06)'
              }}
            >
              <h3 className="font-display" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#182520', marginBottom: '8px' }}>
                Send Us an Inquiry Message
              </h3>
              <p style={{ color: '#6F7D75', fontSize: '0.92rem', marginBottom: '28px' }}>
                Please fill in your details and our admission officer will get in touch with you.
              </p>

              {submitted ? (
                <div 
                  style={{
                    padding: '36px',
                    borderRadius: '24px',
                    background: '#EAF2ED',
                    border: '1px solid #C8DED1',
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle2 size={44} color="#22865E" style={{ margin: '0 auto 12px auto' }} />
                  <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#182520' }}>
                    Message Sent Successfully!
                  </div>
                  <p style={{ color: '#4A5851', fontSize: '0.9rem', marginTop: '6px' }}>
                    Thank you for contacting Anusaya Shikshan Prasarak Mandal. We will call you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#182520', marginBottom: '6px' }}>
                        Your Full Name *
                      </label>
                      <input 
                        type="text" 
                        required
                        placeholder="e.g. Rahul Patil"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: '12px',
                          background: '#FAF8F5',
                          border: '1px solid #E6DFD4',
                          color: '#182520',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#182520', marginBottom: '6px' }}>
                        Contact Phone Number *
                      </label>
                      <input 
                        type="tel" 
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '13px 16px',
                          borderRadius: '12px',
                          background: '#FAF8F5',
                          border: '1px solid #E6DFD4',
                          color: '#182520',
                          fontSize: '0.95rem',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#182520', marginBottom: '6px' }}>
                      Subject / Topic of Interest *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: '#FAF8F5',
                        border: '1px solid #E6DFD4',
                        color: '#182520',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    >
                      <option value="">Select an Inquiry Option...</option>
                      <option value="ANM Nursing Admission">ANM Nursing Admission (2025-26)</option>
                      <option value="GNM Nursing Admission">GNM Nursing Admission (2025-26)</option>
                      <option value="Project Manobal Crisis / Counseling">Project Manobal Crisis / Counseling Help</option>
                      <option value="Substance De-Addiction Support">Substance De-Addiction Rehabilitation</option>
                      <option value="General Trust Inquiry">General Trust & Partnership Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#182520', marginBottom: '6px' }}>
                      Your Detailed Message *
                    </label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Please enter your questions or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '13px 16px',
                        borderRadius: '12px',
                        background: '#FAF8F5',
                        border: '1px solid #E6DFD4',
                        color: '#182520',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-magnetic btn-primary"
                    style={{ padding: '16px', fontSize: '1rem', width: '100%' }}
                  >
                    <Send size={18} />
                    <span>Send Inquiry to ASPM</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Newsletter Subscription Warm Card */}
        <div 
          className="warm-card"
          style={{
            maxWidth: '960px',
            margin: '0 auto',
            padding: '40px',
            borderRadius: '28px',
            background: '#F4F0E8',
            border: '1px solid #E6DFD4',
            textAlign: 'center'
          }}
        >
          <h3 className="font-display" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#182520', marginBottom: '8px' }}>
            Stay Updated With ASPM India
          </h3>
          <p style={{ color: '#4A5851', fontSize: '0.95rem', maxWidth: '600px', margin: '0 auto 24px auto' }}>
            Subscribe for announcements on upcoming nursing admissions, clinical batch schedules, and free community health camps.
          </p>

          {newsletterSubscribed ? (
            <div style={{ color: '#22865E', fontWeight: 700, fontSize: '1.05rem' }}>
              ✓ Thank you for subscribing to ASPM News updates!
            </div>
          ) : (
            <form 
              onSubmit={handleNewsletter}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                maxWidth: '540px',
                margin: '0 auto',
                justifyContent: 'center'
              }}
            >
              <input 
                type="email" 
                required
                placeholder="Enter your email address..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                style={{
                  flex: '1 1 280px',
                  padding: '14px 20px',
                  borderRadius: '9999px',
                  background: '#FFFFFF',
                  border: '1px solid #DED7CB',
                  color: '#182520',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
              <button
                type="submit"
                className="btn-magnetic btn-primary"
                style={{ padding: '14px 28px', fontSize: '0.95rem' }}
              >
                <span>Subscribe</span>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
