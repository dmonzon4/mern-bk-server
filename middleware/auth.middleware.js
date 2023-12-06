const jwt = require("jsonwebtoken");

function isTokenValid(req, res, next) {
  // investigamos cómo el cliente envía el token
  // console.log(req.headers.authorization); // aquí se transmite la info de autenticación

  try {
    // extraer el token del String "Bearer 'JSHJ'"
    // verificamos el token con jwt
    // decidimos qué hacer con el user
    const token = req.headers.authorization.split(" ")[1];
    // el split regresa ["Bearer", 'KSDFH']
    const payload = jwt.verify(token, process.env.TOKEN_SECRET);
    // 1. el verify valida el token
    // 2. el verify nos devuelve el payload descifrado
    // console.log(payload)
    req.payload = payload // esto almacena el payload en req.payload y nos permite acceder en cualquier ruta en donde pasemos el middleware

    next(); // continúa con la ruta
  } catch (error) {
    // Cuando:
    // 1 El token no existe
    // 2. El token sea inválido
    // 3. no existan headers en la llamada
    res.status(401).json("The token does not exist or is invalid");
  }
}


// ESTO ME PODRÍA SERVIR PARA LAS RUTAS
// Rutas protegidas para administradores en el backend
// app.get('/admin/management', isTokenValid, isAdmin, (req, res) => {
//   // Si el usuario es un administrador, se le permite acceder
//   res.json({ message: 'Admin dashboard. Welcome, administrator.' });
// });

function isAdmin(req, res, next) {
  if (req.payload && req.payload.role === 'admin') {
    // Si el usuario es 'admin', permite el acceso a la siguiente ruta
    next();
  } else {
    // Si el usuario no es 'admin', devuelve un error
    return res.status(403).json({ message: 'Access denied. You are not an administrator' });
  }
};



module.exports = isTokenValid;
module.exports.isAdmin = isAdmin;

// module.exports = {
//   isTokenValid,
//   isAdmin
// };