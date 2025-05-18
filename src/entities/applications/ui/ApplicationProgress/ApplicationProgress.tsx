import type { FC } from 'react';
import { CheckIcon } from '../../../../shared/icons';
import { Typography } from '../../../../shared/ui';
import { ApplicationStepper } from '../ApplicationStepper';
import styles from './ApplicationProgress.module.css';

interface ApplicationProgressProps {
  label: string;
  currentStep: number;
  isCompleted: boolean;
}

export const ApplicationProgress: FC<ApplicationProgressProps> = ({
  label,
  currentStep,
  isCompleted,
}) => {
  return (
    <div className={styles.root}>
      <Typography className={styles.label} color="secondary">
        {label}
      </Typography>

      {isCompleted ? (
        <CheckIcon size={28} />
      ) : (
        <ApplicationStepper currentStep={currentStep} />
      )}
    </div>
  );
};
