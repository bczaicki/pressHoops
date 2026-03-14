import type { Meta, StoryObj } from '@storybook/react-vite'
import { BookSession } from './BookSession'

const meta: Meta<typeof BookSession> = {
  title: 'Sections/BookSession',
  component: BookSession,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
}
export default meta
type Story = StoryObj<typeof BookSession>

export const Default: Story = {}
