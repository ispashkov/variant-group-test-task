import type { Meta, StoryObj } from '@storybook/react';

import { ScrollArea } from './ScrollArea';

const meta = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div
        style={{
          width: '300px',
          height: '200px',
          padding: '10px',
        }}
      >
        <div style={{ height: '500px' }}>
          <p>Контент, который вызывает прокрутку.</p>
          <p>При наведении на область прокрутки будет показан скроллбар.</p>
          <p>Много текста для демонстрации прокрутки...</p>
          <p>Еще больше текста для примера...</p>
          <p>Текст для создания длинного контента...</p>
          <p>Дополнительный контент, чтобы заполнить пространство.</p>
          <p>Последний абзац для тестирования прокрутки.</p>
        </div>
      </div>
    ),
  },
};
