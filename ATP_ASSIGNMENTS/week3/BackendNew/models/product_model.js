import { Schema,model } from "mongoose"
const productSchema=new Schema({
     productId:{
      type:Number,
        required:[true,"productID is required"]
     },
     productName:{
        type:String,
        required:[true,"productName is required"]
     },
     price:{
        type:Number,
        required:[true,"product price is required"],
        min:[10000,"minimum worth is 10000"],
        max:[50000,"maximum worth is 50000"]
     },
     brand:
     {
        type:String,
        required:[true,"product brand is required"]
     }
},
{
    versionKey:false,
    timestamps:true
})
export const ProductModel=model("product",productSchema)