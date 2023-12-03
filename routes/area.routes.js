const Area = require("../models/Area.model");

const router = require("express").Router();


router.get("/", async (req, res, next) => {

  try {
    const areaData = await Area.find().select({name: 1, image: 1})
  
    res.json(areaData)

  } catch (error){
    next(error)

  }


})

router.post("/", async (req, res, next) => {

  console.log(req.body)

})

module.exports = router;