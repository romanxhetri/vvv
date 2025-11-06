
import React from 'react';
import { SPECIALS_DATA } from '../constants';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import AnimatedText3D from './AnimatedText3D';

const Specials: React.FC = () => {
  return (
    <section id="specials" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
        >
            <AnimatedText3D el="h2" text="Today's Specials" className="text-4xl font-serif font-bold text-center mb-4 text-amber-900" />
            <p className="text-lg text-stone-700 text-center max-w-2xl mx-auto mb-12">
                Crafted by Chef Pawan for a unique, unforgettable taste experience. Available for a limited time!
            </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {SPECIALS_DATA.map((item, index) => (
            <motion.div 
                key={item.id}
                className="bg-white p-6 rounded-lg shadow-xl border border-stone-200/50"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <img src={item.image} alt={item.name} className="w-full sm:w-48 h-48 object-cover rounded-md" />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-serif font-bold text-stone-800">{item.name}</h3>
                      <p className="text-2xl font-bold text-amber-800">${item.price}</p>
                  </div>
                  {item.isChefPick && (
                      <div className="flex items-center gap-1 text-sm text-amber-800 font-semibold my-2">
                          <Sparkles size={16} />
                          <span>Chef's Recommendation</span>
                      </div>
                  )}
                  <p className="text-stone-600 mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specials;