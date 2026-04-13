import exp from 'express';
import {config} from 'dotenv'
import {connect} from 'mongoose'
import {userApp} from './API/UserAPI.js';
import {adminApp} from './API/AdminAPI.js';
import {authorApp } from './API/AuthorAPI.js';
import {commonApp} from './API/CommonAPI.js'
import cookieParser from 'cookie-parser'
import cors from "cors"
config()
const app=exp()
//body parser middleware
app.use(exp.json())
app.use(cookieParser())
app.use(cors({origin:["http://localhost:5173"], credentials:true}))
app.use(cors({origin:["http://localhost:27017/"], credentials:true}))
//path level middlewares
app.use("/auth",commonApp)
app.use("/user-api",userApp);
app.use('/author-api',authorApp);
app.use("/admin-api",adminApp);



//connect to db
const connectdb=async()=>
{
    try{
        await connect(process.env.DB_URL)
        console.log("Database connected")
        //assign port
        const port=process.env.PORT || 3000
        app.listen(port,()=>console.log(`server listening on ${port}`))
    }
    catch(err)
    {
        console.log("err in db connect",err);
    }
}
connectdb()

app.use((err, req, res, next) => {
  console.log("Error name:", err.name);
  console.log("Error code:", err.code);
  console.log("Error cause:", err.cause);
  console.log("Full error:", JSON.stringify(err, null, 2));
  //ValidationError
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  //CastError
  if (err.name === "CastError") {
    return res.status(400).json({ message: "error occurred", error: err.message });
  }
  const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
  const keyValue = err.keyValue ?? err.cause?.keyValue ?? err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];
    return res.status(409).json({
      message: "error occurred",
      error: `${field} ${value} already exists`
    })
  }

  //send server side error
  res.status(500).json({ message: "error occurred", error: "Server side error" });
})
