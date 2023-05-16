import type { Meta, StoryObj } from '@storybook/react';
import { PostList } from './post-list';

const meta = {
  title: 'Features/Post/List',
  component: PostList
} satisfies Meta<typeof PostList>;
export default meta;

type Story = StoryObj<typeof meta>;
export const PostListWithClientFetch: Story = {};
