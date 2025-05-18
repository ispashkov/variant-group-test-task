import type { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '../../../shared/ui';
import { ApplicationToGoalWidget } from '../../../widgets/ApplicationToGoalWidget';
import { AppHeader } from '../../ui/AppHeader';
import styles from './BaseLayout.module.css';

export const BaseLayout: FC = () => {
  return (
    <Container className={styles.root}>
      <AppHeader />

      <main className={styles.content}>
        <div className={styles.outlet}>
          <Outlet />
        </div>

        <ApplicationToGoalWidget />
      </main>
    </Container>
  );
};
