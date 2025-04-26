const saleStore = require("./sale.store");
const saleConstants = require("./sale.constants");

const addSale = async (sale) => {
  const { productId, quantity } = sale;
  if (!productId || !quantity) {
    throw new Error("Incomplete data");
  }
  const saleSaved = await saleStore.addSale({
    ...sale,
    state: saleConstants.states.onSale,
  });
  return saleSaved;
};

const getSales = async () => {
  const sales = await saleStore.listSales();
  return sales;
};

module.exports = { addSale, getSales };
