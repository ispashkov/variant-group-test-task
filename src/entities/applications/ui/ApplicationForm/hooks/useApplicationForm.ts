import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useConfigContext } from '../../../../../contexts/ConfigContext';
import { type ApplicationFormValues, genApplicationFormSchema } from '../model';

export const useApplicationForm = () => {
  const { applicationCommentMaxLength } = useConfigContext();

  const schema = genApplicationFormSchema(applicationCommentMaxLength);

  return useForm<ApplicationFormValues>({
    defaultValues: {
      jobTitle: '',
      company: '',
      skills: '',
      comment: '',
    },
    resolver: zodResolver(schema),
  });
};
