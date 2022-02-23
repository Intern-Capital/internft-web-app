import { useNavigate } from "react-router-dom"
import { About } from "./About"
import { ArtWall } from "./ArtWall"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { Partners } from "./Partners"
import { Roadmap } from "./Roadmap"
import { Team } from "./Team"
import { Welcome } from "./Welcome"
import { Newsletter } from "./Newsletter"
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
