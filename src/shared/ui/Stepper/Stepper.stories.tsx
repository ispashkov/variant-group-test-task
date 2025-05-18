import type { Meta, StoryObj } from '@storybook/react';

import { Stepper } from './Stepper';

const meta = {
  title: 'UI/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['round', 'rectangle'],
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    totalSteps: 5,
    currentStep: 2,
    variant: 'round',
  },
};

export const Rectangle: Story = {
  args: {
    totalSteps: 5,
    currentStep: 2,
    variant: 'rectangle',
  },
};

export const Completed: Story = {
  args: {
    totalSteps: 5,
    currentStep: 5,
    variant: 'round',
  },
};

export const FirstStep: Story = {
  args: {
    totalSteps: 5,
    currentStep: 0,
    variant: 'round',
  },
};

export const ManySteps: Story = {
  args: {
    totalSteps: 10,
    currentStep: 4,
    variant: 'round',
  },
};
