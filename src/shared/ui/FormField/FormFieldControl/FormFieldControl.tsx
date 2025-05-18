import {
  type AriaAttributes,
  Children,
  type FC,
  type PropsWithChildren,
  cloneElement,
  isValidElement,
} from 'react';
import { useFormFieldContext } from '../FormFieldContext.ts';
import styles from './FormFieldControl.module.css';

export const FormFieldControl: FC<PropsWithChildren> = ({ children }) => {
  const { id, isInvalid } = useFormFieldContext();

  return (
    <div className={styles.root}>
      {Children.map(children, (child) => {
        return isValidElement<HTMLElement & AriaAttributes>(child)
          ? cloneElement(child, { id, 'aria-invalid': isInvalid }, null)
          : child;
      })}
    </div>
  );
};
