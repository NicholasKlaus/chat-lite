const express = require("express");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.use(express.json());

const rooms = new Map();

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

app.post("/rooms", (req, res) => {
  const { roomID, userName } = req.body;
  if(!rooms.has(roomID)) {
    rooms.set(
      roomID, 
      new Map([
        ["users", new Map()],
        ["messages", []],
      ]),
    );
  }
  res.send();
});

io.on("connection", (socket) => {
  socket.on('ROOM/JOIN', ({ roomID, userName }) => {
    socket.join(roomID);
    rooms.get(roomID).get('users').set(socket.id, userName);
    const users = rooms.get(roomID).get('users').values();
    socket.to(roomID).emit('ROOM/JOINED', users);
  });

  console.log("user connected", socket.id);
});

server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log("server started");
});
