const express = require("express");
const paymentController = require("./../controllers/paymentController");

const router = express.Router();

router.route("/createOrder").post(paymentController.createOrder);
router.route("/verifyPaymentHook").post(paymentController.verifyPaymentHook);

module.exports = router;
