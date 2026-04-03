import React from 'react'
import { NavLink } from 'react-router'

function Header() {
  return (
    <nav className='flex justify-end text-2xl gap-5 bg-gray-500 p-5'>
            <NavLink to="" className={({isActive})=>(isActive)?"text-amber-700 bg-amber-300":""}>Home</NavLink>
            <NavLink to="createemp" className={({isActive})=>(isActive)?"text-amber-700 bg-amber-300":""}>Createemp</NavLink>
            <NavLink to="listofemp" className={({isActive})=>(isActive)?"text-amber-700 bg-amber-300":""}>Listofemp</NavLink>

    </nav>
  )
}

export default Header