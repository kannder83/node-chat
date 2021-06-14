//================ IMPORTAR ===================
const express = require("express");

const response = require("../../network/response");

const controller = require("./controller");

const router = express.Router();

//================ CAPA DE RED ===================

router.get("/", (req, res) => {
  //response.success(req, res, "Lista de Mensajes", 201);
  controller
    .getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200);
    })
    .catch((err) => {
      response.error(req, res, "Unexpected Error", 500, err);
    });
});

router.post("/", (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then((fullMessage) => {
      response.success(req, res, fullMessage, 201);
    })
    .catch((err) => {
      response.error(req, res, "Información invalida", 400, err);
    });
});

//================ EXPORTAR ===================
module.exports = router;
