import type { Meta, StoryObj } from '@storybook/react';
import type { FC } from 'react';
import type { SvgIcon, SvgIconProps } from '../ui/SvgIcon/SvgIcon';
import * as AllIconsDict from './index';

const iconComponents = Object.entries(AllIconsDict).map(
  ([name, Component]) => ({
    name,
    component: Component,
  }),
);

const IconsShowcase: FC<SvgIconProps> = (props) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, minmax(24px, 28px))',
        gap: '12px',
      }}
    >
      {iconComponents.map(({ name, component: Icon }) => (
        <Icon key={name} {...props} />
      ))}
    </div>
  );
};

const meta = {
  title: 'UI/Icons',
  component: IconsShowcase,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SvgIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllIcons: Story = {};
