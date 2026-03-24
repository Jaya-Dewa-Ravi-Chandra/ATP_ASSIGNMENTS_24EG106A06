import exp, {request} from 'express'
export const productapp=exp.Router()

let products=[]
productapp.get("/product",(req,res)=>{
     return res.json({message:"all products",
              data:products
    })
})


productapp.get("/product/ByBrand/:brand",(req,res)=>{
    let brand=req.params.brand
    let key=products.findIndex(obj=>obj.Brand==brand)
    return res.json({product:products[key]})
}
)



productapp.post("/product",(req,res)=>{
    let s=req.body
    products.push(s)
    res.json({message:"all products inserted"})
    })



productapp.put('/product-api/product',(req,res)=>{
    const update=req.body
    let i=products.findIndex(Obj=>Obj.ProductId==update.ProductId)
    if(i==-1)
    {
        return res.json({message:"product not found"})
    }
    else
    {
        products.splice(i,1,update)
    }

    res.json({message:"this is res to update products"})})



productapp.delete('/product/:id',(req,res)=>{
    let boom=Number(req.params.id)
    let ind=products.findIndex(Obj=>Obj.ProductId==boom)
   if(ind==-1)
    {
        return res.json({message:"Product not found to delete"})
    }
    else
    {
        products.splice(ind,1)
        return res.json({message:"Product removed"})
    }
}
)


