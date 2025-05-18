import { createContext, useContext } from 'react';
import { genConfigContextValue } from './lib';
import type { ConfigContextValue } from './model';

export const ConfigContext = createContext<ConfigContextValue>(
  genConfigContextValue(),
);

export function useConfigContext(): ConfigContextValue {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error('useConfigContext must be used within ConfigContext');
  }

  return context;
}
