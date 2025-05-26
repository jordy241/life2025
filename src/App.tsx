// src/App.tsx

import React, { useEffect, useState } from 'react'
import { useCharacters } from './hooks/useCharacter'
import ThemeToggle from './components/ThemeToggle'
import ATMDialog from './components/bank/ATMDialog'

const App: React.FC = () => {
  const {
    activeCharacter,
    updateCharacterMoney,
    setActiveCharacter,
    ageUpCharacter,
    characters,
  } = useCharacters()

  const [darkMode, setDarkMode] = useState(true)
  const [atmOpen, setAtmOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  const giveBonus = () => {
    if (activeCharacter) {
      updateCharacterMoney(activeCharacter.id, {
        cash: activeCharacter.money.cash + 1000,
      })
    }
  }

  const ageUp = () => {
    if (activeCharacter) {
      ageUpCharacter(activeCharacter.id)
    }
  }


  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="fixed top-4 right-4 z-50 flex space-x-2">
        <button
          onClick={giveBonus}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          +1000 Cash
        </button>
        <button
          onClick={ageUp}
          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Age Up
        </button>
        <button
          onClick={() => setAtmOpen(true)}
          className="px-3 py-1 bg-gray-500 dark:bg-gray-700 text-white rounded hover:bg-gray-600"
        >
          ATM
        </button>
        <ThemeToggle enabled={darkMode} setEnabled={setDarkMode} />
      </div>

      <main className="flex items-center justify-center min-h-screen flex-col space-y-4">
        {activeCharacter ? (
          <div className="text-center">
            <p className="text-xl font-semibold mb-2">
              {activeCharacter.first_name} {activeCharacter.last_name}, Age {activeCharacter.age}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Cash: ${activeCharacter.money.cash} | Bank: ${activeCharacter.money.bank} | Debt: ${activeCharacter.money.debt}
            </p>
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Select a character first
          </p>
        )}
      </main>


      {activeCharacter && (
        <ATMDialog
          isOpen={atmOpen}
          onClose={() => setAtmOpen(false)}
          character={activeCharacter}
          onUpdate={(newMoney) =>
            updateCharacterMoney(activeCharacter.id, newMoney)
          }
        />
      )}

    </div>
  )
}

export default App
