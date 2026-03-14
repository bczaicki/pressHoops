import { useEffect } from 'react'
import { siteConfig } from '../../data/siteConfig'
import { SectionHeading } from '../ui/SectionHeading'

export function BookSession() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="book" className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Book a Session"
          subtitle="Ready to take your game to the next level? Schedule your training session today."
          light
        />
        <div
          className="calendly-inline-widget bg-white rounded-2xl overflow-hidden"
          data-url={siteConfig.calendlyUrl}
          style={{ minWidth: '320px', height: '630px' }}
        />
      </div>
    </section>
  )
}
