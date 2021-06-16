const Model = require("./model");

//funciones para el store

const addUser = (user) => {
  const myUser = new Model(user);
  return myUser.save();
};

const listUser = () => {
  return Model.find();
};

//Exportar los métodos:

module.exports = {
  add: addUser,
  list: listUser,
};
