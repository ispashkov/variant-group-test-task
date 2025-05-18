import type { FC } from 'react';
import { AppProvider } from './AppProvider';
import { AppRoutes } from './AppRoutes';

export const App: FC = () => {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
};
