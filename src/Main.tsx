import { Navigate, Route, Routes } from "react-router-dom"

import { Home } from "./components/pages/Home"
import { Splash } from "./components/pages/Splash"

export function Main() {
	return (
		<Routes>
			<Route path='/' element={<Splash />} />
			<Route path='/home' element={<Home />} />
			<Route path='*' element={<Navigate replace to='/' />} />
		</Routes>
	)
}
