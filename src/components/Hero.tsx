
import React from 'react';
import { motion } from 'framer-motion';
import OperatingStatus from './OperatingStatus';
import AnimatedText3D from './AnimatedText3D';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-10"></div>
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
        alt="Elegant dining setting with potato dishes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 text-center px-4">
        <AnimatedText3D 
          el="h1"
          text="Welcome to Potato & Friends"
          className="text-5xl md:text-7xl font-bold font-serif mb-4 leading-tight tracking-wide"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)' }}
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}>
          Celebrating the world's most humble ingredient in the most extraordinary ways.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#menu"
            className="bg-amber-800 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-amber-900 transition-all duration-300 hover:scale-105 inline-block shadow-lg hover:shadow-xl"
          >
            Explore the Menu
          </a>
        </motion.div>
         <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
        >
            <OperatingStatus />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;