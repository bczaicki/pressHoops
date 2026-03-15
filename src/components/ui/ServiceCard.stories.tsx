import type { Meta, StoryObj } from '@storybook/react-vite'
import { ServiceCard } from './ServiceCard'

const meta: Meta<typeof ServiceCard> = {
  title: 'UI/ServiceCard',
  component: ServiceCard,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof ServiceCard>

export const Default: Story = {
  args: {
    service: {
      title: 'Private Lessons',
      description: 'One-on-one training sessions focused on your specific goals.',
      price: '$75/session',
      features: ['Customized plan', 'Video analysis', 'Skill assessment', '60 minutes'],
      label: '1-on-1 Training',
    },
  },
}
