import React, { useState } from 'react';

const NavLinks = () => (
  <>
    <a href="#about" className="text-stone-700 hover:text-amber-800 transition-colors duration-300">About</a>
    <a href="#menu" className="text-stone-700 hover:text-amber-800 transition-colors duration-300">Menu</a>
    <a href="#gallery" className="text-stone-700 hover:text-amber-800 transition-colors duration-300">Gallery</a>
    <a href="#contact" className="bg-amber-800 text-white px-4 py-2 rounded-full hover:bg-amber-900 transition-transform duration-300 hover:scale-105">Contact Us</a>
  </>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-stone-50/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-serif text-amber-900">
          Gemini's Eatery
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-stone-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-stone-100">
          <nav className="flex flex-col items-center space-y-4 py-4" onClick={() => setIsOpen(false)}>
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;