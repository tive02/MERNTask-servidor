//Rutas para Atenticar a los usuarios
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require("../middleware/auth");
const { check } = require("express-validator");

//Iniciar sesion
//api/auth
router.post("/", authController.autenticarUsuario);
//Obtiene el usuario autenticado
router.get("/", auth, authController.usuarioAutenticado);

module.exports = router;
