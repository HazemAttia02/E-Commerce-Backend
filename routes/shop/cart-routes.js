const express = require("express");

const {
  addToCart,
  fetchCartItems,
  deleteCartItem,
  updateCartItemQty,
  deleteAllCartItems,
} = require("../../controllers/shop/cart-controller");

const router = express.Router();

router.post("/add", addToCart);
router.get("/get/:userId", fetchCartItems);
router.put("/update-cart", updateCartItemQty);
router.delete("/delete-one/:userId/:productId", deleteCartItem);
// Route to delete all items in the cart
router.delete("/delete-all/:userId", deleteAllCartItems);

module.exports = router;
