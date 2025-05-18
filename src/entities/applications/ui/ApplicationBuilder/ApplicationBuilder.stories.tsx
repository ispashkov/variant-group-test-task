import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { expect, userEvent, waitFor, within } from '@storybook/test';

import { ApplicationBuilder } from './ApplicationBuilder.tsx';

const meta = {
  title: 'Features/Applications/ApplicationBuilder',
  component: ApplicationBuilder,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onSubmit: fn() },
} satisfies Meta<typeof ApplicationBuilder>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    result: null,
    isLoading: false,
  },
};

export const WithResult: Story = {
  args: {
    result: 'Заявка успешно создана',
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    result: null,
    isLoading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByTestId('application-builder-preview.loader'),
    ).toBeInTheDocument();
  },
};

export const LoadingWithResult: Story = {
  args: {
    result: 'Обрабатываем вашу заявку...',
    isLoading: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(
      canvas.getByTestId('application-builder-preview.loader'),
    ).toBeInTheDocument();
  },
};

export const InteractionTest: Story = {
  args: {
    result: null,
    isLoading: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const submitButton = canvas.getByTestId('application-builder.submit');

    await expect(submitButton).toBeDisabled();

    const jobTitleInput = canvas.getByTestId('application-form.job-title');
    const companyInput = canvas.getByTestId('application-form.company');
    const skillsInput = canvas.getByTestId('application-form.skills');
    const commentInput = canvas.getByTestId('application-form.comment');

    await userEvent.type(jobTitleInput, 'Senior Developer');
    await userEvent.type(companyInput, 'Google');
    await userEvent.type(skillsInput, 'JavaScript, React, Node.js');
    await userEvent.type(
      commentInput,
      'Я имею более 5 лет опыта разработки с использованием современного стека технологий',
    );

    const helpText = canvas.getByTestId('application-form.comment.help-text');
    await expect(helpText).toHaveTextContent('82/');

    const title = canvas.getByTestId('application-builder.title');
    await expect(title).toHaveTextContent('Senior Developer, Google');

    await waitFor(() => expect(submitButton).not.toBeDisabled());

    await userEvent.click(submitButton);
  },
};

export const PreviewContentTest: Story = {
  args: {
    result: 'Это тестовое содержимое превью',
    isLoading: false,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const previewContent = canvas.getByTestId(
      'application-builder-preview.content',
    );
    await expect(previewContent).toBeInTheDocument();
    await expect(previewContent).toHaveTextContent(
      'Это тестовое содержимое превью',
    );
  },
};
