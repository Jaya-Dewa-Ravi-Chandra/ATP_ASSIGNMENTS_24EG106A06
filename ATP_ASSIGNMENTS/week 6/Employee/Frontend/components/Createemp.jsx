import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useState } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import { useContext } from 'react'
  axios.defaults.withCredentials=true;
function Createemp() {
  let [loading,setLoading]=useState(false)
  const {counter,changeCounter}=useContext(counterContextObj)
  const Navigate=useNavigate()
  const {register,handleSubmit}=useForm()
  const onFormSubmit=async(newEmp)=>{
    console.log(newEmp)
    try{
      setLoading(true)
      const res=await axios.post("https://empbackend-hwqf.onrender.com/employee/create",newEmp)
      if(res.status==201)
        Navigate('/listofemp')
    }
    catch(err)
    {
      console.log(err)
    }
    finally{
      setLoading(false)
    }
  }
  return (
  <div>
      <div>
       <h1 className='text-4xl'>Counter: {counter}</h1>
       <button onClick={changeCounter} className="bg-yellow-400 p-5">Change</button>
      </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <form onSubmit={handleSubmit(onFormSubmit)} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
      <h1 className="text-3xl font-semibold text-center mb-6">Create Employee</h1>
      {loading && <p className="text-center mt-5">Loading...</p>}
      <div className="space-y-4">
      <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("name")} />
      <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("email")} />
      <input type="number" placeholder="Mobile" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("mobile")} />
      <input type="text" placeholder="Designation" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("designation")} />
      <input type="text" placeholder="Company Name" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" {...register("companyname")} />
      </div>
      <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">Submit</button>
    </form>
   </div>
  </div>
   
  )
}

export default Createemp
