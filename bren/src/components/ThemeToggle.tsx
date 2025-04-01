
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Switch } from '@/components/ui/switch';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className="flex items-center gap-2 p-1.5 rounded-full bg-teal-50/30 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800">
      <Sun className="h-4.5 w-4.5 text-teal-600 dark:text-teal-300" />
      <Switch 
        checked={theme === 'dark'} 
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-teal-600 data-[state=checked]:border-teal-400"
      />
      <Moon className="h-4 w-4 text-teal-600 dark:text-teal-300" />
    </div>
  );
};

export default ThemeToggle;
