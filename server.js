//Nativo
const express = require("express");
//Definir rotuer:
const router = express.Router();

/*
Nomenclatura ec6:
import express from "express";
*/

var app = express();

//Se agrea el router:
app.use(router);

/*
//peticiones GET:
router.get("/", (req, res) => {
  res.send("HOla desde GET 😄");
});

//Peticiones desde POST:
router.post("/", (req, res) => {
  res.send("HOla desde POST 😎");
});

*/

//Se pueden crear rutas y separarlas:

router.get("/message", (req, res) => {
  res.send("Lista de mensajes 📖");
});

router.post("/message", (req, res) => {
  res.send("Mensaje añadido 👍🏽");
});

/* usando arrow function
app.use("/", (req, res) => {
  res.send("Buenas!");
});
*/

/*
app.use("/", function (req, res) {
  res.send("hola");
});
*/
app.listen(3000);

console.log("La aplicación esta escuando en http://localhost:3000");
