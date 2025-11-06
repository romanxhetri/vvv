
import React, { useState, useMemo } from 'react';
import { MENU_DATA } from '../constants';
import { MenuItem, MenuCategory, DietaryTag } from '../types';
import { motion } from 'framer-motion';
import MenuItemModal from './MenuItemModal';

const categories: MenuCategory[] = ['Appetizers', 'Main Courses', 'Desserts'];
const dietaryTags: DietaryTag[] = ['Vegetarian', 'Vegan', 'Gluten-Free', 'Spicy'];

const MenuItemCard: React.FC<{ item: MenuItem; onClick: () => void }> = ({ item, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
    onClick={onClick}
  >
    <div className="relative">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute bottom-0 left-0 bg-amber-800 text-white px-3 py-1 text-lg font-bold">${item.price}</div>
    </div>
    <div className="p-4">
      <h4 className="text-xl font-semibold text-stone-800 truncate">{item.name}</h4>
      <p className="text-stone-600 mt-1 h-10">{item.description}</p>
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
      <section id="menu" className="py-20 bg-stone-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">Our Menu</h2>
          
          <div className="flex justify-center flex-wrap gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-semibold transition-colors ${activeCategory === cat ? 'bg-amber-800 text-white' : 'bg-stone-200 text-stone-700 hover:bg-stone-300'}`}
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
                className="w-full px-4 py-2 border border-stone-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-800"
              />
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {dietaryTags.map(tag => (
                  <button 
                    key={tag}
                    onClick={() => handleFilterToggle(tag)}
                    className={`px-3 py-1 text-sm rounded-full border-2 ${activeFilters.includes(tag) ? 'bg-amber-800 text-white border-amber-800' : 'bg-transparent text-stone-600 border-stone-300'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.map((item: MenuItem) => (
              <MenuItemCard key={item.id} item={item} onClick={() => setSelectedItem(item)} />
            ))}
          </div>

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
