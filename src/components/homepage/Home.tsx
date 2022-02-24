import { About } from "./About"
import { ArtWall } from "./ArtWall"
import { Background } from "./Background"
import { Footer } from "./Footer"
import { Hero } from "./Hero"
import { Newsletter } from "./Newsletter"
import { Partners } from "./Partners"
import { Roadmap } from "./Roadmap"
import { Team } from "./Team"
import { Welcome } from "./Welcome"
import { useNavigate } from "react-router-dom"

// import Nav from "./Nav"

export function Home() {
	const navigate = useNavigate()

	const navigateToExternalLink = (link: string) => {
		window.open(link, "_blank")
	}

	return (
		<>
			<Background />
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
