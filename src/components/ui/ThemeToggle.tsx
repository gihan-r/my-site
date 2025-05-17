import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}
const ThemeToggle: React.FC<ThemeToggleProps> = ({
  theme,
  toggleTheme
}) => {
  return <button onClick={toggleTheme} className="fixed top-20 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition-colors duration-300" aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}>
      {theme === 'light' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
    </button>;
};
export default ThemeToggle;