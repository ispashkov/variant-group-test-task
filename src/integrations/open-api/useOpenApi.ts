import OpenAI from 'openai';
import { useConfigContext } from '../../contexts/ConfigContext';
import {useMemo} from "react";

export const useOpenApi = (): OpenAI => {
  const { openAiApiKey } = useConfigContext();

  return useMemo(() => new OpenAI({
    apiKey: openAiApiKey,
    dangerouslyAllowBrowser: true,
  }), [openAiApiKey]);
};
