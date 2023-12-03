const Area = require("../models/Area.model");

const router = require("express").Router();

// GET	api/areas => Obtiene todas las areas
router.get("/", async (req, res, next) => {

  try {
    const areaData = await Area.find().select({name: 1, image: 1})
  
    res.json(areaData)

  } catch (error){
    next(error)

  }


})

// POST	api/areas => Crea una nueva area
router.post("/", async (req, res, next) => {

  console.log(req.body)

  const { name, image } = req.body

  try {
    await Area.create({ name, image })

    res.status(201).json("Area creada")

  } catch (error) {
    next(error)

  }

})

// GET	api/areas/:areaId => Obtiene los detalles de una reserva por su ID
router.get("/:areaId", async (req, res, next) => {

  console.log(req.params)

  try {

    const oneArea = await Area.findById(req.params.areaId)
    // console.log(oneArea)

    res.json(oneArea)

  } catch (error){
    next(error)
  }

})

module.exports = router;