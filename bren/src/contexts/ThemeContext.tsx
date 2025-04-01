import React, { createContext, useContext, useState, useEffect, FC, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  profileImage: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Properly type the provider props
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'light';
  });

  const profileImage = theme === 'light' 
    ? "/bren.jpg"  // Added leading slash for public path
    : "/bren2.jpg";

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, profileImage }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Fixed hook export for Fast Refresh compatibility
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};