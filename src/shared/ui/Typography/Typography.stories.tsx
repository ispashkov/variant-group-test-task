import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Typography } from './Typography.tsx';

const meta = {
  title: 'UI/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Title: Story = {
  args: {
    variant: 'title',
    children: 'Title',
  },
};

export const Subtitle: Story = {
  args: {
    variant: 'subtitle',
    children: 'Subtitle',
  },
};

export const Body: Story = {
  args: {
    variant: 'body',
    children: 'Body',
  },
};

export const Primary: Story = {
  args: {
    variant: 'body',
    children: 'Primary',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'body',
    children: 'Secondary',
    color: 'secondary',
  },
};
