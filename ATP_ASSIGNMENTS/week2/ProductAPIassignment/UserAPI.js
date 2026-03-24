//since it is a default export any name can be used to import 
//no need to mention path just say "express" and it will search node_modules
import exp,{request} from "express"

export const userapp=exp.Router()
//test data
let data=[]
            
//creating APIs(REST API Representaional State Transfer)--->must have noun paths not verb(standard nomenclature)
//*`structure of a route: app.method(path,request handler)
//route to handle GET request //http://localhost:5000/users

userapp.get('/users',(req,res)=>{
    res.json({
        message:"all users",
        payload:data
    })
})

userapp.get('/users/:id',(req,res)=>{ 
     //find userid from url parameter
    let UserId1=Number(req.params.id)
    //find index of user
    let indix=data.findIndex(userObj=>userObj.id==UserId1)
    if(indix==-1)
    {
        return res.json({message:"User not found"})
    }
    else
    {
        return res.json({message:data[indix]})
    }
    res.json({message:"all users",payload:data})})//request by server


//                 POST request
userapp.post('/users',(req,res)=>{
    //get user from client(i.e post body)
    const newUser=req.body
    //push user into data
    data.push(newUser)
    //send response
    res.json({message:"POST body User inserted"})
    })//request by client


//                 PUT request
userapp.put('/users',(req,res)=>{
    //get new user from client
    const modUser=req.body
    //get index of existing user in data array
    let index=data.findIndex(userObj=>userObj.id==modUser.id)
    //update user with the derived index
    if(index==-1)
    {
        return res.json({message:"User not found"})
    }
    else
    {
        data.splice(index,1,modUser)
    }

    res.json({message:"this is res to update users"})})

//                 DELETE request
userapp.delete('/users/:id',(req,res)=>{
    //find userid from url parameter
    let UserId=Number(req.params.id)
    //find index of user
    let indx=data.findIndex(userObj=>userObj.id==UserId)
   //delete user by index
   if(indx==-1)
    {
        return res.json({message:"User not found to delete"})
    }
    else
    {
        data.splice(indx,1)
        return res.json({message:"user removed"})
    }
    res.json({message:"this is res to delete users"})})

