
import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-amber-800 transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-200 py-12">
      <div className="container mx-auto px-6 text-center text-stone-600">
        <h3 className="text-2xl font-serif mb-4 text-stone-800">Join our mailing list for tasty updates</h3>
        <form className="max-w-md mx-auto flex mb-8 shadow-sm rounded-md">
            <input type="email" placeholder="your.email@example.com" className="w-full px-4 py-2 border border-stone-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-800" />
            <button type="submit" className="bg-amber-800 text-white font-bold py-2 px-6 rounded-r-md hover:bg-amber-900 transition-colors duration-300">
                Subscribe
            </button>
        </form>
        <div className="flex justify-center space-x-6 mb-4">
          <SocialIcon href="#"><Instagram /></SocialIcon>
          <SocialIcon href="#"><Facebook /></SocialIcon>
          <SocialIcon href="#"><Twitter /></SocialIcon>
        </div>
        <p>&copy; {new Date().getFullYear()} Potato & Friends. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;