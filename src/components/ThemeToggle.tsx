import React from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

interface ThemeToggleProps {
  enabled: boolean;
  setEnabled: (v: boolean) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ enabled, setEnabled }) => (
  <button
    type="button"
    aria-label="Toggle dark mode"
    onClick={() => setEnabled(!enabled)}
    className={`
      relative inline-block w-14 h-6 rounded-full transition-colors duration-300 focus:outline-none
      ${enabled ? 'bg-gray-700' : 'bg-gray-200'}
    `}
  >
    <span
      className={`
        absolute top-1/2 left-0 transform -translate-y-1/2
        w-8 h-8 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center
        ${enabled ? 'translate-x-[24px]' : 'translate-x-0'}
      `}
    >
      {enabled
        ? <MoonIcon className="w-5 h-5 text-gray-800" />
        : <SunIcon  className="w-5 h-5 text-yellow-400" />
      }
    </span>
  </button>
);

export default ThemeToggle;
