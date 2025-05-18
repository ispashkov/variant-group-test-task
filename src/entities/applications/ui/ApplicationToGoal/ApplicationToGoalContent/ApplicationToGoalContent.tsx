import type { FC } from 'react';
import { ApplicationCreateButton } from '../../../../../features/application-create';
import { Typography } from '../../../../../shared/ui';
import styles from './ApplicationToGoalContent.module.css';

export interface ApplicationToGoalContentProps {
  title: string;
  description: string;
}

export const ApplicationToGoalContent: FC<ApplicationToGoalContentProps> = ({
  title,
  description,
}) => (
  <div className={styles.root}>
    <Typography variant="subtitle" color="black">
      {title}
    </Typography>

    <Typography color="secondary">{description}</Typography>

    <ApplicationCreateButton />
  </div>
);
