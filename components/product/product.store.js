const ProductModel = require("./product.model");

const addProduct = async (product) => {
  const newProduct = new ProductModel(product);
  const productSaved = await newProduct.save();
  return productSaved;
};

const listProducts = async (filter) => {
  const products = await ProductModel.find(filter);
  return products;
};

module.exports = { addProduct, listProducts };
