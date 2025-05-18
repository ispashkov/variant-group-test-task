import { type VariantProps, cva } from 'class-variance-authority';
import cn from 'clsx';

import styles from './Stepper.module.css';

const stepperVariants = cva(styles.root, {
  variants: {
    variant: {
      round: styles.round,
      rectangle: styles.rectangle,
    },
  },
});

export type StepperProps = {
  totalSteps: number;
  currentStep: number;
} & VariantProps<typeof stepperVariants>;

export const Stepper = ({
  currentStep,
  totalSteps,
  variant = 'round',
}: StepperProps) => {
  const steps = Array.from({ length: totalSteps });

  return (
    <div
      className={styles.container}
      role="progressbar"
      aria-valuemin={0}
      aria-valuenow={currentStep}
      aria-valuemax={totalSteps}
      tabIndex={-1}
    >
      {steps.map((_, index) => {
        const key = `stepper-step-${index}`;
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;

        return (
          <div
            key={key}
            className={cn(stepperVariants({ variant }), {
              [styles.completed]: isCompleted,
            })}
            aria-current={isCurrent ? 'step' : undefined}
          />
        );
      })}
    </div>
  );
};
