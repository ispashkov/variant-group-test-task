import type { FC } from 'react';
import { useApplicationStorageContext } from '../../contexts/ApplicationStorageContext';
import { useConfigContext } from '../../contexts/ConfigContext';
import { ApplicationToGoal } from '../../entities/applications';

export const ApplicationToGoalWidget: FC = () => {
  const { data } = useApplicationStorageContext();
  const { applicationRequiredCount } = useConfigContext();

  const currentStep = data?.length ?? 0;

  if (currentStep >= applicationRequiredCount) {
    return null;
  }

  return (
    <ApplicationToGoal
      title="Hit your goal"
      description="Generate and send out couple more job applications today to get hired faster "
      currentStep={currentStep}
    />
  );
};
