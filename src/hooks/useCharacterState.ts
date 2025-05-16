import { useState, useEffect } from 'react';
import type { Character } from '../types/Character';

const STORAGE_KEY = 'lifeSimCharacter';

const defaultCharacter: Character = {
  name: 'You',
  age: 18,
  stats: {
    health: 100,
    happiness: 50,
    money: 100,
  },
};

export const useCharacterState = () => {
  const [character, setCharacter] = useState<Character>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : defaultCharacter;
  });

  // Save to localStorage whenever character changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(character));
  }, [character]);

  // Setters
  const increaseAge = () => {
    setCharacter(prev => ({ ...prev, age: prev.age + 1 }));
  };

  const changeStat = (key: keyof Character['stats'], delta: number) => {
    setCharacter(prev => ({
      ...prev,
      stats: {
        ...prev.stats,
        [key]: Math.max(0, prev.stats[key] + delta),
      },
    }));
  };

  const isAlive = () => character.stats.health > 0;

  const resetCharacter = () => {
    setCharacter(defaultCharacter);
  };

  return {
    character,
    increaseAge,
    changeStat,
    isAlive,
    resetCharacter,
  };
};
