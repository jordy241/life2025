import type { ItemCategory } from './Item';

export interface Shop {
  id: string;
  name: string;
  description: string;
  allowedCategories: ItemCategory[]; // e.g. ['car', 'general']
}
