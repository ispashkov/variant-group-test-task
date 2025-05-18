import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { InputText } from './InputText';

const meta = {
  title: 'UI/InputText',
  component: InputText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof InputText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Введите текст',
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Введите текст',
    value: 'Тестовое значение',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Введите текст',
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    placeholder: 'Введите текст',
    'aria-invalid': true,
  },
};
