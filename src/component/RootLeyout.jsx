import React from 'react'
import NavBar from './navBar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import ChildrenLayout from './ChildrenLayout'
export default function RootLeyout() {

  return (
    <div>
      <ChildrenLayout>
      <Outlet />
      </ChildrenLayout>
    </div>
  )
}
