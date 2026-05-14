import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Star, Award, ShieldCheck, Zap, X, Calendar, MapPin, User, ChevronRight, ChevronLeft } from 'lucide-react';

import logoHallOfFame from '../assets/logo_hall_of_fame.png';

// Import assets from directory /1
import imgYugan1 from '../assets/HALLOFFAME/1/DSC07663.JPG';
import imgYugan2 from '../assets/HALLOFFAME/1/DSC08012.JPG';
import imgYugan3 from '../assets/HALLOFFAME/1/DSC08108.JPG';
import imgYugan4 from '../assets/HALLOFFAME/1/DSC08320.JPG';

// Other assets
import imgBlindfold from '../assets/img_blindfold_cube.jpeg';
import imgFlags from '../assets/img_girl_flags.jpeg';
import imgInstructor from '../assets/img_instructor_cube.jpeg';
import imgGirlHoop from '../assets/img_girl_hoop.jpeg';
import imgBoyBack from '../assets/img_boy_back.jpeg';
import imgFounderStudent from '../assets/img_founder_student.jpeg';

const HallOfFame = () => {
  const [selectedRecord, setSelectedRecord] = useState(null);

  const records = [
    {
      images: [imgYugan1, imgYugan2, imgYugan3, imgYugan4],
      src: imgYugan1, // fallback/main image
      title: "World Youngest Record: 195 Flags on Rubik's Cubes",
      achievement: "Lincoln Book of Records",
      desc: "V A Yuganadithya created 195 country flags using 195- 3x3 Rubik's Cubes in just 23 minutes.",
      fullContent: `Lincoln Book of Records takes immense pleasure in appreciating V A YUGANADITHYA (s/o S.Vengatesan and R.Aishwerya) born on 24-10-2017, for achieving a new World Record in the title "World Youngest Kid to create 195 Country Flags in 195- 3*3 Rubik's Cube in least time." 

The world record was performed at 23 minutes of time. The record was trained by Mrs.Aishwerya Vengatesan, the Proprietrix of SMART YUGAM ACADEMY. The event was held at Hotel Simsan, Chennai. This record is recorded in the Lincoln Book of Records on 7th September, 2025.`,
      date: "September 7, 2025",
      location: "Hotel Simsan, Chennai",
      trainer: "Mrs. Aishwerya Vengatesan"
    },
    { src: imgBlindfold, title: "Blindfold Speed Cubing", achievement: "World Record Holder", desc: "Successfully completed 3x3 Rubik's cube while blindfolded in record time." },
    { src: imgFlags, title: "Flag Recognition", achievement: "Global Achievement", desc: "Recognized 195+ country flags while blindfolded in under 2 minutes." },
    { src: imgInstructor, title: "Academy Excellence", achievement: "Certified Expert", desc: "Leading trainers with international certifications in speedcubing and Vedic Math." },
    { src: imgGirlHoop, title: "Multi-Tasking Record", achievement: "International Record", desc: "Solving puzzles while performing hula-hoop, demonstrating extreme concentration." },
    { src: imgBoyBack, title: "Abacus Speed Math", achievement: "State Level Champion", desc: "Performed 100+ complex calculations per minute with 100% accuracy." },
    { src: imgFounderStudent, title: "Legacy of Success", achievement: "200+ Records", desc: "Our academy has facilitated over 200 world and national records across India." },
  ];

  return (
    <div className="hof-page" style={{ marginTop: '70px' }}>
      <section className="hof-hero">
        <motion.div
          className="center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hof-logo-container">
            <img src={logoHallOfFame} alt="Hall of Fame Logo" className="hof-logo-img" />
          </div>
          <div className="hof-badge"><span>Hall of Fame</span></div>
          <h1 className="hof-title">Our World Record Holders</h1>
          <p className="hof-subtitle">Witness the extraordinary achievements of our young champions who have pushed the boundaries of cognitive potential.</p>
        </motion.div>
      </section>

      <section className="hof-grid-section">
        <div className="hof-grid">
          {records.map((rec, index) => (
            <motion.div
              key={index}
              className="hof-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedRecord(rec)}
            >
              <div className="hof-img-wrap">
                {rec.images ? (
                  <CardSlider images={rec.images} />
                ) : (
                  <img src={rec.src} alt={rec.title} />
                )}
                <div className="hof-overlay">
                  <div className="hof-view-btn">View Record Story <ChevronRight size={16} /></div>
                  <div className="hof-icon-float"><Star size={24} fill="currentColor" /></div>
                </div>
              </div>
              <div className="hof-content">
                <div className="hof-meta">
                  <Award size={14} className="hof-meta-icon" />
                  <span>{rec.achievement}</span>
                </div>
                <h3>{rec.title}</h3>
                <p>{rec.desc}</p>
                <div className="hof-card-footer">
                  <ShieldCheck size={16} />
                  <span>Verified Achievement</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="hof-stats">
        <div className="hof-stats-grid">
          <StatBox icon={<Zap />} val="200+" label="Records Facilitated" />
          <StatBox icon={<Users size={24} />} val="5000+" label="Students Mentored" />
          <StatBox icon={<Award />} val="50+" label="Corporate Awards" />
        </div>
      </section>

      {/* MODAL POPUP */}
      <AnimatePresence>
        {selectedRecord && (
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedRecord(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedRecord(null)}><X size={24} /></button>

              <div className="modal-body">
                <div className="modal-img-sidebar">
                  {selectedRecord.images ? (
                    <ModalSlider images={selectedRecord.images} />
                  ) : (
                    <img src={selectedRecord.src} alt={selectedRecord.title} />
                  )}
                  {selectedRecord.date && (
                    <div className="modal-quick-meta">
                      <div className="mqn-item"><Calendar size={16} /> <span>{selectedRecord.date}</span></div>
                      <div className="mqn-item"><MapPin size={16} /> <span>{selectedRecord.location}</span></div>
                      <div className="mqn-item"><User size={16} /> <span>{selectedRecord.trainer}</span></div>
                    </div>
                  )}
                </div>

                <div className="modal-text-content">
                  <span className="modal-label">{selectedRecord.achievement}</span>
                  <h2>{selectedRecord.title}</h2>
                  <div className="modal-desc">
                    {selectedRecord.fullContent ? (
                      selectedRecord.fullContent.split('\n\n').map((para, i) => <p key={i}>{para}</p>)
                    ) : (
                      <p>{selectedRecord.desc}</p>
                    )}
                  </div>

                  <div className="modal-footer-badge">
                    <ShieldCheck size={20} />
                    <span>Official Record Authenticated by Smart Yugam Academy</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .hof-page { background: #fff; }
        .hof-hero { padding: 80px 5% 80px; background: linear-gradient(135deg, #2a0812 0%, #1a1a2e 100%); color: white; text-align: center; }
        .hof-logo-container {
          margin-bottom: 1.5rem;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hof-logo-img {
          width: 160px;
          height: auto;
          filter: drop-shadow(0 10px 25px rgba(245, 180, 0, 0.45));
          animation: floatLogo 6s ease-in-out infinite;
          transition: 0.5s;
        }
        .hof-logo-img:hover {
          transform: scale(1.08) rotate(2deg);
          filter: drop-shadow(0 15px 40px rgba(245, 180, 0, 0.65));
        }
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .hof-badge { display: inline-flex; align-items: center; gap: 0.8rem; background: rgba(245,180,0,0.15); color: var(--gold-light); padding: 0.6rem 1.4rem; border-radius: 50px; font-weight: 800; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 2rem; border: 1px solid rgba(245,180,0,0.3); }
        .hof-title { font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 6vw, 4.5rem); line-height: 1.1; margin-bottom: 1.5rem; color: var(--gold); }
        .hof-subtitle { max-width: 700px; margin: 0 auto; font-size: 1.15rem; color: rgba(255, 255, 255, 0.95); line-height: 1.7; font-weight: 500; }

        .hof-grid-section { padding: 100px 5%; background: #fdfaf7; }
        .hof-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; max-width: 1400px; margin: 0 auto; }
        
        @media (max-width: 1200px) {
          .hof-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 900px) {
          .hof-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }
        }
        @media (max-width: 600px) {
          .hof-grid { grid-template-columns: 1fr; }
        }
        
        .hof-card { background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.05); transition: 0.5s; cursor: pointer; display: flex; flex-direction: column; height: 100%; }
        .hof-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(139,28,61,0.12); }
        
        .hof-img-wrap { height: 280px; overflow: hidden; position: relative; background: #000; }
        .hof-img-wrap img { width: 100%; height: 100%; object-fit: cover; transition: 0.8s; }
        .hof-card:hover .hof-img-wrap img { transform: scale(1.1); }
        .hof-overlay { position: absolute; inset: 0; background: linear-gradient(0deg, rgba(139,28,61,0.6), transparent); opacity: 0; transition: 0.5s; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem; z-index: 2; }
        .hof-card:hover .hof-overlay { opacity: 1; }
        .hof-view-btn { background: white; color: var(--maroon); padding: 0.6rem 1.2rem; border-radius: 50px; font-weight: 800; font-size: 0.8rem; display: flex; align-items: center; gap: 0.5rem; transform: translateY(10px); transition: 0.4s; }
        .hof-card:hover .hof-view-btn { transform: translateY(0); }
        .hof-icon-float { color: white; transform: scale(0.5); transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .hof-card:hover .hof-icon-float { transform: scale(1); }
 
        .hof-content { padding: 2rem; display: flex; flex-direction: column; flex-grow: 1; }
        .hof-meta { display: flex; align-items: center; gap: 0.5rem; color: var(--gold); font-weight: 800; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.8rem; }
        .hof-content h3 { font-family: 'Playfair Display', serif; font-size: 1.4rem; color: var(--maroon); margin-bottom: 0.8rem; }
        .hof-content p { font-size: 0.95rem; color: var(--text-light); line-height: 1.6; margin-bottom: 1.5rem; }
        .hof-card-footer { border-top: 1px solid rgba(0,0,0,0.05); padding-top: 1.2rem; display: flex; align-items: center; gap: 0.6rem; color: #4db8a0; font-weight: 700; font-size: 0.8rem; margin-top: auto; }

        .hof-stats { padding: 100px 5%; background: white; }
        .hof-stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; max-width: 1000px; margin: 0 auto; text-align: center; }
        .stat-box { display: flex; flex-direction: column; align-items: center; gap: 0.5rem; }
        .stat-icon { color: var(--maroon); margin-bottom: 1rem; padding: 1rem; background: rgba(139,28,61,0.05); border-radius: 20px; }
        .stat-val { font-family: 'Playfair Display', serif; font-size: 3rem; font-weight: 900; color: var(--maroon); line-height: 1; }
        .stat-label { font-weight: 700; color: var(--text-light); font-size: 0.9rem; letter-spacing: 1px; text-transform: uppercase; }

        /* MODAL CSS */
        .modal-backdrop { position: fixed; inset: 0; background: rgba(13, 13, 26, 0.9); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 2rem; backdrop-filter: blur(10px); }
        .modal-content { background: white; border-radius: 32px; width: 100%; max-width: 1000px; max-height: 90vh; overflow: hidden; position: relative; display: flex; flex-direction: column; box-shadow: 0 40px 100px rgba(0,0,0,0.5); }
        .modal-close { position: absolute; top: 1.5rem; right: 1.5rem; background: rgba(0,0,0,0.05); border: none; border-radius: 50%; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; z-index: 10; color: var(--maroon); }
        .modal-close:hover { background: var(--maroon); color: white; }
        
        .modal-body { display: flex; height: 100%; flex-wrap: wrap; overflow-y: auto; }
        .modal-img-sidebar { flex: 1; min-width: 350px; background: #000; position: relative; overflow: hidden; }
        .modal-img-sidebar img { width: 100%; height: 100%; object-fit: contain; }
        
        .modal-quick-meta { position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(0deg, var(--maroon), transparent); padding: 3rem 2rem 2rem; color: white; display: flex; flex-direction: column; gap: 0.8rem; z-index: 5; }
        .mqn-item { display: flex; align-items: center; gap: 0.8rem; font-size: 0.85rem; font-weight: 600; }
        .mqn-item svg { color: var(--gold); }

        .modal-text-content { flex: 1.2; padding: 4rem; overflow-y: auto; min-width: 350px; }
        .modal-label { background: rgba(245,180,0,0.1); color: #9a7200; padding: 0.4rem 1rem; border-radius: 50px; font-weight: 800; font-size: 0.75rem; text-transform: uppercase; margin-bottom: 1.5rem; display: inline-block; }
        .modal-text-content h2 { font-family: 'Playfair Display', serif; font-size: 2.2rem; color: var(--maroon); margin-bottom: 2rem; line-height: 1.2; }
        .modal-desc p { color: var(--text-light); font-size: 1.1rem; line-height: 1.8; margin-bottom: 1.5rem; font-weight: 500; }
        
        .modal-footer-badge { margin-top: 3rem; padding-top: 2rem; border-top: 1px solid rgba(0,0,0,0.06); display: flex; align-items: center; gap: 1rem; color: #4db8a0; font-weight: 700; font-size: 0.9rem; }

        /* SLIDER CSS */
        .slider-container { position: relative; width: 100%; height: 100%; }
        .slider-img { width: 100%; height: 100%; object-fit: cover; }
        .slider-btn { position: absolute; top: 50%; transform: translateY(-50%); background: rgba(255,255,255,0.2); color: white; border: none; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(5px); z-index: 10; transition: 0.3s; }
        .slider-btn:hover { background: white; color: var(--maroon); }
        .slider-btn-prev { left: 1rem; }
        .slider-btn-next { right: 1rem; }

        @media(max-width: 900px) {
          .hof-stats-grid { grid-template-columns: 1fr; gap: 4rem; }
          .hof-grid { grid-template-columns: 1fr; }
          .modal-body { flex-direction: column; }
          .modal-img-sidebar { min-height: 300px; height: 300px; flex: none; }
          .modal-text-content { padding: 2.5rem; flex: none; }
          .modal-text-content h2 { font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
};

const CardSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="slider-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="slider-img"
        />
      </AnimatePresence>
    </div>
  );
};

const ModalSlider = ({ images }) => {
  const [index, setIndex] = useState(0);

  const handleNext = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev + 1) % images.length);
  };
  const handlePrev = (e) => {
    e.stopPropagation();
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          style={{ objectFit: 'contain' }}
          className="slider-img"
        />
      </AnimatePresence>
      <button className="slider-btn slider-btn-prev" onClick={handlePrev}><ChevronLeft size={20} /></button>
      <button className="slider-btn slider-btn-next" onClick={handleNext}><ChevronRight size={20} /></button>
    </div>
  );
};

const StatBox = ({ icon, val, label }) => (
  <div className="stat-box">
    <div className="stat-icon">{icon}</div>
    <div className="stat-val">{val}</div>
    <div className="stat-label">{label}</div>
  </div>
);

const Users = ({ size }) => <span style={{ fontSize: size }}>👥</span>; // Fallback for Users if missing in lucide version

export default HallOfFame;
