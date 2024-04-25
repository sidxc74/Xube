import React from 'react'
import {Outlet, useLocation} from 'react-router-dom'
import Navbar from './components/Globals/Navbar'
import Sidebar from './components/Globals/Sidebar'
import Listvideo from './components/Home/Listvideo'
import MyChannel from './pages/MyChannel'
import DetailVideo from './pages/DetailVideo'

function Layout() {

const location = useLocation()
const path= location.pathname.split('/')[1]
const value = path === "video"

  return (
    <div className="h-screen overflow-y-auto bg-white text-black">
      <Navbar />
      <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)]">
        <Sidebar path={value} />
        <section className="w-full   pb-[70px] sm:ml-[70px] sm:pb-0 lg:ml-0">
          <Outlet />
        </section>
      </div>


    </div>
  )
}

export default Layout