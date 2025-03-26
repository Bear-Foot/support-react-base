import { Navigate, Route, Routes, useLocation } from "react-router"

import { Login } from "./components/Login"
import { Home } from "./components/Home"
import { Actors } from "./components/Actors"
import { UserFetcher } from "./components/UserFetcher"
import { Layout } from "./components/Layout"
import { ActorCreation } from "./components/ActorCreation"
import { Chrono } from "./components/Chrono"
import { ActorChart } from "./components/ActorChart"

export function App() {
  useLocation()

  if (localStorage.getItem('token')) {
    return <UserFetcher>
      <Layout>
        <Routes>
          <Route path="/actors" element={<Actors />} />
          <Route path="/actors/create" element={<ActorCreation />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chrono" element={<Chrono />} />
          <Route path="/actor-chart" element={<ActorChart />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Layout>
    </UserFetcher>
  }
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

