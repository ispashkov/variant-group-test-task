import type { FC } from 'react';
import { useApplicationStorageContext } from '../../contexts/ApplicationStorageContext';
import { useConfigContext } from '../../contexts/ConfigContext';
import { ApplicationProgress } from '../../entities/applications';

export const ApplicationProgressWidget: FC = () => {
  const { data } = useApplicationStorageContext();
  const { applicationRequiredCount } = useConfigContext();

  const currentStep = data?.length ?? 0;
  const label = `${currentStep < applicationRequiredCount ? currentStep : 5}/${applicationRequiredCount} applications generated`;
  const isCompleted = currentStep >= 5;

  return (
    <ApplicationProgress
      label={label}
      currentStep={currentStep}
      isCompleted={isCompleted}
    />
  );
};
