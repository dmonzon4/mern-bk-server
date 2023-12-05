// const Reservation = require("../models/Reservation.model");
// const router = require("express").Router();

// // GET /api/reservations/user/:userId => Obtener reservaciones de un usuario específico
// router.get("/user/:userId", async (req, res, next) => {
//   try {
//     const { userId } = req.params;
//     const userReservations = await Reservation.find({ user: userId }).populate('reservedArea', 'name');
//     res.json(userReservations);
//   } catch (error) {
//     next(error);
//   }
// });

// // GET /api/reservations/user/:userId/:reservationId => Obtener detalles de una reserva específica de un usuario
// router.get("/user/:userId/:reservationId", async (req, res, next) => {
//   try {
//     const { userId, reservationId } = req.params;
//     const reservation = await Reservation.findOne({ user: userId, _id: reservationId }).populate('reservedArea');
//     res.json(reservation);
//   } catch (error) {
//     next(error);
//   }
// });

// // PUT /api/reservations/:reservationId => Actualizar una reserva existente por su ID
// router.put("/:reservationId", async (req, res, next) => {
//   const { reservationId } = req.params;
//   try {
//     await Reservation.findByIdAndUpdate(reservationId, req.body);
//     res.json("Reservation updated");
//   } catch (error) {
//     next(error);
//   }
// });

// module.exports = router;
