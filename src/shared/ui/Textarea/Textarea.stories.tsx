import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Textarea } from './Textarea';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onChange: fn() },
} satisfies Meta<typeof Textarea>;

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
    value:
      'Это пример текста в текстовом поле. Здесь может быть длинный текст, который занимает несколько строк.',
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

export const CustomRows: Story = {
  args: {
    placeholder: 'Введите текст',
    rows: 5,
  },
};
