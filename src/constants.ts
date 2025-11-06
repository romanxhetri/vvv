
import { MenuItem, Review, OperatingHours } from './types';

export const OPERATING_HOURS: OperatingHours = {
  Tuesday: { open: '17:00', close: '22:00' },
  Wednesday: { open: '17:00', close: '22:00' },
  Thursday: { open: '17:00', close: '22:00' },
  Friday: { open: '17:00', close: '22:00' },
  Saturday: { open: '16:00', close: '23:00' },
  Sunday: { open: '16:00', close: '23:00' },
};

export const SPECIALS_DATA: MenuItem[] = [
    {
        id: 101,
        name: 'Lobster & Potato Gratin',
        description: 'Decadent layers of potato, cream, and fresh lobster.',
        longDescription: 'A luxurious twist on a classic. Thinly sliced potatoes are layered with Gruyère cheese, heavy cream, and generous chunks of sweet, tender lobster meat. Baked until golden and bubbling, it\'s the ultimate indulgence.',
        price: 48,
        image: 'https://picsum.photos/800/600?random=30',
        category: 'Main Courses',
        tags: [],
        ingredients: ['Potato', 'Lobster', 'Gruyère Cheese', 'Cream', 'Garlic'],
        isChefPick: true,
    },
    {
        id: 102,
        name: 'Purple Potato Mousse',
        description: 'A vibrant and surprisingly light dessert.',
        longDescription: 'Experience the unexpected. We transform purple potatoes into a silky, airy mousse, lightly sweetened and flavored with a hint of vanilla and lavender. Served with a crispy almond tuile, it\'s a dessert that will delight and surprise your palate.',
        price: 18,
        image: 'https://picsum.photos/800/600?random=31',
        category: 'Desserts',
        tags: ['Vegetarian', 'Gluten-Free'],
        ingredients: ['Purple Potato', 'Coconut Cream', 'Vanilla', 'Lavender', 'Almond'],
    }
];

