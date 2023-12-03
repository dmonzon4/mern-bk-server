const Reservation = require("../models/Reservation.model");

const router = require("express").Router();


// GET	api/reservations => Obtiene todas las reservas
// POST	api/reservations/new-reservation => Crea una nueva reserva
// GET	api/reservations/:id => Obtiene los detalles de una reserva por su ID
// PUT	api/reservations/:id => Actualiza una reserva existente por su ID
// DELETE	api/reservations/:id => Elimina una reserva específica por su ID

router.get("/", async (req, res, next) => {

  try {
    const reservationData = await Reservation.find().select({user: 1, reservedArea: 1, reservationDate: 1, reservationTime: 1, numberOfPeople: 1})
  
    res.json(reservationData)

  } catch (error){
    next(error)

  }


})

router.post("/", async (req, res, next) => {

  console.log(req.body)

})

module.exports = router;