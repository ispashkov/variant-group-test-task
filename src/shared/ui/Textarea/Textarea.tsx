import type { ComponentProps, FC } from 'react';

import styles from './Textarea.module.css';

type TextareaProps = ComponentProps<'textarea'>;

export const Textarea: FC<TextareaProps> = ({
  className,
  rows = 9,
  ...props
}) => {
  return <textarea rows={rows} className={styles.root} {...props} />;
};
