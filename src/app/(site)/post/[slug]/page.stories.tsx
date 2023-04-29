import type { Meta, StoryObj } from '@storybook/react';
import PagePostDetails from './page';

const meta = {
  title: 'Pages/Site',
  component: PagePostDetails
} satisfies Meta<typeof PagePostDetails>;
export default meta;

type Story = StoryObj<typeof meta>;
export const PostDetail: Story = {
  args: {
    params: {
      slug: 'page-detail'
    }
  }
};
