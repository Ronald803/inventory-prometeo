const storeStore = require("./store.store");

const addStore = async (store) => {
  const { name, note, location, city, schedule, comission } = store;
  if (!name || !location || !city || !schedule || !comission) {
    throw new Error("Incomplete data");
  }
  const newStore = { name, note, location, city, schedule, comission };
  const storeSaved = await storeStore.addStore(newStore);
  return storeSaved;
};

const getStores = async () => {
  const stores = await storeStore.listStores();
  return stores;
};

module.exports = { addStore, getStores };
