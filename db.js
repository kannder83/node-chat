const db = require("mongoose");

db.Promise = global.Promise;

const connect = async (URL) => {
  await db.connect(
    URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        return console.error("[DB] Error de conexión. ", err);
      }
      console.log("[DB] Conectada con éxito.");
    }
  );
};

module.exports = connect;
