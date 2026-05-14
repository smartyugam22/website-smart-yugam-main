import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

// Using existing assets for demonstration
import imgEvent1 from '../assets/img_blindfold_cube.jpeg';
import imgEvent2 from '../assets/img_girl_flags.jpeg';
import imgEvent3 from '../assets/img_instructor_cube.jpeg';

const Events = () => {
  const events = [
    {
      title: "World Record Rubik's Challenge",
      date: "August 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Chennai Main Center",
      img: imgEvent1,
      type: "World Record Attempt"
    },
    {
      title: "Regional STEM & Robotics Expo",
      date: "September 05, 2025",
      time: "09:00 AM - 6:00 PM",
      location: "Coimbatore Branch",
      img: imgEvent2,
      type: "Exhibition"
    },
    {
      title: "Annual Cognitive Excellence Summit",
      date: "October 20, 2025",
      time: "11:00 AM - 3:00 PM",
      location: "Virtual Event (Online)",
      img: imgEvent3,
      type: "Workshop"
    }
  ];

  return (
    <div className="events-page" style={{ marginTop: '70px' }}>
      <section className="events-hero">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Academy Highlights</span>
          <h1 className="section-title">Upcoming Events & Workshops</h1>
          <p className="hero-p">Stay updated with our latest competitions, world-record events, and educational expos across India.</p>
        </motion.div>
      </section>

      <section className="events-list">
        <div className="events-grid">
          {events.map((event, index) => (
            <motion.div 
              className="event-card" 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="event-img">
                <img src={event.img} alt={event.title} />
                <div className="event-type">{event.type}</div>
              </div>
              <div className="event-info">
                <h3>{event.title}</h3>
                <div className="event-meta">
                  <div className="meta-item"><Calendar size={16} /><span>{event.date}</span></div>
                  <div className="meta-item"><Clock size={16} /><span>{event.time}</span></div>
                  <div className="meta-item"><MapPin size={16} /><span>{event.location}</span></div>
                </div>
                <button 
                  onClick={() => {
                    let progVal = "";
                    const title = event.title;
                    if (title.includes("Abacus")) progVal = "Abacus";
                    else if (title.includes("Cube")) progVal = "Rubik Cube";
                    else if (title.includes("Vedic")) progVal = "Vedic Math";
                    else if (title.includes("Robotics") || title.includes("Coding")) progVal = "Robotics";
                    
                    window.dispatchEvent(new CustomEvent('open-booking', { detail: { program: progVal } }));
                  }}
                  className="book-btn"
                  style={{ cursor: 'pointer' }}
                >
                  <span>Register Now</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .events-hero { padding: 100px 5% 60px; background: linear-gradient(135deg, #2a0812 0%, #1a1a2e 100%); color: white; text-align: center; }
        .events-hero .section-title { color: var(--gold); }
        .hero-p { color: rgba(255,255,255,0.7); max-width: 600px; margin: 1rem auto; font-size: 1.1rem; }
        
        .events-list { padding: 100px 5%; background: #fdfaf7; }
        .events-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; max-width: 1400px; margin: 0 auto; }
        
        .event-card { background: white; border-radius: 24px; overflow: hidden; box-shadow: 0 15px 40px rgba(0,0,0,0.05); transition: 0.4s; display: flex; flex-direction: column; height: 100%; }
        .event-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(139,28,61,0.12); }
        
        .event-img { height: 240px; position: relative; }
        .event-img img { width: 100%; height: 100%; object-fit: cover; }
        .event-type { position: absolute; top: 1.5rem; right: 1.5rem; background: var(--gold); color: var(--maroon); padding: 0.4rem 1rem; border-radius: 50px; font-weight: 800; font-size: 0.75rem; text-transform: uppercase; }
        
        .event-info { padding: 2.5rem; display: flex; flex-direction: column; flex-grow: 1; }
        .event-info h3 { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: var(--maroon); margin-bottom: 1.5rem; line-height: 1.3; }
        
        .event-meta { display: flex; flex-direction: column; gap: 0.8rem; margin-bottom: 2rem; }
        .meta-item { display: flex; align-items: center; gap: 0.8rem; color: var(--text-light); font-size: 0.9rem; font-weight: 600; }
        .meta-item svg { color: var(--gold); }
        
        .book-btn { width: 100%; background: var(--maroon); color: white; border: none; padding: 1rem; border-radius: 12px; font-weight: 800; font-size: 0.9rem; cursor: pointer; transition: 0.3s; display: flex; align-items: center; justify-content: center; gap: 0.8rem; margin-top: auto; }
        .book-btn:hover { background: var(--maroon-dark); transform: translateY(-2px); }
 
        @media (max-width: 1024px) {
          .events-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .events-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Events;
