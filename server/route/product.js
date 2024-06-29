const express = require('express');
const { handleProduct, handleProductList } = require('../controller/Product');
const router = express.Router();

router.get("/",handleProductList)
router.post("/",handleProduct)
// router.get("/product/id/:id",)
// router.get("/product/keyword/:keyword",)


module.exports=router