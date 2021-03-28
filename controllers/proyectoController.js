const Proyecto = require("../models/Proyecto");
const { validationResult } = require("express-validator");

exports.crearProyecto = async (req, res) => {
  //Revisar si hay errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
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

exports.obtenerProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find({ creador: req.usuario.id }).sort({
      creado: -1,
    });
    res.json({ proyectos });
  } catch (error) {
    console.log(error);
    res.status(500).send("Existio un error");
  }
};

exports.actualizarProyecto = async (req, res) => {
  //Revisar errores
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  }
  //Extraer la informacion del proyecto
  const { nombre } = req.body;
  const nuevoProyecto = {};

  if (nombre) {
    nuevoProyecto.nombre = nombre;
  }
  try {
    //Revisar el ID
    //si el proyecto existe o no
    //verificar el creador del proyecto
    //actualizar
  } catch (error) {
    console.log(error);
    res.status(500).send("Error en el servidor");
  }
};
