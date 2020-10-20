const express = require("express"); //express 모듈 사용
const http = require("http"); //http내장 모듈 사용
const app = express();
const server = http.createServer(app);//express앱에서 서버 전달
const socket = require("socket.io");//소켓IO 가져옴
const io = socket(server); //생성한 서버에 필요한 것을 전달

io.on("connection", socket => {
    socket.emit("your id", socket.id);
    socket.on("send message", body => {
        io.emit("message", body)
    })
})


server.listen(8000, () => console.log("server is running on port 8000"));