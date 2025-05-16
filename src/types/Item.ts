export type ItemCategory = 'general' | 'car' | 'house' | 'art' | 'hardware';

export interface Item {
  id: string;
  name: string;
  price: number;
  description: string;
  category: ItemCategory;
}
