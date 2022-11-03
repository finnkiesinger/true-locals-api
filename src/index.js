const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("<h1>WebSocket</h1>");
});

io.on("connection", (socket) => {
  console.log("a user connected");
});

server.listen(port, () => console.log("Listening on port", port));