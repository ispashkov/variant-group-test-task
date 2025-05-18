import type { ComponentProps, FC } from 'react';
import styles from './InputText.module.css';

type InputTextProps = ComponentProps<'input'>;

export const InputText: FC<InputTextProps> = ({ className, ...props }) => {
  return <input {...props} className={styles.root} />;
};
