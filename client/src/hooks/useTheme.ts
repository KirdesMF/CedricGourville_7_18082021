import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';
import { useMatchMedia } from './useMatchMedia';

export function useTheme() {
  const isPreferDarkMode = useMatchMedia('(prefers-color-scheme: dark)');
  const [storageTheme, setStorageTheme] = useLocalStorage<string>(
    'theme',
    'dark'
  );

  const isDarkTheme = storageTheme === 'dark' ?? isPreferDarkMode;

  useEffect(() => {
    const root = document.documentElement;

    isDarkTheme ? root.classList.add('dark') : root.classList.remove('dark');
  }, [isDarkTheme]);

  return [storageTheme, setStorageTheme] as const;
}
