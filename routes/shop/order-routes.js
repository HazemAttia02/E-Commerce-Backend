const express = require("express");

const {
  createOrder,
  getAllOrdersByUser,
  getOrderDetails,
  capturePayment,
  createOrderWithoutPayment,
} = require("../../controllers/shop/order-controller");

const router = express.Router();

// router.post("/create", createOrder);
router.post("/create", createOrderWithoutPayment); // For testing purposes, without payment
router.post("/capture", capturePayment);
router.get("/list/:userId", getAllOrdersByUser);
router.get("/details/:id", getOrderDetails);

module.exports = router;
