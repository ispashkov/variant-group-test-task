import type { FC } from 'react';
import { useConfigContext } from '../../../../contexts/ConfigContext';
import {
  FormField,
  FormFieldControl,
  FormFieldHelpText,
  FormFieldLabel,
  InputText,
  Textarea,
} from '../../../../shared/ui';
import styles from './ApplicationForm.module.css';
import { useApplicationFormContext } from './hooks';
import type { ApplicationFormValues } from './model';

interface ApplicationFormProps {
  id?: string;
  onSubmit: (values: ApplicationFormValues) => void;
}

export const ApplicationForm: FC<ApplicationFormProps> = ({ id, onSubmit }) => {
  const { applicationCommentMaxLength } = useConfigContext();
  const { register, watch, handleSubmit } = useApplicationFormContext();

  const comment = watch('comment');
  const commentLength = comment.length;
  const commentHelpText = `${commentLength}/${applicationCommentMaxLength}`;

  return (
    <form className={styles.root} id={id} onSubmit={handleSubmit(onSubmit)}>
      <FormField className={styles.formInput}>
        <FormFieldLabel>Job title</FormFieldLabel>
        <FormFieldControl>
          <InputText
            placeholder="Product manager"
            {...register('jobTitle')}
            data-testid="application-form.job-title"
          />
        </FormFieldControl>
      </FormField>

      <FormField className={styles.formInput}>
        <FormFieldLabel>Company</FormFieldLabel>
        <FormFieldControl>
          <InputText
            placeholder="Apple"
            {...register('company')}
            data-testid="application-form.company"
          />
        </FormFieldControl>
      </FormField>

      <FormField className={styles.fullWidth}>
        <FormFieldLabel>I'm good at...</FormFieldLabel>
        <FormFieldControl>
          <InputText
            placeholder="HTML, CSS and doing things in time"
            {...register('skills')}
            data-testid="application-form.skills"
          />
        </FormFieldControl>
      </FormField>

      <FormField
        className={styles.fullWidth}
        isInvalid={commentLength > applicationCommentMaxLength}
      >
        <FormFieldLabel>Additional details</FormFieldLabel>
        <FormFieldControl>
          <Textarea
            placeholder="Describe why you are a great fit or paste your bio"
            {...register('comment')}
            data-testid="application-form.comment"
          />
        </FormFieldControl>
        <FormFieldHelpText data-testid="application-form.comment.help-text">
          {commentHelpText}
        </FormFieldHelpText>
      </FormField>
    </form>
  );
};
