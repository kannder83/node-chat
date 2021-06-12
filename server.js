const express = require("express");

//Exportar desde otros ficheros JS:
const response = require("./network/response");

const router = express.Router();

let app = express();
app.use(express.json());
app.use(router);

//================SOLICITUDES===================

router.get("/message", (req, res) => {
  response.success(req, res, "Lista de Mensajes", 201);
});

router.post("/message", (req, res) => {
  if (req.query.error == "ok") {
    //response.error(req, res, "Error simulado", 400);
    response.error(
      req,
      res,
      "Error inesperado",
      500,
      "Es solo una simulación de errores."
    );
  } else {
    response.success(req, res, "Creado correctamente.", 201);
  }
});

//================ESTATICOS===================

app.use("/app", express.static("public"));

//================PUERTO===================
app.listen(3000);

console.log("La aplicación esta escuando en http://localhost:3000");
