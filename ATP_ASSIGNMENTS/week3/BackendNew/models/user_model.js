import { Schema, model } from "mongoose";
const userSchema=new Schema({
username:{
    type:String,
    required:[true,"Username is required"],
    minLength:[4,"Min length of username is 4 chars"],
    maxLength:[6,"Max length of username is 6 chars"]
},
password:{
    type:String,
    required:[true,"password required"]
},
email:{
    type:String,
    required:[true,"user email required"],
    unique:[true,"user email already registered"]
},
age:{
    type:Number
}
},
{
versionKey:false,
timestamps:true
}
)
export const UserModel=model("user",userSchema)
//a string(puts (s) at he end of string while displaying), a schema


