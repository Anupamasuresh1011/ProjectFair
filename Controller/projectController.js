const projects=require('../Models/projectSchema')

exports.addProjectsAPI=async(req,res)=>{
    console.log("inside addprojectsAPI")
    const{title,language,github,website,overview}=req.body
    const image=req.file.filename
    const userId=req.payload
    // console.log(req.file)
    console.log(image)
    console.log({title,language,github,website,overview,userId})

    try{
        const project = await projects.findOne({github})
        if(project){
            res.status(401).json("project already existing")
        }
        else{
            const newProject=new projects({title,language,github,website,overview,image,userId})
            await newProject.save()
            res.status(200).json(newProject)
        }
    }
    catch(err){
        res.status(406).json(err)
    }

}

exports.getHomeProjectAPI=async(req,res)=>{
    try{
        const homeProjects = await projects.find().limit(3)
        res.status(200).json(homeProjects)
         }
         catch(err){
             res.status(406).json(err)
         }
}

exports.getUserProjectAPI=async(req,res)=>{

    try{
        const userId=req.payload
        const userProjects = await projects.find({userId})
        res.status(200).json(userProjects)
         }
         catch(err){
             res.status(406).json(err)
         }
    
}

exports.getAllProjectAPI=async(req,res)=>{
    try{
   const allProjects = await projects.find()
   res.status(200).json(allProjects)
    }
    catch(err){
        res.status(406).json(err)
    }
}

exports.editProjectsAPI=async(req,res)=>{
    console.log("inside editprojectsAPI")
    const{title,language,github,website,overview,image}=req.body
    const updateImage=req.file ? req.file.filename : image
    const userId=req.payload
    const{projectId}=req.params
    // console.log(req.file)
    console.log(image)
    console.log({title,language,github,website,overview,userId})

    try{
        const project = await projects.findByIdAndUpdate(
            {_id:projectId},
            {
                title:title,
                language:language,
                github:github,
                website:website,
                overview:overview,
                image:updateImage
            }
        )
        await project.save()
        res.status(200).json(project)
        
    }
    catch(err){
        res.status(406).json(err)
    }

}

exports.deleteProjectsAPI=async(req,res)=>{
    console.log("inside deleteprojectsAPI")
    const{projectId}=req.params

    try{
        const project = await projects.findByIdAndDelete({_id:projectId})
        res.status(200).json(project)
}
      

    catch(err){
        res.status(406).json(err)
    }

}
