import clsx from 'clsx';
import {
  type FC,
  type HTMLAttributes,
  type PropsWithChildren,
  useId,
} from 'react';
import styles from './FormField.module.css';
import {
  FormFieldContext,
  type FormFieldContextValue,
} from './FormFieldContext.ts';

type FormFieldProps = HTMLAttributes<HTMLDivElement> &
  Omit<FormFieldContextValue, 'id'>;

export const FormField: FC<PropsWithChildren<FormFieldProps>> = ({
  children,
  required,
  isInvalid = false,
  className,
  ...props
}) => {
  const id = useId();

  return (
    <FormFieldContext.Provider value={{ id, required, isInvalid }}>
      <div className={clsx(styles.root, className)} {...props}>
        {children}
      </div>
    </FormFieldContext.Provider>
  );
};
