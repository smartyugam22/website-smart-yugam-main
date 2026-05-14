import React from 'react';
import { motion } from 'framer-motion';

// Import school logos
import logoVelammalNexus from '../assets/logo_velammal_nexus.png';
import logoVelammalMatric from '../assets/logo_velammal_matric.png';
import logoGrtMahalakshmi from '../assets/logo_grt_mahalakshmi.png';
import logoAbsPublic from '../assets/logo_abs_public.png';
import logoNsnGlobal from '../assets/logo_nsn_global.jpg';
import logoVelsVidyashram from '../assets/logo_vels_vidyashram.png';
import logoAgasthyaPublic from '../assets/logo_agasthya_public.jpg';
import logoLittleMillennium from '../assets/logo_little_millennium.jpg';

const Partners = () => {
  const partners = [
    { logo: logoVelammalNexus, name: "Velammal Nexus" },
    { logo: logoVelammalMatric, name: "Velammal Matriculation" },
    { logo: logoGrtMahalakshmi, name: "GRT Mahalakshmi School" },
    { logo: logoAbsPublic, name: "ABS Public School" },
    { logo: logoNsnGlobal, name: "NSN Global School" },
    { logo: logoVelsVidyashram, name: "Vels Vidyashram" },
    { logo: logoAgasthyaPublic, name: "Agasthya Public School" },
    { logo: logoLittleMillennium, name: "Little Millennium" },
  ];

  // Quadruple the partners array to ensure seamless, infinite loop regardless of screen width
  const scrollItems = [...partners, ...partners, ...partners, ...partners];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Empowering Institutions</span>
          <h2 className="section-title">Our Trusted School Partners</h2>
          <p className="section-sub">Collaborating with leading schools to deliver world-class cognitive and skill development programs.</p>
        </motion.div>

        {/* INFINITE SCROLLING MARQUEE */}
        <div className="marquee-wrapper">
          <div className="marquee-fade-left"></div>
          <div className="marquee-track">
            {scrollItems.map((item, index) => (
              <div key={index} className="partner-card">
                <div className="partner-logo-box">
                  <img src={item.logo} alt={item.name} className="partner-logo-img" />
                </div>
                <span className="partner-name">{item.name}</span>
              </div>
            ))}
          </div>
          <div className="marquee-fade-right"></div>
        </div>
      </div>

      <style jsx>{`
        .partners-section {
          padding: 80px 0 60px;
          background: #ffffff;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid rgba(0, 0, 0, 0.04);
        }
        .partners-container {
          max-width: 100%;
          margin: 0 auto;
        }
        .section-sub {
          color: var(--text-light);
          margin-top: 0.5rem;
          margin-bottom: 3.5rem;
          max-width: 600px;
          margin-inline: auto;
          font-weight: 500;
          font-size: 1rem;
        }
        
        /* MARQUEE CONTAINER */
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 1.5rem 0;
          display: flex;
          align-items: center;
        }
        
        /* EDGE GRADIENT FADES */
        .marquee-fade-left, .marquee-fade-right {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 15%;
          z-index: 2;
          pointer-events: none;
        }
        .marquee-fade-left {
          left: 0;
          background: linear-gradient(to right, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
        }
        .marquee-fade-right {
          right: 0;
          background: linear-gradient(to left, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
        }

        /* RUNNING TRACK */
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 2.5rem;
          animation: scrollMarquee 80s linear infinite;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        /* PARTNER ITEM CARD */
        .partner-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.8rem;
          background: #ffffff;
          padding: 1.5rem 2.2rem;
          border-radius: 24px;
          box-shadow: 0 10px 35px rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(139, 28, 61, 0.06);
          transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          cursor: pointer;
          width: 220px;
          flex-shrink: 0;
        }
        
        .partner-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 20px 45px rgba(139, 28, 61, 0.1);
          border-color: rgba(139, 28, 61, 0.2);
          background: #fffdfb;
        }

        /* LOGO IMAGE BOX */
        .partner-logo-box {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border: 1px solid rgba(0, 0, 0, 0.03);
          box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.02);
          flex-shrink: 0;
        }

        .partner-logo-img {
          width: 85%;
          height: 85%;
          object-fit: contain;
          transition: 0.4s;
        }
        
        .partner-card:hover .partner-logo-img {
          transform: rotate(3deg) scale(1.08);
        }

        /* TEXT LABEL */
        .partner-name {
          font-family: var(--sans);
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--maroon);
          letter-spacing: -0.2px;
          white-space: nowrap;
          text-align: center;
        }

        /* ANIMATION KEYFRAMES */
        @keyframes scrollMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Scroll half the total width of duplicated content */
            transform: translateX(-50%);
          }
        }

        @media (max-width: 768px) {
          .partners-section {
            padding: 60px 0 40px;
          }
          .partner-card {
            padding: 1.2rem 1.5rem;
            width: 180px;
            gap: 0.6rem;
            border-radius: 18px;
          }
          .partner-logo-box {
            width: 55px;
            height: 55px;
          }
          .partner-name {
            font-size: 0.8rem;
          }
          .marquee-track {
            gap: 1.5rem;
            animation-duration: 60s;
          }
        }
      `}</style>
    </section>
  );
};

export default Partners;
