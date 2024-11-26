const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

// Rotas para produtos
router.post('/', authMiddleware, createProduct);
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', authMiddleware, updateProduct);
router.patch('/:id', authMiddleware, updateProduct);
router.delete('/:id', authMiddleware, deleteProduct);

module.exports = router;
