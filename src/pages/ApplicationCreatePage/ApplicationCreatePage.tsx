import type { FC } from 'react';
import { usePageTitle } from '../../shared/hooks';
import { ApplicationBuilderWidget } from '../../widgets/ApplicationBuilderWidget';

export const ApplicationCreatePage: FC = () => {
  usePageTitle('Create Application');

  return <ApplicationBuilderWidget />;
};
