import { clinics } from '../../data/clinics'
import { SectionHeading } from '../ui/SectionHeading'
import { ClinicCard } from '../ui/ClinicCard'

export function Clinics() {
  return (
    <section id="clinics" className="section-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Upcoming Clinics"
          subtitle="Fall 2026 clinics at Caldera High School. Registration is through Bend Parks & Rec."
        />
        <div className="grid md:grid-cols-2 gap-10">
          {clinics.map((clinic, i) => (
            <ClinicCard key={clinic.title} clinic={clinic} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
