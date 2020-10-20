const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

io.on("connection", (socket) => {
  socket.emit("your id", socket.id); //클라이언트에 보낼 데이터
  socket.on("send message", (body) => {
    //클라이언트에서 보낸 메세지, id
    io.emit("message", body);
    //클라이언트로 메세지 보내기
    //io는 connect하고 있는 모든 유저들에게 메세지 보여줌
  });
});

server.listen(8000, () => console.log("server is running on port 8000"));
