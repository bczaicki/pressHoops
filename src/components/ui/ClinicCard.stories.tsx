import type { Meta, StoryObj } from '@storybook/react-vite'
import { ClinicCard } from './ClinicCard'
import { clinics } from '../../data/clinics'

const meta: Meta<typeof ClinicCard> = {
  title: 'UI/ClinicCard',
  component: ClinicCard,
  tags: ['autodocs'],
}
export default meta
type Story = StoryObj<typeof ClinicCard>

export const BittyBallers: Story = {
  args: { clinic: clinics[0] },
}

export const MiddleSchoolAcademy: Story = {
  args: { clinic: clinics[1] },
}
