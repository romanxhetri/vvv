
import React from 'react';
import { GALLERY_IMAGES } from '../constants';
import AnimatedText3D from './AnimatedText3D';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-24 bg-stone-100">
      <div className="container mx-auto px-6">
        <AnimatedText3D el="h2" text="A Taste of Our World" className="text-4xl font-serif font-bold text-center mb-12 text-amber-900" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group aspect-w-1 aspect-h-1">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;