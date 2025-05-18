import type { FC, PropsWithChildren } from 'react';
import { ApplicationStorageContextProvider } from '../contexts/ApplicationStorageContext';
import { ConfigContextProvider } from '../contexts/ConfigContext';
import '../shared/styles/index.css';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => (
  <ConfigContextProvider>
    <ApplicationStorageContextProvider>
      {children}
    </ApplicationStorageContextProvider>
  </ConfigContextProvider>
);
