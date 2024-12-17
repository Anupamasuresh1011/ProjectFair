const express=require('express')
const jwtMiddleWare = require('../Middlewares/jwtMiddleWare')

//create router
const router=express.Router()

//import usercontroller
const userController=require('../Controller/userController')
const projetController=require('../Controller/projectController')
const multerMiddleware = require('../Middlewares/multerMiddleware')

router.post('/api/register',userController.registerAPI)

router.post('/api/login',userController.loginAPI)

router.post('/api/addProjects',jwtMiddleWare,multerMiddleware.single('image'),projetController.addProjectsAPI)

router.get('/api/allprojects',jwtMiddleWare,projetController.getAllProjectAPI)

router.get('/api/userprojects',jwtMiddleWare,projetController.getUserProjectAPI)

router.get('/api/homeprojects',projetController.getHomeProjectAPI)

router.put('/api/updateprojects/:projectId',jwtMiddleWare,multerMiddleware.single('image'),projetController.editProjectsAPI)

router.delete('/api/deleteprojects/:projectId',jwtMiddleWare,projetController.deleteProjectsAPI)

module.exports=router