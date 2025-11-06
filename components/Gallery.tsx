
import React from 'react';

const galleryImages = [
  'https://picsum.photos/600/600?random=3',
  'https://picsum.photos/600/600?random=4',
  'https://picsum.photos/600/600?random=5',
  'https://picsum.photos/600/600?random=6',
  'https://picsum.photos/600/600?random=7',
  'https://picsum.photos/600/600?random=8',
  'https://picsum.photos/600/600?random=9',
  'https://picsum.photos/600/600?random=10',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 bg-stone-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
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
