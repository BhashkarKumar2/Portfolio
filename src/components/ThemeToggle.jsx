import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const getInitial = () =>
  typeof document !== 'undefined' && document.documentElement.classList.contains('dark');

const ThemeToggle = ({ className = '' }) => {
  const [dark, setDark] = useState(getInitial);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch (e) { /* ignore */ }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((v) => !v)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`glass-chip flex h-9 w-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:text-ink ${className}`}
    >
      {dark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
};

export default ThemeToggle;
