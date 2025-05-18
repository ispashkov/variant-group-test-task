import type { FC, PropsWithChildren } from 'react';
import { useFormFieldContext } from '../FormFieldContext.ts';
import styles from './FormFieldLabel.module.css';

export const FormFieldLabel: FC<PropsWithChildren> = ({ children }) => {
  const { id } = useFormFieldContext();

  return (
    <label className={styles.root} htmlFor={id}>
      {children}
    </label>
  );
};
