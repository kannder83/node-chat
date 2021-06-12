//Nativo
const express = require("express");
//Definir rotuer:
const router = express.Router();
//Body-Parser - No es necesario ya esta en el express.
//const bodyParser = require("body-parser");

/*
Nomenclatura ec6:
import express from "express";
*/

var app = express();

//Se  agrega el body:
app.use(express.json());

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
  console.log(req.headers);
  //Se puede enviar una cabecera personalizada:
  res.header({
    "custom-header": "Nuestro valor personalizado",
  });
  res.send("Lista de mensajes 📖 para ver");
});

/*
router.post("/message", (req, res) => {
  res.send("Mensaje añadido 👍🏽");
});
*/

router.post("/message", (req, res) => {
  console.log(req.body);
  //Para hacer una consulta/busqueda:
  console.log(req.query);
  //res.send("Mensaje eliminado correctamente.");
  //res.send(`Mensaje ${req.body.text} añadido correctamente.`);
  //Se puede enviar un mensaje vacio o solo con el status:
  res.status(201).send({
    error: "",
    body: "Creado correctamente.",
  });
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
