import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: "Priya Sharma", loc: "Parent, Chennai", text: "My daughter's concentration has improved dramatically after joining the Abacus program. The teaching methodology is truly unique.", initial: "PS" },
    { name: "Rajesh Kumar", loc: "Parent, Coimbatore", text: "The Rubik's Cube training gave my son a world record! Dr. Aishwerya and her team are exceptional mentors.", initial: "RK" },
    { name: "Meera Patel", loc: "Parent, Chennai", text: "The Mid Brain Activation workshop was a game changer. The results we saw in sensory perception are simply amazing.", initial: "MP" },
    { name: "School Principal", loc: "Adarsh International School", text: "Our school partnered with Smart Yugam for ECA programs. Student engagement and cognitive interest have spiked remarkably.", initial: "AI" },
    { name: "Sneha Reddy", loc: "Parent, Coimbatore", text: "The communication skills program transformed my shy daughter into a confident public speaker. Highly recommended!", initial: "SR" },
    { name: "Dr. Vikram Singh", loc: "Parent, Chennai", text: "Vedic Mathematics classes helped my son crack competitive math exams with ease. The trainers are world-class experts.", initial: "VS" }
  ];

  const allTestimonials = [...testimonials, ...testimonials]; // Duplicate for seamless scroll

  return (
    <section className="testimonials">
      <motion.div 
        className="center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-label">Success Stories</span>
        <h2 className="section-title">What Our Families Say</h2>
        <p style={{ color: 'var(--text-light)', marginTop: '0.5rem', maxWidth: '500px', marginInline: 'auto' }}>
          Hear from the parents and leaders who have witnessed the transformation firsthand.
        </p>
      </motion.div>

      <div className="testi-scroller-wrap">
        <div className="testi-slider">
          {allTestimonials.map((t, idx) => (
            <div key={idx} className="testi-card">
              <div className="testi-quote-icon"><Quote size={32} /></div>
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.initial}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-loc">{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .testimonials { padding: 80px 0 60px; background: #fffcf9; overflow: hidden; position: relative; }
        .testimonials::before { content: ''; position: absolute; inset: 0; background: radial-gradient(circle, rgba(139,28,61,0.03) 0%, transparent 70%); }
        
        .testi-scroller-wrap { margin-top: 5rem; overflow: hidden; position: relative; padding: 2rem 0; }
        .testi-scroller-wrap::before, .testi-scroller-wrap::after { 
          content: ''; position: absolute; z-index: 2; top: 0; bottom: 0; width: 15%; 
        }
        .testi-scroller-wrap::before { left: 0; background: linear-gradient(to right, #fffcf9, transparent); }
        .testi-scroller-wrap::after { right: 0; background: linear-gradient(to left, #fffcf9, transparent); }

        .testi-slider { display: flex; gap: 2rem; animation: scrollTestimonials 40s linear infinite; width: max-content; }
        .testi-slider:hover { animation-play-state: paused; }
        
        @keyframes scrollTestimonials {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .testi-card { 
          background: white; 
          border-radius: 24px; 
          padding: 2.5rem; 
          width: 380px; 
          box-shadow: 0 15px 40px rgba(0,0,0,0.04); 
          border: 1px solid rgba(0,0,0,0.02);
          position: relative;
          transition: 0.3s;
        }
        .testi-card:hover { transform: translateY(-5px); box-shadow: 0 20px 60px rgba(139,28,61,0.08); }
        
        .testi-quote-icon { position: absolute; top: 1rem; right: 1.5rem; color: rgba(139,28,61,0.05); }
        .stars { color: var(--gold); display: flex; gap: 4px; margin-bottom: 1.5rem; }
        .testi-text { font-size: 1rem; color: var(--text-light); line-height: 1.7; margin-bottom: 2rem; font-style: italic; font-weight: 500; }
        .testi-author { display: flex; align-items: center; gap: 1.2rem; }
        .testi-avatar { 
          width: 50px; height: 50px; border-radius: 16px; 
          background: linear-gradient(135deg,var(--maroon),var(--gold)); 
          display: flex; align-items: center; justify-content: center; 
          font-weight: 800; color: white; font-size: 1.1rem; 
        }
        .testi-name { font-weight: 800; font-size: 1.05rem; color: var(--text); }
        .testi-loc { font-size: 0.8rem; color: var(--gold); font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }

        @media(max-width: 600px) {
          .testi-card { width: 300px; padding: 2rem; }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
