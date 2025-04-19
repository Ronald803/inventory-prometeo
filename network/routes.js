const routes = (server) => {
  server.get("/prometeo", (req, res) => {
    res.send("Get request Prometeo");
  });
};

module.exports = routes;
