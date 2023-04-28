import type { Meta, StoryObj } from '@storybook/react';
import { PostListSkeleton } from './post-list.skeleton';

const meta = {
  title: 'Features/Post',
  component: PostListSkeleton
} satisfies Meta<typeof PostListSkeleton>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Skeleton: Story = {};
