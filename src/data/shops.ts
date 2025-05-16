import type { Shop } from '../types/Shop';

export const shops: Shop[] = [
  {
    id: 'general',
    name: 'General Store',
    description: 'Everyday essentials and supplies.',
    allowedCategories: ['general'],
  },
  {
    id: 'dealership',
    name: 'Car Dealership',
    description: 'Browse and buy vehicles.',
    allowedCategories: ['car'],
  },
  {
    id: 'hardware',
    name: 'Hardware Store',
    description: 'Tools, appliances, and materials.',
    allowedCategories: ['hardware'],
  },
  {
    id: 'gallery',
    name: 'Art Gallery',
    description: 'Unique and valuable art pieces.',
    allowedCategories: ['art'],
  },
];
