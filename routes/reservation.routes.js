const Reservation = require("../models/Reservation.model");

const router = require("express").Router();



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

    res.status(201).json("The reservation has been successfully created!")

  } catch (error) {
    next(error)

  }

})

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// router.post("/", async (req, res, next) => {
//   const { user, reservedArea, reservationDate, reservationTime, numberOfPeople } = req.body;

//   try {
//     let message = '';

//     // Verificar si la hora está reservada para otra reserva
//     const existingTimeReservation = await Reservation.findOne({
//       reservationDate,
//       reservationTime,
//     });

//     if (existingTimeReservation) {
//       message = "The selected time is already reserved";
//     }

//     // Verificar si el área está reservada para esa fecha y hora
//     const existingAreaReservation = await Reservation.findOne({
//       reservedArea,
//       reservationDate,
//       reservationTime,
//     });

//     if (existingAreaReservation) {
//       message = "The selected area is already reserved for this date and time";
//     }

//     // Mostrar mensaje de error si se encontró alguna reserva existente
//     if (message) {
//       return res.status(400).json({ message });
//     }

//     // Si no hay conflictos, crear la nueva reserva
//     await Reservation.create({ user, reservedArea, reservationDate, reservationTime, numberOfPeople });

//     res.status(201).json("The reservation has been created");

//   } catch (error) {
//     next(error);
//   }
// });


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

// DELETE	api/reservations/:reservationId => Elimina una reserva específica por su ID
router.delete("/:reservationId", async (req, res, next) => {

  try {

    await Reservation.findByIdAndDelete(req.params.reservationId)
    res.json("The reservation has been cancelled")

  } catch (error) {
    next(error)
    
  }

})

// PUT	api/reservations/:reservationId => Actualiza totlamente una reserva existente por su ID
router.put("/:reservationId", async (req, res, next) => {
  const { reservationId } = req.params;
  const { user, reservedArea, reservationDate, reservationTime, numberOfPeople } = req.body

  console.log(req.params, req.body)

  try {

    await Reservation.findByIdAndUpdate(reservationId, { user, reservedArea, reservationDate, reservationTime, numberOfPeople })
    res.json("The reservation has been updated")
    
  } catch (error) {
    next(error)
  }

})


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// router.put("/:reservationId", async (req, res, next) => {
//   const { reservationId } = req.params;
//   const { user, reservedArea, reservationDate, reservationTime, numberOfPeople } = req.body;

//   try {
//     let message = '';

//     // Verificar si la hora está reservada para otra reserva
//     const existingTimeReservation = await Reservation.findOne({
//       _id: { $ne: reservationId }, // Excluir la reserva actual
//       reservationDate,
//       reservationTime,
//     });

//     if (existingTimeReservation) {
//       message = "The selected time is already reserved";
//     }

//     // Verificar si el área está reservada para esa fecha y hora
//     const existingAreaReservation = await Reservation.findOne({
//       _id: { $ne: reservationId }, // Excluir la reserva actual
//       reservedArea,
//       reservationDate,
//       reservationTime,
//     });

//     if (existingAreaReservation) {
//       message = "The selected area is already reserved for this date and time";
//     }

//     // Mostrar mensaje de error si se encontró alguna reserva existente
//     if (message) {
//       return res.status(400).json({ message });
//     }

//     // Actualizar la reserva existente
//     const updatedReservation = await Reservation.findByIdAndUpdate(reservationId, {
//       reservedArea,
//       reservationDate,
//       reservationTime,
//       numberOfPeople,
//     });

//     if (!updatedReservation) {
//       return res.status(404).json({ message: "The reservation was not found" });
//     }

//     res.status(200).json({ message: "Reservation successfully updated", updatedReservation });
//   } catch (error) {
//     next(error);
//   }
// });




// PATCH	api/reservations/:reservationId => Actualiza parcialmente una reserva existente por su ID










module.exports = router;