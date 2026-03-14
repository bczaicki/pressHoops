import type { Meta, StoryObj } from '@storybook/react-vite'
import { Navbar } from './Navbar'

const meta: Meta<typeof Navbar> = {
  title: 'Layout/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Navbar>

export const Default: Story = {
  decorators: [(Story) => <div className="bg-primary min-h-[200px]"><Story /></div>],
}