export const MENU_DATA: MenuItem[] = [
  {
    id: 1,
    name: 'Truffle Parmesan Potato Skins',
    description: 'Crispy potato skins, truffle oil, parmesan, chives.',
    longDescription: 'Our signature starter. We bake Russet potatoes to fluffy perfection, scoop them out, and fry the skins until golden brown. They are then tossed in aromatic truffle oil, generously dusted with aged Parmesan cheese, and sprinkled with fresh chives. Served with a side of garlic aioli.',
    price: 16,
    image: 'https://picsum.photos/800/600?random=11',
    category: 'Appetizers',
    tags: ['Vegetarian'],
    ingredients: ['Potato', 'Truffle Oil', 'Parmesan Cheese', 'Chives', 'Garlic Aioli'],
    isPopular: true,
  },
  {
    id: 2,
    name: 'Spicy Potato Samosas',
    description: 'Indian-spiced potato filling, crispy pastry, mint chutney.',
    longDescription: 'A nod to Chef Pawan\'s heritage. These triangular pastries are filled with a tantalizing mixture of boiled potatoes, peas, and a secret blend of Indian spices. Fried to a perfect crisp, they offer a delightful crunch followed by a warm, spicy filling. Served with a cooling mint-coriander chutney.',
    price: 14,
    image: 'https://picsum.photos/800/600?random=12',
    category: 'Appetizers',
    tags: ['Vegan', 'Spicy'],
    ingredients: ['Potato', 'Peas', 'Flour', 'Spices', 'Mint', 'Coriander'],
  },
  {
    id: 3,
    name: 'Gourmet Poutine',
    description: 'Duck confit, cheese curds, gravy, hand-cut fries.',
    longDescription: 'Our elevated take on the Canadian classic. We start with our signature hand-cut potato fries, double-fried for extra crispiness. They are then topped with rich, savory duck confit, squeaky cheese curds, and smothered in a decadent house-made gravy.',
    price: 22,
    image: 'https://picsum.photos/800/600?random=13',
    category: 'Appetizers',
    tags: [],
    ingredients: ['Potato', 'Duck Confit', 'Cheese Curds', 'Gravy'],
  },
  {
    id: 4,
    name: 'Shepherd\'s Pie Reimagined',
    description: 'Slow-braised lamb, root vegetables, potato gratin topping.',
    longDescription: 'Comfort food, redefined. A rich stew of slow-braised lamb and hearty root vegetables is topped not with simple mash, but with a luxurious, creamy potato gratin dauphinois, baked until golden and bubbling. A true hug in a bowl.',
    price: 38,
    image: 'https://picsum.photos/800/600?random=14',
    category: 'Main Courses',
    tags: [],
    ingredients: ['Lamb', 'Carrots', 'Onions', 'Potato', 'Cream', 'Cheese'],
    isChefPick: true,
  },
  {
    id: 5,
    name: 'Potato Gnocchi with Wild Mushroom Ragu',
    description: 'Hand-rolled potato gnocchi, earthy mushroom sauce, parmesan.',
    longDescription: 'Pillowy, light-as-air potato gnocchi, made fresh in-house daily. Tossed in a robust ragu of wild mushrooms, garlic, and herbs, and finished with a generous shaving of Parmigiano-Reggiano. A vegetarian masterpiece.',
    price: 32,
    image: 'https://picsum.photos/800/600?random=15',
    category: 'Main Courses',
    tags: ['Vegetarian'],
    ingredients: ['Potato', 'Flour', 'Egg', 'Wild Mushrooms', 'Garlic', 'Parmesan'],
    isPopular: true,
  },
  {
    id: 6,
    name: 'Crispy Skin Salmon with Potato Rosti',
    description: 'Pan-seared salmon, crispy potato rosti, dill cream sauce.',
    longDescription: 'A perfectly pan-seared salmon fillet with irresistibly crispy skin, served on a classic Swiss potato rosti. The dish is complemented by a light yet creamy dill sauce and a side of wilted spinach.',
    price: 40,
    image: 'https://picsum.photos/800/600?random=16',
    category: 'Main Courses',
    tags: ['Gluten-Free'],
    ingredients: ['Salmon', 'Potato', 'Dill', 'Cream', 'Spinach'],
  },
  {
    id: 7,
    name: 'Sweet Potato Chocolate Brownie',
    description: 'Fudgy brownie made with sweet potato, vanilla ice cream.',
    longDescription: 'Our secret to the fudgiest brownie? Sweet potato puree! It creates an incredibly moist and dense texture. Made with dark chocolate and a hint of cinnamon, this gluten-free dessert is served warm with a scoop of vanilla bean ice cream.',
    price: 15,
    image: 'https://picsum.photos/800/600?random=17',
    category: 'Desserts',
    tags: ['Vegetarian', 'Gluten-Free'],
    ingredients: ['Sweet Potato', 'Dark Chocolate', 'Almond Flour', 'Vanilla Ice Cream'],
  },
  {
    id: 8,
    name: 'Potato & Cardamom Doughnuts',
    description: 'Warm, fluffy doughnuts, cinnamon sugar, caramel sauce.',
    longDescription: 'Mashed potato makes these doughnuts unbelievably light and fluffy. They are fried to order, tossed in a fragrant cardamom-cinnamon sugar, and served with a side of salted caramel dipping sauce. Pure indulgence.',
    price: 14,
    image: 'https://picsum.photos/800/600?random=18',
    category: 'Desserts',
    tags: ['Vegetarian'],
    ingredients: ['Potato', 'Flour', 'Cardamom', 'Cinnamon', 'Caramel'],
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    author: 'Sarah L.',
    rating: 5,
    text: 'Absolutely blown away by the creativity! The Potato Gnocchi was like eating a cloud. I never knew potatoes could be so elegant. The ambiance is cozy and the service was impeccable. A new favorite!',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    author: 'David C.',
    rating: 5,
    text: 'The Gourmet Poutine is a game-changer. Rich duck confit and perfect fries. My wife had the salmon and said it was the best she\'s ever had. We\'ll be back to try the rest of the menu.',
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
  {
    author: 'Mei F.',
    rating: 4,
    text: 'A very enjoyable dinner. The Spicy Samosas had a great kick and the brownie was surprisingly delicious (couldn\'t even tell it had sweet potato!). It was a bit noisy, but the food made up for it.',
    avatar: 'https://i.pravatar.cc/150?img=3'
  }
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/600/800?random=20',
  'https://picsum.photos/800/600?random=21',
  'https://picsum.photos/600/800?random=22',
  'https://picsum.photos/800/600?random=23',
  'https://picsum.photos/800/600?random=24',
  'https://picsum.photos/600/800?random=25',
  'https://picsum.photos/800/600?random=26',
  'https://picsum.photos/600/800?random=27',
];
