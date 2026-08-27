export interface Clinic {
  title: string
  label: string
  description: string
  image: string
  ages: string
  dates: string[]
  time: string
  location: string
  price: string
  priceNote?: string
  focus: string[]
  activityCode: string
  registerUrl: string
}

export const clinics: Clinic[] = [
  {
    title: 'Bitty Ballers Clinic',
    label: 'Ages 7–10',
    description:
      'A fun, high-energy clinic focused on building skills, confidence, and a love for the game!',
    image: 'bittyBallers.jpg',
    ages: 'Boys & Girls Ages 7–10',
    dates: ['9/13/2026', '9/20/2026', '9/27/2026'],
    time: '9:00AM – 10:30AM',
    location: 'Caldera High School',
    price: '$130',
    focus: [
      'Spacing',
      'Quick decisions',
      'Moving without the ball',
      'Teamwork',
      'Having fun!',
    ],
    activityCode: '303065-01',
    registerUrl: 'https://shorturl.at/6Ozkl',
  },
  {
    title: 'Middle School Academy Clinic',
    label: 'Ages 11–14',
    description:
      'A fun, high-energy clinic that helps you transition beyond basic skills to game-ready performance!',
    image: 'middleSchoolPressHoops.jpg',
    ages: 'Boys & Girls Ages 11–14',
    dates: ['9/6/2026', '9/13/2026', '9/20/2026', '9/27/2026'],
    time: '11:00AM – 12:30PM',
    location: 'Caldera High School',
    price: '$130',
    priceNote: 'for all 4 dates',
    focus: [
      'Reading defenders',
      'Moving without the ball',
      'Proper footwork',
      'Being a good teammate',
      'Having fun!',
    ],
    activityCode: '303066-01',
    registerUrl: 'https://shorturl.at/6Ozkl',
  },
]
