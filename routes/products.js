const express=require('express');
const router=express.Router();
const productController=require('../controller/products_controller');

router.post('/add',productController.add);
router.post('/substract',productController.remove);

module.export=router;