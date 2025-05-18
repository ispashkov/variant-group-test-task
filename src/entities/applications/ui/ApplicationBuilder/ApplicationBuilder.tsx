import { type FC, useId } from 'react';
import { FormProvider } from 'react-hook-form';
import {
  ApplicationForm,
  type ApplicationFormValues,
  useApplicationForm,
} from '../ApplicationForm';
import styles from './ApplicationBuilder.module.css';
import type { ApplicationBuilderResult } from './model';
import { ApplicationBuilderPreview } from './ui/ApplicationBuilderPreview';
import { ApplicationBuilderSubmit } from './ui/ApplicationBuilderSubmit';
import { ApplicationBuilderTitle } from './ui/ApplicationBuilderTitle';

interface ApplicationBuilderProps {
  result: ApplicationBuilderResult | null;
  error?: string | null;
  isLoading?: boolean;
  onSubmit: (values: ApplicationFormValues) => void;
}

export const ApplicationBuilder: FC<ApplicationBuilderProps> = ({
  result,
  error = null,
  isLoading = false,
  onSubmit,
}) => {
  const form = useApplicationForm();

  const id = useId();

  const { formState } = form;
  const { isValid } = formState;

  return (
    <FormProvider {...form}>
      <div className={styles.root}>
        <ApplicationBuilderTitle />

        <ApplicationForm id={id} onSubmit={onSubmit} />

        <ApplicationBuilderSubmit
          form={id}
          isDisabled={!isValid}
          isLoading={isLoading}
        />

        <ApplicationBuilderPreview
          value={result}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </FormProvider>
  );
};
