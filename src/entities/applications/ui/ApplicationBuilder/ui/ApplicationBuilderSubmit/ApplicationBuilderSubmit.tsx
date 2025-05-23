import type { FC } from 'react';
import { RepeatIcon } from '../../../../../../shared/icons';
import { Button } from '../../../../../../shared/ui';
import { useApplicationFormContext } from '../../../ApplicationForm';

type ApplicationBuilderSubmitProps = {
  form: string;
  isLoading: boolean;
  isDisabled: boolean;
};

export const ApplicationBuilderSubmit: FC<ApplicationBuilderSubmitProps> = ({
  form,
  isLoading,
  isDisabled,
}) => {
  const { formState } = useApplicationFormContext();
  const { isSubmitted, isSubmitting } = formState;

  const isTryAgain = isSubmitted && !isLoading;

  return (
    <Button
      type={isSubmitting ? 'button' : 'submit'}
      variant={isTryAgain ? 'outline' : 'primary'}
      form={form}
      loading={isLoading}
      disabled={isDisabled}
      data-testid="application-builder.submit"
    >
      {isTryAgain ? (
        <>
          <RepeatIcon />
          Try Again
        </>
      ) : (
        ' Generate Now'
      )}
    </Button>
  );
};
