import { Nav } from "./Nav"
import ramen from "../assets/ramen.jpg"
import { useNavigate } from "react-router-dom"

export function Hero() {
	const heroStyle = {
		backgroundImage: `url(${ramen})`,
	}

	return (
		<div>
			<Nav />
			<div className='hero min-h-screen' style={heroStyle}>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='text-center hero-content text-neutral-content'>
					<div className='max-w-md'>
						<h1 className='mb-5 text-5xl font-bold'>Hello there</h1>
						<p className='mb-5'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
							exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className='btn btn-primary'>Get Started</button>
					</div>
				</div>
			</div>
		</div>
	)
}
