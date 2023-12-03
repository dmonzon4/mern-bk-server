const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("Funcionando einwandfrei");
});

const authRouter = require("./auth.routes")
router.use("/auth", authRouter)

const reservationRouter = require("./reservation.routes")
router.use("/reservations", reservationRouter)

const productRouter = require("./product.routes")
router.use("/products", productRouter)

const areaRouter = require("./area.routes")
router.use("/areas", areaRouter)



























// Nuevas rutas!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// router.get("/user/profile", (req, res, next) => {
//   // Lógica para obtener el perfil del usuario
// });

router.post("/reservations/new-reservation", (req, res, next) => {
  // Lógica para crear una nueva reserva
});

router.get("/reservations", (req, res, next) => {
  // Lógica para obtener todas las reservaciones
});

router.get("/reservations/:id", (req, res, next) => {
  // Lógica para obtener una reserva específica por ID
});

router.put("/reservations/:id", (req, res, next) => {
  // Lógica para actualizar una reserva por ID
});

router.delete("/reservations/:id", (req, res, next) => {
  // Lógica para eliminar una reserva por ID
});

router.get("/areas", (req, res, next) => {
  // Lógica para obtener todas las áreas
});

// ********************************************************
router.get("/menu/food", (req, res, next) => {
  // Lógica para obtener el menú de comida
});

router.get("/menu/drink", (req, res, next) => {
  // Lógica para obtener el menú de bebidas
});
// ********************************************************

router.get("/products", (req, res, next) => {
  // Lógica para obtener todos los productos
});

router.post("/products", (req, res, next) => {
  // Lógica para crear un nuevo producto
});

router.put("/products/:id", (req, res, next) => {
  // Lógica para actualizar un producto por ID
});

router.delete("/products/:id", (req, res, next) => {
  // Lógica para eliminar un producto por ID
});

module.exports = router;
