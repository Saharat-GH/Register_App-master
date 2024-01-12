import React from 'react'
import NavBar from './navBar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import ChildrenLayout from './ChildrenLayout'
import SignUp from '../routes/signup'
import '../../StyleComponent/index.css'

export default function RootLeyout() {

  return (
    <div className='App'>
      <ChildrenLayout>
      <Outlet />
      </ChildrenLayout>
    </div>
  )
}
