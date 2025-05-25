import React from 'react';
import type { Character } from '../types/Character';

interface Props {
  characters: Character[];
  onSelect: (id: string) => void;
  selectedId?: string;
}

export default function CharacterList({ characters, onSelect, selectedId }: Props) {
  return (
    <div className="space-y-2">
      {characters.map((c) => (
        <button
          key={c.id}
          onClick={() => onSelect(c.id)}
          className={`
            block w-full text-left px-4 py-2 rounded 
            ${c.id === selectedId 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 dark:bg-gray-700 dark:text-gray-200'}
            hover:bg-blue-500 hover:text-white
          `}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
