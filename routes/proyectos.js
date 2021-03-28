const express = require("express");
const router = express.router();
const proyectoController = require("../controllers/proyectoController");

//Crea Proyectos
// api/proyectos
router.post("/", proyectoController.crearProyecto);

module.exports = router;
