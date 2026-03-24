import exp from 'express'
import {connect} from 'mongoose'
import { userApp } from './UserAPI.js'
import { ProductApp } from './ProductAPI.js'
import cookieParser from 'cookie-parser'
const app=exp()
//for req.body to work
//a body parser
app.use(exp.json())
app.use(cookieParser())
//forward  request to userApp if path starts with /user-api
app.use("/user-api",userApp)
app.use("/product-api",ProductApp)
async function connectDB()
{   
  try
  {
    await connect("mongodb://localhost:27017")
    console.log("DB connection success")
    app.listen(5000,()=>console.log("Server is listening to port 5000....."))//http server starts after succesful connection of db
  }
  catch(err)
  {
    console.log(`error in DB connection ${err}`)
  }
}
connectDB()

//error handling middleware(only executes when there is a error)
//error=>{name,message,callstack->in depth discussion of stack trace}
//always at end of server.js
app.use((err,req,res,next)=>{
  console.log("error name:",err.name,"\n",err.message,err.stack)
  if(err.name=='ValidationError')
   return res.status(400).json({message:"error occured",error:[err.name,err.message]})
  //for invalid object id
  if(err.name=='CastError')
    return res.status(400).json({message:"error occured",error:[err.name,err.message]})

  res.status(500).json({message:"error occured",error:["Server side error",err.message]})
})