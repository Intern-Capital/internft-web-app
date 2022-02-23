import { Navigate, Route, Routes } from "react-router-dom"

import { Home } from "./components/homepage/Home"

export function Main() {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/' element={<Home />} />
			<Route path='/' element={<Home />} />
			<Route path='*' element={<Navigate replace to='/' />} />
		</Routes>
	)
}
