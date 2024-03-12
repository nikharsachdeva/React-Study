const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const globalErrorHandler = require("./utils/errorController");
const paymentRoutes = require("./routes/paymentRoutes");

let app = express();
app.use(cors());
app.use(express.json());

app.use(express.static("./public"));
app.use(morgan("dev"));

app.use("/payment", paymentRoutes);

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: `Can't find ${req.originalUrl} on the server!`,
  });
});

app.use(globalErrorHandler);
module.exports = app;
