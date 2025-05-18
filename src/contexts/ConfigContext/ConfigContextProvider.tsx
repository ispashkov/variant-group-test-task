import { type FC, type PropsWithChildren, useMemo } from 'react';
import { ConfigContext } from './ConfigContext.ts';
import { genConfigContextValue } from './lib';
import type { ConfigContextValue } from './model';

export const ConfigContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const value = useMemo<ConfigContextValue>(genConfigContextValue, []);

  return <ConfigContext value={value}>{children}</ConfigContext>;
};
