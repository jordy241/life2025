import React from 'react';

interface ThemeToggleProps {
  enabled: boolean;
  setEnabled: (v: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ enabled, setEnabled }) => (
  <button
    onClick={() => setEnabled(!enabled)}
    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
  >
    {enabled ? 'Switch to Light' : 'Switch to Dark'}
  </button>
);

export default ThemeToggle;