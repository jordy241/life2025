import type { Character } from '../types/Character';
import { v4 as uuid } from 'uuid';

const initialCharacters: Character[] = [
  {
    id: uuid(),
    first_name: 'Alice',
    last_name: 'Smith',
    age: 0,
    money: { cash: 0, bank: 0, debt: 0 },
    isActive: false
  },
  {
    id: uuid(),
    first_name: 'Bob',
    last_name: 'Johnson',
    age: 0,
    money: { cash: 0, bank: 0, debt: 0 },
    isActive: true
  },
];

export default initialCharacters;
