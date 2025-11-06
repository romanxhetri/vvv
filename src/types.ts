
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
  isPopular?: boolean;
  isChefPick?: boolean;
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

export type DayOfWeek = 'Sunday' | 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday';

export interface TimeRange {
    open: string;
    close: string;
}

export type OperatingHours = {
    [key in DayOfWeek]?: TimeRange;
};
