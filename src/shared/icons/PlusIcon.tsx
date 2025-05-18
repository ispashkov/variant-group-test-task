import type { FC } from 'react';
import { SvgIcon, type SvgIconProps } from '../ui';

export const PlusIcon: FC<SvgIconProps> = (props) => (
  <SvgIcon
    {...props}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    title="Plus"
  >
    <path
      d="M10.0001 4.16666V15.8333M4.16675 9.99999H15.8334"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </SvgIcon>
);
