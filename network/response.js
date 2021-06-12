exports.success = (req, res, message, status) => {
  //res.send("Primerea respuesta");
  res.status(status || 200).send({
    error: "",
    body: message,
  });
};

exports.error = (req, res, message, status, detail) => {
  //Mostar los detalles en un console.log para no exponerlos al usuario:
  console.error("Error: ", detail);
  //Mensaje para mostrar al usuario:
  res.status(status || 500).send({
    error: message,
    body: "",
  });
};
