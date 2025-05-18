import { type VariantProps, cva } from 'class-variance-authority';
import cn from 'clsx';
import type { ComponentProps, ElementType, ReactNode } from 'react';

import styles from './Typography.module.css';

const typographyVariants = cva('', {
  variants: {
    variant: {
      title: styles.title,
      subtitle: styles.subtitle,
      body: styles.body,
    },
    color: {
      primary: styles.primary,
      secondary: styles.secondary,
      reverse: styles.reverse,
      white: styles.white,
      black: styles.black,
      error: styles.error,
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type VariantMapping = {
  [K in NonNullable<
    VariantProps<typeof typographyVariants>['variant']
  >]: ElementType;
};

const variantElementMapping: VariantMapping = {
  title: 'h1',
  subtitle: 'h2',
  body: 'p',
};

export type TypographyBaseProps<E extends ElementType> = {
  children: ReactNode;
  as?: E;
};

export type TypographyProps<E extends ElementType> = TypographyBaseProps<E> &
  Omit<ComponentProps<E>, keyof TypographyBaseProps<E>> &
  VariantProps<typeof typographyVariants>;

export const Typography = <T extends ElementType = 'p'>({
  as,
  className,
  variant = 'body',
  color,
  ...props
}: TypographyProps<T>) => {
  const Component = as || variantElementMapping[variant || 'body'];

  return (
    <Component
      className={cn(typographyVariants({ variant, color }), className)}
      {...props}
    />
  );
};
