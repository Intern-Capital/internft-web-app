import { Navigate, Route, Routes } from "react-router-dom"

import { Hero } from "./components/Hero"
import { Home } from "./components/Home"
import { Nav } from "./components/Nav"

export function Main() {
	return (
		<div>
			<Hero />
			<div className='container mx-auto mt-6'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/' element={<Home />} />
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Navigate replace to='/' />} />
				</Routes>
			</div>
		</div>
	)
}
