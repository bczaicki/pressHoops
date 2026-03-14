import { siteConfig } from '../../data/siteConfig'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-primary-light overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full border-2 border-white" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full border-2 border-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <img src="/logo.png" alt={siteConfig.name} className="h-48 md:h-64 w-auto mx-auto mb-8" />
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
          {siteConfig.tagline}
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto">
          {siteConfig.description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="secondary" size="lg" href="#book">
            Book a Session
          </Button>
          <Button variant="outline" size="lg" href="#services">
            View Services
          </Button>
        </div>
      </div>
    </section>
  )
}
