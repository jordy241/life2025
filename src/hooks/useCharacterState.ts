import { useState, useEffect } from 'react';
import type { Character } from '../types/Character';
import { jobList } from '../data/jobs';
import type { Item } from '../types/Item';
import { locations } from '../data/locations';
import type { Location } from '../types/Location';

const STORAGE_KEY = 'lifeSimCharacter';

const defaultCharacter: Character = {
  name: 'You',
  age: 18,
  stats: {
    health: 100,
    happiness: 50,
    money: 100,
  },
  job: undefined,
  experience: 0,
  educationLevel: 0,
  inventory: [],
  currentLocation: locations[0],
};

export const useCharacterState = () => {
  const [character, setCharacter] = useState<Character>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    try {
      const parsed = saved ? JSON.parse(saved) : null;
  
      if (!parsed) return defaultCharacter;
  
      // Fallbacks to fill in missing fields (especially after changing the schema)
      return {
        ...defaultCharacter,
        ...parsed,
        stats: {
          ...defaultCharacter.stats,
          ...(parsed.stats ?? {}),
        },
        inventory: parsed.inventory ?? [],
      };
    } catch {
      return defaultCharacter;
    }
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

  const applyForJob = (jobId: string) => {
    const job = jobList.find(j => j.id === jobId);
    if (!job) return;

    // Check requirements
    const meetsEducation = (character.educationLevel ?? 0) >= (job.requiredEducationLevel ?? 0);
    const meetsExperience = (character.experience ?? 0) >= (job.requiredExperience ?? 0);

    if (meetsEducation && meetsExperience) {
      setCharacter(prev => ({ ...prev, job }));
    } else {
      alert('You do not meet the requirements for this job.');
    }
  };

  const buyItem = (item: Item) => {
    if (character.stats.money >= item.price) {
      setCharacter(prev => ({
        ...prev,
        stats: { ...prev.stats, money: prev.stats.money - item.price },
        inventory: [...prev.inventory, item],
      }));
    } else {
      alert("Not enough money!");
    }
  };

  const travelTo = (location: Location) => {
    setCharacter(prev => ({
      ...prev,
      currentLocation: location,
    }));
  };
  
  

  return {
    character,
    increaseAge,
    changeStat,
    isAlive,
    resetCharacter,
    applyForJob,
    buyItem,
    travelTo
  };
};
