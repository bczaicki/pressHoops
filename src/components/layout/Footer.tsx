import { siteConfig } from '../../data/siteConfig'

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={`${import.meta.env.BASE_URL}logo.png`} alt={siteConfig.name} className="h-10 w-10" />
              <span className="font-bold text-xl">{siteConfig.name}</span>
            </div>
            <p className="text-gray-400">{siteConfig.description}</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-gray-400">
              <p>{siteConfig.contact.email}</p>
              <p>{siteConfig.contact.phone}</p>
              <p>{siteConfig.contact.location}</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                Instagram
              </a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                Twitter
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-accent transition-colors">
                YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
