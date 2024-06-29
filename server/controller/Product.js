const product = require("../model/product")


const handleProductList=async(req,res)=>{
    const result=await product.find();
    res.json(result)
}

const handleProduct=async(req,res)=>{
    
    console.log(req.body)
    const result=await product.create(req.body)
    res.json(result)
}
module.exports={
    handleProduct,
    handleProductList
}