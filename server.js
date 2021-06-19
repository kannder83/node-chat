const express = require("express");
const app = express();
const server = require("http").Server(app);

const socket = require("./socket");
const db = require("./db");

const router = require("./network/routes");

//MongoDB:
const USER_DB = "chatuser2";
const PASS_DB = "Colombia2020+";
const SERVER_IP = "localhost";
const PORT_DB = 27017;
const DB_NAME = "chat2";
const DB_URL = `mongodb://${USER_DB}:${PASS_DB}@${SERVER_IP}:${PORT_DB}/${DB_NAME}`;

//Conexión al a base de Datos:
db(DB_URL);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

socket.connect(server);

router(app);

//================ESTATICOS===================

app.use("/app", express.static("public"));

//================PUERTO===================
server.listen(3000, () => {
  console.log("La aplicación esta escuchando en http://localhost:3000");
});
