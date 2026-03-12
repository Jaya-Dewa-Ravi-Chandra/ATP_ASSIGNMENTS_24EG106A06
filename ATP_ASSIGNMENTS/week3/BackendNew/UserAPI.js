import exp from 'express'
import { UserModel } from './models/user_model.js'
import {hash ,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { VerifyToken } from './middlewares/VerifyToken.js'
const{sign}=jwt

export const userApp=exp.Router()


userApp.post("/users",async(req,res)=>{
    const newUser=req.body
    //create new user document
    const pwd=await hash(newUser.password,10)
    newUser.password=pwd
    const newUserDocument=new UserModel(newUser)
    //save
    const result=await newUserDocument.save()
    console.log("result:",result)
    res.status(201).json({message:"user created"})
})



//read all users
userApp.get("/users",VerifyToken,async(req,res)=>{
    let UsersList=await UserModel.find()
    res.status(200).json({users:UsersList})
})



//read user by object id
userApp.get("/users/:id",async(req,res)=>{
    const uid=req.params.id
    //find user by id
  //  const user= await UserModel.findOne({_id:uid})
  //                  or
    const user=await UserModel.findById(uid)
    if(!user){
        res.status(404).json({message:"user not found"})
        return
    }
    res.status(200).json({message:"user",payload:user})
})


//update user by id
userApp.put("/users/:id",async(req,res)=>{
    const modifiedUser=req.body
    const uid=req.params.id
    const pwd=await hash(modifiedUser.password,10)
    modifiedUser.password=pwd
    //find user by id
    const updatedUser=await UserModel.findByIdAndUpdate(uid,{$set:{...modifiedUser}},{returnDocument:'after',runValidators:true})
    //new returns updated db
    //update user by id
    res.status(200).json({message:"updated user",payload:updatedUser})
})


//delete user by id
userApp.delete("/users/:id",async(req,res)=>{
    const uid=req.params.id
    const user=await UserModel.findByIdAndDelete(uid)
    if(!user)
    {
        res.status(404).json({message:"user not found"})
        return
    }
    res.status(200).json({message:"deleted user",payload:user})
})

//for authentication
userApp.post("/users/auth",async(req,res)=>{
    const {email,password}=req.body
    let user= await UserModel.findOne({email:email})
    if(!user)
        return res.status(400).json({message:"Invalid Email"})

    let secure=await compare(password,user.password)
    
    if(!secure)
        return res.status(400).json({message:"Invalid Password"})
    const signedToken=sign({email:user.email},"abcdef",{expiresIn:10})//in double quotes milli seconds if just number seconds
    res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })

    res.status(200).json({message:"connection success",token:user})
})