import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { genDashboardPagePath } from '../../../routing';
import { HomeIcon } from '../../../shared/icons';
import { Button, Logo, LogoWithText } from '../../../shared/ui';
import { ApplicationProgressWidget } from '../../../widgets/ApplicationProgressWidget';
import styles from './AppHeader.module.css';

export const AppHeader: FC = () => {
  const indexPagePath = genDashboardPagePath();

  return (
    <header className={styles.root}>
      <Button
        className={styles.logo}
        as={Link}
        variant="ghost"
        to={indexPagePath}
      >
        <Logo className={styles.logoMobile} />
        <LogoWithText className={styles.logoDesktop} />
      </Button>

      <div className={styles.right}>
        <ApplicationProgressWidget />

        <Button as={Link} to={indexPagePath} variant="icon">
          <HomeIcon />
        </Button>
      </div>
    </header>
  );
};
