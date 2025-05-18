import type { FC } from 'react';
import { useConfigContext } from '../../../../contexts/ConfigContext';
import { Stepper, type StepperProps } from '../../../../shared/ui';

export type ApplicationStepperProps = Pick<
  StepperProps,
  'currentStep' | 'variant'
>;

export const ApplicationStepper: FC<ApplicationStepperProps> = ({
  currentStep,
  variant,
}) => {
  const { applicationRequiredCount } = useConfigContext();

  return (
    <Stepper
      totalSteps={applicationRequiredCount}
      currentStep={currentStep}
      variant={variant}
    />
  );
};
