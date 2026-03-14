import type { Service } from '../../data/services'
import { Card } from './Card'

interface ServiceCardProps {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <Card className="text-center hover:shadow-xl transition-shadow duration-300">
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold text-primary-dark mb-2">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <p className="text-2xl font-bold text-secondary mb-4">{service.price}</p>
      <ul className="text-left space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-700">
            <span className="text-secondary mr-2">&#10003;</span>
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  )
}
