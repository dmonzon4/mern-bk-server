const Reservation = require("../models/Reservation.model");

const router = require("express").Router();



// GET	api/reservations/:id => Obtiene los detalles de una reserva por su ID
// PUT	api/reservations/:id => Actualiza una reserva existente por su ID
// DELETE	api/reservations/:id => Elimina una reserva específica por su ID

// GET	api/reservations => Obtiene todas las reservas
router.get("/", async (req, res, next) => {

  try {
    const reservationData = await Reservation.find().select({user: 1, reservedArea: 1, reservationDate: 1, reservationTime: 1, numberOfPeople: 1})
  
    res.json(reservationData)

  } catch (error){
    next(error)

  }


})

// POST	api/reservations/new-reservation => Crea una nueva reserva  <= Link?????????????????
router.post("/", async (req, res, next) => {

  console.log(req.body)
  const { user, reservedArea, reservationDate, reservationTime, numberOfPeople } = req.body

  try {
    await Reservation.create({ user, reservedArea, reservationDate, reservationTime, numberOfPeople })

    res.status(201).json("Reservacion creada")

  } catch (error) {
    next(error)

  }

})

// GET	api/reservations/:reservationId => Obtiene los detalles de una reserva por su ID
router.get("/:reservationId", async (req, res, next) => {

  console.log(req.params)

  try {

    const oneReservation = await Reservation.findById(req.params.reservationId)
    // console.log(oneReservation)

    res.json(oneReservation)

  } catch (error){
    next(error)
  }

})












module.exports = router;