const StoreModel = require("./store.model");

const addStore = async (store) => {
  const newStore = new StoreModel(store);
  const storeSaved = await newStore.save();
  return storeSaved;
};

const listStores = async (filter) => {
  const stores = await StoreModel.find(filter);
  return stores;
};

module.exports = { addStore, listStores };
