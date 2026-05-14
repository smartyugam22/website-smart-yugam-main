import React from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  Rocket,
  Star,
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

// Import assets
import founderArmsImg from '../assets/img_founder_arms.png';
import hariTrainerImg from '../assets/Hari_trainer.jpeg';
import nithyaTrainerImg from '../assets/Nithya_trainer.jpg.jpeg';
import nandhiniTrainerImg from '../assets/Nandhini_vedic_math_trainer.jpeg';
import renugaTrainerImg from '../assets/Renuga_phonics_trainer.jpeg';

const About = () => {
  return (
    <div className="about-page" style={{ marginTop: '70px' }}>
      {/* ABOUT FOUNDER */}
      <section className="about" id="about">
        <motion.div
          className="center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Leadership</span>
          <h2 className="section-title">Meet Our Visionary Founder</h2>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-img-wrap"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={founderArmsImg} alt="Dr. Aishwerya R – Founder" className="about-img" />
            <div className="about-accent">
              <Zap size={32} className="accent-icon" />
              <span>EdTech Pioneer</span>
              <small>INNOVATOR</small>
            </div>
          </motion.div>

          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">Founder & CEO</span>
            <h2 className="section-title">Dr. Aishwerya R</h2>
            <blockquote className="about-quote">
              <Star size={20} className="quote-star" />
              <span>"Learning should be fun, practical & future-ready."</span>
            </blockquote>
            <p className="about-desc">An acclaimed EdTech entrepreneur and educator, Dr. Aishwerya has dedicated her career to mentoring thousands of students in innovative academics, life skills, and transformative programs. Her vision drives Smart Yugam Academy's mission to shape the next generation of thinkers and achievers.</p>

            <div className="founder-creds">
              <div className="cred-badge"><ShieldCheck size={18} /><span>ISO Certified Quality</span></div>
              <div className="cred-badge"><Globe size={18} /><span>Global Training Vision</span></div>
            </div>

            <p className="about-name">Dr. Aishwerya R</p>
            <span className="about-title-tag">Founder & CEO, Smart Yugam Academy</span>
          </motion.div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="vm">
        <div className="center">
          <span className="section-label">Our Philosophy</span>
          <h2 className="section-title">Vision & Mission</h2>
        </div>
        <div className="vm-cards">
          <motion.div
            className="vm-card vision"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="vm-icon"><Eye size={40} /></div>
            <h3>Our Vision</h3>
            <p>To nurture innovation and inspire creativity — shaping a generation empowered to think, explore, and lead confidently in a rapidly evolving world.</p>
          </motion.div>

          <motion.div
            className="vm-card mission"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="vm-icon"><Rocket size={40} /></div>
            <h3>Our Mission</h3>
            <p>To awaken the thinker, maker, and leader in every child by blending hands-on STEM experiences with real-world innovation and cognitive development techniques.</p>
          </motion.div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team">
        <div className="center">
          <span className="section-label">Faculty</span>
          <h2 className="section-title">Our Expert Team of Trainers</h2>
          <p style={{ color: 'var(--text-light)', marginTop: '.5rem', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
            Certified professionals dedicated to excellence in cognitive & skill training, delivering results across academic and world record domains.
          </p>
        </div>

        <div className="team-grid">
          <TeamCard
            src={founderArmsImg}
            name="Dr. Aishwerya R"
            role="Founder & Head Mentor"
            spec="Executive Leadership & Curriculum Design"
          />
          <TeamCard
            src={hariTrainerImg}
            name="Mr. Hari Vignesh"
            role="Senior Robotics Expert"
            spec="STEM & Robotics Innovation"
          />
          <TeamCard
            src={nithyaTrainerImg}
            name="Ms. Nithya"
            role="UI/UX & Communication Trainer"
            spec="Creative Design & Mastery"
          />
          <TeamCard
            src={nandhiniTrainerImg}
            name="Ms. Nandhini"
            role="Senior Vedic Math Trainer"
            spec="Advanced Arithmetic & Speed Math"
          />
          <TeamCard
            src={renugaTrainerImg}
            name="Ms. Renuga"
            role="Phonics & Handwriting Trainer"
            spec="Linguistic Excellence & Skill Mastery"
          />

        </div>
      </section>

      <style jsx>{`
        .about { padding: 120px 5% 100px; background: white; }
        .about-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 6rem; align-items: center; margin-top: 5rem; }
        .about-img-wrap { position: relative; }
        .about-img { width: 100%; height: 580px; object-fit: cover; object-position: top; border-radius: var(--radius); box-shadow: 0 40px 80px rgba(139,28,61,0.15); }
        .about-accent { 
          position: absolute; 
          bottom: -20px; 
          right: -20px; 
          background: var(--maroon); 
          color: white; 
          padding: 2.5rem; 
          border-radius: var(--radius); 
          font-weight: 800; 
          font-size: 1.5rem; 
          font-family: 'Playfair Display', serif; 
          box-shadow: 0 20px 50px rgba(139,28,61,0.3); 
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .accent-icon { color: var(--gold); }
        .about-accent small { display: block; font-size: .7rem; font-family: 'Plus Jakarta Sans', sans-serif; font-weight: 600; letter-spacing: 2px; opacity: 0.8; }
        
        .about-quote { 
          font-family: 'Playfair Display', serif; 
          font-size: 1.6rem; 
          color: var(--maroon); 
          font-style: italic; 
          border-left: 5px solid var(--gold); 
          padding: 1rem 0 1rem 2rem; 
          margin: 2.5rem 0;
          display: flex;
          gap: 1.5rem;
          background: rgba(245,180,0,0.03);
          border-radius: 0 20px 20px 0;
        }
        .quote-star { color: var(--gold); flex-shrink: 0; margin-top: 5px; }
        .about-desc { color: var(--text-light); line-height: 1.85; font-size: 1.05rem; }
        
        .founder-creds { display: flex; gap: 2rem; margin-top: 2rem; }
        .cred-badge { display: flex; align-items: center; gap: 0.8rem; color: var(--maroon); font-weight: 700; font-size: 0.9rem; }
        .cred-badge svg { color: var(--gold); }

        .about-name { font-weight: 800; font-size: 1.3rem; color: var(--text); margin-top: 3rem; }
        .about-title-tag { display: inline-block; background: rgba(139,28,61,0.08); color: var(--maroon); padding: .4rem 1rem; border-radius: 50px; font-size: .8rem; font-weight: 800; margin-top: .6rem; }
        
        .vm { padding: 120px 5%; background: linear-gradient(135deg,#fffbf8,#fff5f8); }
        .vm-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 4rem; }
        .vm-card { 
          background: white; 
          padding: 4rem; 
          border-radius: var(--radius); 
          box-shadow: 0 15px 40px rgba(0,0,0,0.04); 
          position: relative; 
          overflow: hidden;
          transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(0,0,0,0.02);
        }
        .vm-card:hover { transform: translateY(-15px); box-shadow: 0 30px 70px rgba(139,28,61,0.1); border-color: rgba(139,28,61,0.1); }
        .vm-card::after {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 0; height: 5px;
          background: var(--maroon);
          transition: width 0.5s ease;
        }
        .vm-card.vision::after { background: var(--maroon); }
        .vm-card.mission::after { background: var(--gold); }
        .vm-card:hover::after { width: 100%; }
        
        .vm-icon { color: var(--maroon); margin-bottom: 2rem; display: inline-block; padding: 1.2rem; background: rgba(139,28,61,0.05); border-radius: 16px; }
        .vm-card.mission .vm-icon { color: #b78a00; background: rgba(245,180,0,0.1); }
        .vm-card h3 { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--maroon); margin-bottom: 1.5rem; }
        .vm-card p { color: var(--text-light); line-height: 1.85; font-size: 1.05rem; }

        .team { padding: 120px 5%; background: white; }
        .team-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 4rem; }
        .team-card { text-align: center; position: relative; transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .team-img-wrap { 
          border-radius: 24px; 
          overflow: hidden; 
          height: 420px; 
          margin-bottom: 2rem; 
          box-shadow: 0 20px 50px rgba(0,0,0,0.08); 
          border: 1px solid rgba(139,28,61,0.05); 
          position: relative;
        }
        .team-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(139,28,61,0.2) 0%, transparent 60%);
          opacity: 0;
          transition: 0.5s;
        }
        .team-card:hover .team-img-wrap::after { opacity: 1; }
        .team-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .team-card:hover img { transform: scale(1.1); filter: contrast(1.05); }
        .team-card:hover { transform: translateY(-10px); }
        
        .team-card h4 { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: var(--maroon); margin-bottom: .4rem; }
        .team-role { font-size: .85rem; color: var(--gold); font-weight: 850; text-transform: uppercase; letter-spacing: 2px; margin-bottom: .8rem; display: block; }
        .team-spec { font-size: .95rem; color: var(--text-light); font-weight: 600; }

        @media(max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 4rem; }
          .vm-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

const TeamCard = ({ src, name, role, spec }) => (
  <motion.div
    className="team-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="team-img-wrap">
      <img src={src} alt={name} />
    </div>
    <span className="team-role">{role}</span>
    <h4>{name}</h4>
    <p className="team-spec">{spec}</p>
  </motion.div>
);

export default About;