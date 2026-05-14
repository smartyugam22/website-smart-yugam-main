import React from 'react';
import Hero from '../components/hero';
import Testimonials from '../components/testimonials';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  School, 
  CheckCircle2, 
  Trophy, 
  ArrowRight
} from 'lucide-react';

// Import assets
import imgBlindfold from '../assets/img_blindfold_cube.jpeg';
import imgFlags from '../assets/img_girl_flags.jpeg';
import imgInstructor from '../assets/img_instructor_cube.jpeg';
import imgGirlHoop from '../assets/img_girl_hoop.jpeg';
import imgBoyBack from '../assets/img_boy_back.jpeg';
import imgFounderStudent from '../assets/img_founder_student.jpeg';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />

      {/* WHY CHOOSE US */}
      <section className="why">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Institutional Excellence</span>
          <h2 className="section-title">The Smart Yugam Advantage</h2>
          <p style={{ color: 'var(--text-light)', marginTop: '0.5rem', maxWidth: '600px', marginInline: 'auto' }}>
            We've built a reputation for excellence through specialized training, ISO-certified quality, and world-record results.
          </p>
        </motion.div>
        
        <div className="why-grid">
          <WhyCol 
            icon={<GraduationCap size={28} />}
            title="For Students" 
            items={["Enhanced Cognitive Abilities", "Future-Ready Skills", "Multilingual Proficiency", "World Record Opportunities", "Leadership Development"]} 
            color="var(--maroon)" 
          />
          <WhyCol 
            icon={<Users size={28} />}
            title="For Parents" 
            items={["Structured Development", "Expert Certified Guidance", "Career Readiness", "Progress Reports", "Safe Environment"]} 
            color="var(--gold)" 
          />
          <WhyCol 
            icon={<School size={28} />}
            title="For Schools" 
            items={["Certified Faculty Development", "Higher Student Engagement", "Accredited Curriculum", "Reputation Boost", "Administrative Support"]} 
            color="#4db8a0" 
          />
        </div>
        
        <motion.div 
          className="center" 
          style={{ marginTop: '4rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/programs" className="link-button">
            <span>Explore <span className="highlight-text">All</span> Programs</span>
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>

      <Testimonials />

      {/* WORLD RECORDS */}
      <section className="records" id="records">
        <motion.div 
          className="center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Hall of Fame</span>
          <h2 className="section-title">Pinnacle Achievers &<br />World Record Holders</h2>
          <p style={{ color: 'var(--text-light)', marginTop: '.5rem', maxWidth: '500px', marginInline: 'auto' }}>
            Our students don't just learn — they make history with internationally recognized achievements.
          </p>
        </motion.div>
        
        <div className="records-grid">
          <RecordCard src={imgBlindfold} text="Blindfold Speed Cubing Champion" />
          <RecordCard src={imgFlags} text="Blindfold Flag Recognition Record" />
          <RecordCard src={imgInstructor} text="Certified Rubik's Cube Expert" />
          <RecordCard src={imgGirlHoop} text="Multi-Tasking World Record Holder" />
          <RecordCard src={imgBoyBack} text="Speed Cubing National Finalist" />
          <RecordCard src={imgFounderStudent} text="200+ Records Facilitated" />
        </div>
      </section>

      <style jsx>{`
        .home-page { overflow: hidden; }
        .link-button { 
          background: var(--maroon); 
          color: var(--gold) !important; 
          padding: 1rem 2.5rem; 
          border-radius: 50px; 
          text-decoration: none; 
          font-weight: 850; 
          font-size: 1rem; 
          transition: 0.4s; 
          box-shadow: 0 10px 40px rgba(139,28,61,0.25); 
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          border: 2px solid var(--gold);
        }
        .link-button span .highlight-text {
          color: var(--gold);
          transition: 0.4s;
        }
        .link-button:hover { 
          background: var(--gold);
          color: var(--maroon) !important;
          transform: translateY(-5px); 
          box-shadow: 0 15px 50px rgba(245,180,0,0.3); 
          padding-right: 3rem;
        }
        .link-button:hover span .highlight-text {
          color: var(--maroon) !important;
        }

        .why { padding: 60px 5% 120px; background: var(--white); }
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; margin-top: 4rem; }
        .why-col { 
          background: #fff; 
          border-radius: var(--radius); 
          padding: 3rem 2.5rem; 
          border: 1px solid rgba(0,0,0,0.04);
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          transition: 0.4s ease;
          border-top: 5px solid var(--maroon);
        }
        .why-col:hover { transform: translateY(-10px); box-shadow: 0 20px 60px rgba(0,0,0,0.08); border-color: rgba(139,28,61,0.1); }
        .why-icon-wrap { margin-bottom: 2rem; color: var(--maroon); display: inline-flex; padding: 1rem; background: rgba(139,28,61,0.05); border-radius: 12px; }
        .why-col h3 { font-family: 'Playfair Display', serif; font-size: 1.5rem; color: var(--maroon); margin-bottom: 2rem; }
        .why-item { display: flex; align-items: flex-start; gap: 0.8rem; margin-bottom: 1rem; }
        .why-check { color: var(--maroon); flex-shrink: 0; margin-top: 1px; }
        .why-item span { font-size: 0.82rem; color: var(--maroon); font-weight: 600; line-height: 1.5; text-align: left; }

        .records { padding: 60px 5% 120px; background: #fdfaf7; }
        .records-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; margin-top: 4rem; }
        .record-card { 
          border-radius: var(--radius); 
          overflow: hidden; 
          position: relative; 
          box-shadow: 0 15px 40px rgba(0,0,0,0.06); 
          aspect-ratio: 4/3; 
          cursor: pointer;
        }
        .record-card img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .record-card:hover img { transform: scale(1.15); filter: contrast(1.1) brightness(0.9); }
        .record-overlay { 
          position: absolute; 
          inset: 0; 
          background: linear-gradient(0deg, rgba(139,28,61,0.9) 0%, rgba(139,28,61,0.4) 60%, transparent 100%); 
          display: flex; 
          align-items: flex-end; 
          padding: 2.5rem 2rem; 
          opacity: 0; 
          transition: 0.5s ease;
        }
        .record-card:hover .record-overlay { opacity: 1; }
        .record-tag { 
          display: flex; 
          align-items: center; 
          gap: 0.8rem; 
          color: white; 
          font-weight: 800; 
          font-size: 1rem; 
          transform: translateY(20px);
          transition: 0.5s ease 0.1s;
        }
        .record-card:hover .record-tag { transform: translateY(0); }
        
        @media (max-width: 1024px) {
          .why-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </div>
  );
};

const WhyCol = ({ icon, title, items, color }) => (
  <motion.div 
    className="why-col" 
    style={{ borderTopColor: color }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="why-icon-wrap" style={{ color: color, background: `${color}10` }}>{icon}</div>
    <h3>{title}</h3>
    {items.map(i => (
      <div key={i} className="why-item">
        <CheckCircle2 size={18} className="why-check" style={{ color: color }} />
        <span>{i}</span>
      </div>
    ))}
  </motion.div>
);

const RecordCard = ({ src, text }) => (
  <motion.div 
    className="record-card"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <img src={src} alt="Record Achievement" />
    <div className="record-overlay">
      <div className="record-tag">
        <Trophy size={20} className="text-gold" />
        <span>{text}</span>
      </div>
    </div>
  </motion.div>
);

export default Home;
