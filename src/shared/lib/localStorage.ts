export const readFromLocalStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

export const writeToLocalStorage = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};

export const removeFromLocalStorage = (key: string): void => {
  localStorage.removeItem(key);
};
