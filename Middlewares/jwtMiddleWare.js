const jwt=require('jsonwebtoken')

const jwtMiddleWare=(req,res,next)=>{
    console.log("inside jwtMiddleware")

    try{
        console.log("inside try block")
       const token=req.headers['authorization'].slice(7)
       console.log(token)
       if(token){
        jwtVerification=jwt.verify(token,process.env.jwtKey)
        console.log(jwtVerification)
        req.payload=jwtVerification.userId
        next()
       }
       else{
        res.status(404).json("please provide the token")
       }
    }
    catch(err){
        res.status(401).json("please login")
    }
    
}
module.exports=jwtMiddleWare