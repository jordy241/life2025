
import { useState } from 'react'
import type { Character } from '../types/Character'
import type { Location } from '../types/Location'
import initialCharacters from '../data/characters'

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters)

  function setActiveCharacter(id: string) {
    setCharacters(all =>
      all.map(c => ({ ...c, isActive: c.id === id }))
    )
  }

  function updateCharacterMoney(id: string, money: Partial<Character['money']>) {
    setCharacters(all =>
      all.map(c =>
        c.id === id ? { ...c, money: { ...c.money, ...money } } : c
      )
    )
  }

  function ageUpCharacter(id: string) {
    setCharacters(all =>
      all.map(c =>
        c.id === id ? { ...c, age: c.age + 1 } : c
      )
    )
  }

  function updateCharacterLocation(id: string, location: Location) {
    setCharacters(all =>
      all.map(c =>
        c.id === id ? { ...c, currentLocation: location } : c
      )
    )
  }

  const activeCharacter = characters.find(c => c.isActive)

  return {
    characters,
    activeCharacter,
    setActiveCharacter,
    updateCharacterMoney,
    updateCharacterLocation,
    ageUpCharacter,
  }
}