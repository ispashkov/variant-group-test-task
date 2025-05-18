import type { FC, PropsWithChildren, ReactNode, SVGProps } from 'react';
import { useButtonContext } from '../Button/ButtonContext.ts';
import { mapButtonSizeToSvgIconSize } from './lib';

export type SvgIconSize = 20 | 24 | 28;

type SvgIconBaseProps = SVGProps<SVGSVGElement> & {
  title: string;
  size?: SvgIconSize;
  children: ReactNode;
};

export type SvgIconProps = Omit<SvgIconBaseProps, 'children' | 'title'>;

export const SvgIcon: FC<PropsWithChildren<SvgIconBaseProps>> = ({
  children,
  title,
  size: sizeProp = 20,
  ...props
}) => {
  const buttonContext = useButtonContext();

  const size = buttonContext
    ? mapButtonSizeToSvgIconSize(buttonContext.size)
    : sizeProp;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      {...props}
    >
      <title>{title}</title>
      {children}
    </svg>
  );
};
