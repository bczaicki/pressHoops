import type { Meta, StoryObj } from '@storybook/react-vite'
import { SectionHeading } from './SectionHeading'

const meta: Meta<typeof SectionHeading> = {
  title: 'UI/SectionHeading',
  component: SectionHeading,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof SectionHeading>

export const Default: Story = {
  args: { title: 'Our Services', subtitle: 'Everything you need to elevate your game.' },
}
export const Light: Story = {
  args: { title: 'Book a Session', subtitle: 'Ready to train?', light: true },
  decorators: [(Story) => <div className="bg-primary p-8"><Story /></div>],
}
