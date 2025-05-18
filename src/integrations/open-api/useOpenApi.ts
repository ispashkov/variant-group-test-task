import OpenAI from 'openai';
import { useConfigContext } from '../../contexts/ConfigContext';

export const useOpenApi = (): OpenAI => {
  const { openAiApiKey } = useConfigContext();

  return new OpenAI({
    apiKey: openAiApiKey,
    dangerouslyAllowBrowser: true,
  });
};
