import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import TopNav from '../components/TopNav'

const LayoutOne = () => {
  return (
    <>
       <div className='flex'>
        <Navbar/>
         <TopNav/>
       </div>
        <Outlet/>
    </>
  )
}

export default LayoutOne