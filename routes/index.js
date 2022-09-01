const express=require('express');
const router=express.Router();

router.use('/',require('./products'));

module.exports=router;

