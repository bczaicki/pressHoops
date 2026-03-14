import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: <div className="p-4"><h3 className="font-bold text-lg mb-2">Card Title</h3><p className="text-gray-600">Card content goes here.</p></div>,
  },
}
