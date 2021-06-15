const Model = require("./model");

//funciones para el store

const addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
};

//Exportar los métodos:

module.exports = {
  add: addUser,
};
