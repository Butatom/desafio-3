let fs = require("fs");
let express = require("express");
let app = express();
const PORT = 8080;
let archivo = "./productos.txt";
let path = require("path");
let Contenedor = require("./contenedor");

let contenedor1 = new Contenedor(archivo);

app.get("/", (req, res) => {
  res.send("Mi servidor EXPRESS");
});
app.listen(PORT, () => {
  console.log(`Express Server on port ${PORT}`);
});
app.get("/productos", async (req, res) => {
  const data = await contenedor1.getAll();
  res.send(data);
});

app.get("/productoRandom", async (req, res) => {
  let data = await contenedor1.getAll();
  id = parseInt(Math.random() * data.length);
  res.send(data[id]);
});



