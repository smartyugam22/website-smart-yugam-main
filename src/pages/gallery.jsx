import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, Filter, Maximize2 } from 'lucide-react';

// Import assets
import img1 from '../assets/img_founder_student.jpeg';
import img2 from '../assets/img_blindfold_cube.jpeg';
import img3 from '../assets/img_girl_hoop.jpeg';
import img4 from '../assets/img_girl_flags.jpeg';
import img5 from '../assets/img_instructor_cube.jpeg';
import img6 from '../assets/img_boy_back.jpeg';
import img7 from '../assets/img_founder_arms.png';

const Gallery = () => {
  const [filter, setFilter] = useState('All');

  const images = [
    { src: img1, category: 'Training', alt: 'Training Session' },
    { src: img2, category: 'Training', alt: 'Blindfold Training' },
    { src: img3, category: 'Awards', alt: 'World Record Training' },
    { src: img4, category: 'Events', alt: 'Mid Brain Activation' },
    { src: img5, category: 'Training', alt: 'Rubik\'s Cube Expert' },
    { src: img6, category: 'Awards', alt: 'Student Achievement' },
    { src: img7, category: 'Events', alt: 'Founder' },
  ];

  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <section className="gallery-page" style={{ marginTop: '70px' }}>
      <div className="gallery-container">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Academy Life</span>
          <h2 className="section-title">A Glimpse into Our World</h2>
          <p style={{ color: 'var(--text-light)', marginTop: '.5rem', maxWidth: '600px', marginInline: 'auto' }}>
            Capturing the moments of focus, achievement, and innovation that define the Smart Yugam experience.
          </p>
        </motion.div>

        <motion.div 
          className="gallery-filters-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="filter-header">
            <Filter size={18} />
            <span>Filter Category</span>
          </div>
          <div className="gallery-filters">
            {['All', 'Training', 'Events', 'Awards'].map(f => (
              <button 
                key={f}
                className={`filter-btn ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'All' ? <span style={{ color: 'var(--gold)' }}>{f}</span> : f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="gallery-masonry"
        >
          <AnimatePresence mode='popLayout'>
            {filteredImages.map((img, index) => (
              <motion.div 
                key={img.alt}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="gallery-item-wrap"
              >
                <div className="gallery-item">
                  <img src={img.src} alt={img.alt} />
                  <div className="gallery-hover">
                    <Maximize2 size={24} className="hover-icon" />
                    <div className="hover-text">
                      <span className="hover-cat">{img.category}</span>
                      <p>{img.alt}</p>
                    </div>
                  </div>
                  <div className="category-badge">
                    <ImageIcon size={14} />
                    <span>{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style jsx>{`
        .gallery-page { padding: 120px 0; background: #fffcf9; min-height: 100vh; }
        .gallery-container { padding: 0 5%; max-width: 1400px; margin: 0 auto; }
        
        .gallery-filters-wrap { margin: 4rem 0 3rem; text-align: center; }
        .filter-header { display: flex; align-items: center; justify-content: center; gap: 0.6rem; color: var(--maroon); font-weight: 800; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1.5rem; }
        .gallery-filters { display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; }
        
        .filter-btn { 
          padding: 0.7rem 1.6rem; 
          border-radius: 50px; 
          border: 1px solid rgba(139, 28, 61, 0.15); 
          background: white; 
          font-weight: 700; 
          font-size: 0.9rem; 
          cursor: pointer; 
          transition: 0.3s; 
          color: var(--maroon);
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }
        .filter-btn.active, .filter-btn:hover { 
          background: var(--maroon); 
          color: var(--gold) !important; 
          border-color: var(--gold); 
          box-shadow: 0 10px 25px rgba(139, 28, 61, 0.3);
          transform: translateY(-2px);
        }
        
        .gallery-masonry { columns: 3; gap: 1.5rem; margin-top: 3rem; }
        .gallery-item-wrap { break-inside: avoid; margin-bottom: 1.5rem; }
        
        .gallery-item { 
          border-radius: 20px; 
          overflow: hidden; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.05); 
          position: relative;
          background: white;
          cursor: pointer;
        }
        .gallery-item img { width: 100%; display: block; transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .gallery-item:hover img { transform: scale(1.1) rotate(1deg); filter: brightness(0.7); }
        
        .gallery-hover { 
          position: absolute; 
          inset: 0; 
          background: rgba(139, 28, 61, 0.4); 
          display: flex; 
          flex-direction: column;
          align-items: center; 
          justify-content: center; 
          opacity: 0; 
          transition: 0.5s ease;
          gap: 1rem;
        }
        .gallery-item:hover .gallery-hover { opacity: 1; backdrop-filter: blur(4px); }
        .hover-icon { color: white; transform: scale(0.5); transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .gallery-item:hover .hover-icon { transform: scale(1); }
        
        .hover-text { text-align: center; color: white; padding: 0 1.5rem; transform: translateY(20px); transition: 0.5s; opacity: 0; }
        .gallery-item:hover .hover-text { transform: translateY(0); opacity: 1; }
        .hover-cat { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 2px; font-weight: 800; color: var(--gold-light); margin-bottom: 0.4rem; display: block; }
        .hover-text p { font-size: 1rem; font-weight: 700; line-height: 1.4; }
        
        .category-badge { 
          position: absolute; 
          top: 1.2rem; 
          left: 1.2rem; 
          background: rgba(255,255,255,0.9); 
          padding: 0.4rem 0.8rem; 
          border-radius: 50px; 
          font-size: 0.65rem; 
          font-weight: 800; 
          color: var(--maroon); 
          display: flex; 
          align-items: center; 
          gap: 0.5rem; 
          backdrop-filter: blur(10px); 
          z-index: 2;
          transition: 0.3s;
          text-transform: uppercase;
        }
        .gallery-item:hover .category-badge { opacity: 0; transform: scale(0.8); }

        @media(max-width: 1024px) { .gallery-masonry { columns: 2; } }
        @media(max-width: 650px) { .gallery-masonry { columns: 1; } }
      `}</style>
    </section>
  );
};

export default Gallery;
