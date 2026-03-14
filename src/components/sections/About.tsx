import { siteConfig } from '../../data/siteConfig'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={siteConfig.about.heading} />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl aspect-square flex items-center justify-center">
            <img src="/logo.png" alt="Trainer" className="h-32 w-32 opacity-50" />
          </div>

          {/* Bio */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {siteConfig.about.bio}
            </p>
            <ul className="space-y-3">
              {siteConfig.about.credentials.map((cred) => (
                <li key={cred} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                  {cred}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
