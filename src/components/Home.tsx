import { useNavigate } from "react-router-dom"

export function Home() {
	const navigate = useNavigate()

	const navigateToExternalLink = (link: string) => {
		window.open(link, "_blank")
	}

	return <h1>Hi Mom</h1>
}
