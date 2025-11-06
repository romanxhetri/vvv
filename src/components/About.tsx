import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://picsum.photos/800/600?random=2" 
              alt="Interior of Gemini's Eatery" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6 text-amber-900">Our Story</h2>
            <p className="text-lg text-stone-700 mb-4">
              Gemini's Eatery was born from a simple yet powerful idea: to create a dining experience that combines timeless culinary traditions with a modern, innovative spirit. Our chefs are dedicated to sourcing the finest local ingredients, crafting each dish with meticulous care and creativity.
            </p>
            <p className="text-lg text-stone-700">
              We believe that a meal is more than just food; it's a moment of connection, a celebration of life's simple pleasures. Our warm, inviting atmosphere is designed to make you feel right at home, whether you're here for a special occasion or a casual evening out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;