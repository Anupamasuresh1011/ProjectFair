//import mongoose
const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    linkedin:{
        type:String
    },
    github:{
        type:String
    },
    profilepic:{
        type:String
    }
})

//model creation
const users=mongoose.model('users',userSchema)
module.exports=users