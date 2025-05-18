import { z } from 'zod';
import { applicationSchema } from './Application.ts';

export const applicationStorageSchema = z.array(applicationSchema);

export type ApplicationStorage = z.infer<typeof applicationStorageSchema>;

export type ApplicationStorageItem = ApplicationStorage[0];
