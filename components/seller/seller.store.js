const SellerModel = require("./seller.model");

const addSeller = async (seller) => {
  const newSeller = new SellerModel(seller);
  const sellerSaved = await newSeller.save();
  return sellerSaved;
};

const listSellers = async (filter) => {
  const sellers = await SellerModel.find(filter);
  return sellers;
};

module.exports = { addSeller, listSellers };
