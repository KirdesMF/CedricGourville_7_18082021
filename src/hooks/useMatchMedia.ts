import { useEffect, useState } from 'react';

export function useMatchMedia(query: string) {
  const mediaQuery = window.matchMedia(query);
  const [value, setValue] = useState<boolean>(mediaQuery.matches);

  useEffect(() => {
    const handler = () => setValue(mediaQuery.matches);
    mediaQuery.addListener(handler);

    return () => mediaQuery.removeListener(handler);
  }, []);
  return value;
}
