import type { Meta, StoryObj } from '@storybook/react';
import HomePage from './page';

const meta = {
  title: 'Pages/Site',
  component: HomePage
} satisfies Meta<typeof HomePage>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Site: Story = {};
