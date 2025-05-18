import type { FC } from 'react';
import { ApplicationCreateButton } from '../../../features/application-create';
import { PageHeader, Typography } from '../../../shared/ui';

export const DashboardPageHeader: FC = () => {
  return (
    <PageHeader>
      <Typography as="h1" variant="title">
        Applications
      </Typography>

      <ApplicationCreateButton size="small" />
    </PageHeader>
  );
};
