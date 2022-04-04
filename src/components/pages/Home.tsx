import { About } from '../homepage/About'
import { ArtWall } from '../homepage/ArtWall'
import { Footer } from '../homepage/Footer'
import { Hero } from '../homepage/Hero'
import { Newsletter } from '../homepage/Newsletter'
import { Partners } from '../homepage/Partners'
import { Roadmap } from '../homepage/Roadmap'
import { Team } from '../homepage/Team'
import { Welcome } from '../homepage/Welcome'

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Partners />
      <Welcome />
      <ArtWall />
      <Roadmap />
      <Team />
      <Newsletter />
      <Footer />
    </>
  )
}
