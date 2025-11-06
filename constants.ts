
import { MenuCategory } from './types';

export const MENU_DATA: MenuCategory[] = [
  {
    title: 'Appetizers',
    items: [
      {
        name: 'Burrata Caprese',
        description: 'Fresh burrata, heirloom tomatoes, basil, balsamic glaze',
        price: '$18',
      },
      {
        name: 'Tuna Tartare',
        description: 'Ahi tuna, avocado, soy-lime dressing, taro chips',
        price: '$22',
      },
      {
        name: 'Grilled Octopus',
        description: 'Smoked paprika, fingerling potatoes, lemon-oregano vinaigrette',
        price: '$24',
      },
    ],
  },
  {
    title: 'Main Courses',
    items: [
      {
        name: 'Pan-Seared Scallops',
        description: 'Saffron risotto, asparagus, citrus beurre blanc',
        price: '$42',
      },
      {
        name: 'Filet Mignon',
        description: '8oz center-cut, potato gratin, grilled broccolini, red wine reduction',
        price: '$55',
      },
      {
        name: 'Mushroom & Truffle Pasta',
        description: 'Handmade tagliatelle, wild mushrooms, black truffle cream sauce, parmesan',
        price: '$36',
      },
      {
        name: 'Roasted Duck Breast',
        description: 'Cherry-port sauce, sweet potato purée, sautéed spinach',
        price: '$45',
      },
    ],
  },
  {
    title: 'Desserts',
    items: [
      {
        name: 'Chocolate Lava Cake',
        description: 'Molten center, raspberry coulis, vanilla bean ice cream',
        price: '$15',
      },
      {
        name: 'Classic Tiramisu',
        description: 'Espresso-soaked ladyfingers, mascarpone cream, cocoa powder',
        price: '$14',
      },
      {
        name: 'Lemon Tart',
        description: 'Toasted meringue, shortbread crust, fresh berries',
        price: '$14',
      },
    ],
  },
];
