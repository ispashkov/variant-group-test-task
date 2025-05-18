import type { FC } from 'react';
import { ApplicationBuilder } from '../../entities/applications';
import { useApplicationCreate } from '../../features/application-create';

export const ApplicationBuilderWidget: FC = () => {
  const { data, error, isLoading, createApplication } = useApplicationCreate();

  return (
    <ApplicationBuilder
      result={data}
      error={error}
      isLoading={isLoading}
      onSubmit={createApplication}
    />
  );
};
