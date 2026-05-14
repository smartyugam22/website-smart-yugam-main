import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CalendarDays, 
  Sun, 
  GraduationCap, 
  Presentation, 
  Trophy, 
  ArrowRightCircle,
  FileBadge
} from 'lucide-react';

const Schools = () => {
  const schoolServices = [
    { icon: <CalendarDays size={32} />, title: "Year-Long ECA Programs", desc: "Comprehensive extra-curricular activity programs integrated into your school calendar with structured curriculum and trained faculty." },
    { icon: <ArrowRightCircle size={32} />, title: "After School Activities", desc: "Engaging post-school sessions in cognitive skills, sports, and arts that keep students motivated and developing holistically." },
    { icon: <GraduationCap size={32} />, title: "Faculty Development", desc: "Train your teachers in innovative pedagogical methods, cognitive learning techniques, and modern classroom strategies." },
    { icon: <Presentation size={32} />, title: "Workshops & Events", desc: "One-day or weekend workshops that create excitement, showcase talent, and build skills in a fun, competitive environment." },
    { icon: <Sun size={32} />, title: "Summer Camps", desc: "Intensive multi-week summer programs combining STEM, arts, language, and physical activity for comprehensive development." },
    { icon: <Trophy size={32} />, title: "World Record Training", desc: "Specialized coaching to prepare your students for national and international record-breaking attempts with full documentation support." }
  ];

  return (
    <div className="schools-page" style={{ marginTop: '70px' }}>
      <section className="schools" id="schools">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Institutional Partnerships</span>
          <h2 className="section-title">Elevate Your School's Potential</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '.5rem', maxWidth: '600px', marginInline: 'auto' }}>
            Transform your institution's extracurricular landscape with our ISO-certified cognitive and skill development programs.
          </p>
        </motion.div>
        
        <div className="school-grid">
          {schoolServices.map((service, index) => (
            <motion.div 
              key={index} 
              className="school-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="school-icon-wrap">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
              <Link to="/contact" className="btn-outline-white">
                <span>Request Partnership Proposal</span>
                <FileBadge size={16} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .schools { 
          padding: 120px 5%; 
          background: linear-gradient(135deg, #2a0812 0%, #1a1a2e 100%); 
          color: white; 
          position: relative; 
          overflow: hidden; 
          min-height: 100vh;
        }
        .schools::before { 
          content: ''; 
          position: absolute; 
          top: -50%; 
          right: -10%; 
          width: 800px; 
          height: 800px; 
          background: radial-gradient(circle, rgba(245,180,0,0.08) 0%, transparent 70%); 
          border-radius: 50%; 
        }
        .schools .section-label { color: var(--gold-light); letter-spacing: 4px; }
        .schools .section-title { color: white; margin-bottom: 1.5rem; }
        
        .school-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); 
          gap: 2rem; 
          margin-top: 5rem; 
          position: relative; 
          z-index: 1; 
        }
        .school-card { 
          background: rgba(255, 255, 255, 0.05); 
          border: 1px solid rgba(255, 255, 255, 0.12); 
          border-radius: 24px; 
          padding: 3.5rem 2.5rem; 
          transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1); 
          backdrop-filter: blur(12px); 
          display: flex; 
          flex-direction: column;
          height: 100%;
        }
        .school-card:hover { 
          background: rgba(255, 255, 255, 0.12); 
          transform: translateY(-10px); 
          border-color: var(--gold);
        }
        
        .school-icon-wrap { color: var(--gold); margin-bottom: 2rem; display: inline-flex; }
        .school-card h4 { font-weight: 700; font-size: 1.3rem; margin-bottom: 1rem; color: white; font-family: 'Playfair Display', serif; }
        .school-card p { font-size: 0.95rem; opacity: 0.75; line-height: 1.7; margin-bottom: 2rem; flex-grow: 1; font-weight: 500; }
        
        .btn-outline-white { 
          border: 1.5px solid rgba(255, 255, 255, 0.3); 
          color: white; 
          padding: 0.8rem 1.5rem; 
          border-radius: 50px; 
          font-size: 0.85rem; 
          font-weight: 700; 
          background: transparent; 
          transition: 0.3s; 
          text-decoration: none; 
          display: inline-flex; 
          align-items: center;
          gap: 0.8rem;
          justify-content: center;
        }
        .btn-outline-white:hover { 
          background: white; 
          color: #1a1a2e; 
          border-color: white;
          transform: translateY(-2px);
        }

        @media(max-width: 768px) {
          .school-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default Schools;
