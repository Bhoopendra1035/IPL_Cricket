'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Determine the initial theme
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    const currentTheme = savedTheme || 'dark';
    
    setTheme(currentTheme);
    document.documentElement.setAttribute('data-theme', currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!mounted) {
    return (
      <button 
        style={{
          padding: '8px 16px',
          borderRadius: '20px',
          border: '1px solid var(--border-glass)',
          background: 'var(--bg-glass)',
          color: 'var(--text-primary)',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          opacity: 0
        }}
        aria-hidden="true"
      >
        Theme
      </button>
    );
  }

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        padding: '8px 16px',
        borderRadius: '20px',
        border: '1px solid var(--border-glass)',
        background: 'var(--bg-glass)',
        color: 'var(--text-primary)',
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer'
      }}
      aria-label="Toggle Dark/Light Mode"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}
