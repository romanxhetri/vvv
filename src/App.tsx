
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { CartProvider } from './contexts/CartContext';
import CartSidebar from './components/CartSidebar';
import Reservations from './components/Reservations';
import Reviews from './components/Reviews';
import Specials from './components/Specials';
import Events from './components/Events';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="bg-[#F8F5F2] text-stone-800">
        <Header />
        <CartSidebar />
        <main>
          <Hero />
          <Specials />
          <About />
          <Menu />
          <Reservations />
          <Gallery />
          <Reviews />
          <Events />
          <Contact />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;