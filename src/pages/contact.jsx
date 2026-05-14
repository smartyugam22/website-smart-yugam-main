import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  Globe, 
  MapPin, 
  Send, 
  MessageSquareShare,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft
} from 'lucide-react';

const Contact = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you shortly to schedule your free demo session.');
  };

  return (
    <section className="contact" id="contact" style={{ marginTop: '70px' }}>
      {/* Back Button */}
      <motion.button 
        onClick={() => navigate(-1)} 
        className="back-btn"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <ArrowLeft size={16} />
        <span>Go Back</span>
      </motion.button>
      <motion.div 
        className="center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="section-label">Connect & Grow</span>
        <h2 className="section-title">Let's Shape the Future Together</h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '.5rem', maxWidth: '600px', marginInline: 'auto' }}>
          Ready to empower your child or collaborate with your school? Reach out to our expert team today!
        </p>
      </motion.div>

      <div className="contact-grid">
        <motion.div 
          className="contact-info-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-info-cards">
            <InfoCard icon={<Phone size={24} />} title="Phone" value="+91 824 855 3958" />
            <InfoCard icon={<Mail size={24} />} title="Email" value="smartyugamacademy@gmail.com" />
            <InfoCard icon={<Globe size={24} />} title="Website" value="smartyugamacademy.com" />
          </div>
          
          <div className="loc-cards">
            <div className="loc-card">
              <div className="loc-header">
                <MapPin size={18} className="loc-icon" />
                <h4>Chennai</h4>
              </div>
              <p>Regional Head Office</p>
            </div>
            <div className="loc-card">
              <div className="loc-header">
                <MapPin size={18} className="loc-icon" />
                <h4>Coimbatore</h4>
              </div>
              <p>Coimbatore Branch</p>
            </div>
          </div>
          
          <div className="contact-mission-badge" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '1.5rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <MapPin size={28} className="mission-icon" />
              <h4 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--gold)', fontWeight: 850 }}>Our Branch Addresses</h4>
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '1rem' }}>
                <h5 style={{ margin: '0 0 0.3rem 0', color: 'var(--gold)', fontSize: '1.05rem', fontWeight: 800 }}>Chennai Regional Office</h5>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.95)', fontSize: '0.92rem', lineHeight: '1.5', fontWeight: 500 }}>No - 161, 10th block, Mugappair East, Chennai - 600037</p>
              </div>
              <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '1rem' }}>
                <h5 style={{ margin: '0 0 0.3rem 0', color: 'var(--gold)', fontSize: '1.05rem', fontWeight: 800 }}>Coimbatore Branch</h5>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.95)', fontSize: '0.92rem', lineHeight: '1.5', fontWeight: 500 }}>First Floor, Mayura Complex, Dr KV Kuppusamy road, Opposite to RVS CAS Backgate</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-form-wrap"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact-form">
            <div className="form-header">
              <div className="form-title">
                <MessageSquareShare size={24} className="form-title-icon" />
                <h3 style={{ color: '#f5b400' }}>Book a Free Demo</h3>
              </div>
              <p style={{ color: '#8b1c3d', fontWeight: 600 }}>Fill out the form and our pedagogical experts will reach out to schedule a diagnostic session for your learner.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label style={{ color: '#8b1c3d' }}>Full Name</label>
                  <input type="text" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label style={{ color: '#8b1c3d' }}>Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>
              <div className="form-group">
                <label style={{ color: '#8b1c3d' }}>Email Address</label>
                <input type="email" placeholder="your@email.com" required />
              </div>
              <div className="form-group">
                <label style={{ color: '#8b1c3d' }}>Program of Interest</label>
                <select required>
                  <option value="" disabled selected>Select a specialized program...</option>
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
                <label style={{ color: '#8b1c3d' }}>Message / Specific Goals</label>
                <textarea placeholder="Tell us about the learner's age, specific interests, or any questions..."></textarea>
              </div>
              <button type="submit" className="form-submit">
                <span>Book 100% Free Demo Session</span>
                <Send size={18} className="send-icon" />
              </button>
            </form>
            
            <div className="form-footer" style={{ color: 'var(--maroon)', opacity: 1 }}>
              <CheckCircle2 size={16} />
              <span>We'll respect your privacy and contact only regarding your request.</span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact { 
          padding: 80px 5% 120px; 
          background: linear-gradient(135deg, #2a0812 0%, #1a1a2e 100%); 
          color: white; 
          position: relative; 
          overflow: hidden; 
          min-height: 100vh;
        }
        .back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          color: rgba(255, 255, 255, 0.9);
          padding: 0.55rem 1.2rem;
          border-radius: 50px;
          font-weight: 750;
          font-size: 0.8rem;
          cursor: pointer;
          transition: 0.3s;
          margin-bottom: 2rem;
          z-index: 10;
          position: relative;
        }
        .back-btn:hover {
          background: var(--gold);
          color: var(--maroon);
          border-color: var(--gold);
          transform: translateX(-4px);
          box-shadow: 0 8px 25px rgba(245,180,0,0.25);
        }
        .contact::before { 
          content: ''; 
          position: absolute; 
          bottom: -50%; 
          left: -10%; 
          width: 600px; 
          height: 600px; 
          background: radial-gradient(circle, rgba(245, 180, 0, 0.1) 0%, transparent 70%); 
          border-radius: 50%; 
        }
        .contact .section-label { color: var(--gold-light); letter-spacing: 4px; }
        .contact .section-title { color: white; margin-bottom: 2rem; }
        
        .contact-grid { 
          display: grid; 
          grid-template-columns: 1fr 1.3fr; 
          gap: 6rem; 
          margin-top: 5rem; 
          position: relative; 
          z-index: 1; 
          align-items: flex-start;
        }
        
        .contact-info-cards { display: flex; flex-direction: column; gap: 1.5rem; }
        .info-card { 
          background: rgba(255, 255, 255, 0.05); 
          border: 1px solid rgba(255, 255, 255, 0.1); 
          border-radius: 20px; 
          padding: 1.5rem 2rem; 
          display: flex; 
          align-items: center; 
          gap: 1.5rem; 
          backdrop-filter: blur(12px); 
          transition: 0.3s;
        }
        .info-card:hover { background: rgba(255, 255, 255, 0.1); border-color: var(--gold); transform: translateX(10px); }
        .info-icon { color: var(--gold); flex-shrink: 0; }
        .info-card h4 { font-size: 0.8rem; opacity: 0.6; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 0.3rem; }
        .info-card p { font-weight: 800; font-size: 1.1rem; color: white; }
        
        .loc-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-top: 2rem; }
        .loc-card { 
          background: rgba(255, 255, 255, 0.05); 
          border: 1px solid rgba(255, 255, 255, 0.1); 
          border-radius: 20px; 
          padding: 1.5rem; 
          transition: 0.3s; 
          text-align: center;
        }
        .loc-card:hover { border-color: var(--gold); }
        .loc-header { display: flex; justify-content: center; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem; }
        .loc-icon { color: var(--gold); }
        .loc-card h4 { font-weight: 800; color: white; font-size: 1.2rem; }
        .loc-card p { font-size: 0.85rem; opacity: 0.7; font-weight: 600; }
        
        .contact-mission-badge { 
          margin-top: 3rem; 
          background: rgba(245, 180, 0, 0.1); 
          border-radius: 24px; 
          padding: 2.5rem; 
          border: 1px solid rgba(245, 180, 0, 0.2); 
          display: flex; 
          gap: 2rem;
          align-items: center;
        }
        .mission-icon { color: var(--gold); flex-shrink: 0; }
        .mission-text h4 { font-weight: 800; color: var(--gold-light); margin-bottom: 0.5rem; font-size: 1.2rem; }
        .mission-text p { font-size: 0.95rem; opacity: 0.85; line-height: 1.7; font-weight: 500; }

        .contact-form-wrap { background: white; border-radius: 32px; padding: 4rem; box-shadow: 0 40px 80px rgba(0,0,0,0.4); }
        .form-header { margin-bottom: 3rem; }
        .form-title { display: flex; align-items: center; gap: 1rem; color: var(--maroon); margin-bottom: 1rem; }
        .form-title-icon { color: #f5b400; }
        .form-header h3 { font-family: 'Playfair Display', serif; font-size: 2.0rem; font-weight: 700; color: var(--maroon); }
        .form-header p { color: var(--text-light); font-size: 1rem; font-weight: 500; line-height: 1.6; }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem; }
        .form-group { margin-bottom: 1.5rem; }
        .form-group label { display: block; font-size: 0.82rem; font-weight: 800; color: #8b1c3d; margin-bottom: 0.6rem; text-transform: uppercase; letter-spacing: 1px; }
        .form-group input, .form-group select, .form-group textarea { 
          width: 100%; padding: 1.2rem 1.4rem; 
          border: 1.5px solid rgba(139, 28, 61, 0.12); 
          border-radius: 16px; font-family: inherit; font-size: 1rem; 
          color: var(--text); background: #fdfaf7; transition: 0.3s; outline: none; 
        }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: #f5b400; background: white; box-shadow: 0 0 0 4px rgba(245, 180, 0, 0.1); }
        .form-group textarea { min-height: 150px; resize: vertical; }
        
        .form-submit { 
          width: 100%; 
          background: #8b1c3d; 
          color: #f5b400 !important; 
          padding: 1.4rem; 
          border-radius: 60px; 
          font-weight: 850; 
          font-size: 1.1rem; 
          border: 2px solid #f5b400; 
          cursor: pointer; 
          transition: 0.4s; 
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1rem;
          box-shadow: 0 15px 40px rgba(139, 28, 61, 0.3);
        }
        .form-submit:hover { 
          background: #f5b400; 
          color: #8b1c3d !important; 
          transform: translateY(-3px); 
          box-shadow: 0 20px 50px rgba(245, 180, 0, 0.4); 
        }
        .send-icon { transition: 0.4s; }
        .form-submit:hover .send-icon { transform: translateX(10px) translateY(-5px) rotate(-10deg); }
        
        .form-footer { display: flex; align-items: center; gap: 0.8rem; margin-top: 2rem; color: var(--text-light); opacity: 0.7; font-size: 0.8rem; font-weight: 600; justify-content: center; }

        @media(max-width: 1100px) {
          .contact-grid { grid-template-columns: 1fr; gap: 4rem; }
          .contact-form-wrap { padding: 3rem 2rem; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

const InfoCard = ({ icon, title, value }) => (
  <div className="info-card">
    <div className="info-icon">{icon}</div>
    <div>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  </div>
);

export default Contact;