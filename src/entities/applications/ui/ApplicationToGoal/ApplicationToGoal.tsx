import type { FC } from 'react';
import styles from './ApplicationToGoal.module.css';
import {
  ApplicationToGoalContent,
  type ApplicationToGoalContentProps,
} from './ApplicationToGoalContent';
import {
  ApplicationToGoalStepper,
  type ApplicationToGoalStepperProps,
} from './ApplicationToGoalStepper';

type ApplicationToGoalProps = ApplicationToGoalContentProps &
  ApplicationToGoalStepperProps;

export const ApplicationToGoal: FC<ApplicationToGoalProps> = ({
  title,
  description,
  currentStep,
}) => {
  return (
    <div className={styles.root}>
      <ApplicationToGoalContent title={title} description={description} />

      <ApplicationToGoalStepper currentStep={currentStep} />
    </div>
  );
};
