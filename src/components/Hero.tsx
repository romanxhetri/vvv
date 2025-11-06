import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="https://picsum.photos/1920/1080?random=1"
        alt="Elegant dining setting"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-serif mb-4 leading-tight tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Experience Culinary Excellence
        </h1>
        <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Where every dish tells a story of passion and flavor.
        </p>
        <a
          href="#menu"
          className="bg-amber-800 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-900 transition-transform duration-300 hover:scale-105 inline-block"
        >
          Discover Our Menu
        </a>
      </div>
    </section>
  );
};

export default Hero;