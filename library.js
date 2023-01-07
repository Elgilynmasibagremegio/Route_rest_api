import express from 'express'  
  import {getLibrary, getLibrary, addLibrary,updateLibrary,deleteLibrary } from '../controllers/library.js'  
  import { verifyToken } from '../middleware/auth.js';  
    
    
  const router = express.Router({mergeParams: true})  
    
  router.get('/', verifyToken,getLibrary )  
  router.get('/id', verifyToken,getLibrary)  
  router.get('/', verifyToken,addLibrary)  
  router.get('/id', verifyToken,updateLibrary)  
  router.get('/id', verifyToken,deleteLibrary)  
    
  export default router
