// src/hooks/useCharacters.ts

import { useState } from 'react'
import type { Character } from '../types/Character'
import initialCharacters from '../data/characters'

export function useCharacters() {
  const [characters, setCharacters] = useState<Character[]>(initialCharacters)

  function setActiveCharacter(id: string) {
    setCharacters(all =>
      all.map(c => ({ ...c, isActive: c.id === id }))
    )
  }

  function updateCharacterMoney(id: string, moneyChanges: Partial<Character['money']>) {
    setCharacters(all =>
      all.map(c => c.id === id
        ? { ...c, money: { ...c.money, ...moneyChanges } }
        : c
      )
    )
  }

  const addCharacter = (newChar: Character) => {
    setCharacters(all => [...all, newChar])
  }

  const ageUpCharacter = (id: string) => {
    setCharacters(all =>
      all.map(c => c.id === id
        ? { ...c, age: c.age + 1 }
        : c
      )
    )
  }

  const activeCharacter = characters.find(c => c.isActive)

  return {
    characters,
    activeCharacter,
    setActiveCharacter,
    addCharacter,
    updateCharacterMoney,
    ageUpCharacter
  }
}
