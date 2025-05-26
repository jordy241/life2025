// src/App.tsx

import React, { useEffect, useState } from 'react'
import { useCharacters } from './hooks/useCharacter'
import ThemeToggle from './components/ThemeToggle'
import ATMDialog from './components/bank/ATMDialog'
import CharacterAvatar from './components/character/CharacterAvatar'
import initialCountries from './data/locations'
import LocationDialog from './components/location/LocationDialog'

const App: React.FC = () => {
  const {
    activeCharacter,
    updateCharacterMoney,
    updateCharacterLocation,
    ageUpCharacter,
  } = useCharacters()

  const [darkMode, setDarkMode] = useState(true)
  const [atmOpen, setAtmOpen] = useState(false)
  const [locationDialogOpen, setLocationDialogOpen] = useState(false)

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

      <main className="flex items-center justify-center min-h-screen w-screen">
       <div className="flex flex-col items-center text-center space-y-4">
        {activeCharacter ? (
          <>
            <p className="text-xl p-4 font-semibold mb-2">
              {activeCharacter.first_name} {activeCharacter.last_name}, Age {activeCharacter.age}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Cash: ${activeCharacter.money.cash} | Bank: ${activeCharacter.money.bank} | Debt: ${activeCharacter.money.debt}
            </p>
            <CharacterAvatar config={activeCharacter.avatarConfig} />
            <div className="mt-4 flex items-center justify-center space-x-2">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                📍 Lives in {activeCharacter.currentLocation.regionName}, {activeCharacter.currentLocation.country}
              </p>
              <button
                onClick={() => setLocationDialogOpen(true)}
                className="text-blue-500 hover:text-blue-700 text-sm"
                title="Edit location"
              >
                ✏️
              </button>
            </div>
          </>
        ) : (
          <p className="text-gray-500 dark:text-gray-400">
            Select a character first
          </p>
        )}
      </div>

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

      {activeCharacter && (
        <LocationDialog
          isOpen={locationDialogOpen}
          onClose={() => setLocationDialogOpen(false)}
          countries={initialCountries}
          initialLocation={activeCharacter.currentLocation}
          onConfirm={(newLoc) => {
            updateCharacterLocation(activeCharacter.id, newLoc)
            setLocationDialogOpen(false)
          }}
        />
      )}


    </div>
  )
}

export default App
