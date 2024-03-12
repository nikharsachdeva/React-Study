const asyncErrorHandler = require("./../utils/asyncErrorHandler");
const Razorpay = require("razorpay");
const ShortId = require("shortid");
const { createHmac } = require("./../utils/Hmac");
const CustomError = require("./../utils/customError");
const crypto = require("crypto");

exports.createOrder = asyncErrorHandler(async (req, res, next) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const payment_capture = 1; //razorpay validates the payment with bank
  const amount = 499;
  const currency = "INR";

  const options = {
    //recipt = system order id

    amount: (amount * 100).toString(),
    currency,
    receipt: ShortId.generate(),
    payment_capture,
  };

  let order = null;
  try {
    order = await razorpay.orders.create(options);
  } catch (e) {
    console.log(e);
  }

  console.log("Order : " + JSON.stringify(order));

  res.status(200).json({
    status: "success",
    data: {
      orderId: order.id,
      orderCurrency: order.currency,
      orderAmount: order.amount,
    },
  });
});

exports.verifyPaymentHook = asyncErrorHandler(async (req, res, next) => {
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
  const razorpaySignature = req.headers["x-razorpay-signature"];

  if (!secret || !razorpaySignature) {
    return next(new CustomError(400, "Missing secret or signature"));
  }

  if (!req.body) {
    return next(new CustomError(400, "Request body is empty"));
  }

  const expectedSignature = createHmac(secret, req.body);

  if (
    !crypto.timingSafeEqual(
      Buffer.from(expectedSignature, "utf-8"),
      Buffer.from(razorpaySignature, "utf-8")
    )
  ) {
    return next(new CustomError(401, "Signature mismatch"));
  }

  console.log("Save payment details to MongoDB", JSON.stringify(req.body));

  res.status(200).json({
    status: "success",
    message: "Payment is verified",
  });
});
