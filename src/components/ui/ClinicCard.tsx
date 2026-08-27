import type { Clinic } from '../../data/clinics'

interface ClinicCardProps {
  clinic: Clinic
  index?: number
}

export function ClinicCard({ clinic, index = 0 }: ClinicCardProps) {
  const delayClass = index === 0 ? '' : 'delay-2'

  return (
    <div
      className={`animate-fade-up ${delayClass} hover-lift flex flex-col overflow-hidden rounded-2xl bg-surface shadow-card`}
    >
      {/* Clinic flyer */}
      <a href={clinic.registerUrl} target="_blank" rel="noopener noreferrer">
        <img
          src={`${import.meta.env.BASE_URL}${clinic.image}`}
          alt={`${clinic.title} flyer — ${clinic.ages}, ${clinic.time} at ${clinic.location}`}
          className="w-full object-cover"
          loading="lazy"
        />
      </a>

      <div className="flex flex-1 flex-col p-8">
        <span className="text-label text-secondary mb-3 block">{clinic.label}</span>
        <h3 className="heading-display text-3xl text-primary-dark mb-3">{clinic.title}</h3>
        <p className="text-gray-700 leading-relaxed mb-6">{clinic.description}</p>

        {/* Details */}
        <dl className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6">
          <div>
            <dt className="text-label text-text-muted mb-1">Dates</dt>
            <dd className="text-stat text-sm text-primary-dark">
              {clinic.dates.map((date) => (
                <span key={date} className="block">
                  {date}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="text-label text-text-muted mb-1">Time</dt>
            <dd className="text-stat text-sm text-primary-dark">{clinic.time}</dd>
          </div>
          <div>
            <dt className="text-label text-text-muted mb-1">Location</dt>
            <dd className="text-sm text-primary-dark">{clinic.location}</dd>
          </div>
          <div>
            <dt className="text-label text-text-muted mb-1">Price</dt>
            <dd className="text-stat text-2xl text-gradient-gold">
              {clinic.price}
              {clinic.priceNote && (
                <span className="block text-xs font-normal text-text-muted">
                  {clinic.priceNote}
                </span>
              )}
            </dd>
          </div>
        </dl>

        {/* Focus areas */}
        <p className="text-label text-text-muted mb-3">Clinic Focus</p>
        <ul className="flex flex-wrap gap-2 mb-8">
          {clinic.focus.map((item) => (
            <li
              key={item}
              className="rounded-full bg-secondary/10 px-3 py-1 text-sm text-primary-dark"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Register */}
        <div className="mt-auto">
          <a
            href={clinic.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-gold px-6 py-3 font-semibold text-midnight transition-colors duration-200 hover:bg-gold-light"
          >
            Register Today
          </a>
          <p className="text-sm text-text-muted mt-3">
            Bend Parks &amp; Rec activity code{' '}
            <span className="text-stat text-primary-dark">{clinic.activityCode}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
