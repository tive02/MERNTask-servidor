const express = require("express");
const conectarDB = require("./config/db");

//crear el servidor
const app = express();
//Conectar la base de datos
conectarDB();
//Puerto de la APP
const PORT = process.env.PORT || 4000;

//Importar las rutas
app.use("/api/usuarios", require("./routes/usuarios"));

//Arrancar la APP
app.listen(PORT, () => {
  console.log(`El servidor Esta funcionado en el puerto ${PORT}`);
});
