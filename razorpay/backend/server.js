const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");

mongoose
  .connect("mongodb://localhost:27017/razorpay", { useNewUrlParser: true })
  .then((conn) => {
    console.log("DB Connection Successful.");
  })
  .catch((err) => {
    console.log(`DB Connection Failed. Error : ${err.message}`);
  });

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log("Server has started...");
});

process.on("unhandledRejection", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled rejection occured. Shutting down!");

  server.close(() => {
    process.exit(1);
  });
});

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);
  console.log("Unhandled exception occured. Shutting down!");

  server.close(() => {
    process.exit(1);
  });
});
