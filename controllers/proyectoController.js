const Proyecto = require("../models/Proyecto");

exports.crearProyecto = async (req, res) => {
  try {
    //Crear un nuevo Proyecto
    const proyecto = new Proyecto(req.body);
    //Guardar el creador via JWT
    proyecto.creador = req.usuario.id;

    //Guardar Proyecto
    proyecto.save();
    res.json(proyecto);
  } catch (error) {
    console.log(error);
    res.status(500).send("Existio un Error");
  }
};
