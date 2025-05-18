import type { FC } from 'react';
import { usePageTitle } from '../../shared/hooks';
import { ApplicationCardListWidget } from '../../widgets/ApplicationCardListWidget';
import { DashboardPageHeader } from './DashboardPageHeader';

export const DashboardPage: FC = () => {
  usePageTitle('Dashboard');

  return (
    <>
      <DashboardPageHeader />
      <ApplicationCardListWidget />
    </>
  );
};
