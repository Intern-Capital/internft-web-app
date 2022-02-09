import { Navigate, Route, Routes } from "react-router-dom"

import { Home } from "./components/Home"
import { Nav } from "./components/Nav"
import { useNavigate } from "react-router-dom"

export function Main() {
	const navigate = useNavigate()

	return (
		<div>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/' element={<Home />} />
				<Route path='/' element={<Home />} />
				<Route path='*' element={<Navigate replace to='/' />} />
			</Routes>
		</div>
	)
}
