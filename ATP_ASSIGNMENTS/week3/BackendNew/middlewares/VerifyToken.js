import jwt from "jsonwebtoken"
const {verify}=jwt
export function VerifyToken(req,res,next){
    const token=req.cookies?.token;
    console.log(token)
    if(!token)
    {
        return res.status(401).json({message:"plz login"})
    }
    try{
        const decodedToken=verify(token,"abcdef")
        req.user=decodedToken
        console.log(decodedToken)
        next()
    }
    catch(err)
    {
        res.status(401).json({message:"session expired pls relogin"})
    }

}
export default VerifyToken