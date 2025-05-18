import type { FC } from 'react';
import { Sphere } from '../Sphere';
import styles from './Loader.module.css';

export const Loader: FC = () => (
  <div className={styles.root}>
    <div className={styles.content}>
      <Sphere />
    </div>
  </div>
);
