
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuItem } from '../types';
import { X, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface MenuItemModalProps {
  item: MenuItem;
  onClose: () => void;
}

const MenuItemModal: React.FC<MenuItemModalProps> = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item, quantity);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img src={item.image} alt={item.name} className="w-full h-64 object-cover rounded-t-lg" />
            <button onClick={onClose} className="absolute top-4 right-4 bg-white/70 rounded-full p-2 hover:bg-white">
              <X size={24} />
            </button>
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-serif font-bold text-amber-900">{item.name}</h2>
              <p className="text-3xl font-bold text-stone-800">${item.price.toFixed(2)}</p>
            </div>
            <div className="flex flex-wrap gap-2 my-4">
              {item.tags.map(tag => (
                <span key={tag} className="bg-stone-200 text-stone-700 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
              ))}
            </div>
            <p className="text-stone-700 mb-4">{item.longDescription}</p>
            <div>
              <h4 className="font-semibold text-stone-800">Ingredients:</h4>
              <p className="text-stone-600">{item.ingredients.join(', ')}</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center justify-center border border-stone-300 rounded-md">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 text-stone-600 hover:text-amber-800"><Minus size={16}/></button>
                <span className="px-4 text-lg font-bold">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-3 text-stone-600 hover:text-amber-800"><Plus size={16}/></button>
              </div>
              <button onClick={handleAddToCart} className="flex-grow bg-amber-800 text-white font-bold py-3 px-6 rounded-md hover:bg-amber-900 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MenuItemModal;
