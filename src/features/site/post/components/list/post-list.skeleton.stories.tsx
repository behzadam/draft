import type { Meta, StoryObj } from '@storybook/react';
import { PostListSkeleton as Skeleton } from './post-list.skeleton';

const meta = {
  title: 'Features/Post/List',
  component: Skeleton
} satisfies Meta<typeof Skeleton>;
export default meta;

type Story = StoryObj<typeof meta>;
export const PostListSkeleton: Story = {};
