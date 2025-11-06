
import React from 'react';
import { motion } from 'framer-motion';
import OperatingStatus from './OperatingStatus';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="https://picsum.photos/1920/1080?random=1"
        alt="Elegant dining setting with potato dishes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold font-serif mb-4 leading-tight tracking-wide" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}>
          Welcome to Potato & Friends
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Celebrating the world's most humble ingredient in the most extraordinary ways.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#menu"
          className="bg-amber-800 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-900 transition-transform duration-300 hover:scale-105 inline-block"
        >
          Explore the Menu
        </motion.a>
         <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
        >
            <OperatingStatus />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
