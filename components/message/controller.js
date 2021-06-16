const store = require("./store");

const addMessage = (chat, user, message) => {
  //Se crea una promesa para regresar los datos:
  return new Promise((resolve, reject) => {
    if (!chat || !user || !message) {
      const data = new Data();
      console.error(data, "[messageController] No hay usuario o mensaje");
      //Resuelve la promesa con error
      return reject("Los datos son incorrectos.");
    }
    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
    };
    //Se almacena el mensaje
    store.add(fullMessage);
    //Resolver la promesa:
    resolve(fullMessage);
  });
};

const getMessages = (filterUser) => {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
};

const updateMessage = (id, message) => {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      return reject("Invalid data");
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
};

const deleteMessage = (id) => {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      return reject("Invalid ID");
    }

    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
};

//================ EXPORTAR ===================
module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
