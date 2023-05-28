import type { Meta, StoryObj } from '@storybook/react';

import TaskCard from './TaskCard';

const meta: Meta<typeof TaskCard> = {
  title: 'TaskCard',
  component: TaskCard,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TaskCard>;

export const Primary: Story = {
  args: {
    title: 'Task Card',
    description: 'This is a task card',
  },
};
