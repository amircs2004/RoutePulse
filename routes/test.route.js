const express = require('express')
const router = express.Router()
const terstingDatabaseConnection = require('../controller/test')
router.get('/test' , terstingDatabaseConnection )
router.get('/testtest' , (req , res)=>{
   return res.send('nani')
})
module.exports = router
