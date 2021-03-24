const express = require("express");

//crear el servidor
const app = express();
//Puerto de la APP
const PORT = process.env.PORT || 4000;
//Arrancar la APP
app.listen(PORT, () => {
  console.log(`El servidor Esta funcionado en el puerto ${PORT}`);
});
