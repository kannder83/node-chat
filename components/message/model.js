const mongoose = require("mongoose");

//Se crea el esquema de datos:
const Schema = mongoose.Schema;

//Creación del esquema
//El tipo de información que se quiere almacenar
const mySchema = new Schema({
  chat: {
    type: Schema.ObjectId,
    ref: "Chat",
  },
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
    required: true,
  },
  date: Date,
  file: String,
});

//Creación de un modelo:
//La forma como se almacena los datos en la BD tipo message y schema.
const model = mongoose.model("Message", mySchema);

//Se exporta:
module.exports = model;
