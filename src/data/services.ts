export interface Service {
  title: string
  label: string
  description: string
  price: string
  features: string[]
}

export const services: Service[] = [
  {
    title: 'Private Lessons',
    label: '1-on-1 Training',
    description:
      'One-on-one training sessions focused on your specific goals and skill gaps.',
    price: '$75/session',
    features: [
      'Customized workout plan',
      'Video analysis',
      'Skill assessment',
      '60-minute sessions',
    ],
  },
  {
    title: 'Group Clinics',
    label: 'Small Group',
    description:
      'Small group sessions (3-6 players) that build chemistry and competitive drive.',
    price: '$40/player',
    features: [
      'Team drills & scrimmages',
      'Position-specific training',
      'Competition-based learning',
      '90-minute sessions',
    ],
  },
  {
    title: 'Summer Camps',
    label: 'Seasonal Program',
    description:
      'Week-long intensive camps to level up during the off-season.',
    price: '$299/week',
    features: [
      'Full-day programming',
      'Guest coaches',
      'End-of-camp showcase',
      'Camp t-shirt included',
    ],
  },
]
