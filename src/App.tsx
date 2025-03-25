import { Navigate, Route, Routes, useLocation } from "react-router"

import { Login } from "./components/Login"
import { Home } from "./components/Home"
import { Actors } from "./components/Actors"
import { UserFetcher } from "./components/UserFetcher"


export function App() {
  useLocation()

  if (localStorage.getItem('token')) {
    return <UserFetcher>
      <Routes>
        <Route path="/actors" element={<Actors />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </UserFetcher>
  }
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

