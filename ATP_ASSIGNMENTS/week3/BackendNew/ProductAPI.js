import { ProductModel } from "./models/product_model.js"
import exp from 'express'
export const ProductApp=exp.Router()
ProductApp.get("/product",async(req,res)=>{
    const products=await ProductModel.find()
    res.json({message:"products",products:products})

})
ProductApp.get("/product/ByBrand/:id",async(req,res)=>{
    const id=req.params.id
    const product=await ProductModel.findOne({brand:id})
    if(!product)
        return res.json({message:"product not found"})
    res.json({message:"product retreived",product:product})

})
ProductApp.post("/product",async(req,res)=>{
    const product=req.body
    const productNewDocument=new ProductModel(product)
    const result=await productNewDocument.save()
    console.log("result:",result)
    res.status(201).json({message:"product created"})
})
ProductApp.put("/product/:id",async(req,res)=>{
    const pro=req.body
    const id=req.params.id
    const product=await ProductModel.findOne({productId:id})
    if(!product)
    {
        return res.json({message:"product not found"})
    }
    const updated=await ProductModel.updateOne({productId:id},{$set:{...pro}},{returnDocument:'after',runValidators:true})
    res.status(200).json({message:"product updated",updated:pro})

})
ProductApp.delete("/product/:id",async(req,res)=>{
    const id=Number(req.params.id)
    const product=await ProductModel.findOne({productId:id})
    if(!product)
    {
      res.json({message:"product not found"})
      return
    }
    await ProductModel.deleteOne({productId:id})
    res.status(200).json({message:"product deleted",deletedProduct:product})
})