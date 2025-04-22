const sellerStore = require("./seller.store");

const addSeller = async (seller) => {
  const { name, cellphone, personalComission, storeId, note } = seller;
  if (!name || !cellphone) {
    throw new Error("Incomplete data");
  }
  const newSeller = { name, cellphone, personalComission, storeId, note };
  const sellerSaved = await sellerStore.addSeller(newSeller);
  return sellerSaved;
};

const getSellers = async (filter) => {
  const sellers = await sellerStore.listSellers();
  return sellers;
};

module.exports = { addSeller, getSellers };
