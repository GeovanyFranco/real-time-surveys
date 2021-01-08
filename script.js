const socket = io('http://localhost:4253');

socket.on('connection-response', (data) => {
    console.log(data)
})