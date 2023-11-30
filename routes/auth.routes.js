const router = require("express").Router();

const bcrypt = require("bcryptjs");
const validator = require("validator");
const User = require("../models/User.model");

// POST "/api/auth/signup" => recibe data del ususario y lo crea en la DB
router.post("/signup", async (req, res, next) => {
  console.log(req.body);

  const { username, email, password, phoneNumber } = req.body;

  // implementar las validaciones de backend del Módulo2

  if (!username || !email || !password || !phoneNumber) {
    res
      .status(400)
      .json({ errorMessage: "All fields are required to be filled" });
    return; // detiene la ejecución de la ruta
  }

  // Validar la longitud de la contraseña
  if (password.length < 8 || password.length > 20) {
    return res
      .status(400)
      .json({ errorMessage: "Password must be between 8 and 20 characters" });
  }
  // Validar que la contraseña sea suficientemente segura
  // Debe contener al menos una mayúscula, una minúscula, un número y un carácter especial
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      errorMessage:
        "The password must contain at least one uppercase, one lowercase, one number and one special character",
    });
  }

  // Validar el formato del correo electrónico
  if (!validator.isEmail(email)) {
    return res
      .status(400)
      .json({ errorMessage: "The email is not in a valid format" });
  }

  try {
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      res.status(400).json({ errorMessage: "This email already exists" });
      return;
    }

    const foundUserByUsername = await User.findOne({ username: username });
    if (foundUserByUsername) {
      return res
        .status(400)
        .json({ errorMessage: "This username already exists" });
    }

    // cifrar la contrasena
    const salt = await bcrypt.genSalt(12);
    const hashPassword = await bcrypt.hash(password, salt);
    console.log(hashPassword);

    // despues de todas las validaciones y cifrar la contrasena creamos el usuario
    await User.create({
      username,
      email,
      password: hashPassword,
      phoneNumber,
    });

    res.status(201).json("User has been created");
  } catch (error) {
    next(error);
  }
});

// POST "/api/auth/login" => recibir credenciales del usuario y validarlo

// GET "/api/auth/verify" => Indicar al Frontend si el que está de visita en la página está activo y quién es (rol, etc.)

module.exports = router;
