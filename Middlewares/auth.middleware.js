
const isAdmin = (req, res, next) => {
  if (req.payload && req.payload.role === 'admin') {
    // Si el usuario es 'admin', permite el acceso a la siguiente ruta
    next();
  } else {
    // Si el usuario no es 'admin', devuelve un error
    return res.status(403).json({ message: 'Access denied. You are not an administrator' });
  }
};

module.exports = isAdmin;


// const isAdmin = require('../middlewares/isAdmin');

// // Ruta protegida para administradores
// app.get('/admin/dashboard', isAdmin, (req, res) => {
//   // Si el usuario es un administrador, se le permite acceder
//   res.json({ message: 'Bienvenido administrador.' });
// });