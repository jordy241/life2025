import type { Character } from '../types/Character';
import { v4 as uuid } from 'uuid';

const initialCharacters: Character[] = [
  {
    id: uuid(),
    name: 'Alice',
    age: 0,
    stats: { health: 100, happiness: 50, money: 0 },
    job: undefined,
    experience: 0,
    educationLevel: 0,
    inventory: [],
    currentLocation: { country: '', city: '' },
    isActive: false
  },
  {
    id: uuid(),
    name: 'Bob',
    age: 0,
    stats: { health: 90, happiness: 60, money: 0 },
    job: undefined,
    experience: 0,
    educationLevel: 0,
    inventory: [],
    currentLocation: { country: '', city: '' },
    isActive: true
  },
];

export default initialCharacters;
