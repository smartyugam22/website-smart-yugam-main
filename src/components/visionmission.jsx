import React from 'react';

const VisionMission = () => {
  return (
    <section className="py-[80px] px-[5%] bg-gradient-to-br from-[#fff5e8] to-[#fdeef5]">
      <div className="text-center mb-12">
        <span className="text-[0.78rem] font-extrabold tracking-[3px] text-gold uppercase mb-3 block">Our Philosophy</span>
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] font-black text-maroon leading-tight">Vision & Mission</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-12 max-w-[1200px] mx-auto fade-in visible">
        <div className="relative overflow-hidden bg-white p-12 rounded-[20px] shadow-soft before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:bg-gradient-to-r before:from-maroon before:to-maroon-light">
          <div className="text-[3rem] mb-4">🔭</div>
          <h3 className="font-serif text-[1.6rem] text-maroon mb-4 font-bold">Our Vision</h3>
          <p className="text-text-light leading-[1.8] text-[1.05rem]">To nurture innovation and inspire creativity — shaping a generation empowered to think, explore, and lead confidently in a rapidly evolving world.</p>
        </div>
        
        <div className="relative overflow-hidden bg-white p-12 rounded-[20px] shadow-soft before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:bg-gradient-to-r before:from-gold before:to-gold-light">
          <div className="text-[3rem] mb-4">🚀</div>
          <h3 className="font-serif text-[1.6rem] text-maroon mb-4 font-bold">Our Mission</h3>
          <p className="text-text-light leading-[1.8] text-[1.05rem]">To awaken the thinker, maker, and leader in every child by blending hands-on STEM experiences with real-world innovation and cognitive development techniques.</p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
