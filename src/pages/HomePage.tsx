import { About } from '../components/sections/About/About'
import { Contact } from '../components/sections/Contact/Contact'
import { Experience } from '../components/sections/Experience/Experience'
import { Hero } from '../components/sections/Hero/Hero'
import { Portfolio } from '../components/sections/Portfolio/Portfolio'
import { Skills } from '../components/sections/Skills/Skills'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
    </>
  )
}
