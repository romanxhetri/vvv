
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/800/600?random=2" 
              alt="Chef Pawan Gurung in the kitchen" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-amber-900">Our Spud-tacular Story</h2>
            <p className="text-lg text-stone-700 mb-4">
              Potato & Friends began with a revelation by our founder, Chef Pawan Gurung: the potato isn't just a side dish; it's a canvas. From the rolling hills of Peru to the fields of Idaho, the humble potato has nourished civilizations. Here, we give it the spotlight it deserves.
            </p>
            <p className="text-lg text-stone-700 mb-4">
              Chef Pawan combines his classic culinary training with a passion for global flavors to transform the potato into something magical. Every dish, from our pillowy gnocchi to our decadent sweet potato brownie, is a testament to the versatility of this incredible ingredient.
            </p>
            <p className="text-lg text-stone-700">
              We're more than a restaurant; we're a community of potato enthusiasts. We source locally, cook with passion, and welcome you to join our family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
