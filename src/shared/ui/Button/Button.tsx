import { type VariantProps, cva } from 'class-variance-authority';
import cn from 'clsx';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';

import { Spinner } from '../Spinner';
import styles from './Button.module.css';
import { ButtonContext } from './ButtonContext.ts';

export type ButtonSize = 'small' | 'big';

interface ButtonBaseProps<E extends ElementType = 'button'> {
  as?: E;
  children?: ReactNode;
}

export type ButtonProps<E extends ElementType> = ButtonBaseProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof ButtonBaseProps<E>> &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

const DEFAULT_BUTTON_SIZE: ButtonSize = 'big';

const buttonVariants = cva(styles.root, {
  variants: {
    variant: {
      primary: styles.primary,
      outline: styles.outline,
      icon: styles.icon,
      ghost: styles.ghost,
    },
    size: {
      big: styles.big,
      small: styles.small,
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: DEFAULT_BUTTON_SIZE,
  },
});

export const Button = <E extends ElementType = 'button'>({
  className,
  variant,
  size: sizeProp,
  children,
  loading,
  disabled,
  as,
  ...props
}: ButtonProps<E>) => {
  const Component = as ?? 'button';
  const size = sizeProp ?? DEFAULT_BUTTON_SIZE;

  return (
    <ButtonContext value={{ size }}>
      <Component
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
        disabled={disabled}
        aria-busy={loading}
      >
        {loading ? <Spinner /> : children}
      </Component>
    </ButtonContext>
  );
};
