import React from 'react';
import StatsSection from './StatsSection';
import type { Character } from '../types/Character';

interface Props { character: Character; }

const CharacterProfile: React.FC<Props> = ({ character }) => (
  <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-semibold mb-4">
      {character.name}, {character.age}
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatsSection
        title="Core Stats"
        stats={{
          health: character.stats.health,
          happiness: character.stats.happiness,
          money: character.stats.money,
        }}
      />
      {/* add more StatsSection or other panels here */}
    </div>
  </div>
);

export default CharacterProfile;