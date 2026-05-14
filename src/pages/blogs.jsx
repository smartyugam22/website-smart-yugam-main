import React from 'react';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight, MessageSquare } from 'lucide-react';

// Using existing assets for demonstration
import imgBlog1 from '../assets/img_girl_hoop.jpeg';
import imgBlog2 from '../assets/img_instructor_cube.jpeg';
import imgBlog3 from '../assets/img_founder_student.jpeg';

const Blogs = () => {
  const posts = [
    {
      title: "The Science Behind Abacus & Mental Math",
      excerpt: "Discover how mental arithmetic training enhances neuroplasticity and cognitive function in children under 12.",
      author: "Dr. Aishwerya R",
      date: "May 10, 2025",
      read: "5 min read",
      img: imgBlog1
    },
    {
      title: "STEM: Preparing for the 2030 Job Market",
      excerpt: "Why robotics and creative problem-solving are becoming the foundation of future educational standards.",
      author: "Mr. Hari Vignesh",
      date: "May 22, 2025",
      read: "7 min read",
      img: imgBlog2
    },
    {
      title: "Concentration Secrets: The Rubik's Cube Method",
      excerpt: "How speedcubing can improve focus, spatial reasoning, and frustration tolerance in young learners.",
      author: "Academy Instructor",
      date: "June 02, 2025",
      read: "4 min read",
      img: imgBlog3
    }
  ];

  return (
    <div className="blogs-page" style={{ marginTop: '70px' }}>
      <section className="blogs-hero">
        <motion.div 
          className="center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-label">Academy Insights</span>
          <h1 className="section-title">Knowledge & Inspiration</h1>
          <p className="hero-p">Exploring cognitive development, educational trends, and student success stories from our experts.</p>
        </motion.div>
      </section>

      <section className="blogs-list">
        <div className="blogs-grid">
          {posts.map((post, index) => (
            <motion.div 
              className="blog-card" 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="blog-img">
                <img src={post.img} alt={post.title} />
              </div>
              <div className="blog-info">
                <div className="blog-meta">
                  <div className="meta-item"><Clock size={14} /><span>{post.date}</span></div>
                  <div className="meta-item"><User size={14} /><span>{post.author}</span></div>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-footer">
                  <div className="meta-item read-time"><MessageSquare size={14} /><span>{post.read}</span></div>
                  <button className="read-btn">
                    <span>Read Full Post</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <style jsx>{`
        .blogs-hero { padding: 100px 5% 60px; background: linear-gradient(135deg, #2a0812 0%, #1a1a2e 100%); color: white; text-align: center; }
        .blogs-hero .section-title { color: var(--gold); }
        .hero-p { color: rgba(255,255,255,0.7); max-width: 600px; margin: 1rem auto; font-size: 1.1rem; }
        
        .blogs-list { padding: 100px 5%; background: #fff; }
        .blogs-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap: 4rem; max-width: 1400px; margin: 0 auto; }
        
        .blog-card { background: white; border-radius: 28px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.04); transition: 0.4s cubic-bezier(0.165, 0.84, 0.44, 1); border: 1px solid rgba(0,0,0,0.02); }
        .blog-card:hover { transform: translateY(-15px); box-shadow: 0 40px 80px rgba(139,28,61,0.1); border-color: rgba(139,28,61,0.1); }
        
        .blog-img { height: 260px; overflow: hidden; }
        .blog-img img { width: 100%; height: 100%; object-fit: cover; transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1); }
        .blog-card:hover .blog-img img { transform: scale(1.1); filter: contrast(1.1); }
        
        .blog-info { padding: 3rem; }
        .blog-meta { display: flex; gap: 1.5rem; margin-bottom: 1.2rem; }
        .meta-item { display: flex; align-items: center; gap: 0.6rem; color: var(--text-light); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; }
        .meta-item svg { color: var(--gold); }
        
        .blog-info h3 { font-family: 'Playfair Display', serif; font-size: 1.8rem; color: var(--maroon); margin-bottom: 1.2rem; line-height: 1.2; font-weight: 800; }
        .blog-info p { color: var(--text-light); line-height: 1.8; font-size: 1rem; margin-bottom: 2.5rem; opacity: 0.8; font-weight: 500; }
        
        .blog-footer { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid rgba(0,0,0,0.05); padding-top: 2rem; }
        .read-btn { background: none; border: none; color: var(--maroon); font-weight: 800; font-size: 0.9rem; cursor: pointer; transition: 0.3s; display: flex; align-items: center; gap: 0.8rem; padding: 0.5rem; border-radius: 8px; }
        .read-btn:hover { background: rgba(139,28,61,0.05); transform: translateX(5px); }

        @media(max-width: 768px) {
          .blogs-grid { grid-template-columns: 1fr; }
          .blog-info { padding: 2rem; }
        }
      `}</style>
    </div>
  );
};

export default Blogs;
