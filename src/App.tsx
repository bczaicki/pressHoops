import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { BookSession } from './components/sections/BookSession'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BookSession />
      <Contact />
      <Footer />
    </>
  )
}
