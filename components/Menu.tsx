
import React from 'react';
import { MENU_DATA } from '../constants';
import { MenuCategory, MenuItem } from '../types';

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <div className="py-4">
    <div className="flex justify-between items-baseline">
      <h4 className="text-xl font-semibold text-stone-800">{item.name}</h4>
      <div className="flex-grow border-b-2 border-dotted border-stone-300 mx-2"></div>
      <p className="text-xl font-semibold text-amber-800">{item.price}</p>
    </div>
    <p className="text-stone-600 mt-1">{item.description}</p>
  </div>
);

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-amber-900">Our Menu</h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {MENU_DATA.map((category: MenuCategory) => (
            <div key={category.title}>
              <h3 className="text-3xl font-serif font-semibold mb-6 border-b-2 border-amber-800 pb-2 inline-block">
                {category.title}
              </h3>
              <div className="divide-y divide-stone-200">
                {category.items.map((item: MenuItem) => (
                  <MenuItemCard key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
