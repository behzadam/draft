import type { Meta, StoryObj } from '@storybook/react';
import { Show } from './show';

const meta = {
  title: 'Components/Show',
  component: Show
} satisfies Meta<typeof Show>;

export default meta;
type Story = StoryObj<typeof Show>;

export const When: Story = {
  args: {
    when: true,
    children: <p>Show Component</p>
  }
};
