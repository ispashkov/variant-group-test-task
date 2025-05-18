import { createContext, useContext } from 'react';
import type {
  ApplicationStorage,
  ApplicationStorageItem,
} from '../../entities/applications';

export type ApplicationStorageContextValue = {
  data: ApplicationStorage | null;
  add: (value: ApplicationStorageItem) => void;
  remove: (value: ApplicationStorageItem['id']) => void;
};

export const ApplicationStorageContext =
  createContext<ApplicationStorageContextValue>({
    data: null,
    add: () => {},
    remove: () => {},
  });

export const useApplicationStorageContext =
  (): ApplicationStorageContextValue => {
    const context = useContext(ApplicationStorageContext);

    if (!context) {
      throw new Error(
        'useApplicationStorageContext must be used within the ApplicationStorageContext',
      );
    }

    return context;
  };
