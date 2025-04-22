const ClientModel = require("./client.model");

const addClient = async (client) => {
  const newClient = new ClientModel(client);
  const clientSaved = await newClient.save();
  return clientSaved;
};

const listClients = async (filter) => {
  const clients = ClientModel.find(filter);
  return clients;
};

module.exports = { addClient, listClients };
