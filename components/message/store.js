const db = require("mongoose");
const Model = require("./model");
//Se crea un MOC para emular el funcionamiento
//const list = [];

//MongoDB:
const USER_DB = "chatuser2";
const PASS_DB = "Colombia2020+";
const SERVER_IP = "localhost";
const PORT_DB = 27017;
const DB_NAME = "chat2";
const DB_URL = `mongodb://${USER_DB}:${PASS_DB}@${SERVER_IP}:${PORT_DB}/${DB_NAME}`;

db.Promise = global.Promise;
db.connect(
  DB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      return console.error("[DB] Error de conexión. ", err);
    }
    console.log("[DB] Conectada con éxito.");
  }
);

//Se crea una función para agregar los mensajes al array.
const addMessage = (message) => {
  //list.push(message);
  //Añadir los mensajes a la BD:
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async () => {
  const messages = await Model.find();
  return messages;
};

//================ EXPORTAR ===================

module.exports = {
  add: addMessage,
  list: getMessages,
  // GET
  // UPDATE
  // DELETE
};
