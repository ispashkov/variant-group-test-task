import type { ConfigContextValue } from '../model';
import { parseEnvAsNumber, parseEnvAsString } from './parseEnv.ts';

export function genConfigContextValue(): ConfigContextValue {
  return {
    appTitle: parseEnvAsString(process.env.PUBLIC_APP_TITLE),
    applicationRequiredCount: parseEnvAsNumber(
      process.env.PUBLIC_APPLICATION_COUNT_REQUIRED,
      5,
    ),
    applicationCommentMaxLength: parseEnvAsNumber(
      process.env.PUBLIC_APPLICATION_COMMENT_MAX_LENGTH,
      1200,
    ),
    applicationCreateDelayMs: parseEnvAsNumber(
      process.env.PUBLIC_APPLICATION_CREATE_DELAY_MS,
      0,
    ),
    openAiApiKey: parseEnvAsString(process.env.PUBLIC_OPEN_AI_API_KEY),
  };
}
