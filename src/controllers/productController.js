const Product = require('../models/productModel');

// Criar um novo produto
const createProduct = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const newProduct = new Product({ name, description, price });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto', error });
  }
};

// Obter todos os produtos
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter produtos', error });
  }
};

// Obter um produto pelo ID
const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter produto', error });
  }
};

// Atualizar produto
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(id, { name, description, price }, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto', error });
  }
};

// Deletar produto
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    res.status(200).json({ message: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar produto', error });
  }
};

module.exports = { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct };
