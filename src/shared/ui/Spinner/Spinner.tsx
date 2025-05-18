import type { FC } from 'react';
import { SpinnerIcon } from '../../icons';
import styles from './Spinner.module.css';

export const Spinner: FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <SpinnerIcon className={styles.icon} />
      </div>
    </div>
  );
};
