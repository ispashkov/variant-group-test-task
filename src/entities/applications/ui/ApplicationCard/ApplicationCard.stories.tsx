import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { ApplicationCard } from './ApplicationCard.tsx';

const meta = {
  title: 'Features/Applications/ApplicationCard',
  component: ApplicationCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onDelete: fn(), onCopy: fn() },
} satisfies Meta<typeof ApplicationCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Dear Apple Team,\n\nI am writing to express my interest in the Product Manager position.\n\nMy experience in the realm combined with my skills in HTML, CSS and doing things in time make me a strong candidate for this role\n\nI want to help you build awesome solutions to accomplish your goals and vision. I can create intuitive and aesthetically pleasing devices that are very easy to use.\n\nI am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.\n\nThank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.',
  },
};
