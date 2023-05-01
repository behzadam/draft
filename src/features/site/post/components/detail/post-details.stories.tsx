import { createRandomPostDetails } from '@/testing/mocks/data';
import type { Meta, StoryObj } from '@storybook/react';
import { PostDetails } from './post-details';

const meta = {
  title: 'Features/Post/Details',
  component: PostDetails
} satisfies Meta<typeof PostDetails>;
export default meta;

type Story = StoryObj<typeof meta>;
export const PostDetailsWithValue: Story = {
  args: {
    post: createRandomPostDetails()
  }
};
