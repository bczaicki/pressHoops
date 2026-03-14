import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: 'Book Now', variant: 'primary' } }
export const Secondary: Story = { args: { children: 'Get Started', variant: 'secondary' } }
export const Outline: Story = {
  args: { children: 'Learn More', variant: 'outline' },
  decorators: [(Story) => <div className="bg-primary p-8"><Story /></div>],
}
export const Large: Story = { args: { children: 'Book a Session', variant: 'secondary', size: 'lg' } }
