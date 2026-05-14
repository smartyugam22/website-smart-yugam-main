import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Partners from '../components/partners';
import { 
  Calculator, 
  Cpu, 
  Binary, 
  Layers, 
  BrainCircuit, 
  Gamepad2, 
  Type, 
  Mic2, 
  Languages, 
  ChevronRight,
  CalendarDays,
  Sun,
  GraduationCap,
  Presentation,
  Trophy,
  ArrowRightCircle,
  FileBadge
} from 'lucide-react';

const Programs = () => {
  const allPrograms = [
    { icon: <Calculator size={32} />, title: "Abacus – Junior & Senior", meta: ["Age: 5–14", "8 Levels", "1 Year/Level"], desc: "Develop lightning-fast mental arithmetic and concentration skills using the ancient Japanese Soroban abacus method." },
    { icon: <Cpu size={32} />, title: "Robotics & STEM", meta: ["Age: 7–16", "6 Levels", "6 Months/Level"], desc: "Hands-on learning with sensors, motors and programming to build real-world robots and solve engineering challenges." },
    { icon: <Binary size={32} />, title: "Vedic Mathematics", meta: ["Age: 8–16", "4 Levels", "6 Months/Level"], desc: "Ancient Indian mathematical techniques to solve complex problems in seconds. Build speed and accuracy." },
    { icon: <Layers size={32} />, title: "Rubik's Cube Mastery", meta: ["Age: 6–18", "50+ Cubes", "5 Days/Cube"], desc: "From beginner to speed cubing champion! Learn algorithms, spatial reasoning and problem-solving through this cognitive sport." },
    { icon: <BrainCircuit size={32} />, title: "Super Brain Program", meta: ["Age: 5–15", "3 Levels", "5 Months/Level"], desc: "Unlock the full potential of both brain hemispheres through proven techniques that enhance memory and sensory perception." },
    { icon: <Gamepad2 size={32} />, title: "Chess Training", meta: ["Age: 6–18", "6 Levels", "3 Months/Level"], desc: "Build strategic thinking, patience, and decision-making through structured chess training from basics up." },
    { icon: <Type size={32} />, title: "Phonics & Handwriting", meta: ["Age: 4–10", "3 Levels", "3 Months/Level"], desc: "Build strong reading foundations with systematic phonics instruction and beautiful handwriting development." },
    { icon: <Mic2 size={32} />, title: "Communication & Public Speaking", meta: ["Age: 8–18", "4 Levels", "3 Months/Level"], desc: "Transform shy learners into confident speakers. Master presentation, debate, storytelling, and leadership skills." },
    { icon: <Languages size={32} />, title: "Hindi Writing & Speaking", meta: ["Age: 6–16", "5 Levels", "6 Months/Level"], desc: "Comprehensive Hindi language program covering reading, writing, and conversation for all learners." },
  ];

  const schoolServices = [
    { icon: <CalendarDays size={32} />, title: "Year-Long ECA Programs", desc: "Comprehensive extra-curricular activity programs integrated into your school calendar with structured curriculum and trained faculty." },
    { icon: <ArrowRightCircle size={32} />, title: "After School Activities", desc: "Engaging post-school sessions in cognitive skills, sports, and arts that keep students motivated and developing holistically." },
    { icon: <GraduationCap size={32} />, title: "Faculty Development", desc: "Train your teachers in innovative pedagogical methods, cognitive learning techniques, and modern classroom strategies." },
    { icon: <Presentation size={32} />, title: "Workshops & Events", desc: "One-day or weekend workshops that create excitement, showcase talent, and build skills in a fun, competitive environment." },
    { icon: <Sun size={32} />, title: "Summer Camps", desc: "Intensive multi-week summer programs combining STEM, arts, language, and physical activity for comprehensive development." },
    { icon: <Trophy size={32} />, title: "World Record Training", desc: "Specialized coaching to prepare your students for national and international record-breaking attempts with full documentation support." }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="programs-page" style={{ marginTop: '70px' }}>
      {/* 9 PROGRAMS BOXES SECTION */}
      <section className="programs" id="programs">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Our Curriculum</span>
          <h2 className="section-title">Professional Skill Programs</h2>
          <p style={{ color: 'var(--text-light)', marginTop: '.5rem', marginBottom: '4rem', maxWidth: '600px', marginInline: 'auto' }}>
            Empowering young minds with 21st-century cognitive skills, language mastery, and technical innovation.
          </p>
        </motion.div>
        
        <motion.div 
          className="programs-grid"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {allPrograms.map((prog, index) => (
            <div key={index}>
              <ProgramCard 
                icon={prog.icon} 
                title={prog.title} 
                meta={prog.meta} 
                desc={prog.desc} 
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* INSTITUTIONAL PARTNERSHIPS / SCHOOLS SECTION */}
      <section className="schools" id="schools">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Institutional Partnerships</span>
          <h2 className="section-title">Elevate Your School's Potential</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '.5rem', maxWidth: '600px', marginInline: 'auto' }}>
            Transform your institution's extracurricular landscape with our ISO-certified cognitive and skill development programs.
          </p>
        </motion.div>
        
        <motion.div 
          className="school-grid"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {schoolServices.map((service, index) => (
            <div key={index}>
              <SchoolCard 
                icon={service.icon} 
                title={service.title} 
                desc={service.desc} 
              />
            </div>
          ))}
        </motion.div>
      </section>

      <Partners />

      <style jsx>{`
        .programs { padding: 100px 5% 120px; background: white; }
        .programs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3.5rem 1.5rem; }
        
        .prog-card { 
          background: #fff; 
          border-radius: var(--radius); 
          padding: 1.6rem; 
          border: 1px solid rgba(139, 28, 61, 0.06); 
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .prog-card:hover { 
          transform: translateY(-10px); 
          box-shadow: 0 30px 60px rgba(139, 28, 61, 0.12);
          border-color: rgba(139, 28, 61, 0.15);
        }
        .prog-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 4px; height: 0;
          background: var(--maroon);
          transition: height 0.4s ease;
        }
        .prog-card:hover::before { height: 100%; }
        
        .prog-icon { color: var(--maroon); margin-bottom: 1rem; display: inline-flex; }
        .prog-card h4 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--maroon); margin-bottom: 0.6rem; }
        .prog-meta { display: flex; gap: 0.4rem; margin-bottom: 0.8rem; flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; }
        .prog-meta::-webkit-scrollbar { display: none; }
        .prog-tag { 
          background: rgba(245,180,0,0.1); 
          color: #9a7200; 
          padding: 0.2rem 0.5rem; 
          border-radius: 50px; 
          font-size: 0.7rem; 
          font-weight: 750;
          letter-spacing: 0.3px;
          white-space: nowrap;
        }
        .prog-desc { font-size: 0.95rem; color: var(--text-light); line-height: 1.7; margin-bottom: 0.8rem; }
        .prog-enroll { 
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--maroon); 
          text-decoration: none; 
          font-weight: 800;
          font-size: 0.9rem;
          transition: 0.3s;
          margin-top: auto;
        }
        .prog-enroll span { border-bottom: 2px solid transparent; transition: 0.3s; }
        .prog-card:hover .prog-enroll span { border-color: var(--maroon); }
        .prog-enroll:hover { gap: 0.8rem; }

        /* SCHOOLS INTEGRATED CSS */
        .schools { 
          padding: 100px 5%; 
          background: #fdfaf7; 
          color: var(--text-light); 
          position: relative; 
          overflow: hidden; 
        }
        .schools::before { 
          content: ''; 
          position: absolute; 
          top: -50%; 
          right: -10%; 
          width: 800px; 
          height: 800px; 
          background: radial-gradient(circle, rgba(139,28,61,0.03) 0%, transparent 70%); 
          border-radius: 50%; 
        }
        .schools .section-label { color: var(--maroon); letter-spacing: 4px; }
        .schools .section-title { color: var(--maroon); margin-bottom: 1.5rem; }
        
        .school-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 3.5rem 1.5rem; 
          margin-top: 4rem; 
          position: relative; 
          z-index: 1; 
        }
        .school-card { 
          background: white; 
          border: 1px solid rgba(0, 0, 0, 0.05); 
          border-radius: 24px; 
          padding: 1.6rem; 
          transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1); 
          display: flex; 
          flex-direction: column;
          height: 100%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
        }
        .school-card:hover { 
          background: white; 
          transform: translateY(-10px); 
          border-color: rgba(139, 28, 61, 0.15);
          box-shadow: 0 30px 60px rgba(139, 28, 61, 0.08);
        }
        
        .school-icon-wrap { color: var(--maroon); margin-bottom: 1rem; display: inline-flex; }
        .school-card h4 { font-weight: 700; font-size: 1.25rem; margin-bottom: 0.6rem; color: var(--maroon); font-family: 'Playfair Display', serif; }
        .school-card p { font-size: 0.9rem; color: var(--text-light); opacity: 0.85; line-height: 1.7; margin-bottom: 1.2rem; flex-grow: 1; font-weight: 500; }
        
        .btn-outline-white { 
          border: 1.5px solid var(--maroon); 
          color: var(--maroon); 
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
          margin-top: auto;
        }
        .btn-outline-white:hover { 
          background: var(--maroon); 
          color: white; 
          border-color: var(--maroon);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(139, 28, 61, 0.15);
        }
        
        @media (max-width: 1024px) {
          .programs-grid { grid-template-columns: repeat(2, 1fr); }
          .school-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .programs-grid { grid-template-columns: 1fr; }
          .school-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

const ProgramCard = ({ icon, title, meta, desc }) => (
  <div className="prog-card">
    <div className="prog-icon">{icon}</div>
    <h4>{title}</h4>
    <div className="prog-meta">
      {meta.map(m => <span key={m} className="prog-tag">{m}</span>)}
    </div>
    <p className="prog-desc">{desc}</p>
    <button 
      onClick={() => {
        let progVal = "";
        if (title.includes("Abacus")) progVal = "Abacus";
        else if (title.includes("Cube")) progVal = "Rubik Cube";
        else if (title.includes("Vedic")) progVal = "Vedic Math";
        else if (title.includes("Phonics")) progVal = "Phonics";
        else if (title.includes("Handwriting")) progVal = "Handwriting";
        else if (title.includes("Robotics") || title.includes("Coding")) progVal = "Robotics";
        else if (title.includes("Memory")) progVal = "Memory Mastery";
        else if (title.includes("Midbrain")) progVal = "Midbrain Activation";
        else if (title.includes("Brain")) progVal = "Brain Balancing";
        
        window.dispatchEvent(new CustomEvent('open-booking', { detail: { program: progVal } }));
      }}
      className="prog-enroll"
      style={{ border: 'none', background: 'none', cursor: 'pointer' }}
    >
      <span>Enroll & Schedule Demo</span>
      <ChevronRight size={18} />
    </button>
  </div>
);

const SchoolCard = ({ icon, title, desc }) => (
  <div className="school-card">
    <div className="school-icon-wrap">{icon}</div>
    <h4>{title}</h4>
    <p className="school-desc">{desc}</p>
    <button 
      onClick={() => window.dispatchEvent(new CustomEvent('open-booking', { detail: { program: 'School Partnership' } }))}
      className="btn-outline-white"
      style={{ cursor: 'pointer' }}
    >
      <span>Request Partnership Proposal</span>
      <FileBadge size={16} />
    </button>
  </div>
);

export default Programs;