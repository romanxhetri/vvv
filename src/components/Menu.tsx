
import React, { useState, useMemo } from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem, MenuCategory, DietaryTag } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItemModal from './MenuItemModal';
import AnimatedText3D from './AnimatedText3D';

const categories: MenuCategory[] = ['Appetizers', 'Main Courses', 'Desserts', 'Beverages'];
const dietaryTags: DietaryTag[] = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Spicy'];

const MenuItemCard: React.FC<{ item: MenuItem; onClick: () => void }> = ({ item, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group border border-stone-200/50 hover:shadow-xl transition-shadow"
    onClick={onClick}
  >
    <div className="relative">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute bottom-0 right-0 bg-amber-800 text-white px-4 py-1 text-lg font-bold rounded-tl-lg">${item.price}</div>
       <div className="absolute top-2 left-2 flex flex-col gap-1 items-start">
            {item.isPopular && <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">Popular</span>}
            {item.isChefPick && <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">Chef's Pick</span>}
        </div>
    </div>
    <div className="p-4">
      <h4 className="text-xl font-semibold text-stone-800 truncate">{item.name}</h4>
      <p className="text-stone-600 mt-1 h-10 text-sm">{item.description}</p>
    </div>
  </motion.div>
);

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('Appetizers');
  const [activeFilters, setActiveFilters] = useState<DietaryTag[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleFilterToggle = (tag: DietaryTag) => {
    setActiveFilters(prev =>
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const filteredMenu = useMemo(() => {
    return MENU_DATA.filter(item => {
      const categoryMatch = item.category === activeCategory;
      const filterMatch = activeFilters.every(tag => item.tags.includes(tag));
      const searchMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && filterMatch && searchMatch;
    });
  }, [activeCategory, activeFilters, searchTerm]);

  return (
    <>
      <section id="menu" className="py-24 bg-[#F8F5F2]">
        <div className="container mx-auto px-6">
          <AnimatedText3D el="h2" text="Our Menu" className="text-4xl font-serif font-bold text-center mb-12 text-amber-900" />
          
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${activeCategory === cat ? 'bg-amber-800 text-white shadow-md' : 'bg-white text-stone-700 hover:bg-stone-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="max-w-4xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="text"
                placeholder="Search menu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800 bg-white"
              />
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {dietaryTags.map(tag => (
                  <button 
                    key={tag}
                    onClick={() => handleFilterToggle(tag)}
                    className={`px-3 py-1 text-sm rounded-full border-2 transition-colors ${activeFilters.includes(tag) ? 'bg-amber-800 text-white border-amber-800' : 'bg-white text-stone-600 border-stone-300 hover:border-amber-800'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredMenu.map((item: MenuItem) => (
                    <MenuItemCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
                ))}
            </AnimatePresence>
          </motion.div>

          {filteredMenu.length === 0 && (
            <p className="text-center text-stone-600 mt-8">No menu items match your criteria. Try adjusting your filters!</p>
          )}
        </div>
      </section>
      {selectedItem && <MenuItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />}
    </>
  );
};

export default Menu;
