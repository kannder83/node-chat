const store = require("./store");

const addMessage = (user, message) => {
  //Se crea una promesa para regresar los datos:
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      const data = new Data();
      console.error(data, "[messageController] No hay usuario o mensaje");
      //Resuelve la promesa con error
      return reject("Los datos son incorrectos.");
    }
    const fullMessage = {
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

const getMessages = () => {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
};

//================ EXPORTAR ===================
module.exports = {
  addMessage,
  getMessages,
};
