import { About } from "../homepage/About"
import { ArtWall } from "../homepage/ArtWall"
import { Footer } from "../homepage/Footer"
import { Hero } from "../homepage/Hero"
import { Newsletter } from "../homepage/Newsletter"
import { Partners } from "../homepage/Partners"
import { Roadmap } from "../homepage/Roadmap"
import { Team } from "../homepage/Team"
import { Welcome } from "../homepage/Welcome"
import { useNavigate } from "react-router-dom"

// import Nav from "./Nav"

export function Home() {
  const navigate = useNavigate()

  const navigateToExternalLink = (link: string) => {
    window.open(link, "_blank")
  }

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
