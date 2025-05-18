import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { FormProvider } from 'react-hook-form';
import { ApplicationForm } from './ApplicationForm.tsx';
import { useApplicationForm } from './hooks';

const meta = {
  title: 'Features/Applications/ApplicationForm',
  component: (props) => {
    const form = useApplicationForm();

    return (
      <FormProvider {...form}>
        <ApplicationForm {...props} />
      </FormProvider>
    );
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof ApplicationForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
