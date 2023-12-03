const Product = require("../models/Product.model");


const router = require("express").Router();


router.get("/", async (req, res, next) => {

  try {
    const productData = await Product.find().select({name: 1, price: 1, category: 1, image: 1})
  
    res.json(productData)

  } catch (error){
    next(error)

  }


})

router.post("/", async (req, res, next) => {

  console.log(req.body)

})

module.exports = router;