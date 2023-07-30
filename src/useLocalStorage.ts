import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const check = localStorage.getItem(key);
  let storedValue: T;

  try {
    storedValue = check !== null ? JSON.parse(check) : initialValue;
  } catch (error) {
    storedValue = initialValue;
  }

  const [value, setValue] = useState<T>(storedValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as [T, typeof setValue];
}
