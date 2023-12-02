const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("Funcionando einwandfrei");
});

const authRouter = require("./auth.routes")
router.use("/auth", authRouter)

// Nuevas rutas
router.get("/user/profile", (req, res) => {
  // Lógica para obtener el perfil del usuario
});

router.get("/areas", (req, res) => {
  // Lógica para obtener todas las áreas
});

router.get("/menu/food", (req, res) => {
  // Lógica para obtener el menú de comida
});

router.get("/menu/drink", (req, res) => {
  // Lógica para obtener el menú de bebidas
});

router.post("/reservations", (req, res) => {
  // Lógica para crear una nueva reserva
});

router.get("/reservations", (req, res) => {
  // Lógica para obtener todas las reservaciones
});

router.get("/reservations/:id", (req, res) => {
  // Lógica para obtener una reserva específica por ID
});

router.put("/reservations/:id", (req, res) => {
  // Lógica para actualizar una reserva por ID
});

router.delete("/reservations/:id", (req, res) => {
  // Lógica para eliminar una reserva por ID
});

router.get("/products", (req, res) => {
  // Lógica para obtener todos los productos
});

router.post("/products", (req, res) => {
  // Lógica para crear un nuevo producto
});

router.put("/products/:id", (req, res) => {
  // Lógica para actualizar un producto por ID
});

router.delete("/products/:id", (req, res) => {
  // Lógica para eliminar un producto por ID
});

module.exports = router;
