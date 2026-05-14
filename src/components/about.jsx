import React from 'react';

const About = () => {
  return (
    <section className="py-[100px] px-[5%] bg-white" id="about">
      <div className="text-center mb-16">
        <span className="text-[0.78rem] font-extrabold tracking-[3px] color-gold uppercase mb-3 block">Leadership</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black text-maroon leading-tight">Meet Our Visionary Founder</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-20 items-center mb-20 fade-in visible">
        <div className="relative">
          <img src="/img_founder_arms.png" alt="Dr. Aishwerya R – Founder" className="w-1/2 h-[260px] mx-auto object-cover object-top rounded-[20px] shadow-lg-soft" />
          <div className="absolute bottom-[-20px] right-[-20px] bg-gold text-text p-6 rounded-[20px] font-extrabold text-[1.5rem] font-serif shadow-soft text-center leading-tight">
            EdTech<br />Pioneer
            <small className="block text-[0.65rem] font-sans font-semibold tracking-[1px] mt-1">INNOVATOR</small>
          </div>
        </div>
        <div>
          <span className="text-[0.78rem] font-extrabold tracking-[3px] text-gold uppercase mb-3 block">Founder & CEO</span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black text-maroon leading-tight mb-4">Dr. Aishwerya R</h2>
          <blockquote className="font-serif text-[1.4rem] text-maroon italic border-l-4 border-gold pl-[1.2rem] my-6">
            "Learning should be fun, practical & future-ready."
          </blockquote>
          <p className="text-text-light leading-[1.8] text-[1rem] mb-6">
            An acclaimed EdTech entrepreneur and educator, Dr. Aishwerya has dedicated her career to mentoring thousands of students in innovative academics, life skills, and transformative programs. Her vision drives Smart Yugam Academy's mission to shape the next generation of thinkers and achievers.
          </p>
          <p className="font-extrabold text-[1.2rem] text-text">Dr. Aishwerya R</p>
          <span className="inline-block bg-maroon/10 text-maroon px-[0.8rem] py-[0.3rem] rounded-full text-[0.78rem] font-bold mt-2">Founder & CEO, Smart Yugam Academy</span>
        </div>
      </div>
    </section>
  );
};

export default About;
