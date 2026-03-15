import { siteConfig } from '../../data/siteConfig'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-cream py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={siteConfig.about.heading} />
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Coach photo */}
          <div>
            <img
              src={`${import.meta.env.BASE_URL}coach.jpg`}
              alt="Coach Evan Dougherty"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
          </div>

          {/* Bio */}
          <div className="animate-fade-up">
            <ul className="space-y-3 mb-6">
              {siteConfig.about.credentials.map((cred) => (
                <li key={cred} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                  {cred}
                </li>
              ))}
            </ul>
            {siteConfig.about.bio.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-gray-700 text-lg leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
