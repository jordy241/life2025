import type { Character } from '../types/Character';

export const initialCharacters: Character[] = [
  {
    id: '1',
    name: 'Alice',
    age: 25,
    stats: { health: 100, happiness: 80, money: 1000 },
    experience: 0,
    educationLevel: 1,
    inventory: [],
    currentLocation: { id: 'home', name: 'Home', description: 'Your cozy apartment', coordinates: { x: 0, y: 0 } },
  },
];