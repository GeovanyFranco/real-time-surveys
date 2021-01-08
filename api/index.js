const app = require('express')();
const server = require('http').createServer(app);
const options = {};
const io = require('socket.io')(server, options);

let actualSurvey = {
    "id": "1",
    "question": "Crema de mani, si o no?",
    "answers": { 1: "No me gusta", 2: "Me encanta :$" }
}

io.on('connection', socket => {
    console.log("Nueva coneccion")

    socket.emit('connection-response', actualSurvey);

    socket.on('send-message', (data) => {
        console.log(data);
    });


});

server.listen(4253);