import React from 'react'
import { useLocation } from 'react-router'

function Employee() {
    const {state}=useLocation()
  return (
    
    <div className='p-16 text-center text-5xl m-52 bg-blue-400'>
        <p className='break-all'>{state.name}</p>
        <p className='break-all'>{state.email}</p>
        <p className='break-all'>{state.mobile}</p>
        <p className='break-all'>{state.designation}</p>
        <p className='break-all'>{state.company}</p>
    </div>
  )
}

export default Employee