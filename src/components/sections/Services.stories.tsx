import type { Meta, StoryObj } from '@storybook/react-vite'
import { Services } from './Services'

const meta: Meta<typeof Services> = {
  title: 'Sections/Services',
  component: Services,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Services>

export const Default: Story = {}
