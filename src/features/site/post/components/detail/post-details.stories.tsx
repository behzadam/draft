import { createRandomPostDetails } from '@/testing/mocks/data';
import type { Meta, StoryObj } from '@storybook/react';
import { PostDetails } from './post-details';

const meta = {
  title: 'Features/Post',
  component: PostDetails
} satisfies Meta<typeof PostDetails>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Detail: Story = {
  args: {
    post: createRandomPostDetails()
  }
};
