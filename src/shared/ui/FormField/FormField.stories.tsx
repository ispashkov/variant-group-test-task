import type { Meta, StoryObj } from '@storybook/react';

import { InputText } from '../InputText';
import {
  FormField,
  FormFieldControl,
  FormFieldHelpText,
  FormFieldLabel,
} from './index.ts';

const meta = {
  title: 'UI/FormField',
  component: FormField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FormField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <FormFieldLabel>Имя</FormFieldLabel>
        <FormFieldControl>
          <InputText placeholder="Введите ваше имя" />
        </FormFieldControl>
      </>
    ),
  },
};

export const WithHelpText: Story = {
  args: {
    children: (
      <>
        <FormFieldLabel>Имя</FormFieldLabel>
        <FormFieldControl>
          <InputText placeholder="Введите ваше имя" />
        </FormFieldControl>
        <FormFieldHelpText>Укажите ваше полное имя</FormFieldHelpText>
      </>
    ),
  },
};

export const Invalid: Story = {
  args: {
    isInvalid: true,
    children: (
      <>
        <FormFieldLabel>Имя</FormFieldLabel>
        <FormFieldControl>
          <InputText placeholder="Введите ваше имя" />
        </FormFieldControl>
        <FormFieldHelpText>Поле обязательно для заполнения</FormFieldHelpText>
      </>
    ),
  },
};
