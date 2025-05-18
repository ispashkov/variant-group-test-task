import { createContext, useContext } from 'react';

export type ButtonContextValue = {
  size: 'big' | 'small';
};

export const ButtonContext = createContext<ButtonContextValue | null>(null);

export const useButtonContext = () => useContext(ButtonContext);
