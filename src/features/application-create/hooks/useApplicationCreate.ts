import { useState } from 'react';
import { useApplicationStorageContext } from '../../../contexts/ApplicationStorageContext';
import { useConfigContext } from '../../../contexts/ConfigContext';
import type {
  ApplicationBuilderResult,
  ApplicationFormValues,
} from '../../../entities/applications';
import { useOpenApi } from '../../../integrations/open-api';
import { sleep } from '../../../shared/lib';
import {
  mapApplicationBuilderResultToApplication,
  mapApplicationFormValuesToPrompt,
  mapChatCompletionToApplicationBuilderResult,
} from '../lib';

interface UseApplicationCreateState {
  data: ApplicationBuilderResult | null;
  error: string | null;
  isLoading: boolean;
}

type UseApplicationCreateStateReturn = UseApplicationCreateState & {
  createApplication: (values: ApplicationFormValues) => void;
};

export const useApplicationCreate = (): UseApplicationCreateStateReturn => {
  const openAI = useOpenApi();
  const { applicationCreateDelayMs } = useConfigContext();
  const { add } = useApplicationStorageContext();

  const [state, setState] = useState<UseApplicationCreateState>({
    data: null,
    error: null,
    isLoading: false,
  });

  const createApplication = async (values: ApplicationFormValues) => {
    try {
      setState((prevState) => ({
        ...prevState,
        error: null,
        isLoading: true,
      }));

      const prompt = mapApplicationFormValuesToPrompt(values);

      await sleep(applicationCreateDelayMs);

      const completion = await openAI.chat.completions.create({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: prompt }],
      });

      const result = mapChatCompletionToApplicationBuilderResult(completion);

      setState((prevState) => ({
        ...prevState,
        data: result,
        isLoading: false,
      }));

      if (result) {
        const application = mapApplicationBuilderResultToApplication(result);

        add(application);
      }
    } catch (error) {
      console.error('[useApplicationCreate] cannot create application', error);

      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        error: 'Something went wrong:( Try again later!',
      }));
    }
  };

  const { data, error, isLoading } = state;

  return {
    data,
    error,
    isLoading,

    createApplication,
  };
};
