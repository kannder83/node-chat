const express = require("express");

const router = require("./network/routes");

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(router);
router(app);

//================ESTATICOS===================

app.use("/app", express.static("public"));

//================PUERTO===================
app.listen(3000);

console.log("La aplicación esta escuchando en http://localhost:3000");
