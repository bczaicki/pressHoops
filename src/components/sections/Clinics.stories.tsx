import type { Meta, StoryObj } from '@storybook/react-vite'
import { Clinics } from './Clinics'

const meta: Meta<typeof Clinics> = {
  title: 'Sections/Clinics',
  component: Clinics,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof Clinics>

export const Default: Story = {}
