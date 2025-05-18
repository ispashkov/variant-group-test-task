import { nanoid } from 'nanoid';
import type {
  Application,
  ApplicationBuilderResult,
} from '../../../entities/applications';

export const mapApplicationBuilderResultToApplication = (
  data: ApplicationBuilderResult,
): Application => ({
  id: nanoid(),
  text: data,
});
