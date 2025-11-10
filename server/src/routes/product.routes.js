const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

// Retrieve all products
router.get('/', productController.getAllProducts);

// Retrieve a single product by ID
router.get('/:id', productController.getProductById);

module.exports = router;