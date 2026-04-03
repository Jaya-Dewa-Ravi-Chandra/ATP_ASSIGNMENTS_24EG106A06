import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
function Rootlayout() {
  return (
    <div>
        <Header/>
        <div className='min-h-screen'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Rootlayout