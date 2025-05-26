import React from 'react'
import StatsSection from './StatsSection'
import type { Character } from '../../types/Character'

interface Props {
  character: Character
}

const CharacterProfile: React.FC<Props> = ({ character }) => {
  // build a full name from the parts
  const fullName = [
    character.first_name,
    character.middle_name,
    character.last_name,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">
        {fullName}, {character.age}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Finances panel */}
        <StatsSection
          title="Finances"
          stats={character.money}
        />
      </div>
    </div>
  )
}

export default CharacterProfile
