import express from 'express'  
  import { getId, getId, addId,updateId,deleteId } from '../controllers/id.js'  
  import { verifyToken } from '../middleware/auth.js';  
    
    
  const router = express.Router()  
    
  router.get('/', verifyToken, getId)  
  router.get('/id', verifyToken, getId)  
  router.get('/', verifyToken, addId)  
  router.get('/id', verifyToken, updateId)  
  router.get('/id', verifyToken, deleteId)  
    
  export default router
