rest api--->mongodb native driver--->db server
>basic approach



rest api ---->mongoose odm(object document mapping-->to map js object to database) tool---->db server
>best approach
>receiveing request data
>saftety and security

npm install mongoose

to connect to database server:
import connect method from mongoose
connect parmeters:
>uri -uniform resource identifier
>connection options
>returns promise

usinc async and await
async function xyz()
{
 try{
    let res=await fetch("wbfinvsbueahoivbsai")
    let data=await res.json()                //await waits for the function to complete to proceed to next
    console.log(data)
 }
 catch(err)
 {
    console.log(err)
 }
}

//build user-api
create user
read user by id
read all users
update user by id
delete user by id
create schema and model of the resource
create user api and define routes

handling errors in rest api
 express version 5 doesnt require try catch
 auto error handling enabled
 therefore we need to handle errors as html to json conversion

 use find one method to read a document with non object id fields
 use find by id method to read document woith object id

 Status codes
 200- upon any kind of successful execution for all RUD operations in CRUD
 201-upon successful creation i.e C in CRUD
 400-Bad request,client side mistakes(invalid values allotment)\
 401-Unauthorized request                                       ---->all server side errors
 404-resource not found     
 
 json web token
 1st part:algorithm and type
2nd part:payload
single key encoding method
    hmac
advanced encoding method
 rsa algorithm

popular attacks
 xxs-cross site scripting (reading token without our knowledge)
 crsf

 app.use(middleware) -->application level middleware
 userApp.get(path,middleware,req handler)-->route level middleware

 to access cookies property of request object we need cookie parser middleware otherwise req.cookies is undefined
