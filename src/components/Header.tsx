
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { ShoppingBasket, Menu as MenuIcon, X } from 'lucide-react';

const NavLinks: React.FC<{onClick?: () => void}> = ({onClick}) => (
  <>
    <a href="#about" onClick={onClick} className="text-stone-700 hover:text-amber-800 transition-colors duration-300">About</a>
    <a href="#menu" onClick={onClick} className="text-stone-700 hover:text-amber-800 transition-colors duration-300">Menu</a>
    <a href="#reservations" onClick={onClick} className="text-stone-700 hover:text-amber-800 transition-colors duration-300">Reservations</a>
    <a href="#events" onClick={onClick} className="text-stone-700 hover:text-amber-800 transition-colors duration-300">Events</a>
    <a href="#gallery" onClick={onClick} className="text-stone-700 hover:text-amber-800 transition-colors duration-300">Gallery</a>
    <a href="#contact" onClick={onClick} className="bg-amber-800 text-white px-4 py-2 rounded-full hover:bg-amber-900 transition-transform duration-300 hover:scale-105">Contact Us</a>
  </>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { openCart, totalItems } = useCart();

  return (
    <header className="bg-stone-50/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold font-serif text-amber-900">
          Potato & Friends
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </nav>
        <div className="flex items-center space-x-4">
            <button onClick={openCart} className="relative text-stone-800 hover:text-amber-800 transition-colors" aria-label="Open cart">
                <ShoppingBasket size={24} />
                {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                    </span>
                )}
            </button>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                {isOpen ? <X className="h-6 w-6 text-stone-800" /> : <MenuIcon className="h-6 w-6 text-stone-800" />}
              </button>
            </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-stone-100">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <NavLinks onClick={() => setIsOpen(false)} />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
