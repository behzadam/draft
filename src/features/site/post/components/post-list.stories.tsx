import { posts } from '@/testing/mocks/data';
import type { Meta, StoryObj } from '@storybook/react';
import { PostList } from './post-list';

const meta = {
  title: 'Features/Post',
  component: PostList
} satisfies Meta<typeof PostList>;
export default meta;

type Story = StoryObj<typeof meta>;
export const List: Story = {
  args: {
    posts: posts
  }
};
