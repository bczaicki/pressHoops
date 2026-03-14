import type { Meta, StoryObj } from '@storybook/react-vite'
import { TestimonialCard } from './TestimonialCard'

const meta: Meta<typeof TestimonialCard> = {
  title: 'UI/TestimonialCard',
  component: TestimonialCard,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof TestimonialCard>

export const Default: Story = {
  args: {
    testimonial: {
      quote: 'My son improved his shooting percentage by 15% in just two months.',
      name: 'Marcus J.',
      role: 'Parent',
    },
  },
}
