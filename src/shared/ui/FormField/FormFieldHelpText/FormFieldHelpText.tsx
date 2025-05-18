import clsx from 'clsx';
import type { FC, HTMLAttributes } from 'react';
import { useFormFieldContext } from '../FormFieldContext.ts';
import styles from './FormFieldHelpText.module.css';

type FormFieldHelpTextProps = HTMLAttributes<HTMLDivElement>;

export const FormFieldHelpText: FC<FormFieldHelpTextProps> = ({
  children,
  className,
  ...props
}) => {
  const { isInvalid } = useFormFieldContext();

  return (
    <div
      className={clsx(styles.root, isInvalid && styles.isInvalid, className)}
      {...props}
    >
      {children}
    </div>
  );
};
