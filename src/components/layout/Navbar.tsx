import { useState, useEffect } from 'react'
import { siteConfig } from '../../data/siteConfig'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-dark/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="navbar-bar flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt={siteConfig.name} className="navbar-logo" />
            <span className="navbar-brand text-white font-bold">{siteConfig.name}</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-primary-dark/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
