const mongoose=require('mongoose')

const users=require('../Models/userSchema')
const jwt=require('jsonwebtoken')
const jwtMiddleWare = require('../Middlewares/jwtMiddleWare')

//register logic
exports.registerAPI=async(req,res)=>{
   console.log("inside register api")
   const {username,password,email}=req.body//destructering
   //if user already in db
   const exsistingUser=await users.findOne({email})
   if(exsistingUser){
    res.status(402).json({message:"User already exsisting...go to login"})
   }
   else{
    const newUser=new users({
        username:username,
        email:email,
        password:password,
        github:"",
        linkedin:"",
        profilepic:""
    })

    //to save the details in mongodb
    await newUser.save()
    res.status(200).json("User registration successful...")
   }
}

//login logic
exports.loginAPI=async(req,res)=>{
    console.log("inside login api")
    const {password,email}=req.body
    //if user already in db
    try{
   const ExsistingUser=await users.findOne({email,password})
   if(ExsistingUser){
   //  res.status(200).json({currentUser:ExsistingUser,message:"login successfull"})
    const token =jwt.sign({userId:ExsistingUser._id},process.env.jwtKey)
    console.log(token)

    res.status(200).json({currentUser:ExsistingUser,token})
   }
   else{
     res.status(404).json({ message: "User not found,incorrect email or password"})
   }
}
catch(err){
   res.status(401).json(err)
}
}
