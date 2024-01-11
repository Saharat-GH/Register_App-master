import React from 'react'
import NavBar from './navBar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

export default function RootLeyout() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  )
}
