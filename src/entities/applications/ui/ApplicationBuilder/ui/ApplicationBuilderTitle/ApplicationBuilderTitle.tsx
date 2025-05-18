import type { FC } from 'react';
import { PageHeader, Typography } from '../../../../../../shared/ui';
import { useApplicationFormContext } from '../../../ApplicationForm';
import styles from './ApplicationBuilderTitle.module.css';

const APPLICATION_BUILDER_DEFAULT_TITLE = 'New application';

export const ApplicationBuilderTitle: FC = () => {
  const { watch } = useApplicationFormContext();
  const [jobTitle, company] = watch(['jobTitle', 'company']);

  const isEmpty = !(jobTitle.length && company.length);
  const text = isEmpty
    ? APPLICATION_BUILDER_DEFAULT_TITLE
    : [jobTitle, company].join(', ');

  return (
    <PageHeader className={styles.root}>
      <Typography
        className={styles.title}
        as="h1"
        variant="subtitle"
        color={isEmpty ? 'secondary' : 'primary'}
        title={text}
        data-testid="application-builder.title"
      >
        {text}
      </Typography>
    </PageHeader>
  );
};
