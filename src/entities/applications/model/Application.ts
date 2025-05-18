import { z } from 'zod';

export const applicationSchema = z.object({
  id: z.string(),
  text: z.string(),
});

export type Application = z.infer<typeof applicationSchema>;
