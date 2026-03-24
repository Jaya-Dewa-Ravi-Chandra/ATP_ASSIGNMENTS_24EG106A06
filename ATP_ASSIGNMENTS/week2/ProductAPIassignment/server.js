//since it is a default export any name can be used to import 
//no need to mention path just say "express" and it will search node_modules
import exp from 'express'

import {productapp} from "./ProductAPI.js"
import {userapp} from "./UserAPI.js"
//express function creates a server
//app holds the express application
const app=exp()


//use body parser middleware(in-built)
app.use(exp.json())
 function middleware1(req,res,next)
 { //res.json({message:"middleware"})
    console.log("middleware1 implemented")
    next()
 }
 app.use(middleware1)
//forward request to userapi if path starts with /user
app.use('/user-api',userapp)
//forward request to userapi if path starts with /product
app.use('/product-api',productapp)
//express server internally contains http server readymade

//assigning port number(our wish), we are the creator of the server-->user defined
const port=5000
app.listen(port,()=>console.log(`Server is listening to port no:${port}...`))





