import { useState } from 'react';
import type { Character } from '../types/Character';
import type { Location } from '../types/Location';
import initialCharacters from '../data/characters';

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);

  function addCharacter(newChar: Character) {
    setCharacters((all) => [...all, newChar]);
  }

  function updateCharacterLocation(id: string, location: Location) {
    setCharacters((all) =>
      all.map((c) => (c.id === id ? { ...c, currentLocation: location } : c))
    );
  }

  return { characters, addCharacter, updateCharacterLocation };
}
