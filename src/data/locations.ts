import type { Location } from '../types/Location';

export const locations: Location[] = [
  {
    id: 'willowvale',
    name: 'Willowvale',
    type: 'village',
    population: 900,
    temperature: { min: -5, max: 15 },
    shopIds: ['general', 'hardware'],
    description: 'A small, quiet village surrounded by forest.',
  },
  {
    id: 'brighton',
    name: 'Brighton',
    type: 'town',
    population: 15000,
    temperature: { min: 0, max: 25 },
    shopIds: ['general', 'hardware', 'gallery'],
    description: 'A bustling town with a growing arts scene.',
  },
  {
    id: 'nova-city',
    name: 'Nova City',
    type: 'city',
    population: 500000,
    temperature: { min: 5, max: 35 },
    shopIds: ['general', 'hardware', 'gallery', 'dealership'],
    description: 'A major city with endless opportunities.',
  },
];
