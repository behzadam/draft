import { getCurrentUserFirstPostDetails } from '@/testing/data-generator';
import type { Meta, StoryObj } from '@storybook/react';
import { PostDetails } from './post-details';

const post = getCurrentUserFirstPostDetails();

const meta = {
  title: 'Features/Post/Details',
  component: PostDetails
} satisfies Meta<typeof PostDetails>;
export default meta;

type Story = StoryObj<typeof meta>;
export const PostDetailsWithValue: Story = {
  args: {
    slug: post?.slug ?? 'slug-placeholder-to-get-404-error'
  }
};
