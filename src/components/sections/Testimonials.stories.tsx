import type { Meta, StoryObj } from '@storybook/react-vite'
import { Testimonials } from './Testimonials'

const meta: Meta<typeof Testimonials> = {
  title: 'Sections/Testimonials',
  component: Testimonials,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Testimonials>

export const Default: Story = {}
