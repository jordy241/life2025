import React, { useEffect, useState } from 'react';
import CharacterProfile from './components/CharacterProfile';
import { useCharacter } from './hooks/useCharacter';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const character = useCharacter('1');
  const [darkMode, setDarkMode] = useState(() =>
    // initialize from existing class or system preference
    typeof window !== 'undefined' &&
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-black">
      <header className="p-4 flex justify-end">
        <ThemeToggle enabled={darkMode} setEnabled={setDarkMode} />
      </header>
      <main className="p-6">
        <CharacterProfile character={character} />
      </main>
    </div>
  );
};

export default App;
