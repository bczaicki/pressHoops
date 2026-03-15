import type { Service } from '../../data/services'

interface ServiceCardProps {
  service: Service
  index?: number
}

export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
  const delayClass = index === 0 ? '' : index === 1 ? 'delay-2' : 'delay-4'

  return (
    <div
      className={`animate-fade-up ${delayClass} group relative rounded-2xl bg-navy-light/60 border border-steel/20 p-8 transition-all duration-300 hover:shadow-gold-glow hover:border-gold/30`}
    >
      {/* Gold top accent */}
      <div className="absolute inset-x-8 top-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Label */}
      <span className="text-label text-gold mb-4 block">{service.label}</span>

      {/* Title */}
      <h3 className="heading-display text-3xl text-ice mb-3">{service.title}</h3>

      {/* Description */}
      <p className="text-ice/70 leading-relaxed mb-6">{service.description}</p>

      {/* Price */}
      <p className="text-stat text-2xl text-gradient-gold mb-6">{service.price}</p>

      {/* Features */}
      <ul className="space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center text-ice/80 text-sm">
            <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-gold/15 text-gold text-xs flex-shrink-0">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}
