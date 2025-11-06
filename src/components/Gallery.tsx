
import React from 'react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">A Taste of Our World</h2>
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
