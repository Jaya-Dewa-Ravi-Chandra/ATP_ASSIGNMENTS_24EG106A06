import { useState, useEffect } from "react"
export default function APIdemo() {
    console.log("API demo rendered")
    let[users,setUsers]=useState([])
    let[loading,setLoading]=useState(true)
    let[error,setError]=useState(null)
    useEffect
    (()=>
        {
        async function getData()
        {
            setLoading(true)
            try{
                let res=await fetch("https://jsonplaceholder.typicode.com/users")
                let usersList=await res.json()
                setUsers(usersList)
            }
            catch(err){
                console.log("error is ",err)
                setError(err)
            }
            finally{
                setLoading(false)
            }
            }
            getData()
        }
    ,[])
    if(loading)
        return <p className="text-center mt-9 text-8xl text-blue-600">Loading...</p>
    if(error!==null)
        return <p className="text-center mt-9 text-8xl text-red-500">{error}</p>
    /*return (
        <div className="text-center mt-10">
            <h1 className="text-8xl">List of Users</h1>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {users.map(userObj=><div>
                    <p>Name:{userObj.name}</p>
                    <p>Email:{userObj.email}</p>
                    </div>)}
            </div>
        </div>
    )*/
}
