const mongoose = require("mongoose");

//Se crea el esquema de datos:
const Schema = mongoose.Schema;

//Creación del esquema
//El tipo de información que se quiere almacenar
const mySchema = new Schema({
  user: String,
  message: {
    type: String,
    required: true,
  },
  date: Date,
});

//Creación de un modelo:
//La forma como se almacena los datos en la BD tipo message y schema.
const model = mongoose.model("Message", mySchema);

//Se exporta:
module.exports = model;
