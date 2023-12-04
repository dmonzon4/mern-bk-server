const Product = require("../models/Product.model");


const router = require("express").Router();

// GET	api/products => Obtiene todos los productos
router.get("/", async (req, res, next) => {

  try {
    const productData = await Product.find().select({name: 1, price: 1, category: 1, image: 1})
  
    res.json(productData)

  } catch (error){
    next(error)

  }


})

// POST	api/products => Crea un nuevo producto
router.post("/", async (req, res, next) => {

  console.log(req.body)

  const { name, price, category, image } = req.body

  try {
    await Product.create({ name, price, category, image })

    res.status(201).json("The product has been successfully created!")

  } catch (error) {
    next(error)

  }

})

// GET	api/products/:productId => Obtiene los detalles de un producto por su ID
router.get("/:productId", async (req, res, next) => {

  console.log(req.params)

  try {

    const oneProduct = await Product.findById(req.params.productId)
    // console.log(oneProduct)

    res.json(oneProduct)

  } catch (error){
    next(error)
  }

})

// DELETE	api/products/:productId => Elimina un producto específico por su ID
router.delete("/:productId", async (req, res, next) => {

  try {

    await Product.findByIdAndDelete(req.params.productId)
    res.json("The product has been removed")

  } catch (error) {
    next(error)
    
  }

})

// PUT	api/products/:productId => Actualiza totlamente un producto existente por su ID
router.put("/:productId", async (req, res, next) => {
  const { productId } = req.params;
  const { name, price, category, image  } = req.body

  console.log(req.params, req.body)

  try {
    await Product.findByIdAndUpdate(productId, { name, price, category, image })
    res.json("The product has been updated")
    
  } catch (error) {
    next(error)
  }

})

module.exports = router;