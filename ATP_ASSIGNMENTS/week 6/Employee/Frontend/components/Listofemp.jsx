import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
import { useContext } from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
axios.defaults.withCredentials=true;
function Listofemp() {
  let navigate=useNavigate()
  let [emps,setEmps]=useState([])
  let [loading,setLoading]=useState(true)
  const {counter,changeCounter}=useContext(counterContextObj)
  const goToEmployee=(empObj)=>{
    navigate("/employee",{state:empObj})
  }
  const goToEdit=(empObj)=>{
    navigate("/editemployee",{state:empObj})
  }

  const deleteEmpById=async(id)=>{
    let res=await axios.delete(`https://empbackend-hwqf.onrender.com/employee/delete/${id}`)
    if(res.status==200)  
      getEmps();
  }
  async function getEmps() {
     try{
      setLoading(true)
      console.log("in axios get")
      let res = await axios.get("https://empbackend-hwqf.onrender.com/employee/read");
      if (res.status === 200) {
        setEmps(res.data.payload);
      }
     }
     catch(err){
      console.log(`error is \n${err}`)
     }
     finally
     {
      setLoading(false)
     }
    }

   //list of employees must be obtained on component for displaying 
   useEffect(() => { getEmps(); }, []);

   return (
    <div>
      <div>
       <h1 className='text-4xl'>Counter: {counter}</h1>
       <button onClick={changeCounter} className="bg-yellow-400 p-5">Change</button>
      </div>
      <h1 className='text-4xl text-center'>List of Employees</h1>
      {loading && <p className="text-center mt-5">Loading...</p>}

      {!loading && emps.length === 0 && (
        <p className="text-center mt-5">No employees found</p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {
          emps.map((empObj)=>(
            <div key={empObj._id} className="bg-amber-50 text-center text-2xl rounded-2xl shadow-2xl p-2">
              <p className="break-all">{empObj.email}</p>
              <p className='break-all mb-4'>{empObj.name}</p>
              <div className='flex justify-around text-white'>
                <button onClick={()=>goToEmployee(empObj)} className="rounded-2xl p-2 bg-green-700">View</button>
                <button onClick={()=>goToEdit(empObj)} className="rounded-2xl p-2 bg-orange-500">Edit</button>
                <button onClick={()=>deleteEmpById(empObj._id)} className="rounded-2xl p-2 bg-red-700">Delete</button>
              </div>
            </div>
            
          ))
        }

      </div>
    </div>
  )
 }

export default Listofemp
