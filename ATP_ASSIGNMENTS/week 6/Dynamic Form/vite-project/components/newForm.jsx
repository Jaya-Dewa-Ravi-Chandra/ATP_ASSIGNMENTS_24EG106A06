import { useState } from 'react'
import {useForm} from 'react-hook-form'
function NewForm() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    let [records,setRecords]=useState([])
    const onFormSubmit=(obj)=>{
        setRecords([...records,obj])
        console.log(records)
    }
    return(
        <div className='mt-20 '>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="mb-3">
                    <label className="text-2xl" htmlFor="Username">Username</label>
                    <input {...register("Username",{
                        required:"Username required",
                        minLength:4,
                        validate:(v)=>v.trim().length!==0 ||"Whitespaces are not allowed"
                    })} className="border w-full p-3"/>
                {errors.Username?.type==="required" && <p className="text-red-500">{errors.Username.message}</p>}
                {errors.Username?.type==="minLength" && <p className="text-red-500">Minlength is 4 </p>}
                {errors.Username?.type==="validate" && <p className="text-red-500">{errors.Username.message}</p>}
                </div>
                <div className="mb-3">
                    <label className="text-2xl" htmlFor="email">email</label>
                    <input {...register("email",{
                        required:"Email required"
                    }
                    )} className="border w-full p-3"/>
                {errors.email?.type==="required" && <p className="text-red-500">{errors.email.message}</p>}
                </div>
                <div className="mb-3">
                    <label className="text-2xl" htmlFor="DOB">Date of Birth</label>
                    <input type="date" {...register("DOB",{
                        required:"DOB required"
                    }
                    )} className="border w-full p-3"/>
                {errors.DOB?.type==="required" && <p className="text-red-500">{errors.DOB.message}</p>}
                </div>
                <button type='submit' className='block mx-auto border-2 px-10 bg-amber-400'>Add User</button>
            </form>
            <div>
                <table className="mx-auto border-2 my-20 w-[50%]">
                    <thead className='border-2'>
                        <tr>
                            <th className='border-2 text-center'>Name</th>
                            <th className='border-2 text-center'>Email</th>
                            <th className='border-2 text-center'>DOB</th>
                        </tr>
                    </thead>
                    <tbody className='border-2'>
                        {records.map(obj=><tr className='text-centre'>
                            <td className='border-2 text-center'>{obj.Username}</td>
                            <td className='border-2 text-center'>{obj.email}</td>
                            <td className='border-2 text-center'>{obj.DOB}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )

}
export default NewForm;