const userNetwork = require("../components/user/user.network");
const authNetwork = require("../components/auth/auth.network");

const routes = (server) => {
  server.use("/api/user", userNetwork);
  server.use("/api/auth", authNetwork);
  server.get("/prometeo", (req, res) => {
    res.send("Get request Prometeo");
  });
};

module.exports = routes;
