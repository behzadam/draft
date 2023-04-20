import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

const meta = {
  title: 'Components/Link',
  component: Link
} satisfies Meta<typeof Link>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Demo: Story = {
  args: {
    children: 'Link Example',
    href: 'http://example.com',
    shallow: false
  }
};
