const server = require("./Api/server");
const PORT = 9000;

server.listen(PORT, () => {
  console.log(` Server running on ${PORT} port`);
});
