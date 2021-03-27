const Usuario = require("../models/Usuario");
exports.crearUsuario = async (req, res) => {
  try {
    let usuario;
    // crea el  nuevo usuario
    usuario = new Usuario(req.body);
    //guardar usuario
    await usuario.save();
    //Mensaje de confirmacion
    res.send("Usuario Creado Correctamente");
  } catch (error) {
    console.log(error);
    res.status(400).send("Existio un error");
  }
};
