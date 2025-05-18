import { writeToLocalStorage } from '../../../shared/lib';
import { APPLICATION_STORAGE_KEY } from '../constants.ts';
import type { ApplicationStorage } from '../model';

export const writeApplicationsToStorage = (
  applicationStorage: ApplicationStorage,
): void => {
  writeToLocalStorage(
    APPLICATION_STORAGE_KEY,
    JSON.stringify(applicationStorage),
  );
};
