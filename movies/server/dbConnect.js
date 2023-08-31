const mongoose = require("mongoose");

const dbConnect = () => {
  const connectionParams = { useNewUrlParser: true };
  const db = process.env.MONGO_URI;
  mongoose.connect(db, connectionParams);
  mongoose.connection.on("connected", () => {
    console.log("connected to the database successfully");
  });
  mongoose.connection.on("error", (err) => {
    console.log("error while connecting to database" + err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("database is disconnected");
  });
};
module.exports = dbConnect;
