
export type DietaryTag = 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'Spicy';
export type MenuCategory = 'Appetizers' | 'Main Courses' | 'Desserts' | 'Beverages';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  category: MenuCategory;
  tags: DietaryTag[];
  ingredients: string[];
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  avatar: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}
