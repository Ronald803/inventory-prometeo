const createApp = require("./app");
const config = require("./config");

const app = createApp();

app.get("/", (req, res) => {
  res.send("Hola Prometeo");
});
app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
