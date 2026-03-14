import type { Testimonial } from '../../data/testimonials'
import { Card } from './Card'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col">
      <div className="text-4xl text-accent mb-4">&ldquo;</div>
      <p className="text-gray-700 italic flex-grow mb-4">{testimonial.quote}</p>
      <div>
        <p className="font-bold text-primary-dark">{testimonial.name}</p>
        <p className="text-sm text-gray-500">{testimonial.role}</p>
      </div>
    </Card>
  )
}
