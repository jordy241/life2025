import React, { useEffect, useState } from 'react';
import ThemeToggle from './components/ThemeToggle';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);


  // whenever darkMode flips, add/remove the "dark" class on <html>
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* ← overall container now switches bg + text via dark: variants */}

      {/* fixed top-right toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle enabled={darkMode} setEnabled={setDarkMode} />
      </div>

      {/* your main content below */}
      <main className="flex items-center justify-center min-h-screen">
      </main>
    </div>
  );
};

export default App;
