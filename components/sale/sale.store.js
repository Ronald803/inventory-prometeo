const SaleModel = require("./sale.model");

const addSale = async (sale) => {
  const newSale = new SaleModel(sale);
  const saleSaved = await newSale.save();
  return saleSaved;
};

const listSales = async (filter) => {
  const sales = await SaleModel.find(filter);
  return sales;
};

module.exports = { addSale, listSales };
