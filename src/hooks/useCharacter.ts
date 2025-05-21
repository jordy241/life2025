import { useState } from 'react';
import type { Character } from '../types/Character';
import { initialCharacters } from '../data/seedCharacters';

export const useCharacter = (id: string): Character => {
  const [character] = useState<Character>(() => {
    const found = initialCharacters.find((c) => c.id === id);
    if (!found) throw new Error(`Character with id ${id} not found`);
    return found;
  });
  return character;
};