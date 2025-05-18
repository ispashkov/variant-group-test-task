import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import styles from './PageHeader.module.css';

type PageHeaderProps = ComponentProps<'div'>;

export const PageHeader: FC<PageHeaderProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div {...props} className={clsx(styles.root, className)}>
      {children}
    </div>
  );
};
