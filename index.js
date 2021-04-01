const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//crear el servidor
const app = express();
//Conectar la base de datos
conectarDB();
//Habilitar el cors
app.use(cors());

//Habilitar express.json
app.use(express.json({ extended: true }));
//Puerto de la APP
const PORT = process.env.PORT || 4000;

//Importar las rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/proyectos", require("./routes/proyectos"));
app.use("/api/tareas", require("./routes/tareas"));

//Arrancar la APP
app.listen(PORT, () => {
  console.log(`El servidor Esta funcionado en el puerto ${PORT}`);
});
