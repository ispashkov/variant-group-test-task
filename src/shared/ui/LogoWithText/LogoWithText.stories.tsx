import type { Meta, StoryObj } from '@storybook/react';

import { LogoWithText } from './LogoWithText';

const meta = {
  title: 'UI/LogoWithText',
  component: LogoWithText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LogoWithText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
