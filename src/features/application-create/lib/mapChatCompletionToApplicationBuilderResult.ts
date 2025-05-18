import type OpenAI from 'openai';
import type { ApplicationBuilderResult } from '../../../entities/applications';

export function mapChatCompletionToApplicationBuilderResult(
  completion: OpenAI.ChatCompletion,
): ApplicationBuilderResult | null {
  const choice = completion.choices.at(0);

  if (!choice) {
    return null;
  }

  return choice.message.content;
}
