import cn from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import styles from './Card.module.css';

interface CardBaseProps<E extends ElementType = 'div'> {
  as?: E;
  children?: ReactNode;
  className?: string;
}

export type CardProps<E extends ElementType> = CardBaseProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof CardBaseProps<E>>;

export const Card = <E extends ElementType = 'div'>({
  as,
  children,
  className,
  ...rest
}: CardProps<E>) => {
  const Component = as || 'div';

  return (
    <Component {...rest} className={cn(styles.root, className)}>
      {children}
    </Component>
  );
};
