import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  ShieldCheck, 
  Sparkles,
  CheckCircle2,
  Send
} from 'lucide-react';
import logoImg from '../assets/img_logo.png';

const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProg, setSelectedProg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: '',
    message: ''
  });

  useEffect(() => {
    const handleOpen = (e) => {
      if (e.detail && e.detail.program) {
        setSelectedProg(e.detail.program);
        setFormData(prev => ({ ...prev, program: e.detail.program }));
      } else {
        setSelectedProg('');
        setFormData(prev => ({ ...prev, program: '' }));
      }
      setIsOpen(true);
      setIsSubmitted(false);
    };

    window.addEventListener('open-booking', handleOpen);
    return () => window.removeEventListener('open-booking', handleOpen);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API Submission
    setIsSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', phone: '', email: '', program: '', message: '' });
    }, 1000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          {/* Backdrop */}
          <motion.div 
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Container */}
          <motion.div 
            className="booking-modal-panel"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
          >
            {/* Close Button */}
            <button className="modal-close-btn" onClick={() => setIsOpen(false)} aria-label="Close dialog">
              <X size={24} />
            </button>

            <div className="booking-modal-grid">
              {/* Left Info Column */}
              <div className="booking-modal-info">
                <div className="info-brand">
                  <img src={logoImg} alt="Smart Yugam Logo" className="brand-logo" />
                  <div>
                    <h3>Smart Yugam Academy</h3>
                    <span>Beyond Book Education</span>
                  </div>
                </div>

                <span className="info-label">Connect & Grow</span>
                <h2>Let's Shape the Future Together</h2>
                <p className="info-desc">Ready to empower your child or collaborate with your school? Reach out to our expert team today!</p>

                <div className="info-contact-list">
                  <a href="tel:+918248553958" className="info-item">
                    <div className="info-icon"><Phone size={18} /></div>
                    <div>
                      <span className="info-title">Phone</span>
                      <span className="info-val">+91 824 855 3958</span>
                    </div>
                  </a>

                  <a href="mailto:smartyugamacademy@gmail.com" className="info-item">
                    <div className="info-icon"><Mail size={18} /></div>
                    <div>
                      <span className="info-title">Email</span>
                      <span className="info-val">smartyugamacademy@gmail.com</span>
                    </div>
                  </a>

                  <a href="https://smartyugamacademy.com" target="_blank" rel="noopener noreferrer" className="info-item">
                    <div className="info-icon"><Globe size={18} /></div>
                    <div>
                      <span className="info-title">Website</span>
                      <span className="info-val">smartyugamacademy.com</span>
                    </div>
                  </a>

                  <div className="info-item non-link">
                    <div className="info-icon"><MapPin size={18} /></div>
                    <div>
                      <span className="info-title">Chennai</span>
                      <span className="info-val">Regional Head Office</span>
                    </div>
                  </div>

                  <div className="info-item non-link">
                    <div className="info-icon"><MapPin size={18} /></div>
                    <div>
                      <span className="info-title">Coimbatore</span>
                      <span className="info-val">Coimbatore Branch</span>
                    </div>
                  </div>
                </div>

                <div className="info-vision">
                  <div className="vision-header">
                    <MapPin size={18} className="gold-text" />
                    <h4>Our Addresses</h4>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.5rem' }}>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', color: 'var(--gold)' }}>Chennai</span>
                      <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4', display: 'block' }}>No - 161, 10th block, Mugappair East, Chennai - 600037</span>
                    </div>
                    <div>
                      <span style={{ display: 'block', fontSize: '0.8rem', fontWeight: '800', color: 'var(--gold)' }}>Coimbatore</span>
                      <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.4', display: 'block' }}>First Floor, Mayura Complex, Dr KV Kuppusamy road, Opposite to RVS CAS Backgate</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form Column */}
              <div className="booking-modal-form-wrap">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="booking-form">
                    <div className="form-brand-mobile">
                      <img src={logoImg} alt="Smart Yugam Logo" className="form-brand-logo" />
                      <h4>Smart Yugam Academy</h4>
                    </div>
                    <span className="form-label">Free Access</span>
                    <h2>Book a Free Demo</h2>
                    <p className="form-desc">Fill out the form and our pedagogical experts will reach out to schedule a diagnostic session for your learner.</p>

                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="+91 XXXXX XXXXX" 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="your@email.com" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="program">Program of Interest</label>
                      <select 
                        id="program" 
                        name="program" 
                        value={formData.program}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>Select a specialized program...</option>
                        <option value="Abacus">Abacus & Mental Arithmetic</option>
                        <option value="Rubik Cube">Speedcubing / Rubik's Cube</option>
                        <option value="Vedic Math">Vedic Mathematics</option>
                        <option value="Phonics">Phonics & Reading Skill</option>
                        <option value="Handwriting">Handwriting & Calligraphy</option>
                        <option value="Robotics">Robotics & Creative Coding</option>
                        <option value="Memory Mastery">Memory Mastery & Mnemonics</option>
                        <option value="Midbrain Activation">Midbrain Activation & ESP</option>
                        <option value="Brain Balancing">Left & Right Brain Balancing</option>
                        <option value="School Partnership">School Institutional Partnership</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message / Specific Goals</label>
                      <textarea 
                        id="message" 
                        name="message" 
                        rows="3"
                        placeholder="Tell us about the learner's age, specific interests, or any questions..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button type="submit" className="booking-submit-btn">
                      <span>Book 100% Free Demo Session</span>
                      <Send size={16} />
                    </button>

                    <span className="privacy-note">We'll respect your privacy and contact only regarding your request.</span>
                  </form>
                ) : (
                  <motion.div 
                    className="booking-success-state"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <CheckCircle2 size={80} className="success-icon" />
                    <h2>Demo Requested successfully!</h2>
                    <p>Thank you, <strong>{formData.name || 'Learner'}</strong>. Our pedagogical experts have received your request for the <strong>{formData.program || 'selected'}</strong> program.</p>
                    <div className="success-next-steps">
                      <h4>What Happens Next?</h4>
                      <ul>
                        <li>We'll contact you at <strong>{formData.phone}</strong> within 2 hours.</li>
                        <li>We'll schedule a 1-on-1 diagnostic slot for your child.</li>
                        <li>A completely custom performance analysis report will be shared.</li>
                      </ul>
                    </div>
                    <button className="success-close-btn" onClick={() => setIsOpen(false)}>Done</button>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 110px 5% 40px;
          overflow-y: auto;
        }

        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(18, 5, 10, 0.85);
          backdrop-filter: blur(10px);
        }

        .booking-modal-panel {
          position: relative;
          background: white;
          width: 100%;
          max-width: 1100px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
          z-index: 10;
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: #eef2f6;
          border: none;
          color: var(--maroon);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: 0.3s;
          z-index: 12;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }
        .modal-close-btn:hover {
          background: var(--maroon);
          color: white;
          transform: rotate(90deg);
        }

        .booking-modal-grid {
          display: grid;
          grid-template-columns: 43% 57%;
          min-height: 650px;
        }

        /* Info Column Styling */
        .booking-modal-info {
          background: linear-gradient(135deg, #3b0918 0%, #1e050d 100%);
          color: white;
          padding: 3.5rem 3rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid rgba(255, 255, 255, 0.05);
        }

        .info-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 2rem;
        }
        .brand-logo {
          height: 40px;
          width: auto;
          background: white;
          border-radius: 8px;
          padding: 2px;
        }
        .info-brand h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          color: white;
          line-height: 1.1;
        }
        .info-brand span {
          display: block;
          font-size: 0.6rem;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .info-label {
          color: var(--gold);
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 0.5rem;
        }
        .booking-modal-info h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          line-height: 1.2;
          color: var(--gold);
          margin-bottom: 1rem;
        }
        .info-desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .info-contact-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          margin-bottom: 2.5rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          text-decoration: none;
          color: inherit;
          transition: 0.3s;
          padding: 0.5rem;
          border-radius: 12px;
        }
        .info-item:not(.non-link):hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateX(5px);
        }
        .info-icon {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(245, 180, 0, 0.15);
          color: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .info-title {
          display: block;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .info-val {
          font-size: 0.9rem;
          font-weight: 600;
          color: white;
        }

        .info-vision {
          background: rgba(255, 255, 255, 0.04);
          padding: 1.2rem;
          border-radius: 16px;
          border-left: 3px solid var(--gold);
        }
        .vision-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.4rem;
        }
        .vision-header h4 {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--gold);
        }
        .info-vision p {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.5;
        }

        /* Form Wrap Styling */
        .booking-modal-form-wrap {
          padding: 3.5rem 3rem;
          background: white;
          display: flex;
          align-items: center;
        }

        .booking-form {
          width: 100%;
        }
        .form-label {
          color: var(--maroon);
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 2px;
          display: block;
          margin-bottom: 0.5rem;
        }
        .booking-modal-form-wrap h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          color: var(--maroon);
          margin-bottom: 0.5rem;
        }
        .form-desc {
          font-size: 0.9rem;
          color: var(--text-light);
          line-height: 1.5;
          margin-bottom: 2rem;
        }

        .form-group {
          margin-bottom: 1.2rem;
        }
        .form-group label {
          display: block;
          font-size: 0.8rem;
          font-weight: 750;
          color: var(--maroon);
          margin-bottom: 0.4rem;
        }
        .form-group input, 
        .form-group select, 
        .form-group textarea {
          width: 100%;
          padding: 0.8rem 1rem;
          border: 2px solid #eef2f5;
          background: #f8fafc;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--maroon);
          transition: 0.3s;
          font-family: inherit;
        }
        .form-group input:focus, 
        .form-group select:focus, 
        .form-group textarea:focus {
          border-color: var(--maroon);
          background: white;
          outline: none;
          box-shadow: 0 0 15px rgba(139, 28, 61, 0.08);
        }

        .booking-submit-btn {
          width: 100%;
          background: var(--maroon);
          color: white;
          border: none;
          padding: 1rem;
          border-radius: 14px;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          transition: 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.8rem;
          margin-top: 1.5rem;
        }
        .booking-submit-btn:hover {
          background: var(--maroon-dark);
          transform: translateY(-2px);
          box-shadow: 0 15px 30px rgba(139, 28, 61, 0.2);
        }

        .privacy-note {
          display: block;
          text-align: center;
          font-size: 0.75rem;
          color: var(--text-light);
          margin-top: 0.8rem;
          opacity: 0.7;
        }

        /* Success State */
        .booking-success-state {
          width: 100%;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
        }
        .success-icon {
          color: #4db8a0;
          margin-bottom: 1.5rem;
        }
        .booking-success-state h2 {
          font-family: 'Playfair Display', serif;
          font-size: 2.2rem;
          color: var(--maroon);
          margin-bottom: 1rem;
        }
        .booking-success-state p {
          font-size: 1rem;
          color: var(--text-light);
          line-height: 1.6;
          max-width: 500px;
          margin-bottom: 2rem;
        }
        .success-next-steps {
          background: #f0faf7;
          border: 1px solid rgba(77, 184, 160, 0.2);
          border-radius: 20px;
          padding: 1.5rem 2rem;
          text-align: left;
          width: 100%;
          max-width: 500px;
          margin-bottom: 2.5rem;
        }
        .success-next-steps h4 {
          font-size: 0.95rem;
          font-weight: 800;
          color: #2c6e5f;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .success-next-steps ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .success-next-steps li {
          font-size: 0.9rem;
          color: #445c56;
          font-weight: 600;
          position: relative;
          padding-left: 1.5rem;
        }
        .success-next-steps li::before {
          content: "✦";
          position: absolute;
          left: 0;
          color: #4db8a0;
          font-weight: bold;
        }
        .success-close-btn {
          background: var(--maroon);
          color: white;
          border: none;
          padding: 0.8rem 2.5rem;
          border-radius: 12px;
          font-weight: 800;
          font-size: 0.95rem;
          cursor: pointer;
          transition: 0.3s;
        }
        .success-close-btn:hover {
          background: var(--maroon-dark);
          transform: translateY(-2px);
        }

        .form-brand-mobile {
          display: none;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .booking-modal-grid {
            grid-template-columns: 1fr;
          }
          .booking-modal-info {
            padding: 3rem 2rem;
          }
          .modal-close-btn {
            top: 1rem;
            right: 1rem;
          }
          .booking-modal-form-wrap {
            padding: 3rem 2rem;
          }
          .form-brand-mobile {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
            padding-bottom: 1rem;
          }
          .form-brand-logo {
            height: 35px;
            width: auto;
          }
          .form-brand-mobile h4 {
            font-family: 'Playfair Display', serif;
            color: var(--maroon);
            font-weight: 800;
            font-size: 1.1rem;
            margin: 0;
          }
        }
        @media (max-width: 480px) {
          .booking-modal-panel {
            border-radius: 20px;
          }
          .booking-modal-info, .booking-modal-form-wrap {
            padding: 2rem 1.2rem;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};

export default BookingModal;
