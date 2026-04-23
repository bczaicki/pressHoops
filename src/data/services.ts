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
    price: '$90/session',
    features: [
      'Customized workout plan',
      'Video analysis',
      'Skill assessment',
      '60-minute sessions',
    ],
  },
  {
    title: 'Group Training',
    label: 'Small Group',
    description:
      'Small group sessions (2-6 players) provide personalized coaching while maintaining the competitive, game-based environment that drives development.',
    price: '$30-$50 a player',
    features: [
      'Small-sided games',
      'Advantage situations',
      'Competition-based learning',
      '75-minute sessions',
    ],
  },
  {
    title: 'Youth Skill Academy (Ages 8–12)',
    label: 'Youth Program',
    description:
      'Group sessions to introduce young athletes to the game through fun, engaging, game-based training.',
    price: '$40/player',
    features: [
      'Building fundamental skills',
      'Creativity & enjoyment',
      'Small-sided games',
      '90-minute sessions',
    ],
  },
]
