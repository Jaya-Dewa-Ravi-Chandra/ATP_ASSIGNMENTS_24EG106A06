import {useForm} from 'react-hook-form'
function FormDemo() {
    const {register,handleSubmit,formState:{errors}}=useForm()
    const onFormSubmit=(obj)=>{
        console.log(obj)
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
                <button type='submit' className='block mx-auto border-2 bg-amber-400'>Submit</button>
            </form>
            
        </div>
    )

}
export default FormDemo;