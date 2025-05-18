import type { FC } from 'react';
import { Card, Loader, Typography } from '../../../../../../shared/ui';
import { ApplicationCard } from '../../../ApplicationCard';
import type { ApplicationBuilderResult } from '../../model';
import styles from './ApplicationBuilderPreview.module.css';

type ApplicationBuilderPreviewProps = {
  value: ApplicationBuilderResult | null;
  error?: string | null;
  isLoading?: boolean;
};

const APPLICATION_BUILDER_PREVIEW_DEFAULT =
  'Your personalized job application will appear here...';

export const ApplicationBuilderPreview: FC<ApplicationBuilderPreviewProps> = ({
  value,
  error = null,
  isLoading = false,
}) => {
  if (error) {
    return (
      <Card
        className={styles.root}
        data-testid="application-builder-preview.error"
      >
        <Typography color="error">{error}</Typography>
      </Card>
    );
  }

  if (isLoading) {
    return (
      <Card
        className={styles.root}
        data-testid="application-builder-preview.loader"
      >
        <Loader />
      </Card>
    );
  }

  const text = value ?? APPLICATION_BUILDER_PREVIEW_DEFAULT;

  return (
    <ApplicationCard
      className={styles.root}
      text={text}
      data-testid="application-builder-preview.content"
    />
  );
};
