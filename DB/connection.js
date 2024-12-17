//1.import mongoose
const mongoose=require('mongoose')

//2.get connectionstring
const connectionString=process.env.connectionString

//3.define connection
mongoose.connect(connectionString).then(res=>{
    console.log("server connected with mongoDB")
}).catch(err=>{
    console.log("Error",+err);
})