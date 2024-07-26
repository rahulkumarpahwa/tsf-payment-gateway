const express = require("express");
const paymentControllers = require("../controllers/paymentControllers");

const paymentRoutes = express();

paymentRoutes.get("/", (req, res) => {
  res.json({
    msg: "server is working",
    success: true,
    status: 200,
  });
});


paymentRoutes.get("/key", paymentControllers.getKey);
paymentRoutes.post("/payment", paymentControllers.payment);
paymentRoutes.get("/success", paymentControllers.success);
paymentRoutes.get("/failure", paymentControllers.failed);

module.exports = paymentRoutes;
