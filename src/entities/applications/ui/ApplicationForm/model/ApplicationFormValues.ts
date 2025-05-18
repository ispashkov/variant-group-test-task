import { z } from 'zod';

export const genApplicationFormSchema = (commentLength: number) =>
  z.object({
    jobTitle: z.string().nonempty(),
    company: z.string().nonempty(),
    skills: z.string().nonempty(),
    comment: z.string().nonempty().max(commentLength),
  });

export type ApplicationFormValues = z.infer<
  ReturnType<typeof genApplicationFormSchema>
>;
