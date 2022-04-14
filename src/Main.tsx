import { Navigate, Route, Routes } from "react-router-dom"

import { Home } from "./components/pages/Home"
import { Splash } from "./components/pages/Splash"

export function Main() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/splash' element={<Splash />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  )
}
