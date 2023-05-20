import type { Meta, StoryObj } from '@storybook/react';
import { PostDetailSkeleton as Skeleton } from './post-detail-skeleton';

const meta = {
  title: 'Features/Post/Details',
  component: Skeleton
} satisfies Meta<typeof Skeleton>;
export default meta;

type Story = StoryObj<typeof meta>;
export const PostDetailsSkeleton: Story = {};
