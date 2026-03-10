import { useState, useEffect } from 'react';

export function useLocalStorage(
  key: string,
  initialValue: string = ''
): [string, (value: string) => void] {
  const [lsWord, setLSWord] = useState<string>(
    () => localStorage.getItem(key) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, lsWord);
  }, [key, lsWord]);

  return [lsWord, setLSWord];
}
