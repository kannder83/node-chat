const Model = require("./model");

//Se crea una función para agregar los mensajes al array.
const addMessage = (message) => {
  //list.push(message);
  //Añadir los mensajes a la BD:
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async (filterUser) => {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
};

const updateText = async (id, message) => {
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
};

const removeMessage = (id) => {
  return Model.deleteOne({
    _id: id,
  });
};
//================ EXPORTAR ===================

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  remove: removeMessage,
};
