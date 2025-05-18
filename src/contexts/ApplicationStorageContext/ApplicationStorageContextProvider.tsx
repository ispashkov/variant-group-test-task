import {
  type FC,
  type PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';
import {
  type ApplicationStorage,
  type ApplicationStorageItem,
  getApplicationsFromStorage,
  writeApplicationsToStorage,
} from '../../entities/applications';
import {
  ApplicationStorageContext,
  type ApplicationStorageContextValue,
} from './ApplicationStorageContext.tsx';

export const ApplicationStorageContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [applicationStorage, setApplicationStorage] =
    useState<ApplicationStorage | null>(getApplicationsFromStorage);

  const handleAdd = useCallback((data: ApplicationStorageItem): void => {
    setApplicationStorage((prevApplicationStorage) => {
      const nextApplicationStorage = prevApplicationStorage
        ? [data, ...prevApplicationStorage]
        : [data];

      writeApplicationsToStorage(nextApplicationStorage);

      return nextApplicationStorage;
    });
  }, []);

  const handleRemove = useCallback((id: ApplicationStorageItem['id']): void => {
    setApplicationStorage((prevApplicationStorage) => {
      if (prevApplicationStorage) {
        const nextApplicationStorage = prevApplicationStorage.filter(
          (item) => item.id !== id,
        );

        writeApplicationsToStorage(nextApplicationStorage);

        return nextApplicationStorage;
      }

      return prevApplicationStorage;
    });
  }, []);

  const value = useMemo<ApplicationStorageContextValue>(
    () => ({
      data: applicationStorage,
      add: handleAdd,
      remove: handleRemove,
    }),
    [applicationStorage, handleAdd, handleRemove],
  );

  return (
    <ApplicationStorageContext value={value}>
      {children}
    </ApplicationStorageContext>
  );
};
