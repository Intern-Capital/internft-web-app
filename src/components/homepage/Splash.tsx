import { Link, useNavigate } from "react-router-dom"

import deskBackgroundImage from "../../assets/desk-background.jpg"
import styled from "styled-components"

const FlickerEffect = styled.div`
	@keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-o-keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-moz-keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@-webkit-keyframes flickerAnimation {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	-webkit-animation: flickerAnimation 10s infinite;
	-moz-animation: flickerAnimation 10s infinite;
	-o-animation: flickerAnimation 10s infinite;
	animation: flickerAnimation 10s infinite;
`

export function Splash() {
	const navigate = useNavigate()

	const navigateToExternalLink = (link: string) => {
		window.open(link, "_blank")
	}

	return (
		<div className='bg-black'>
			<FlickerEffect>
				<div className='h-screen w-full '></div>
				<div
					className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
					style={{ backgroundImage: `url(${deskBackgroundImage})` }}
				>
					<div className='max-w-max mx-auto h-screen flex place-items-center justify-center'>
						<main className='flex'>
							<p className='text-4xl font-extrabold text-indigo-600 sm:text-5xl'>404</p>
							<div className='sm:ml-6'>
								<div className='sm:border-l sm:border-gray-200 sm:pl-6'>
									<h1 className='text-4xl font-extrabold text-gray-200 tracking-tight sm:text-5xl'>
										Intern Not Found
									</h1>
									<p className='mt-1 text-base text-gray-100'>Aren't you supposed to be working?</p>
								</div>
								<div className='mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6'>
									<Link
										to='/home'
										type='submit'
										className='flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
									>
										Enter Site
									</Link>
								</div>
							</div>
						</main>
					</div>
				</div>
			</FlickerEffect>
		</div>
	)
}
