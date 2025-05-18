import type { ButtonSize } from '../../Button';
import type { SvgIconSize } from '../SvgIcon.tsx';

export const mapButtonSizeToSvgIconSize = (size: ButtonSize): SvgIconSize => {
  const sizeMap: Record<ButtonSize, SvgIconSize> = {
    small: 20,
    big: 24,
  };

  return sizeMap[size];
};
