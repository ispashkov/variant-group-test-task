import { readFromLocalStorage } from '../../../shared/lib';
import { APPLICATION_STORAGE_KEY } from '../constants.ts';
import { type ApplicationStorage, applicationStorageSchema } from '../model';

export const getApplicationsFromStorage = (): ApplicationStorage | null => {
  try {
    const item = readFromLocalStorage(APPLICATION_STORAGE_KEY);

    if (item) {
      const json = JSON.parse(item);
      return applicationStorageSchema.parse(json);
    }

    return null;
  } catch (e) {
    console.error(
      '[getApplicationsFromStorage] cannot get applications from storage',
      e,
    );
    return null;
  }
};
