const Usuario = require("../models/Usuario");
exports.crearUsuario = async (req, res) => {
  //Extraer Email y password
  const { email, password } = req.body;
  try {
    //Revisar que el usuario sea unico
    let usuario = await Usuario.findOne({ email });
    if (usuario) {
      return res.status(400).json({ msg: "El usuario ya existe" });
    }
    // crea el  nuevo usuario
    usuario = new Usuario(req.body);
    //guardar usuario
    await usuario.save();
    //Mensaje de confirmacion
    res.json({ msg: "Usuario creado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).send("Existio un error");
  }
};
