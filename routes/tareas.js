const express = require("express");
const router = express.Router();
const tareaController = require("../controllers/tareaController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//Crear una Tarea
//api/tareas

router.post(
  "/",
  auth,
  [check("nombre", "El nombre es obligatorio").not().isEmpty()],
  [check("proyecto", "El proyecto es obligatorio").not().isEmpty()],
  tareaController.crearTarea
);
//obtener las tareas por proyecto
router.get("/", auth, tareaController.obtenerTareas);
//Actualizar la tarea
router.put("/:id", auth, tareaController.actualizarTarea);
//Eliminar la Tarea
router.delete("/:id", auth, tareaController.eliminarTarea);

module.exports = router;
