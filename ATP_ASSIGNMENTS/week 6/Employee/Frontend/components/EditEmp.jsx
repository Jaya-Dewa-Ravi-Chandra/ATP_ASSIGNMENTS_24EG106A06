import React from 'react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router'
import axios from 'axios'
import { useNavigate } from 'react-router'
axios.defaults.withCredentials=true;
function EditEmp() {
 const {register, handleSubmit, formState:{errors},setValue}=useForm()
 const {state}=useLocation()
 const navigate=useNavigate()
 useEffect(()=>{
    setValue("name",state.name);
    setValue("email",state.email);
    setValue("mobile",state.mobile);
    setValue("designation",state.designation);
    setValue("companyname",state.companyname);
 })
 const saveModifiedEmp=async(modifiedEmp)=>{
    const res= await axios.put(`https://empbackend-hwqf.onrender.com/employee/edit/${state._id}`,modifiedEmp)
    if(res.status==200)
        navigate("/listofemp")
 }
  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
    <form className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md" onSubmit={handleSubmit(saveModifiedEmp)}>
      <h1 className="text-3xl font-semibold text-center mb-6">Create Employee</h1>
      <div className="space-y-4">
      <input type="text" placeholder="Name" className="w-full p-2 border rounded-xl " {...register("name")} />
      <input type="email" placeholder="Email" className="w-full p-2 border rounded-xl " {...register("email")} disabled/>
      <input type="number" placeholder="Mobile" className="w-full p-2 border rounded-xl " {...register("mobile")} />
      <input type="text" placeholder="Designation" className="w-full p-2 border rounded-xl " {...register("designation")} />
      <input type="text" placeholder="Company Name" className="w-full p-2 border rounded-xl " {...register("companyname")} />
      </div>
      <button type="submit" className="w-full mt-6 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition">Submit</button>
    </form>
    </div>
  )
}

export default EditEmp
