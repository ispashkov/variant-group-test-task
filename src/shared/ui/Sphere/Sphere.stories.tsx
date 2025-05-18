import type { Meta, StoryObj } from '@storybook/react';

import { Sphere } from './Sphere';

const meta = {
  title: 'UI/Sphere',
  component: Sphere,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sphere>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
