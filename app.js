const app = require("express")();
const port = 3000;
const http = require("http").createServer(app);
const io = require("socket.io")(http);


app.get("/", (req, res) => res.sendFile(__dirname + '/index.html'));

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    })
})
http.listen(port, () => console.log('app running'));