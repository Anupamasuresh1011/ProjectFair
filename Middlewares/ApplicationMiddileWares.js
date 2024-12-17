const ApplicationMiddleware=(req,res,next)=>{
    console.log("inside applicationMiddleware")
    next()
}
module.exports=ApplicationMiddleware