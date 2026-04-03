import { createBrowserRouter,RouterProvider,Navigate } from 'react-router'
import './App.css'
import React from 'react'
import Rootlayout from '../components/Rootlayout'
import Createemp from '../components/Createemp'
import Listofemp from '../components/Listofemp'
import Employee from '../components/Employee'
import EditEmp from '../components/EditEmp'
import Home from '../components/Home'
function App() {
  const routerObj=createBrowserRouter([
    {
      path:"/",
      element:<Rootlayout/>,
      children:[
        {path:"",element:<Home/>},
        {path:"listofemp",element:<Listofemp/>},
        {path:"createemp",element:<Createemp/>},
        {path:"employee",element:<Employee/>},
        {path:"editemployee",element:<EditEmp/>}
      ]
    }
  ])
  return <RouterProvider router={routerObj}/>
}

export default App