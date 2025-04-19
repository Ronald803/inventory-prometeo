const productStore = require("./product.store");

const addProduct = async (product) => {
  const { name, description, material, size } = product;
  if (!name || !description || !material || !size) {
    throw new Error("Incomplete data");
  }
  const newProduct = { name, description, material, size };
  const productSaved = await productStore.addProduct(newProduct);
  return productSaved;
};

const getProducts = async () => {
  const products = await productStore.listProducts();
  return products;
};

module.exports = { addProduct, getProducts };
