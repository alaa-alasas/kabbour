import { createContext, useState, useEffect } from 'react';

export const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
  // Load saved mode from localStorage or default to 'light'
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem('app-mode');
    return savedMode ? JSON.parse(savedMode) : 'light';
  });

  // Apply class to document body based on mode
  useEffect(() => {
    if (mode === 'dark') {
      document.body.classList.remove('white-mode');
    } else {
      document.body.classList.add('white-mode');
    }

    // Save mode to localStorage
    localStorage.setItem('app-mode', JSON.stringify(mode));
  }, [mode]);

  const toggleMode = () => {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};