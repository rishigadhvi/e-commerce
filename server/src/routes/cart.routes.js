const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart.controller');

// Add items to the cart
router.post('/', cartController.addToCart);

// Retrieve the cart for a specific user
router.get('/:userId', cartController.getCart);

// Clear the cart for a specific user
router.delete('/:userId', cartController.clearCart);

module.exports = router;