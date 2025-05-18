import type { FC } from 'react';
import { useConfigContext } from '../../../../../contexts/ConfigContext';
import { Typography } from '../../../../../shared/ui';
import {
  ApplicationStepper,
  type ApplicationStepperProps,
} from '../../../index.ts';
import styles from './ApplicationToGoalStepper.module.css';

export type ApplicationToGoalStepperProps = Pick<
  ApplicationStepperProps,
  'currentStep'
>;

export const ApplicationToGoalStepper: FC<ApplicationToGoalStepperProps> = ({
  currentStep,
}) => {
  const { applicationRequiredCount } = useConfigContext();

  const label = `${currentStep} out of ${applicationRequiredCount}`;

  return (
    <div className={styles.root}>
      <ApplicationStepper variant="rectangle" currentStep={currentStep} />
      <Typography color="secondary">{label}</Typography>
    </div>
  );
};
