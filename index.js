//1.load .env
require('dotenv').config()//loads .env file contents into process .env by defaults 

//2.import express
const express = require('express')

//6.import cors 
const cors =require('cors')

//8.import db
const db=require('./DB/connection')
const router=require('./Routes/router')
// const ApplicationMiddleware = require('./Middlewares/ApplicationMiddileWares')

//3.create backend application
const projectfairApp=express()

//7.middlevare configuaration
projectfairApp.use(cors())
projectfairApp.use(express.json())
// projectfairApp.use(ApplicationMiddleware)
projectfairApp.use(router)

//export image to frontend
projectfairApp.use('/uploads',express.static('./uploads'))

//4.define port 
const PORT= process.env.PORT || 3000


//5.server run
projectfairApp.listen(PORT,()=>{
    console.log("server app running on port" +PORT)
})

projectfairApp.get('/',(req,res)=>{
    res.send("welcome to projectfair server")
})

