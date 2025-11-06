
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText3D from './AnimatedText3D';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
              alt="Chef Pawan Gurung in the kitchen" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <AnimatedText3D el="h2" text="Our Spud-tacular Story" className="text-4xl font-serif font-bold mb-6 text-amber-900" />
            <motion.p 
              className="text-lg text-stone-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Potato & Friends began with a revelation by our founder, Chef Pawan Gurung: the potato isn't just a side dish; it's a canvas. From the rolling hills of Peru to the fields of Idaho, the humble potato has nourished civilizations. Here, we give it the spotlight it deserves.
            </motion.p>
            <motion.p 
              className="text-lg text-stone-700 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Chef Pawan combines his classic culinary training with a passion for global flavors to transform the potato into something magical. Every dish, from our pillowy gnocchi to our decadent sweet potato brownie, is a testament to the versatility of this incredible ingredient.
            </motion.p>
            <motion.p 
              className="text-lg text-stone-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              We're more than a restaurant; we're a community of potato enthusiasts. We source locally, cook with passion, and welcome you to join our family.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;