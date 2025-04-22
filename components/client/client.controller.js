const clientStore = require("./client.store");

const addClient = async (client) => {
  const clientSaved = await clientStore.addClient(client);
  return clientSaved;
};

const getClients = async () => {
  const clients = await clientStore.listClients();
  return clients;
};

module.exports = { addClient, getClients };
