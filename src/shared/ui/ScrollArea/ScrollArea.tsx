import { type HTMLAttributes, type ReactNode, forwardRef } from 'react';
import styles from './ScrollArea.module.css';

import clsx from 'clsx';

type ScrollAreaProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <div className={clsx(styles.root, className)} ref={forwardedRef} {...props}>
      {children}
    </div>
  ),
);
